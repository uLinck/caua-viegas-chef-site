---
phase: 05-full-visual-redesign
plan: "03"
subsystem: hero-about-sections
tags: [hero, about, animation, first-person-copy, layout-flip, real-images, light-palette]
dependency_graph:
  requires:
    - "05-01 (light palette tokens, --font-display, --radius-image, hero-bg.jpeg, about-chef.jpg)"
  provides:
    - components/sections/Hero.tsx (redesigned Hero with real image, animated title, first-person subtitle)
    - components/sections/Hero.module.css (light overlay, fadeSlideUp keyframes, prefers-reduced-motion)
    - components/sections/About.tsx (flipped grid — portrait LEFT, bio RIGHT, first-person copy)
    - components/sections/About.module.css (400px portrait column, rounded portrait, surface background)
  affects:
    - app/page.tsx (renders Hero and About — visual output changes)
tech_stack:
  added: []
  patterns:
    - CSS @keyframes fadeSlideUp with staggered animation-delay per heading span
    - prefers-reduced-motion media query disabling all entrance animations
    - next/image preload={true} + fetchPriority="high" + loading="eager" for LCP image
    - CSS grid portrait-left layout (400px 1fr) on desktop, single column on mobile
key_files:
  created: []
  modified:
    - components/sections/Hero.tsx
    - components/sections/Hero.module.css
    - components/sections/About.tsx
    - components/sections/About.module.css
decisions:
  - "Hero h1 split into two .headingLine spans — enables independent CSS animation-delay per line without JS"
  - "Light overlay uses rgba(248,244,239) matching --color-background — blends photo into page palette rather than darkening it"
  - "decorativeLine uses ::before and ::after pseudo-elements for vertical accent lines — avoids extra DOM nodes"
  - "About grid 400px 1fr (portrait fixed width) — consistent with Phase 05 CONTEXT.md locked decision; portrait column first in DOM so mobile stacks correctly"
  - "bioText p line-height raised to 1.7 (from 1.6) — longer first-person sentences need slightly more breathing room"
metrics:
  duration: "~2 minutes"
  completed_date: "2026-04-15"
  tasks_completed: 2
  files_changed: 4
---

# Phase 05 Plan 03: Hero and About Section Redesign Summary

**One-liner:** Rewrote Hero with real photo background, staggered fadeSlideUp entrance animation on two-line uppercase h1, and light warm overlay; flipped About grid to portrait-left with first-person Brazilian Portuguese bio and 16px rounded portrait.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Rewrite Hero section — real image, animated title, first-person copy | 7792ae6 | components/sections/Hero.tsx, components/sections/Hero.module.css |
| 2 | Rewrite About section — flipped layout, real portrait, first-person bio | 10de471 | components/sections/About.tsx, components/sections/About.module.css |

## What Was Built

### Hero Section (Task 1)

**Hero.tsx:**
- `src="/images/hero-bg.jpeg"` — real chef photo (copied in Plan 05-01)
- `preload={true}` + `fetchPriority="high"` + `loading="eager"` — LCP optimization for Next.js 16
- `objectPosition: 'center top'` — keeps chef face visible on crop
- h1 split into two `<span className={styles.headingLine}>` elements: "PERSONAL CHEF" + "CAUÃ VIEGAS"
- Eyebrow uses proper em-dash (&#8212;): "PERSONAL CHEF — GASTRONOMIA JAPONESA"
- Subtitle with full accents: "Levo experiências gastronômicas únicas para a intimidade da sua casa."
- CTA links to `#servicos` (section that exists, not `#contact`)
- Decorative `道` kanji + vertical accent lines via `::before`/`::after` pseudo-elements on right side

**Hero.module.css:**
- Light overlay: `rgba(248,244,239)` gradient (0.15 → 0.45 → 0.85) — warm wash instead of dark overlay
- `@keyframes fadeSlideUp`: `opacity 0→1`, `translateY(20px→0)`, 0.6s ease-out
- `.headingLine`: staggered — first line at 0s, second line at 0.15s delay
- `.tagline`: 0.3s delay; `.ctaWrapper`: 0.45s delay
- `@media (prefers-reduced-motion: reduce)`: all animations disabled, opacity 1, transform none
- Decorative line hidden entirely at max-width 480px

### About Section (Task 2)

**About.tsx:**
- Layout flipped: portrait column comes FIRST in JSX (left on desktop, stacks above on mobile)
- `src="/images/about-chef.jpg"` — real portrait photo (copied in Plan 05-01)
- `className={styles.portraitImage}` added to Image for border-radius
- All bio rewritten first-person: "construí", "Sou especialista", "Atendo", "ofereço", "ministro", "planejo"
- Full Portuguese accents throughout: reputação, precisão, técnica, experiências, refeição, técnicas, clássicas, apresentação, artística, inesquecível

**About.module.css:**
- `grid-template-columns: 400px 1fr` at min-width 1024px (portrait LEFT, bio RIGHT)
- `portraitWrapper`: `border-radius: var(--radius-image, 16px)` + `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- `portraitImage`: `border-radius: var(--radius-image, 16px)` on the Image element itself
- Section background `var(--color-surface)` for alternating section rhythm
- `bioText p` line-height 1.7 for comfortable reading of longer first-person sentences

## Verification Results

All 8 plan verification checks passed:
1. `npx tsc --noEmit` → exit 0 (PASS)
2. `grep '"use client"' Hero.tsx` → no match (Server Component — PASS)
3. `grep '"use client"' About.tsx` → no match (Server Component — PASS)
4. `grep "hero-bg.jpeg" Hero.tsx` → match found (PASS)
5. `grep "about-chef.jpg" About.tsx` → match found (PASS)
6. `grep "fadeSlideUp" Hero.module.css` → match found (PASS)
7. `grep "prefers-reduced-motion" Hero.module.css` → match found (PASS)
8. `grep "400px 1fr" About.module.css` → match found (PASS)

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — both sections render real images (hero-bg.jpeg, about-chef.jpg) and real static copy. No placeholder text or empty data sources.

## Threat Flags

No new security-relevant surface introduced. T-05-05 and T-05-06 in plan threat register cover Hero/About images and static alt text — both accepted as intended public marketing content.

## Self-Check: PASSED

Files verified present after commits:
- `components/sections/Hero.tsx` — FOUND
- `components/sections/Hero.module.css` — FOUND
- `components/sections/About.tsx` — FOUND
- `components/sections/About.module.css` — FOUND

Commits verified:
- `7792ae6` — FOUND (Task 1: Hero rewrite)
- `10de471` — FOUND (Task 2: About rewrite)
