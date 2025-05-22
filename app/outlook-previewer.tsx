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
      const transformedReact = transform(react, {
        transforms: ["jsx", "typescript"],
        production: true,
      }).code;
      try {
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
    <SplitView className="h-[90dvh] bg-slate-2 rounded-md border border-slate-8">
      {[
        (width) => (
          <div style={{ width }} className="h-full">
            <CodeEditor code={react} onChange={(v) => setReact(v)} />
          </div>
        ),
        (width) => (
          <Tabs.Root
            className="relative flex flex-col"
            defaultValue="preview"
            style={{ width }}
          >
            {renderingResult && "exception" in renderingResult ? (
              <ErrorOverlay
                exception={renderingResult.exception}
                className="absolute left-1/2 top-1/2 w-1/3 h-2/3"
              />
            ) : null}
            <Tabs.List>
              <Tabs.Tab value="preview">Preview</Tabs.Tab>
              <Tabs.Tab value="code">Code</Tabs.Tab>
            </Tabs.List>
            <div className="flex-grow py-4">
              <Tabs.Panel value="preview" className="w-full h-full">
                {lastDefinedRenderingResult &&
                "html" in lastDefinedRenderingResult ? (
                  <iframe
                    srcDoc={lastDefinedRenderingResult.html}
                    className="w-full h-full bg-white"
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
