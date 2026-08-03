"use client";

import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type SplitLinesProps = {
  /** Pre-split lines. Splitting by hand avoids runtime layout thrash. */
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

/**
 * Each line rises out of its own clipping mask, staggered via CSS nth-child
 * delays. Renders visible by default; see useReveal.
 */
export function SplitLines({
  lines,
  className,
  lineClassName,
  as: Tag = "div",
}: SplitLinesProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal-lines", className)}
    >
      {lines.map((line, i) => (
        // Key is positional: these lines are static content, never reordered.
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <span className={cn("block", lineClassName)}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
