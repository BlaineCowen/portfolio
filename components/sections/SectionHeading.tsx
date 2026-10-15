import { Reveal } from "@/components/motion/Reveal";
import { Staff } from "@/components/Staff";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Two-digit section number, set like a measure number above a staff. */
  number: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <Reveal>
        <div className="mb-10">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-xl italic leading-none text-gold">
              {number}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              {label}
            </span>
          </div>
          <Staff className="mt-3 h-7 w-full text-[#26262a]" />
        </div>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-12">
        <Reveal delay={0.05} className="md:col-span-7">
          <h2 className="font-serif text-[clamp(2.5rem,5.4vw,4.5rem)] font-normal leading-[1] tracking-[-0.02em] text-ink">
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.12} className="md:col-span-5 md:pt-3">
            <p className="max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
