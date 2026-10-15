"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { milestones } from "@/content/timeline";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Path() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const nodes = stepRefs.current.filter((n): n is HTMLDivElement => n !== null);
    if (nodes.length === 0) return;

    // A 1px band at the viewport midline: exactly one step can straddle it, so
    // the active index is deterministic and never flickers at a boundary.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = nodes.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="path" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          number="02"
          label="The path"
          title={
            <>
              I did not come up
              <br />
              through a CS program.
            </>
          }
          intro="I came up through a classroom, which turns out to be unusually good training for this work."
        />

        <div className="md:grid md:grid-cols-12 md:gap-16">
          {/* Sticky counter. No overflow-hidden anywhere up this tree; it
              silently disables position:sticky. */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-0 flex h-svh flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-gold">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(milestones.length).padStart(2, "0")}
              </div>

              <div className="relative mt-6 min-h-[9rem]">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={active}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -18 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="font-serif text-[clamp(2.5rem,5.4vw,4.5rem)] font-normal leading-[1] tracking-[-0.02em] text-ink"
                  >
                    {milestones[active].title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Progress rail */}
              <div className="mt-10 flex gap-2">
                {milestones.map((milestone, i) => (
                  <span
                    key={milestone.eyebrow}
                    className={cn(
                      "h-px flex-1 transition-colors duration-500",
                      i <= active ? "bg-gold" : "bg-line",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.eyebrow}
                ref={(node) => {
                  stepRefs.current[i] = node;
                }}
                className="flex min-h-[60svh] flex-col justify-center border-b border-line py-12 last:border-b-0 md:min-h-[72svh] md:border-b-0 md:py-0"
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0.35 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-gold">
                    {milestone.eyebrow}
                  </span>
                  {/* Visible only where the sticky column is hidden. */}
                  <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink md:hidden">
                    {milestone.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl md:leading-relaxed">
                    {milestone.body}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
