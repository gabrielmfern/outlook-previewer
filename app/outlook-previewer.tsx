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
          transformedReact
            .replaceAll("export default ", "scope.email = ")
            .replaceAll("export ", "scope.exports = "),
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
    <SplitView className="h-[90dvh] bg-slate-2 rounded-md border border-slate-8 overflow-visible">
      {[
        (width) => (
          <div style={{ width }} className="h-full">
            <CodeEditor code={react} onChange={(v) => setReact(v)} />
          </div>
        ),
        (width) => (
          <Tabs.Root
            className="h-full flex flex-col relative"
            style={{ width }}
            defaultValue="preview"
          >
            <Tabs.List className="border-b border-slate-4 flex justify-center py-1">
              <Tabs.Tab value="preview">Preview</Tabs.Tab>
              <Tabs.Tab value="code">Code</Tabs.Tab>
            </Tabs.List>
            {renderingResult && "exception" in renderingResult ? (
              <ErrorOverlay
                exception={renderingResult.exception}
                className="absolute left-1/2 top-1/2 -translate-1/2 w-2/3 h-1/3"
              />
            ) : null}
            <div className="flex-grow">
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
                    className="w-full h-full bg-white z-0"
                    title="Outlook Preview"
                  />
                ) : null}
              </Tabs.Panel>
              <Tabs.Panel className="w-full h-full" value="code">
                [Email preview HTML after having been transformed]
              </Tabs.Panel>
            </div>
          </Tabs.Root>
        ),
      ]}
    </SplitView>
  );
}
