import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Magnetic } from "@/components/motion/Magnetic";

const EMAIL = "Blaine.Cowen@gmail.com";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,165,36,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-gold">
            05 / Contact
          </span>
        </Reveal>

        <SplitLines
          as="h2"
          lines={["Let's talk about", "what I can build."]}
          className="mt-8 text-display font-medium tracking-tight"
        />

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
            I&apos;m looking for a full-time engineering role. If you have one, or
            just want to talk about any of the projects above, I&apos;d like to
            hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14">
            <Magnetic max={16}>
              <a
                href={`mailto:${EMAIL}`}
                data-cursor="email"
                className="group inline-flex items-center gap-4 border-b border-line pb-3 text-2xl tracking-tight text-ink transition-colors hover:border-gold sm:text-4xl md:text-5xl"
              >
                {EMAIL}
                <ArrowUpRight
                  className="size-7 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-10"
                  strokeWidth={1.5}
                />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
