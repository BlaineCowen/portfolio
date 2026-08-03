import { projects } from "@/content/projects";
import { WorkIndex } from "@/components/work/WorkIndex";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          number="01"
          label="Selected work"
          title={
            <>
              Nine projects,
              <br />
              eight of them live.
            </>
          }
          intro="Every one started with a problem someone actually described to me, usually a colleague, usually about their own classroom."
        />

        {/* Hover-driven index for fine pointers; cards everywhere else. The
            hover hint lives here, not in the shared intro, because touch
            devices get cards and cannot hover. */}
        <div className="hidden lg:block">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            Hover a row to load the live site
          </p>
          <WorkIndex projects={projects} />
        </div>
        <div className="lg:hidden">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
