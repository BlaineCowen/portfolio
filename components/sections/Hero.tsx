"use client";

import { useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { Staff } from "@/components/Staff";

/**
 * Every figure here is checkable against the projects: 17 games and the test
 * count come from the LearnMusic.fun and abcSightReading repos, 173,600 is the
 * entry count uilpml.com reports, 10 is the classroom career.
 */
const FACTS = [
  { figure: "10", label: "Years teaching before I wrote code" },
  { figure: "17", label: "Games live on LearnMusic.fun" },
  { figure: "173,600", label: "Texas contest results searchable on uilpml.com" },
  { figure: "1,700+", label: "Automated tests on abcSightReading" },
];

/** Magazine-style cover lines: a table of contents that is also the nav. */
const COVER_LINES = [
  { id: "work", number: "01", title: "Selected work", note: "abcSightReading, Octavo, uilpml.com" },
  { id: "path", number: "02", title: "The path", note: "From the classroom to code" },
  { id: "toolkit", number: "03", title: "Toolkit", note: "Only what is in a shipped project" },
  { id: "contact", number: "05", title: "Contact", note: "Open to full-time roles" },
];

/**
 * A short phrase written on the hero staff. `x` is in vw (the staff is
 * viewport-wide), `step` is the staff position: 0 is the bottom line, each
 * step up is the next space or line, so 8 is the top line.
 */
const NOTES = [
  { x: 56, step: 2 },
  { x: 61, step: 4 },
  { x: 66, step: 6 },
  { x: 71, step: 5 },
  { x: 76, step: 3 },
  { x: 81, step: 4 },
  { x: 86, step: 1 },
  { x: 91, step: 2 },
];

/** One staff space, in em of the display size. Matches the staff's 0.52em height / 5. */
const SPACE = 0.104;
/** Playhead timing, shared with the CSS animation so the notes light on cue. */
const PLAYHEAD_DELAY = 1.4;
const PLAYHEAD_LOOP = 16;

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
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-8 pt-24 md:px-10"
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

      <div className="mx-auto mt-8 w-full max-w-[90rem]">
        {/* The staff, notes and type share one font-size, so everything is
            measured in em and stays locked to the lettering at any width. */}
        <div className="relative text-display-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[0.24em] h-[0.52em] w-screen -translate-x-1/2 text-[#2e2e33]"
          >
            <Staff className="h-full w-full" />

            {/* Hidden on small screens, where the name fills the staff. */}
            <div className="hidden md:block">
              {NOTES.map((note) => {
                const stemDown = note.step >= 4;
                return (
                  <span
                    key={note.x}
                    className="hero-note absolute"
                    style={{
                      left: `${note.x}vw`,
                      top: `${(4.5 - note.step / 2) * SPACE}em`,
                      animationDelay: `${(PLAYHEAD_DELAY + (note.x / 100) * PLAYHEAD_LOOP).toFixed(2)}s`,
                    }}
                  >
                    <span
                      className="absolute block rounded-[50%] bg-current"
                      style={{
                        width: "0.135em",
                        height: "0.098em",
                        transform: "translate(-50%, -50%) rotate(-20deg)",
                      }}
                    />
                    <span
                      className="absolute block w-px bg-current"
                      style={
                        stemDown
                          ? { left: "-0.064em", top: 0, height: `${3.4 * SPACE}em` }
                          : { left: "0.062em", bottom: 0, height: `${3.4 * SPACE}em` }
                      }
                    />
                  </span>
                );
              })}
            </div>

            <span
              className="playhead absolute -top-[0.12em] bottom-[-0.12em] left-0 w-px bg-gold"
              style={{
                animation: `playhead ${PLAYHEAD_LOOP}s linear ${PLAYHEAD_DELAY}s infinite`,
                opacity: 0,
              }}
            />
          </div>

          <h1 className="font-serif font-normal tracking-[-0.025em]">
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

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
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
              className="anim-fade-up mt-8 flex items-center gap-8"
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
            </div>
          </div>

          <nav
            aria-label="Sections"
            className="anim-fade-up hidden lg:col-span-4 lg:col-start-9 lg:block"
            style={{ animationDelay: "0.9s" }}
          >
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              In this portfolio
            </p>
            <ul className="border-t border-line">
              {COVER_LINES.map((line) => (
                <li key={line.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => scrollTo(line.id)}
                    className="group grid w-full cursor-pointer grid-cols-[2.25rem_1fr_auto] items-baseline gap-3 py-2 text-left"
                  >
                    <span className="font-serif text-sm italic text-gold">
                      {line.number}
                    </span>
                    <span>
                      <span className="block font-serif text-xl leading-tight text-ink transition-colors group-hover:text-gold">
                        {line.title}
                      </span>
                      <span className="block text-xs text-ink-faint">{line.note}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold"
                    >
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <dl
        className="anim-fade-up mx-auto mt-10 grid w-full max-w-[90rem] grid-cols-2 border-t border-line md:grid-cols-4"
        style={{ animationDelay: "1s" }}
      >
        {FACTS.map((fact, i) => (
          <div
            key={fact.label}
            className={`flex flex-col-reverse justify-end gap-2 py-5 pr-6 ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${
              i % 2 === 1 ? "max-md:border-l max-md:border-line max-md:pl-6" : ""
            }`}
          >
            <dt className="text-pretty text-sm leading-snug text-ink-muted">{fact.label}</dt>
            <dd className="font-serif text-4xl tabular-nums tracking-tight text-ink md:text-5xl">
              {fact.figure}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
