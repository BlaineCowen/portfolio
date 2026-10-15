import { projects } from "@/content/projects";
import { FlagshipProject } from "@/components/work/FlagshipProject";
import { FeaturedProject } from "@/components/work/FeaturedProject";
import { WorkIndex } from "@/components/work/WorkIndex";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionHeading } from "./SectionHeading";

const FEATURED = 4;

export function Work() {
  const flagship = projects.find((project) => project.flagship);
  const rest = projects.filter((project) => project !== flagship);

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          number="01"
          label="Selected work"
          title={
            <>
              A few things
              <br />
              I&apos;ve built.
            </>
          }
          intro="A selection, not the whole list. Most started with a problem a colleague described to me, usually about their own classroom."
        />

        {flagship && <FlagshipProject project={flagship} />}

        {/* Desktop: the four newest get a full spread, the rest sit in a
            hover index. Touch and narrow screens get plain cards, because
            the index depends on hover. */}
        <div className="hidden lg:block">
          {rest.slice(0, FEATURED).map((project, index) => (
            <FeaturedProject key={project.slug} project={project} index={index} />
          ))}

          <div className="mt-16 border-t border-line pt-6">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              Earlier work. Hover a row to load the live site
            </p>
            <WorkIndex projects={rest.slice(FEATURED)} offset={FEATURED} />
          </div>
        </div>
        <div className="lg:hidden">
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
