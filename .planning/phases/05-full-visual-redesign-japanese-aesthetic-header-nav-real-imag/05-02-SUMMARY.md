---
phase: 05-full-visual-redesign
plan: "02"
subsystem: navigation
tags: [header, nav, mobile-drawer, scroll-detection, use-client, accessibility]
dependency_graph:
  requires:
    - 05-01 (globals.css CSS custom properties: --color-background, --color-text-primary, --color-text-secondary, --color-primary, --color-divider, --font-display)
  provides:
    - components/layout/Header.tsx (sticky nav with scroll detection + mobile drawer)
    - components/layout/Header.module.css (frosted glass, hamburger animation, drawer slide)
    - app/page.tsx (Header rendered above main, React Fragment root)
  affects:
    - All pages — Header is rendered in the top-level page.tsx
    - app/layout.tsx — Header adds 64px fixed bar; sections need padding-top if desired
tech_stack:
  added: []
  patterns:
    - "'use client' boundary at Header.tsx — page.tsx stays Server Component"
    - "clsx for conditional CSS Module class merging"
    - "passive scroll listener (T-05-03 mitigation)"
    - "useEffect cleanup restores body.overflow on unmount (T-05-04 mitigation)"
    - "NAV_LINKS filtered via .filter() — only shows built sections (#inicio, #sobre, #servicos)"
key_files:
  created:
    - components/layout/Header.tsx
    - components/layout/Header.module.css
  modified:
    - app/page.tsx
decisions:
  - "Filter NAV_LINKS to VISIBLE_HREFS constant — prevents dead anchor links to unbuilt sections (Galeria, Contato); remove filter when Phase 3 adds those sections"
  - ".open class applied to each hamburger <span> individually (not parent button) — enables nth-child selectors to animate lines 1/2/3 independently"
  - "Drawer hidden via display:none at min-width 768px (not just transform) — prevents off-screen element from receiving focus or being reached by screen readers on desktop"
metrics:
  duration: "~2 minutes"
  completed_date: "2026-04-15"
  tasks_completed: 2
  files_changed: 3
---

# Phase 05 Plan 02: Header Navigation — Scroll Detection and Mobile Drawer Summary

**One-liner:** Sticky Header with frosted-glass scroll effect, desktop horizontal nav, and mobile hamburger drawer using clsx + CSS Modules; wired into page.tsx above main content.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create Header component with scroll detection and mobile drawer | ff22dc2 | components/layout/Header.tsx, components/layout/Header.module.css |
| 2 | Wire Header into page.tsx | 7792ae6 | app/page.tsx |

## What Was Built

### Header.tsx (Task 1)
Client Component (`'use client'`) implementing:
- **Scroll detection**: `useEffect` + passive `scroll` listener sets `isScrolled` when `window.scrollY > 20`. Passive flag satisfies T-05-03 (no main thread blocking).
- **iOS scroll lock**: second `useEffect` sets `document.body.style.overflow = 'hidden'` when drawer opens; cleanup function restores `''` on close and unmount (T-05-04 mitigation).
- **Desktop nav**: `<nav aria-label="Navegação principal">` with filtered NAV_LINKS (Início, Sobre, Serviços only).
- **Hamburger**: 44x44px tap target button with `aria-expanded` and dynamic `aria-label`. Three `<span>` children each receive `.open` class for nth-child animation.
- **Mobile drawer**: `<nav aria-label="Menu móvel" aria-hidden={!isDrawerOpen}>` with `translateX(100%)` → `translateX(0)` CSS transition.
- **clsx usage**: `clsx(styles.header, isScrolled && styles.scrolled)` and `clsx(styles.drawer, isDrawerOpen && styles.drawerOpen)`.

### Header.module.css (Task 1)
- `.header`: `position: fixed; z-index: 50; height: 64px;` with transparent background and 300ms transitions.
- `.scrolled`: `background-color: rgba(248,244,239,0.92); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);` (frosted glass).
- `.hamburgerLine.open:nth-child(1/2/3)`: rotate to X animation.
- `.drawer` / `.drawerOpen`: `translateX(100%)` → `translateX(0)` slide-in.
- Media queries: hamburger + drawer visible below 768px; desktopNav visible at 768px+; drawer `display:none` at 768px+ (removes from focus order).

### page.tsx (Task 2)
Wrapped in React Fragment `<>...</>`. `<Header />` rendered before `<main id="main-content">`. Page remains a Server Component with no `'use client'` directive.

## Verification Results

All 5 plan verification checks passed:
1. `npx tsc --noEmit` → exit 0
2. `grep "use client" components/layout/Header.tsx` → `'use client'` found
3. `grep "Header" app/page.tsx` → import and JSX found
4. `grep "use client" app/page.tsx` → no match (PASS — stays Server Component)
5. `grep 'style=' components/layout/Header.tsx` → no match (PASS — no inline styles)

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — Header renders live NAV_LINKS data filtered to built sections. No placeholder data.

## Threat Flags

No new security-relevant surface beyond what the plan's threat model covers. Both T-05-03 and T-05-04 mitigations applied as required.

## Self-Check: PASSED

Files verified present:
- `components/layout/Header.tsx` — FOUND
- `components/layout/Header.module.css` — FOUND
- `app/page.tsx` — FOUND (Header import confirmed)

Commits verified:
- `ff22dc2` — FOUND (Header component)
- `7792ae6` — FOUND (page.tsx wire-up)
