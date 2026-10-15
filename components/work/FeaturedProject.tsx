import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMedia } from "./ProjectMedia";
import { cn } from "@/lib/utils";

function host(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * The three most recent projects get a real screenshot and room to explain
 * themselves; everything else lives in the hover index below. Alternates
 * sides so the page does not read as a stack of identical cards.
 */
export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;

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
        <div className="transition-transform duration-700 ease-[var(--ease-osmo)] group-hover:scale-[1.025]">
          <ProjectMedia
            project={project}
            sizes="(max-width: 1280px) 60vw, 780px"
            priority={index === 0}
            className="relative aspect-[16/10] bg-surface"
          />
        </div>
      </div>
    </div>
  );

  return (
    <Reveal>
      <article className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-14 md:py-16">
        <div
          className={cn(
            "md:col-span-7",
            flip ? "md:order-2" : "md:order-1",
          )}
        >
          {project.demoUrl ? (
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
          )}
        </div>

        <div className={cn("md:col-span-5", flip ? "md:order-1" : "md:order-2")}>
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-xl italic text-gold">
              No. {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <dl className="mt-7 grid grid-cols-[5rem_1fr] gap-x-4 gap-y-3 border-t border-line pt-5 text-sm">
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              Stack
            </dt>
            <dd className="text-ink-muted">{project.tags.join(" · ")}</dd>
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              Status
            </dt>
            <dd className="text-ink-muted">{project.status ?? "Live"}</dd>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-6">
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
      </article>
    </Reveal>
  );
}
