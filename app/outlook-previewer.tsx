"use client";
import { SplitView } from "@/components/ui/split-view";
import * as Tabs from "@/components/ui/tabs";

export function OutlookPreviewer() {
  return (
    <SplitView className="h-[90dvh] bg-slate-2 rounded-md border border-slate-8">
      {[
        (width) => (
          <Tabs.Root defaultValue="react email" style={{ width }}>
            <Tabs.List>
              <Tabs.Tab value="react email">React Email</Tabs.Tab>
              <Tabs.Tab value="html">HTML</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="react email">[React Email editor]</Tabs.Panel>
            <Tabs.Panel value="html">[HTML editor]</Tabs.Panel>
          </Tabs.Root>
        ),
        (width) => (
          <Tabs.Root defaultValue="preview" style={{ width }}>
            <Tabs.List>
              <Tabs.Tab value="preview">Preview</Tabs.Tab>
              <Tabs.Tab value="code">Code</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="preview">
              [Email preview after having been transformed]
            </Tabs.Panel>
            <Tabs.Panel value="code">
              [Email HTML after having been transferred]
            </Tabs.Panel>
          </Tabs.Root>
        ),
      ]}
    </SplitView>
  );
}
