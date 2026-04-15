---
phase: 06-website-improvements
plan: 01
subsystem: ui
tags: [dark-mode, css-custom-properties, tailwind-v4, theme-toggle, fouc-prevention, next-js]

# Dependency graph
requires:
  - phase: 05-full-visual-redesign-japanese-aesthetic-header-nav-real-imag
    provides: CSS custom property palette tokens in globals.css that dark mode overrides extend
provides:
  - "@custom-variant dark registered for Tailwind v4 dark: utility classes"
  - "[data-theme=dark] CSS token block with 12 warm-accent dark palette values"
  - "[data-theme=light] CSS token block for explicit light override"
  - "ThemeToggle client component with sun/moon SVGs, localStorage persistence, system listener"
  - "FOUC prevention inline script in layout.tsx setting data-theme before hydration"
  - "suppressHydrationWarning on <html> and dual themeColor viewport"
affects:
  - 06-02-header-improvements
  - all CSS Modules using var(--color-*) throughout site

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "@custom-variant dark for Tailwind v4 dark mode integration"
    - "data-theme attribute on <html> as the dark/light mode switch"
    - "mounted state guard pattern to prevent hydration mismatch on icon render"
    - "FOUC inline script before hydration for zero-flash theme init"

key-files:
  created:
    - components/ui/ThemeToggle.tsx
    - components/ui/ThemeToggle.module.css
  modified:
    - app/globals.css
    - app/layout.tsx

key-decisions:
  - "FOUC script placed before JSON-LD script in <body> so data-theme is set before any CSS is evaluated"
  - "--color-primary flips from red (#A03030) to gold (#C9A96E) in dark mode — gold is more legible on dark backgrounds"
  - "--color-border uses warm gold alpha rgba(201,169,110,0.15) in dark mode instead of stark neutral"
  - "No @media prefers-color-scheme in CSS — JS FOUC script handles system preference detection exclusively"
  - "mounted state guard renders icon placeholder on server, correct icon only after client mount"

patterns-established:
  - "ThemeToggle pattern: 'use client' + useState<Theme> + useEffect reading data-theme + system listener cleanup"
  - "Dark mode palette: intentional warm dark backgrounds (#0F0F0D base) not simple color inversion"

requirements-completed:
  - IMP-DARKMODE

# Metrics
duration: 15min
completed: 2026-04-15
---

# Phase 6 Plan 01: Dark Mode Foundation Summary

**CSS custom property dark palette + Tailwind v4 @custom-variant + FOUC-preventing inline script + ThemeToggle "use client" component with localStorage persistence and system preference listener**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-04-15T10:55:00Z
- **Completed:** 2026-04-15T11:10:05Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Added `@custom-variant dark` to globals.css enabling Tailwind v4 `dark:` utility classes scoped to `[data-theme=dark]`
- Added `[data-theme="dark"]` block with 12 warm-accent dark palette tokens and `[data-theme="light"]` explicit override block — existing `:root` and `@theme inline` blocks untouched
- Created `ThemeToggle.tsx` as a fully self-contained "use client" component: sun/moon SVG icons, `mounted` state guard preventing hydration mismatch, localStorage write on toggle, system `prefers-color-scheme` change listener with cleanup
- Created `ThemeToggle.module.css` with 44x44 WCAG touch target, hover/focus-visible states using CSS vars, and `prefers-reduced-motion` guard
- Modified `layout.tsx`: `suppressHydrationWarning` on `<html>`, viewport `themeColor` array for browser chrome adaptation, FOUC prevention inline script set before JSON-LD and `{children}`

## Task Commits

Each task was committed atomically:

1. **Tasks 1+2: Dark mode tokens, ThemeToggle, FOUC script** - `1e67411` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `app/globals.css` - Added `@custom-variant dark`, `[data-theme="dark"]` block, `[data-theme="light"]` block
- `app/layout.tsx` - Added `suppressHydrationWarning`, viewport themeColor array, FOUC inline script
- `components/ui/ThemeToggle.tsx` - New "use client" theme toggle component with sun/moon SVGs
- `components/ui/ThemeToggle.module.css` - Toggle button styles with 44x44 touch target

## Decisions Made

- FOUC script placed as the first `<script>` tag in `<body>` (before JSON-LD) so `data-theme` is set synchronously before any render
- `--color-primary` intentionally flips from red `#A03030` (light) to gold `#C9A96E` (dark) — gold has better contrast on dark backgrounds; red reads poorly on very dark surfaces
- No CSS `@media (prefers-color-scheme: dark)` rules — the FOUC JS script owns system preference detection, avoiding the double-source-of-truth problem and eliminating flash on system-dark users who have stored a light preference
- `mounted` guard renders a `<span className={styles.iconPlaceholder} />` on the server so SSR HTML and initial client render match exactly; correct icon appears only after `useEffect` confirms `data-theme`

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Threat Surface Scan

No new network endpoints, auth paths, file access patterns, or trust boundary schema changes introduced. The `localStorage -> data-theme` path is covered by threat register entry T-06-01 (validated in FOUC script: `t==='dark'||t==='light'` guard).

## Next Phase Readiness

- Dark mode foundation is complete and all existing CSS Modules using `var(--color-*)` will automatically respond to `[data-theme]` overrides
- `ThemeToggle` component is ready to be imported into the Header (Plan 06-02)
- Build passes with zero TypeScript errors; no regressions to existing sections

---

## Self-Check: PASSED

| Check | Result |
|-------|--------|
| `app/globals.css` exists | FOUND |
| `app/layout.tsx` exists | FOUND |
| `components/ui/ThemeToggle.tsx` exists | FOUND |
| `components/ui/ThemeToggle.module.css` exists | FOUND |
| `@custom-variant dark` in globals.css | PASS |
| `[data-theme="dark"]` block in globals.css | PASS |
| `[data-theme="light"]` block in globals.css | PASS |
| `suppressHydrationWarning` in layout.tsx | PASS |
| FOUC script `data-theme` setAttribute in layout.tsx | PASS |
| `'use client'` in ThemeToggle.tsx | PASS |
| commit `1e67411` exists | FOUND |
| `npx tsc --noEmit` | 0 errors |
| `npx next build` | success |

---
*Phase: 06-website-improvements*
*Completed: 2026-04-15*
