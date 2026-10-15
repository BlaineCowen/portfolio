import type { SkillGroup } from "@/lib/types";

/**
 * Every entry here is a tag that appears on at least one project in
 * content/projects.ts, and the Toolkit section counts usage directly from that
 * array, so this list cannot drift into claiming things that aren't backed by
 * real work. If you learn something new, ship something with it first.
 */
export const skillGroups: SkillGroup[] = [
  // HTML and CSS are deliberately absent: only one project tags them
  // explicitly, so a usage count would read "1" and understate the truth.
  {
    title: "Languages",
    items: ["TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Svelte", "Astro", "Node.js", "Flask"],
  },
  {
    title: "Interface",
    items: ["Tailwind", "Shadcn/UI", "Framer Motion"],
  },
  {
    title: "Audio & native",
    items: ["JUCE", "Real-time DSP", "Tone.js", "CMake"],
  },
  {
    title: "Data & infrastructure",
    items: ["PostgreSQL", "Prisma", "Vercel", "React Query", "Selenium"],
  },
];
