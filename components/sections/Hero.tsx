"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

/**
 * The first screen animates with CSS keyframes rather than Framer's
 * whileInView. Framer serialises `opacity: 0` into the SSR markup, so if the
 * bundle is slow, blocked, or absent the hero never appears at all, which is
 * exactly what happened when Next blocked cross-origin dev assets over the
 * tailnet. CSS animations run without JS and still animate.
 *
 * Framer is kept only for the decorative parallax and the scroll fade, neither
 * of which hides content.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-10 pt-32 md:px-10"
    >
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid-pattern" />
        <div
          className="absolute left-1/2 top-[38%] h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,165,36,0.20), rgba(245,165,36,0.05) 45%, transparent 70%)",
            animation: reduced ? undefined : "glow-drift 18s ease-in-out infinite",
          }}
        />
      </motion.div>

      <div className="anim-fade-up flex items-center justify-between gap-4">
        <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          Available for work
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-ink-faint sm:block">
          Texas, US
        </span>
      </div>

      <motion.div style={reduced ? undefined : { opacity: fade }}>
        <h1 className="text-display-xl font-medium">
          {["Blaine", "Cowen"].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <span
                className="anim-rise block"
                style={{ animationDelay: `${(0.15 + i * 0.08).toFixed(2)}s` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            className="anim-fade-up max-w-md text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "0.75s" }}
          >
            Full stack developer. Ten years spent making hard things{" "}
            {/* Instrument Serif italic kerns "cl" tightly enough that the pair
                reads as a "d". The tracking keeps the letters apart. */}
            <span className="font-serif italic tracking-[0.06em] text-ink">
              click
            </span>{" "}
            for other
            people. Now I build the tools instead.
          </p>

          <div
            className="anim-fade-up flex items-center gap-8"
            style={{ animationDelay: "0.85s" }}
          >
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo("work")}
                data-cursor="view"
                className="rounded-full bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-gold-ink transition-transform duration-300 hover:scale-[1.03]"
              >
                See the work
              </button>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted underline-offset-8 transition-colors hover:text-ink hover:underline"
              >
                Get in touch
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => scrollTo("work")}
        aria-label="Scroll to work"
        className="anim-fade-up mx-auto text-ink-faint transition-colors hover:text-gold"
        style={{ animationDelay: "1.1s" }}
      >
        <motion.span
          className="block"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </button>
    </section>
  );
}
