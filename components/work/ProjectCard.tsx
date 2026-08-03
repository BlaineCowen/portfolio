import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { ProjectMedia } from "./ProjectMedia";

/**
 * Mobile / coarse-pointer presentation of a project. The desktop experience is
 * WorkIndex, which depends on hover; this is the version that has to work
 * without one.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="border-b border-line py-8">
      <ProjectMedia
        project={project}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={index === 0}
        className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface"
      />

      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
          {project.category}
          {!project.demoUrl && project.status && (
            <span className="rounded-full border border-gold/40 px-2.5 py-1 text-[10px] text-gold">
              {project.status}
            </span>
          )}
        </span>
      </div>

      <h3 className="text-2xl tracking-tight text-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-gold"
          >
            Live site
            <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint"
          >
            Source
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
