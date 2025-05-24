import { type ComponentProps, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type SplitViewProps = Omit<ComponentProps<"div">, "children" | "ref"> & {
  children: [
    (width: string) => React.ReactNode,
    (width: string) => React.ReactNode,
  ];
};

export function SplitView({ className, children, ...props }: SplitViewProps) {
  const [firstSplitWidth, setFirstSplitWidth] = useState(0.5);
  const secondSplitWidth = 1 - firstSplitWidth;

  const splitViewRef = useRef<HTMLDivElement>(null);

  const resizeHandleRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const handleDraggingMouseMove = (event: MouseEvent) => {
    if (!isDragging || !splitViewRef.current) return;
    event.preventDefault();

    const boundingClientRect = splitViewRef.current.getBoundingClientRect();

    setFirstSplitWidth(
      (event.clientX - boundingClientRect.x) / boundingClientRect.width,
    );
  };

  const handleDraggingMouseUp = () => {
    setIsDragging(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: These dependencies do not change
  useEffect(() => {
    if (resizeHandleRef.current) {
      document.addEventListener("mousemove", handleDraggingMouseMove);
      document.addEventListener("mouseup", handleDraggingMouseUp, {
        once: true,
      });

      return () => {
        document.removeEventListener("mousemove", handleDraggingMouseMove);
        document.removeEventListener("mouseup", handleDraggingMouseUp);
      };
    }
  }, [isDragging === true]);

  return (
    <div
      {...props}
      ref={splitViewRef}
      className={cn("w-full h-full flex overflow-hidden", className)}
    >
      {children[0](`${firstSplitWidth * 100}%`)}
      <div
        aria-label="Resize handle"
        aria-orientation="vertical"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={firstSplitWidth}
        ref={resizeHandleRef}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            setFirstSplitWidth((prev) => Math.max(prev - 0.01, 0));
          }
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            setFirstSplitWidth((prev) => Math.min(prev + 0.01, 1));
          }
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        className="
          appearance-none cursor-ew-resize outline-none px-1 flex items-center justify-center w-fit h-full border-x border-x-slate-2
          focus-visible:ring-2 focus-visible:ring-green/10
        "
        role="slider"
        tabIndex={0}
      >
        <div className="w-1 h-16 rounded bg-slate-7" />
      </div>
      {children[1](`${secondSplitWidth * 100}%`)}
    </div>
  );
}
