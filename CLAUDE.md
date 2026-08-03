# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Development server (Next.js + Turbopack)
npm run build     # Production build
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

Single-route Next.js App Router portfolio. All content lives on one page (`/app/page.tsx`) with hash-based section anchors (`#projects`, `#contact`). There is no dynamic routing, no API routes, and no database — all content (projects array, skills, education) is hard-coded in `page.tsx`.

### Key files

- `/app/page.tsx` — all homepage sections and the projects/skills/education data arrays
- `/app/globals.css` — CSS custom properties (HSL color tokens) and the hero grid background pattern
- `/components/Header.tsx` — sticky navigation with smooth-scroll to section IDs
- `/tailwind.config.ts` — custom font scale extended to `24xl`
- `/next.config.ts` — Vercel Blob Storage image domain allowlist

### Patterns

**"use client" everywhere** — `page.tsx`, `Header.tsx`, `Footer.tsx`, and `ProjectCard.tsx` are all client components because they use Framer Motion or event handlers.

**Animation** — Framer Motion handles all motion: typewriter hero name (`motion.span` per character), scroll-triggered reveals (`whileInView`), and parallax (`useScroll` + `useTransform`).

**Styling** — Tailwind utility-first with Shadcn/UI components (`/components/ui/`). The `cn()` helper in `/lib/utils.ts` (clsx + tailwind-merge) is the standard for conditional class merging. New UI primitives should follow the Shadcn pattern.

**Images** — Served from Vercel Blob Storage (`3isexyxg2bd3whr8.public.blob.vercel-storage.com`). The `BLOB_READ_WRITE_TOKEN` env var is required to upload new images.
