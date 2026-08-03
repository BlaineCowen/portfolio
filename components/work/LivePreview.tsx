"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/lib/use-media-query";

const HOVER_INTENT_MS = 150;
const LOAD_TIMEOUT_MS = 3500;
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 820;

type LivePreviewProps = {
  url?: string;
  title: string;
  /** Verified per project against live response headers. See content/projects.ts. */
  embeddable: boolean;
};

/**
 * Overlays the real deployed site on top of the static screenshot.
 *
 * Deliberately defensive. The parent renders this only for the single hovered
 * project and keys it by slug, so at most one iframe can ever exist. Booting
 * eight apps at once would wreck INP. The static screenshot stays underneath in
 * every case, so this is strictly additive.
 *
 * Note that a frame blocked by X-Frame-Options fires no `error` event at all,
 * so a timeout is the only way to detect it, which is why the fallback is the
 * default path rather than the exception.
 */
export function LivePreview({ url, title, embeddable }: LivePreviewProps) {
  const desktop = useMediaQuery("(min-width: 768px) and (pointer: fine)");
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [scale, setScale] = useState(0.34);

  const enabled = Boolean(url) && embeddable && desktop && !reduced && !failed;

  // Hover intent: never boot an app on a pass-through.
  useEffect(() => {
    if (!enabled) return;
    const timer = setTimeout(() => setMounted(true), HOVER_INTENT_MS);
    return () => clearTimeout(timer);
  }, [enabled]);

  // Anything that hasn't painted in time falls back to the screenshot for good.
  useEffect(() => {
    if (!mounted || loaded) return;
    const timer = setTimeout(() => setFailed(true), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [mounted, loaded]);

  // Render at desktop width and scale down, or every site shows its mobile layout.
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FRAME_WIDTH);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [mounted]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0"
        >
          <iframe
            src={url}
            title={`Live preview of ${title}`}
            tabIndex={-1}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className="origin-top-left border-0"
            style={{
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              transform: `scale(${scale})`,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
