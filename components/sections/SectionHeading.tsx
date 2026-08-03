import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Two-digit section number, e.g. "01". */
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
        <div className="mb-8 flex items-center gap-4 border-b border-line pb-4">
          <span className="font-mono text-xs tracking-[0.12em] text-gold">
            {number}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            {label}
          </span>
        </div>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-12">
        <Reveal delay={0.05} className="md:col-span-7">
          <h2 className="text-headline font-medium tracking-tight text-ink">
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.12} className="md:col-span-5 md:pt-2">
            <p className="text-base leading-relaxed text-ink-muted">{intro}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
