"use client";
import { useState } from "react";
import { ReactEmailCodeEditor } from "@/components/react-email-code-editor";
import { SplitView } from "@/components/ui/split-view";
import * as Tabs from "@/components/ui/tabs";

export function OutlookPreviewer() {
	const [react, setReact] = useState(`export default function EmailTemplate() { 
  return <div>This is me trying out something</div>; 
}`);

	return (
		<SplitView className="h-[90dvh] bg-slate-2 rounded-md border border-slate-8">
			{[
				(width) => (
					<div style={{ width }} className="h-full">
						<ReactEmailCodeEditor code={react} onChange={(v) => setReact(v)} />
					</div>
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
