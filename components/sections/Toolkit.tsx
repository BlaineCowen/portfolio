import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { SectionHeading } from "./SectionHeading";

/** Usage is counted from the shipped projects, so this list cannot overclaim. */
function usageCount(skill: string) {
  return projects.filter((project) => project.tags.includes(skill)).length;
}

/** Every distinct technology actually used, most-used first. */
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort((a, b) => usageCount(b) - usageCount(a) || a.localeCompare(b));

export function Toolkit() {
  return (
    <section id="toolkit" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          number="03"
          label="Toolkit"
          title={
            <>
              Everything here is in
              <br />
              something I built.
            </>
          }
          intro="The number beside each is how many of the nine projects use it. If it is not in one of them, it is not on this list."
        />

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint md:col-span-3">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-x-8 gap-y-4 md:col-span-9">
                  {group.items.map((skill) => {
                    const count = usageCount(skill);
                    return (
                      <li
                        key={skill}
                        className="group flex items-baseline gap-2 text-lg text-ink transition-colors"
                      >
                        {skill}
                        <span className="font-mono text-xs text-ink-faint tabular-nums">
                          {count}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 border-y border-line py-5">
        <Marquee items={allTags} />
      </div>
    </section>
  );
}
