"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  /** Seconds for one full cycle. */
  duration?: number;
  className?: string;
};

/**
 * CSS-driven marquee. Content is duplicated once and translated -50%, so the
 * loop is seamless. Under reduced motion it collapses to a static wrapped row.
 */
export function Marquee({ items, duration = 40, className }: MarqueeProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-center gap-x-8 gap-y-2 px-4",
          className,
        )}
      >
        {items.map((item) => (
          <span key={item} className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      // Fade the ends into the canvas so the loop seam is never visible.
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max shrink-0 items-center will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] text-ink-faint"
              >
                <span className="px-6">{item}</span>
                <span className="text-gold/40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
