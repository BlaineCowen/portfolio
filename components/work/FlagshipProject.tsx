import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMedia } from "./ProjectMedia";

function host(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * The one project that opens the Work section at full width, with the story
 * of why it exists. Content comes from `project.flagship`; the caller only
 * renders this when that field is set.
 */
export function FlagshipProject({ project }: { project: Project }) {
  const flagship = project.flagship;
  if (!flagship) return null;

  return (
    <Reveal>
      <article className="mb-16 md:mb-24">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-xl italic text-gold">Flagship</span>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] text-ink">
          {project.title}
        </h3>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg lg:col-span-5">
            {flagship.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap items-center gap-6 pt-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-gold underline-offset-8 hover:underline"
                >
                  Visit site
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint underline-offset-8 hover:text-ink hover:underline"
                >
                  Source
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            {(() => {
              const frame = (
                <div className="group overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
                  <div className="flex h-10 items-center gap-3 border-b border-line px-4">
                    <span className="h-2 w-16 rounded-full bg-surface-2" />
                    <span className="mx-auto truncate font-mono text-[11px] tracking-wide text-ink-faint">
                      {project.demoUrl ? host(project.demoUrl) : project.title}
                    </span>
                    <span className="h-2 w-16" aria-hidden="true" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-[var(--ease-osmo)] group-hover:scale-[1.02]">
                      <ProjectMedia
                        project={project}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                        className="relative aspect-[16/10] bg-surface"
                      />
                    </div>
                  </div>
                </div>
              );
              return project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="open"
                  aria-label={`Open ${project.title}`}
                  className="block"
                >
                  {frame}
                </a>
              ) : (
                frame
              );
            })()}

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
              {project.tags.join(" · ")}
            </p>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {flagship.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col-reverse justify-end gap-2 py-6 pr-6 ${
                i > 0 ? "md:border-l md:border-line md:pl-6" : ""
              } ${i % 2 === 1 ? "max-md:border-l max-md:border-line max-md:pl-6" : ""}`}
            >
              <dt className="text-sm leading-snug text-ink-muted">{fact.label}</dt>
              <dd className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
                {fact.figure}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </Reveal>
  );
}
