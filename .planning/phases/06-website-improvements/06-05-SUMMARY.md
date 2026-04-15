---
phase: 06-website-improvements
plan: "05"
subsystem: css-dark-mode-build
tags: [dark-mode, globals-css, hero-overlay, build-gate, typescript, next-js]

# Dependency graph
requires:
  - "06-01 (dark mode tokens)"
  - "06-02 (header restructure)"
  - "06-03 (service card images)"
  - "06-04 (gallery system)"
provides:
  - "Verified full build gate (tsc + next build exit code 0)"
  - "::selection rule using CSS vars for dark mode text selection"
  - "Scrollbar theming via @supports scrollbar-color block"
  - "Hero overlay using color-mix() CSS var instead of hardcoded light-mode rgba"
affects:
  - all sections (build gate verification)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "color-mix(in srgb, var(--color-background) N%, transparent) for theme-adaptive gradients"
    - "::selection with CSS vars for theme-aware text highlight"
    - "@supports (scrollbar-color: auto) for progressive scrollbar theming"

key-files:
  created: []
  modified:
    - app/globals.css
    - components/sections/Hero.module.css

key-decisions:
  - "Hero overlay rewritten from hardcoded rgba(248,244,239,*) to color-mix() so the fade-to-background gradient adapts automatically in dark mode"
  - "layout.module.css #FFFFFF on skipLink and Button.module.css #FFFFFF on colored buttons treated as acceptable exceptions (white on colored background)"
  - "Header.module.css rgba(0,0,0,*) shadows and backdrop treated as acceptable (self-contained overlay pattern)"
  - "ServiceCard.module.css rgba overlays treated as acceptable (self-contained dark vignette for image legibility)"

requirements-completed:
  - IMP-DARKMODE
  - IMP-IMAGES

# Metrics
duration: 2min
completed: 2026-04-15
---

# Phase 6 Plan 05: Build Gate and Dark Mode Polish Summary

Dark mode polish applied to globals.css (selection colors + scrollbar vars) and Hero overlay converted from hardcoded light-mode rgba to CSS-var-based color-mix(); full TypeScript and Next.js build gate confirmed passing with / and /gallery routes.

## Performance

- **Duration:** ~2 min
- **Started:** 2026-04-15T11:18:35Z
- **Completed:** 2026-04-15T11:20:03Z
- **Tasks:** 2/2
- **Files modified:** 2

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Dark mode polish — globals.css selection/scrollbar + Hero overlay fix | 70d2503 | app/globals.css, components/sections/Hero.module.css |
| 2 | Full build gate — tsc + next build + CSS module scan | 70d2503 | (no new files; build verification only) |

## What Was Built

### globals.css additions
- `::selection` rule: `background-color: var(--color-primary); color: var(--color-background)` — text selection adapts correctly in both light (red highlight) and dark (gold highlight) modes
- `@supports (scrollbar-color: auto)` block: `scrollbar-color: var(--color-text-muted) var(--color-background)` — scrollbar track/thumb colors follow the active theme on supporting browsers (Firefox, Chrome 121+)

### Hero.module.css fix (deviation Rule 1 — bug)
The `.heroOverlay` gradient used hardcoded `rgba(248, 244, 239, *)` which is the exact light-mode background color. In dark mode, this would render a warm beige overlay on the dark hero image, completely breaking the dark aesthetic.

**Fix:** Replaced with `color-mix(in srgb, var(--color-background) N%, transparent)` at the same opacity stops (15% / 45% / 85%). The overlay now matches the active background token — dark charcoal in dark mode, warm linen in light mode.

### CSS Module scan results
All hardcoded colors in CSS modules reviewed. Determination:

| File | Hardcoded Color | Disposition |
|------|-----------------|-------------|
| app/layout.module.css | `#FFFFFF` on `.skipLink` | Acceptable — white text on `var(--color-primary)` button |
| Header.module.css | `rgba(0,0,0,*)` shadows + backdrop | Acceptable — shadows + modal overlay self-contained |
| About.module.css | `rgba(0,0,0,0.1)` shadow | Acceptable — decorative shadow |
| Hero.module.css | `rgba(248,244,239,*)` overlay | **Fixed** — was breaking dark mode (see above) |
| Button.module.css | `#FFFFFF` text | Acceptable — white on colored button backgrounds |
| GalleryClient.module.css | `rgba(0,0,0,*)` hover overlay | Acceptable — image hover vignette |
| ServiceCard.module.css | `rgba(0,0,0,*)` + `#FFFFFF` | Acceptable — self-contained dark overlay on images |

### Build gate results
```
npx tsc --noEmit     → 0 errors
npx next build       → exit code 0
Routes:
  ○ /               (static)
  ○ /gallery        (static)
  ○ /_not-found     (static)
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed Hero overlay hardcoded light-mode rgba breaking dark mode**
- **Found during:** Task 1 (CSS module scan)
- **Issue:** `.heroOverlay` in `Hero.module.css` used `rgba(248, 244, 239, *)` — the exact light-mode background color — making the hero overlay a warm beige tint in dark mode instead of a dark charcoal fade
- **Fix:** Replaced with `color-mix(in srgb, var(--color-background) N%, transparent)` at identical opacity stops (15%/45%/85%)
- **Files modified:** `components/sections/Hero.module.css`
- **Commit:** `70d2503`

**Total deviations:** 1 auto-fixed (Rule 1 - Bug). **Impact:** Minor visual correction — dark mode hero now renders with proper dark background fade instead of warm beige overlay.

## Issues Encountered

None.

## Threat Surface Scan

No new network endpoints, auth paths, file access patterns, or trust boundary schema changes introduced. This plan only modifies CSS.

## Known Stubs

None.

## Next

Phase 06-website-improvements is complete. All 5 plans executed:
- 06-01: Dark mode foundation (tokens, ThemeToggle, FOUC prevention)
- 06-02: Header restructure (grid layout, WhatsApp CTA, mobile drawer)
- 06-03: Service card background images + highlight font fix
- 06-04: Gallery system (preview section + /gallery page + lightbox)
- 06-05: Build gate + dark mode polish (this plan)

Ready for next milestone or phase.

---

## Self-Check: PASSED

| Check | Result |
|-------|--------|
| `app/globals.css` has `::selection` rule | PASS |
| `app/globals.css` has `@supports (scrollbar-color: auto)` block | PASS |
| `Hero.module.css` heroOverlay uses `color-mix()` | PASS |
| `npx tsc --noEmit` | 0 errors — PASS |
| `npx next build` exit code | 0 — PASS |
| `/` route in build output | PASS |
| `/gallery` route in build output | PASS |
| Commit `70d2503` exists | FOUND |

---
*Phase: 06-website-improvements*
*Completed: 2026-04-15*
