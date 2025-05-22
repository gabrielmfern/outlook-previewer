import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

type ErrorOverlayProps = ComponentProps<'div'> & {
  exception: unknown;
}

export function ErrorOverlay({
  exception,
  className,
  ...props
}: ErrorOverlayProps) {
  return (
    <div {...props} className={cn("bg-slate-12 p-2 flex-col text-slate-1 border-t-4 border-t-danger rounded-md", className)}>
      <h2 className="text-lg font-semibold">Error</h2>
      <pre className="bg-slate-10 overflow-y-auto p-4 rounded-md font-mono">
        {String(exception)}
      </pre>
    </div>
  );
}
