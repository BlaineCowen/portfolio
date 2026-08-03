"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Fail-safe scroll reveal.
 *
 * The element renders visible. This hook hides it (via a class, not React
 * state) only after confirming it is below the fold and that an observer is
 * actually watching it. If JS never runs, or IntersectionObserver is
 * unavailable, or the observer misfires, the content simply stays visible.
 *
 * Framer's `whileInView` does the opposite: it serialises the hidden state into
 * the SSR HTML and depends on JS to undo it, which silently blanked the hero
 * and the contact heading.
 *
 * Classes are toggled directly on the node rather than through setState, which
 * also keeps this off the react-hooks/set-state-in-effect path.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already on screen: never hide it, or it would flash out and back in.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("is-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("is-hidden");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return ref;
}
