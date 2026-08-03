"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { useMediaQuery } from "@/lib/use-media-query";

/**
 * A cursor *companion*, not a replacement. The system cursor stays visible.
 * Replacing it with `cursor: none` is an accessibility liability and the thing
 * that most often reads as style over substance on a hiring page.
 *
 * Opt an element in with `data-cursor="view"`; the value becomes the label.
 */
export function Cursor() {
  const fine = useMediaQuery("(pointer: fine)");
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 550, damping: 45, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 550, damping: 45, mass: 0.35 });

  const [label, setLabel] = useState<string | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target;
      if (!(target instanceof Element)) {
        setInteractive(false);
        setLabel(null);
        return;
      }

      const labelled = target.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        setInteractive(true);
        setLabel(labelled.dataset.cursor || null);
        return;
      }

      setInteractive(Boolean(target.closest("a, button, [role='button']")));
      setLabel(null);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden md:block"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-gold/70 -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: label ? 76 : interactive ? 48 : 26,
          height: label ? 76 : interactive ? 48 : 26,
          backgroundColor: label
            ? "rgba(245,165,36,0.92)"
            : interactive
              ? "rgba(245,165,36,0.14)"
              : "rgba(245,165,36,0)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.5 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-gold-ink"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
