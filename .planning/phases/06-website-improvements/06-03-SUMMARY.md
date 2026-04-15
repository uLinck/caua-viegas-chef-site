---
phase: 06-website-improvements
plan: "03"
subsystem: service-cards
tags: [images, overlay, z-index, font-fix, next-image]
requires: ["06-01"]
provides: ["service-card-backgrounds", "highlight-font-fix"]
affects: ["components/ui/ServiceCard.tsx", "components/ui/ServiceCard.module.css", "types/index.ts", "lib/constants.ts"]
tech-stack:
  added: []
  patterns:
    - "next/image fill in Server Component for card backgrounds"
    - "z-index layering: image(0) + overlay(1) + content(2)"
    - "Two-layer gradient overlay for dark vignette + bottom text legibility"
key-files:
  modified:
    - types/index.ts
    - lib/constants.ts
    - components/ui/ServiceCard.tsx
    - components/ui/ServiceCard.module.css
key-decisions:
  - "Cards are self-contained (overlay-driven) — identical appearance in light and dark mode, no theme token dependency for contrast"
  - "cardHighlight drops font-family entirely so Inter cascades naturally from body; only color and border-left provide emphasis"
  - "loading=lazy on Image since service cards are below-the-fold (not preloaded like hero)"
requirements-completed: [IMP-SERVICE-CARDS, IMP-FONT-FIX]
duration: "2 min"
completed: "2026-04-15"
---

# Phase 06 Plan 03: Service Card Background Images + Highlight Font Fix Summary

Full background images with gradient overlays added to all 3 service cards using `next/image` fill pattern, with z-index layering (image 0 / overlay 1 / content 2), and `.cardHighlight` fixed from Cormorant Garamond italic to Inter body font with gold accent color.

**Duration:** 2 minutes (11:12 – 11:13 UTC)
**Tasks:** 2/2 completed
**Files modified:** 4

## Tasks Completed

| Task | Description | Commit |
|------|-------------|--------|
| 1 | Add imageSrc + imageAlt to ServiceItem type and all 3 SERVICE_ITEMS constants | d4603a8 |
| 2 | Add next/image fill + gradient overlay to ServiceCard; rewrite CSS with z-index layering; fix cardHighlight font | 0f511c3 |

## What Was Built

- **`types/index.ts`**: `ServiceItem` interface extended with `imageSrc: string` and `imageAlt: string`
- **`lib/constants.ts`**: All 3 service items have image paths assigned:
  - `eventos` → `food-table-1.jpeg` (elegant dining table)
  - `consultoria` → `chef-cooking-1.jpeg` (professional kitchen)
  - `curso` → `students-certificates.jpg` (students with certificates)
- **`ServiceCard.tsx`**: `next/image` with `fill` added as first child (background), `cardOverlay` div as second child, all content children above via CSS z-index. Server Component — no `"use client"` needed.
- **`ServiceCard.module.css`**: Complete rewrite. `.serviceCard` gets `position: relative`, `min-height: 360px`, `overflow: hidden`. `.cardBgImage` at z-index 0, `.cardOverlay` absolute-fill gradient at z-index 1, all text elements at `position: relative; z-index: 2` with white/gold colors. `.cardHighlight` fix: no `font-family` (inherits Inter), `font-style: normal`, `color: var(--color-accent)`.

## Verification Results

1. `npx tsc --noEmit` — PASS (zero errors)
2. `pnpm build` — PASS (compiled successfully, 4 static pages generated)
3. z-index layering confirmed in CSS: image(0), overlay(1), all content(2)
4. `.cardHighlight` — no `font-family`, `font-style: normal`, `color: var(--color-accent)`: PASS
5. All 3 image paths point to confirmed files in `public/images/`

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None — all 3 service cards have real image paths wired from constants to the Image component.

## Threat Flags

None — image paths come from trusted internal constants, images are public marketing photos.

## Self-Check: PASSED

- `types/index.ts` — FOUND, contains `imageSrc` and `imageAlt`
- `lib/constants.ts` — FOUND, all 3 SERVICE_ITEMS have image fields
- `components/ui/ServiceCard.tsx` — FOUND, contains `next/image` with `fill` and `cardBgImage` class
- `components/ui/ServiceCard.module.css` — FOUND, contains `.cardOverlay`, `.cardBgImage`, z-index layering
- Commit `d4603a8` — FOUND (Task 1)
- Commit `0f511c3` — FOUND (Task 2)
- `pnpm build` — PASSED

**Next:** Ready for 06-04 (next plan in phase 06).
