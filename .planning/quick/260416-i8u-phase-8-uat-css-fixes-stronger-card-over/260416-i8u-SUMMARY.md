---
phase: quick-260416-i8u
plan: "01"
subsystem: css-visual-fixes
tags: [css, contrast, accessibility, light-theme, service-cards, hero, header]
dependency_graph:
  requires: []
  provides: [service-card-wcag-aa-contrast, hero-white-text-light-theme, header-dark-top-gradient]
  affects: [components/ui/ServiceCard.module.css, components/sections/Hero.module.css, components/layout/Header.module.css]
tech_stack:
  added: []
  patterns: [CSS attribute selector scoping with data-theme, dark-to-transparent gradient for header contrast]
key_files:
  created: []
  modified:
    - components/ui/ServiceCard.module.css
    - components/sections/Hero.module.css
    - components/layout/Header.module.css
decisions:
  - Service card overlay pushed to near-opaque (0.95 bottom) — guarantees WCAG AA on white text over any photo
  - Hero heading/tagline forced to white via [data-theme="light"] scope — dark CSS vars conflict with dark scrim
  - Header dark-top gradient replaces warm-white wash — dark backing improves legibility without color-specific lock-in
metrics:
  duration: "~1 min"
  completed: "2026-04-16"
  tasks_completed: 2
  files_modified: 3
---

# Phase quick-260416-i8u Plan 01: Phase 8 UAT CSS Fixes — Stronger Card Overlay, Hero White Text, Header Dark Gradient Summary

**One-liner:** Maxed out service card overlay (0.95 near-opaque, 4px blur), forced hero heading/tagline to white in light theme via scoped `[data-theme="light"]` overrides, and replaced the warm-white header gradient with a dark-top `rgba(0,0,0,0.45)` gradient.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Max out service card overlay darkness and increase blur | 0ef2092 | components/ui/ServiceCard.module.css |
| 2 | Force hero heading/tagline white in light theme, fix header gradient | e82af43 | components/sections/Hero.module.css, components/layout/Header.module.css |

## Changes Made

### Task 1 — ServiceCard.module.css

Replaced `.cardOverlay` gradient stops and blur:

| Zone | Before | After |
|------|--------|-------|
| Bottom (CTA) | 0.88 at 0% | 0.95 at 0% |
| Mid-low (description) | 0.70 at 40% | 0.82 at 35% |
| Mid-high (title) | 0.50 at 75% | 0.65 at 65% |
| Top (atmosphere) | 0.30 at 100% | 0.42 at 100% |
| Blur | 2px | 4px |

### Task 2 — Hero.module.css

Added light-theme override block at end of file:

```css
[data-theme="light"] .heading  { color: #ffffff; }
[data-theme="light"] .tagline  { color: rgba(255, 255, 255, 0.88); }
```

The dark scrim (`heroContent::before`, rgba 0.42) exists behind these elements. CSS variables `--color-text-primary` (#2C2C2C) and `--color-text-secondary` (#5A5550) resolve to dark colors in light mode — illegible against the scrim.

### Task 2 — Header.module.css

Replaced the warm-white gradient with a dark-top gradient:

```css
/* Before */
background: linear-gradient(to bottom, rgba(248,244,239,0.72) 0%, rgba(248,244,239,0.00) 100%);

/* After */
background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.00) 100%);
```

Dark backing makes both light and dark nav text colors legible against the bright hero image without competing with the `.scrolled` frosted-glass state.

## Verification

- `grep "0, 0, 0, 0.95" components/ui/ServiceCard.module.css` — FOUND
- `grep "blur(4px)" components/ui/ServiceCard.module.css` — FOUND
- `grep "[data-theme=\"light\"] .heading" components/sections/Hero.module.css` — FOUND (line 203)
- `grep "rgba(255, 255, 255, 0.88)" components/sections/Hero.module.css` — FOUND (line 208)
- `grep "rgba(0, 0, 0, 0.45)" components/layout/Header.module.css` — FOUND
- `grep -c "rgba(248, 244, 239" components/layout/Header.module.css` — 0 (warm-white gone)
- `pnpm build` — exits 0, all 3 routes static

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None.

## Threat Flags

None — pure CSS changes, no new network surface, no user input, no data flow.

## Self-Check: PASSED

- components/ui/ServiceCard.module.css — modified, overlay stops and blur updated
- components/sections/Hero.module.css — modified, [data-theme="light"] overrides appended
- components/layout/Header.module.css — modified, warm-white gradient replaced
- Commit 0ef2092 — exists (Task 1)
- Commit e82af43 — exists (Task 2)
- Build passes with exit 0
