"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: React.ReactNode;
  /** Fraction of the cursor offset applied to the element. */
  strength?: number;
  /** Hard clamp in px, so the element never detaches from its layout slot. */
  max?: number;
  className?: string;
};

const clamp = (value: number, limit: number) =>
  Math.max(-limit, Math.min(limit, value));

export function Magnetic({
  children,
  strength = 0.25,
  max = 12,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const fine = useMediaQuery("(pointer: fine)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const enabled = fine && !reduced;

  const handleMove = (event: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(clamp(offsetX * strength, max));
    y.set(clamp(offsetY * strength, max));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={enabled ? { x: springX, y: springY } : undefined}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}
