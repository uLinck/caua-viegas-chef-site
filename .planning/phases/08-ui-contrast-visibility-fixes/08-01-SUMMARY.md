---
phase: 08-ui-contrast-visibility-fixes
plan: "01"
subsystem: css-contrast
tags: [contrast, accessibility, wcag, overlay, css-modules, hero, header, service-cards]
dependency_graph:
  requires: []
  provides: [VIS-CONTRAST-01, VIS-CONTRAST-02, VIS-CONTRAST-03]
  affects:
    - components/ui/ServiceCard.module.css
    - components/sections/Hero.module.css
    - components/layout/Header.module.css
    - components/ui/ThemeToggle.module.css
tech_stack:
  added: []
  patterns:
    - "CSS Modules :global() wrapper for [data-theme] ancestor + local descendant targeting"
    - "rgba(0,0,0,X) raw stops replacing color-mix() for theme-independent overlays"
    - "::before pseudo-element scrim with z-index: -1 for text contrast behind content"
key_files:
  created: []
  modified:
    - components/ui/ServiceCard.module.css
    - components/sections/Hero.module.css
    - components/layout/Header.module.css
    - components/ui/ThemeToggle.module.css
decisions:
  - "Replaced color-mix() in heroOverlay with raw rgba() — color-mix() with --color-background (#F8F4EF) brightens the photo in light theme instead of darkening it"
  - "heroContent::before scrim uses z-index: -1 so it sits behind text children while stacking above heroOverlay due to heroContent's z-index: 2 stacking context"
  - ":global([data-theme=light]) .toggle in ThemeToggle.module.css — .toggle class is scoped to ThemeToggle's namespace; putting it in Header.module.css would mangle the class name"
  - "Header light-theme gradient uses :not(.scrolled) to avoid competing with frosted-glass .scrolled rule"
metrics:
  duration: "2 minutes"
  completed_date: "2026-04-16"
  tasks_completed: 3
  files_modified: 4
---

# Phase 08 Plan 01: UI Contrast and Visibility Fixes Summary

**One-liner:** CSS-only WCAG AA contrast fixes — strengthened card overlays, rgba hero scrim replacing broken color-mix(), and light-theme header gradient with ThemeToggle border boost.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Strengthen service card overlay gradient and add backdrop-filter blur | 67baaac | components/ui/ServiceCard.module.css |
| 2 | Replace hero overlay with neutral rgba gradient and add heroContent text scrim | 43121a8 | components/sections/Hero.module.css |
| 3 | Add light-theme header initial background and ThemeToggle border visibility fix | fa97864 | components/layout/Header.module.css, components/ui/ThemeToggle.module.css |

## What Was Built

### Task 1 — ServiceCard overlay strengthened (ServiceCard.module.css)

Replaced the `.cardOverlay` gradient with stronger stops:

- Bottom (0%): 0.72 → **0.88** (CTA and items zone — WCAG AA body text)
- Mid (40%): 0.35 at 45% → **0.70 at 40%** (description/highlight zone)
- Upper-mid (75%): **new stop 0.50** (title zone — added for gradual transition)
- Top (100%): 0.45 → **0.30** (atmospheric only)
- Added `backdrop-filter: blur(2px)` + `-webkit-backdrop-filter: blur(2px)` to soften photo detail behind text

### Task 2 — Hero overlay fixed and text scrim added (Hero.module.css)

**Modification A:** Replaced all three `color-mix(in srgb, var(--color-background) X%, transparent)` stops in `.heroOverlay` with raw `rgba(0,0,0,X)` values:
- 0%: rgba(0,0,0,0.30)
- 40%: rgba(0,0,0,0.20)
- 100%: rgba(0,0,0,0.45)

Root cause of light-theme breakage: `--color-background: #F8F4EF` is warm off-white — `color-mix()` was brightening the photo at high percentages instead of darkening it.

**Modification B:** Added `.heroContent::before` pseudo-element — a dark pill scrim (`rgba(0,0,0,0.42)`, `blur(8px)`, `border-radius: 16px`, `inset: -32px -48px`, `z-index: -1`) behind the hero text content for guaranteed legibility against any photo.

### Task 3 — Header and ThemeToggle light-theme fixes

**Header.module.css:** Appended `[data-theme="light"] .header:not(.scrolled)` rule with a warm-white gradient (`rgba(248,244,239,0.72)` → `rgba(248,244,239,0.00)`) at scroll position 0. Uses `:not(.scrolled)` to avoid competing with the frosted-glass `.scrolled` rule.

**ThemeToggle.module.css:** Appended `:global([data-theme="light"]) .toggle` rule with `border-color: rgba(44,44,44,0.35)` — bumps the light-theme border from 0.12 (nearly invisible) to 0.35 opacity. `:global()` is required because `.toggle` is scoped to ThemeToggle's CSS Module namespace.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — this plan is CSS-only with no data rendering.

## Threat Flags

No new security-relevant surface introduced — pure CSS changes with no network endpoints, auth paths, file access, or schema changes.

## Self-Check: PASSED

Files exist:
- components/ui/ServiceCard.module.css — FOUND
- components/sections/Hero.module.css — FOUND
- components/layout/Header.module.css — FOUND
- components/ui/ThemeToggle.module.css — FOUND

Commits exist:
- 67baaac — FOUND (feat(08-01): strengthen service card overlay gradient)
- 43121a8 — FOUND (feat(08-01): replace hero overlay with neutral rgba gradient)
- fa97864 — FOUND (feat(08-01): add light-theme header gradient and ThemeToggle border)

Build: pnpm build exits 0 — PASSED
