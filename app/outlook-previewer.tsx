"use client";
import React, { useState } from "react";
import { CodeEditor } from "@/components/code-editor";
import { ErrorOverlay } from "@/components/error-overlay";
import { SplitView } from "@/components/ui/split-view";
import * as Tabs from "@/components/ui/tabs";
import { useLastDefinedValue } from "@/lib/hooks/use-last-defined-value";
import { useRenderingResult } from "@/lib/hooks/use-rendering-result";

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
              <Tabs.Panel
                value="preview"
                className="w-full h-full text-black bg-white selection:bg-green/40 selection:text-black"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: this is fine since this HTML comes from the user and it is going to only run the code given by the user. Besides the Outlook sanitization we also do.
                dangerouslySetInnerHTML={{
                  __html:
                    lastDefinedRenderingResult &&
                    "html" in lastDefinedRenderingResult
                      ? lastDefinedRenderingResult.html
                      : "",
                }}
              />
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
