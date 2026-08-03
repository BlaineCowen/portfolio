"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { EASE } from "@/lib/motion";
import { useMediaQuery } from "@/lib/use-media-query";
import { LivePreview } from "./LivePreview";
import { ProjectMedia } from "./ProjectMedia";
import { cn } from "@/lib/utils";

const PANEL_W = 440;
const PANEL_H = 290;

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [enterFrom, setEnterFrom] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const reduced = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const showPanel = desktop && !reduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  const handleMove = (event: React.MouseEvent) => {
    if (!showPanel || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  /** Direction-aware entry: the panel wipes in from whichever edge you crossed. */
  const handleEnter = (event: React.MouseEvent, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setEnterFrom(event.clientY < rect.top + rect.height / 2 ? -1 : 1);
    setActiveIndex(index);
  };

  const active = activeIndex === null ? null : projects[activeIndex];

  return (
    <div ref={containerRef} className="relative" onMouseMove={handleMove}>
      <ul className="border-t border-line">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={project.slug} className="border-b border-line">
              <div
                onMouseEnter={(event) => handleEnter(event, index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={cn(
                  "group relative grid grid-cols-1 items-baseline gap-x-6 gap-y-3 py-7 transition-colors duration-300 md:grid-cols-12 md:py-9",
                  isActive ? "text-ink" : "text-ink-muted",
                )}
              >
                {/* Gold wash on hover, drawn behind the content. */}
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 -z-10 rounded-lg bg-surface"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />

                <span className="font-mono text-xs text-ink-faint md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl tracking-tight md:col-span-5 md:text-3xl">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="open"
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(null)}
                      // Stretched hit area: the whole row is the link.
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </a>
                  ) : (
                    // Nothing public to link to, so the row is not a link and
                    // must not present itself as one.
                    project.title
                  )}
                </h3>

                <p className="text-sm text-ink-muted md:col-span-4">
                  {project.blurb}
                </p>

                <span className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint md:col-span-2 md:justify-end">
                  {project.category}
                  {project.demoUrl ? (
                    <ArrowUpRight
                      size={16}
                      className={cn(
                        "shrink-0 transition-all duration-300",
                        isActive
                          ? "-translate-y-0.5 translate-x-0.5 text-gold"
                          : "text-ink-faint",
                      )}
                    />
                  ) : (
                    project.status && (
                      <span className="shrink-0 whitespace-nowrap rounded-full border border-gold/40 px-2.5 py-1 text-[10px] text-gold">
                        {project.status}
                      </span>
                    )
                  )}
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    // Sits above the stretched row link.
                    className="relative z-10 hidden font-mono text-xs uppercase tracking-[0.12em] text-ink-faint underline-offset-4 hover:text-gold hover:underline md:col-span-12 md:block md:w-fit"
                  >
                    Source
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {showPanel && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20"
          style={{ x: springX, y: springY }}
        >
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: enterFrom * 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{
                  width: PANEL_W,
                  height: PANEL_H,
                  marginLeft: -PANEL_W / 2,
                  marginTop: -PANEL_H / 2,
                }}
                className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/60"
              >
                <ProjectMedia
                  project={active}
                  sizes="440px"
                  className="absolute inset-0"
                />
                <LivePreview
                  url={active.previewUrl ?? active.demoUrl}
                  title={active.title}
                  embeddable={active.embeddable}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
