"use client";

import { useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { Staff } from "@/components/Staff";

/**
 * Every figure here is checkable against the projects: 17 games and the test
 * count come from the LearnMusic.fun and abcSightReading repos, 20 years is the
 * span of the UIL dataset, 10 is the classroom career.
 */
const FACTS = [
  { figure: "10", label: "Years teaching before I wrote code" },
  { figure: "17", label: "Games live on LearnMusic.fun" },
  { figure: "20", label: "Years of Texas UIL results, one database" },
  { figure: "1,700+", label: "Automated tests on abcSightReading" },
];

/**
 * The first screen animates with CSS keyframes rather than Framer's
 * whileInView. Framer serialises `opacity: 0` into the SSR markup, so if the
 * bundle is slow or blocked the hero never appears at all. CSS animations run
 * without JS.
 */
export function Hero() {
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10"
    >
      <div className="anim-fade-up mx-auto flex w-full max-w-[90rem] items-center justify-between gap-4">
        <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          Open to full-time roles
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-ink-faint sm:block">
          Texas, US
        </span>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[90rem]">
        {/* The staff and the type share one font-size, so the lines are
            measured in em and stay locked to the lettering at any width. */}
        <div className="relative text-display-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[0.24em] h-[0.52em] w-screen -translate-x-1/2 text-[#2e2e33]"
          >
            <Staff className="h-full w-full" />
            <span
              className="playhead absolute -top-[0.12em] bottom-[-0.12em] left-0 w-px bg-gold"
              style={{
                animation: "playhead 16s linear 1.4s infinite",
                opacity: 0,
              }}
            />
          </div>

          <h1 className="relative font-serif font-normal tracking-[-0.025em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-rise block" style={{ animationDelay: "0.15s" }}>
                Blaine
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-rise block italic" style={{ animationDelay: "0.23s" }}>
                Cowen
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            className="anim-fade-up max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
            style={{ animationDelay: "0.75s" }}
          >
            Full stack developer. I spent ten years in Texas classrooms making
            hard things click for other people, and now I build the software
            that does it: sight-reading generators, ear-training games, and a
            reader for choral sheet music.
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
      </div>

      <dl
        className="anim-fade-up mx-auto mt-14 grid w-full max-w-[90rem] grid-cols-2 border-t border-line md:grid-cols-4"
        style={{ animationDelay: "1s" }}
      >
        {FACTS.map((fact, i) => (
          <div
            key={fact.label}
            className={`flex flex-col-reverse justify-end gap-2 py-6 pr-6 ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${
              i % 2 === 1 ? "max-md:border-l max-md:border-line max-md:pl-6" : ""
            }`}
          >
            <dt className="text-sm leading-snug text-ink-muted">
              {fact.label}
            </dt>
            <dd className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
              {fact.figure}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
