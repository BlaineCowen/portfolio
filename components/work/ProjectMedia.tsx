"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/types";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  /** Card layouts need `fill` inside a sized, relative parent. */
  className?: string;
};

/**
 * The still is always rendered and is the video's first frame. The video, when
 * one exists, fades in over the top once it can actually play, so a blocked,
 * slow, or unsupported video leaves a correct-looking image rather than a hole.
 *
 * It only loads when scrolled near, and never under reduced motion.
 */
export function ProjectMedia({
  project,
  sizes,
  priority,
  className,
}: ProjectMediaProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  const wantsVideo = Boolean(project.videoUrl) && !reduced;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !wantsVideo) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [wantsVideo]);

  return (
    <div ref={containerRef} className={className}>
      <Image
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        className="object-cover object-top"
        priority={priority}
      />

      {wantsVideo && inView && (
        <video
          src={project.videoUrl}
          poster={project.imageUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
