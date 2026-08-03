"use client";

import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Scroll-triggered fade-up that renders visible by default. See useReveal for
 * why this does not use Framer's whileInView.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
