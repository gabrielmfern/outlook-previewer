"use client";
import { render } from "@react-email/render";
import React, { createElement, useEffect, useState } from "react";
import { transform } from "sucrase";
import { CodeEditor } from "@/components/code-editor";
import { ErrorOverlay } from "@/components/error-overlay";
import { SplitView } from "@/components/ui/split-view";
import * as Tabs from "@/components/ui/tabs";
import { useLastDefinedValue } from "@/lib/hooks/use-last-defined-value";
import "web-streams-polyfill/polyfill";

function useRenderingResult(react: string) {
  const [renderingResult, setRenderingResult] = useState<
    | {
        html: string;
      }
    | { exception: unknown }
  >();

  useEffect(() => {
    (async () => {
      try {
        const transformedReact = transform(react, {
          transforms: ["jsx", "typescript"],
          production: true,
        }).code;
        const elementFactory = new Function(
          "scope",
          "React",
          transformedReact.replaceAll("export default ", "scope.email = "),
        );
        const scope = {
          email: undefined,
        };
        elementFactory(scope, React);

        if (scope.email !== undefined) {
          const element = createElement(scope.email);

          const html = await render(element, {
            pretty: true,
          });

          setRenderingResult({ html });
        } else {
          setRenderingResult({
            exception: new Error(
              "No default export found to use as component",
              {
                cause: {
                  transformedReact,
                },
              },
            ),
          });
        }
      } catch (exception) {
        setRenderingResult({ exception });
      }
    })();
  }, [react]);

  return renderingResult;
}

export function OutlookPreviewer() {
  const [react, setReact] = useState(`export default function EmailTemplate() { 
  return <div>This is me trying out something</div>; 
}`);

  const renderingResult = useRenderingResult(react);

  const lastDefinedRenderingResult = useLastDefinedValue(renderingResult);

  return (
    <Tabs.Root
      className="bg-slate-2 h-[90dvh] flex flex-col rounded-md border border-slate-8"
      defaultValue="preview"
    >
      <Tabs.List className="w-full flex justify-end border-b border-solid border-b-slate-8">
        <Tabs.Tab value="preview">Preview</Tabs.Tab>
        <Tabs.Tab value="code">Code</Tabs.Tab>
      </Tabs.List>
      <SplitView className="h-full">
        {[
          (width) => (
            <div style={{ width }} className="h-full">
              <CodeEditor code={react} onChange={(v) => setReact(v)} />
            </div>
          ),
          (width) => (
            <div style={{ width }} className="relative h-full">
              {renderingResult && "exception" in renderingResult ? (
                <ErrorOverlay
                  exception={renderingResult.exception}
                  className="absolute left-1/2 top-1/2 -translate-1/2 w-2/3 h-1/3"
                />
              ) : null}
              <div className="h-full">
                <Tabs.Panel value="preview" className="w-full h-full">
                  {lastDefinedRenderingResult &&
                  "html" in lastDefinedRenderingResult ? (
                    <iframe
                      srcDoc={lastDefinedRenderingResult.html}
                      ref={(iframe) => {
                        if (iframe) {
                          const mouseMoveBubbler = (event: MouseEvent) => {
                            const bounds = iframe.getBoundingClientRect();
                            document.dispatchEvent(
                              new MouseEvent("mousemove", {
                                ...event,
                                clientX: event.clientX + bounds.x,
                                clientY: event.clientY + bounds.y,
                              }),
                            );
                          };
                          const mouseUpBubbler = (event: MouseEvent) => {
                            document.dispatchEvent(
                              new MouseEvent("mouseup", event),
                            );
                          };
                          iframe.contentDocument?.addEventListener(
                            "mousemove",
                            mouseMoveBubbler,
                          );
                          iframe.contentDocument?.addEventListener(
                            "mouseup",
                            mouseUpBubbler,
                          );
                          return () => {
                            iframe.contentDocument?.removeEventListener(
                              "mousemove",
                              mouseMoveBubbler,
                            );
                            iframe.contentDocument?.removeEventListener(
                              "mouseup",
                              mouseUpBubbler,
                            );
                          };
                        }
                      }}
                      className="w-full h-full bg-white"
                      title="Outlook Preview"
                    />
                  ) : null}
                </Tabs.Panel>
                <Tabs.Panel className="w-full h-full" value="code">
                  [Email preview HTML after having been transformed]
                </Tabs.Panel>
              </div>
            </div>
          ),
        ]}
      </SplitView>
    </Tabs.Root>
  );
}
