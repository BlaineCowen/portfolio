import { education } from "@/content/education";
import { Reveal } from "@/components/motion/Reveal";

export function Credentials() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 border-b border-line pb-4">
            <span className="font-mono text-xs tracking-[0.12em] text-gold">
              04
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              Education
            </span>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="h-full">
              <div className="flex h-full flex-col bg-bg p-8">
                <h3 className="text-xl font-medium tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-gold">
                  {item.institution}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
