import { Tabs as Base } from "@base-ui-components/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type TabsProps = ComponentProps<typeof Base.Root>;

export function Root({ className, ...props }: TabsProps) {
  return <Base.Root {...props} className={cn("rounded-md", className)} />;
}

type TabsListProps = ComponentProps<typeof Base.List>;

export function List({ className, ...props }: TabsListProps) {
  return (
    <Base.List
      {...props}
      tabIndex={0}
      className={cn("relative z-0 flex gap-1", className)}
    />
  );
}

type TabProps = ComponentProps<typeof Base.Tab>;

export function Tab({ className, ...props }: TabProps) {
  return (
    <Base.Tab
      {...props}
      className={cn(
        "flex text-slate-10 h-8 items-center justify-center border-0 rounded-md px-2 text-sm font-medium select-none hover:text-slate-11",
        "data-[selected]:text-slate-11 data-[selected]:bg-slate-7",
        "transition-colors",
        className,
      )}
    />
  );
}

type PanelProps = ComponentProps<typeof Base.Panel>;

export function Panel({ className, ...props }: PanelProps) {
  return <Base.Panel {...props} className={cn( className)} />;
}
