<!-- GSD:project-start source:PROJECT.md -->
## Project

**Cauã Viegas | Personal Chef Website**

A professional, conversion-focused single-page website for Cauã Viegas, a Personal Chef specialized in high-end Japanese gastronomy. Built with Next.js (App Router) + TypeScript + Tailwind CSS + CSS Modules, it communicates premium positioning, technical mastery, and exclusivity while guiding visitors toward WhatsApp contact/conversion. Deployed on Vercel.

**Core Value:** Convert visitors into clients by projecting premium positioning through a dark Japanese aesthetic, and eliminating all friction between interest and WhatsApp contact.

### Constraints

- **Tech Stack**: Next.js App Router + TypeScript + Tailwind CSS + CSS Modules — no other UI libraries
- **Styling**: Every component must have its own `.module.css` file; never pile styles inline in JSX; Tailwind for utility-level, CSS Modules for component-specific
- **Package Manager**: pnpm (preferred) or npm
- **Deploy Target**: Vercel — `npx next build` must succeed
- **SSR**: Server Components by default; `"use client"` only where interactivity is needed (header, gallery, contact form, FAB)
- **TypeScript**: Strict mode, no `any` types, all props typed with interfaces
- **Images**: Always `next/image`, never `<img>` tags; lazy load below-the-fold
- **Contact Info**: Never hardcoded in components — always imported from `lib/constants.ts`
- **Performance**: Target 90+ Lighthouse on all categories; minimize client-side JS
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Critical Finding: Next.js Version
## Verified Package Versions
| Package | Version | Notes |
|---------|---------|-------|
| `next` | **16.2.3** | `latest` tag; 15.5.15 is `backport` |
| `react` / `react-dom` | **19.2.5** | Required by Next.js 16 |
| `tailwindcss` | **4.2.2** | v4 stable; v3-lts is 3.4.19 |
| `@tailwindcss/postcss` | **4.2.2** | New required companion for v4 |
| `typescript` | **5.8.3** | Do NOT use 6.x — ecosystem not caught up |
| `yet-another-react-lightbox` | **3.31.0** | React 19 compatible; best maintained |
| `clsx` | **2.1.1** | Class merging utility |
| `eslint` | **10.2.0** | eslint-config-next@16 requires >=9.0.0 |
| `eslint-config-next` | **16.2.3** | Pin to same version as next |
| `prettier` | **3.5.3** | — |
| `@types/react` | **19.2.14** | Match installed react major |
| `@types/node` | **^22.x** | Match Node 22 LTS |
| `pnpm` | **10.33.0** | Preferred package manager |
## CRITICAL: Tailwind v4 Breaking Config Change
## Recommended Stack
### Core Framework
- `next@^16.2.3` + `react@^19.2.5` + `react-dom@^19.2.5`
- Requires Node >=20.9.0 (use Node 22 LTS)
### Styling
- `tailwindcss@^4.2.2` + `@tailwindcss/postcss@^4.2.2` — CSS-first config
- CSS Modules — built into Next.js, zero config
- `next/font/google` — built-in, use `Inter` + `Noto_Serif_JP`
### Gallery
- `yet-another-react-lightbox@^3.31.0` — React 19 compatible; keyboard + touch nav built-in
### Utilities
- `clsx@^2.1.1` — merge Tailwind classes with conditional CSS Module names
### DevX
- `typescript@~5.8.3` (NOT 6.x)
- `eslint@^9` + `eslint-config-next@^16.2.3`
- `prettier@^3.5.3` + `prettier-plugin-tailwindcss`
- `@types/react@^19.2.14` + `@types/node@^22`
## next/font Pattern for Japanese Aesthetic
## "use client" Surface (Lighthouse Impact)
## What NOT To Use
| Avoid | Reason |
|-------|--------|
| shadcn/ui | PROJECT.md explicitly bans UI libraries |
| framer-motion | 200KB+ gzip; bans complex animations in v1 |
| react-hook-form | Overkill for WhatsApp redirect form |
| CSS-in-JS | FOUC in App Router RSC context |
| `<img>` tags | PROJECT.md mandates `next/image` everywhere |
| TypeScript 6.x | Ecosystem not caught up; risk of type errors |
| Axios | No API calls in this project |
| Any CMS | Out-of-scope; use `lib/constants.ts` |
## Installation Commands
# Scaffold
# Upgrade to current stable
# Supporting
# Dev
## Open Questions
- **Scaffold vs v4:** `create-next-app` may generate a Tailwind v3 config. Verify after scaffold that `tailwind.config.ts` was NOT generated and `@tailwindcss/postcss` is in `postcss.config.mjs`.
- **Noto Serif JP weight budget:** Multiple weights add network payload. Verify with Lighthouse post-build.
- **Node version on Vercel:** Next.js 16 requires Node >=20.9.0. Set Vercel project to Node 22 LTS.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
