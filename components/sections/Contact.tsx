import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Magnetic } from "@/components/motion/Magnetic";
import { Staff } from "@/components/Staff";

const EMAIL = "Blaine.Cowen@gmail.com";

const DETAILS = [
  { label: "Based in", value: "Texas, US" },
  { label: "Looking for", value: "Full-time software engineering roles" },
  { label: "Most at home", value: "APIs, relational data, and React front ends" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 pt-8 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <div className="mb-14">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-xl italic leading-none text-gold">
                05
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                Contact
              </span>
            </div>
            <Staff className="mt-3 h-7 w-full text-[#26262a]" />
          </div>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <SplitLines
              as="h2"
              lines={["Let's talk about", "what I can build."]}
              className="font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.025em]"
            />

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
                I&apos;m looking for a full-time engineering role. If you have
                one, or just want to talk about any of the projects above,
                I&apos;d like to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12">
                <Magnetic max={16}>
                  <a
                    href={`mailto:${EMAIL}`}
                    data-cursor="email"
                    className="group inline-flex items-center gap-4 border-b border-line pb-3 text-2xl tracking-tight text-ink transition-colors hover:border-gold sm:text-4xl"
                  >
                    {EMAIL}
                    <ArrowUpRight
                      className="size-7 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-9"
                      strokeWidth={1.5}
                    />
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-4">
            <dl className="border-t border-line">
              {DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 text-sm"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                    {item.label}
                  </dt>
                  <dd className="text-ink-muted">{item.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 text-sm">
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                  Elsewhere
                </dt>
                <dd>
                  <a
                    href="https://github.com/BlaineCowen"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-ink-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
