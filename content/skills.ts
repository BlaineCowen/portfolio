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
    items: ["TypeScript", "Python", "SQL", "C++"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Svelte", "Astro", "Tailwind"],
  },
  {
    title: "Audio, ML & native",
    items: ["Tone.js", "JUCE", "Real-time DSP", "CMake", "PyTorch"],
  },
  {
    title: "Data & infrastructure",
    items: ["PostgreSQL", "SQLite", "Prisma", "Stripe", "React Query", "Selenium"],
  },
];
