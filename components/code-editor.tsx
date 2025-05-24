import { Editor } from "@monaco-editor/react";
import { vesper } from "@/lib/vesper";

interface CodeEditorProps {
  readonly?: boolean;
  code: string;
  onChange?: (code: string) => void;
}

export function CodeEditor({
  readonly = false,
  code,
  onChange,
}: CodeEditorProps) {
  return (
    <Editor
      height="100%"
      language="typescript"
      className="font-mono"
      options={{
        fontSize: 16,
        readOnly: readonly,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollbar: {
          vertical: 'hidden',
        },
        wordWrap: "on",
      }}
      beforeMount={async (monaco) => {
        monaco.editor.defineTheme('vesper', vesper);
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
          esModuleInterop: true,
          lib: [
            'esnext',
            'dom',
          ],
          target: monaco.languages.typescript.ScriptTarget.ESNext,
          module: monaco.languages.typescript.ModuleKind.ESNext,
          moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        });
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/index.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/index.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/global.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/global.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/canary.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/canary.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/compiler-runtime.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/compiler-runtime.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/experimental.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/experimental.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/jsx-dev-runtime.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/jsx-dev-runtime.d.ts",
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await fetch("/types/react/jsx-runtime.d.ts").then((res) => res.text()),
          "file:///node_modules/@types/react/jsx-runtime.d.ts",
        );
      }}
      value={code}
      path="file:///email.tsx"
      theme="vesper"
      onChange={(value) => {
        onChange?.(value ?? "");
      }}
    />
  );
}
