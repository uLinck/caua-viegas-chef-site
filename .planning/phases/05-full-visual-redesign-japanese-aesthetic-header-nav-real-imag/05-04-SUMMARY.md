---
phase: 05-full-visual-redesign
plan: "04"
subsystem: ui-atoms
tags: [css-modules, button, service-card, stat-card, section-title, services, light-palette, rounded-corners, hover-effects]
dependency_graph:
  requires:
    - 05-01 (light palette tokens and radius tokens in globals.css)
  provides:
    - components/ui/Button.module.css (rounded corners, hover scale+shadow, white text on primary/whatsapp)
    - components/ui/ServiceCard.module.css (rounded corners, hover scale+shadow, gold border, Cormorant title)
    - components/ui/StatCard.module.css (rounded corners, Cormorant stat values, light background)
    - components/ui/SectionTitle.module.css (Cormorant heading, clamp sizing, gold rule)
    - components/sections/Services.module.css (off-white background for alternating section pattern)
  affects:
    - All pages rendering Button, ServiceCard, StatCard, SectionTitle components
    - About section (StatCard and SectionTitle rendered there)
    - Services section (all four atoms plus section background)
tech_stack:
  added: []
  patterns:
    - CSS custom property consumption via var(--radius-button), var(--radius-card)
    - prefers-reduced-motion media query to disable transform animations
    - clamp() for responsive heading font-size
    - var(--font-display) for Cormorant Garamond on display text
key_files:
  created: []
  modified:
    - components/ui/Button.module.css
    - components/ui/ServiceCard.module.css
    - components/ui/StatCard.module.css
    - components/ui/SectionTitle.module.css
    - components/sections/Services.tsx
    - components/sections/Services.module.css
decisions:
  - "Button color set to #FFFFFF (literal) not var(--color-background) — on light palette --color-background is off-white #F8F4EF which would be invisible on red/green buttons"
  - "ServiceCard background uses var(--color-background) not var(--color-surface) — cards sit on off-white with subtle border to define boundaries rather than beige-on-beige"
  - "Services section uses var(--color-background) to alternate with About section's var(--color-surface) — creates the beige/off-white alternating pattern specified in CONTEXT.md"
  - "SectionTitle .rule changed from var(--color-primary) red to var(--color-accent) gold — gold underline is more refined under display headings than red"
metrics:
  duration: "~5 minutes"
  completed_date: "2026-04-15"
  tasks_completed: 2
  files_changed: 6
---

# Phase 05 Plan 04: UI Atoms Light Palette Restyle Summary

**One-liner:** Restyled Button, ServiceCard, StatCard, SectionTitle, and Services section from old dark palette to light palette with rounded corners (12-16px), hover scale(1.03) + shadow effects, Cormorant Garamond display font, and first-person Services heading.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Restyle Button and ServiceCard — rounded corners, hover effects, light palette | f190a99 | components/ui/Button.module.css, components/ui/ServiceCard.module.css |
| 2 | Restyle StatCard, SectionTitle, Services for light palette and first-person copy | edf825d | components/ui/StatCard.module.css, components/ui/SectionTitle.module.css, components/sections/Services.tsx, components/sections/Services.module.css |

## What Was Built

### Button (Task 1)
- `border-radius: var(--radius-button, 12px)` replaces old `2px`
- `color: #FFFFFF` on `.primary` and `.whatsapp` — fixes invisible text bug where `var(--color-background)` resolved to off-white #F8F4EF on red/green buttons
- Hover: `transform: scale(1.03)` + `box-shadow: 0 4px 16px rgba(0,0,0,0.1)` on all variants
- Active: `scale(0.98)` for tactile press feedback
- Transitions: 300ms ease-in-out (background-color, transform, box-shadow, border-color)
- `prefers-reduced-motion`: disables transform, sets transition: none

### ServiceCard (Task 1)
- `border-radius: var(--radius-card, 16px)` replaces old `2px`
- `background-color: var(--color-background)` replaces old `var(--color-surface)`
- Hover: `scale(1.03)` + `box-shadow: 0 8px 32px rgba(0,0,0,0.08)` + `border-color: var(--color-accent)` (gold)
- `.cardTitle`: `font-family: var(--font-display)` → Cormorant Garamond
- `.cardHighlight`: `font-family: var(--font-display)` + `border-left` color changed from primary red to `var(--color-accent)` gold
- Internal spacing tightened: 48px/64px gaps reduced to 24px for better card proportions
- `prefers-reduced-motion`: disables transform, sets transition: none

### StatCard (Task 2)
- `border-radius: var(--radius-button, 12px)` replaces old `2px`
- `background-color: var(--color-background)` replaces old `var(--color-surface)`
- `.statValue`: `font-family: var(--font-display)` → Cormorant Garamond, weight 700
- `.statLabel`: `color: var(--color-text-muted)` (lighter than secondary for subtle hierarchy), weight 500

### SectionTitle (Task 2)
- `.heading`: `font-family: var(--font-display)` → Cormorant Garamond
- `.heading`: `font-size: clamp(1.75rem, 3vw, 2.25rem)` replaces fixed `28px`
- `.heading`: `font-weight: 600` (semi-bold, more elegant than 700)
- `.rule`: `background-color: var(--color-accent)` gold replaces primary red, widened to 48px
- `.eyebrow`: font-size 13px, weight 500

### Services Section (Task 2)
- `background-color: var(--color-background)` replaces `var(--color-surface)` — sits on warm off-white, alternates with About section's beige `var(--color-surface)`
- Heading copy: "O Que Posso Oferecer" → "O Que Ofereço" (first-person, cedilla accent correct)

## Verification Results

All 7 plan verification checks passed:
1. `npx tsc --noEmit` → exit 0 (no output)
2. No `#0A0A0A` or `#141414` in modified CSS files → NO OLD COLORS FOUND
3. `grep "radius-button" Button.module.css` → match found
4. `grep "radius-card" ServiceCard.module.css` → match found
5. `grep "font-display" SectionTitle.module.css` → match found
6. `grep "scale(1.03)" Button.module.css ServiceCard.module.css` → matches in both
7. `grep "prefers-reduced-motion" Button.module.css ServiceCard.module.css` → matches in both

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all CSS custom properties resolve to real values defined in globals.css (Plan 05-01). No placeholder or hardcoded mock data.

## Threat Flags

No new security-relevant surface introduced. Pure CSS styling changes with no trust boundary crossings (T-05-07 accepted in plan threat model).

## Self-Check: PASSED

Files verified:
- `components/ui/Button.module.css` — FOUND (radius-button, #FFFFFF, scale(1.03))
- `components/ui/ServiceCard.module.css` — FOUND (radius-card, color-background, scale(1.03))
- `components/ui/StatCard.module.css` — FOUND (radius-button, font-display)
- `components/ui/SectionTitle.module.css` — FOUND (font-display, clamp, color-accent)
- `components/sections/Services.tsx` — FOUND ("O Que Ofereço")
- `components/sections/Services.module.css` — FOUND (color-background)

Commits verified:
- `f190a99` — FOUND
- `edf825d` — FOUND
