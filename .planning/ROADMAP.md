# Roadmap: Cauã Viegas | Personal Chef Website

## Overview

Four sequential phases deliver a conversion-focused single-page marketing website from zero to production. Phase 1 builds the shared foundation that every component depends on — `lib/constants.ts` is created first, with zero dependencies and ten-plus dependents. Phase 2 assembles all Server Component sections as static HTML with zero client JavaScript. Phase 3 adds the four Client Component islands that require browser APIs. Phase 4 audits, hardens, and deploys. Phase 5 is a full visual redesign replacing the dark theme with a light Japanese aesthetic. The build order is dictated by the dependency graph, not convention.

---

## Phases

- [ ] **Phase 1: Foundation** - Project scaffold, design tokens, shared lib files, root layout with metadata — no visible UI, all shared dependencies
- [x] **Phase 2: Server Sections** - Hero, About, Services, Footer and all leaf UI atoms as static Server Components delivering the majority of the page as zero-JS HTML (completed 2026-04-14)
- [ ] **Phase 3: Client Islands** - Header (scroll blur + hamburger), Gallery + Lightbox, Contact form, WhatsApp FAB — all four interactive components
- [ ] **Phase 4: QA & Launch** - Lighthouse 90+ audit, WCAG AA verification, TypeScript strict pass, local build verification, and Vercel production deployment
- [ ] **Phase 5: Visual Redesign** - Complete visual overhaul: light Japanese aesthetic, Cormorant Garamond typography, real photography, sticky header/nav, scroll animations, first-person Brazilian Portuguese copy
- [ ] **Phase 6: Website Improvements** - Dark mode, gallery, service card images, header CTA, mobile nav fix

---

## Phase Details

### Phase 1: Foundation
**Goal**: The project scaffolds and runs with correct Tailwind v4 configuration, all shared type definitions, all contact constants, a working root layout with fonts and metadata, and a passing `next build` — before any section UI is written.
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06, FOUND-07, FOUND-08, FOUND-09, FOUND-10
**Success Criteria** (what must be TRUE):
  1. `pnpm dev` serves a page with no console errors; `pnpm build` exits with code 0
  2. Browser DevTools computed styles show `--font-inter` and `--font-noto-serif-jp` resolved on `<html>` (not system fonts)
  3. Tailwind utility classes from the brand palette (e.g., `bg-surface`, `text-primary`) apply correctly to any test element — no `tailwind.config.ts` exists in the repo
  4. Page source contains the JSON-LD `<script type="application/ld+json">` block with correct LocalBusiness data
  5. A visible skip-to-content link appears on keyboard focus at the top of the page
**Plans**: 3 plans

Plans:
- [x] 01-01: Scaffold, package installation, and Tailwind v4 verification
- [x] 01-02: Design tokens, type definitions, and lib utilities
- [ ] 01-03: Root layout — fonts, metadata, viewport export, JSON-LD, skip-to-content

**Implementation notes:**

- **Scaffold command:** `pnpm create next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"` then immediately upgrade: `pnpm add next@^16.2.3 react@^19.2.5 react-dom@^19.2.5`; also install `pnpm add yet-another-react-lightbox clsx` and `pnpm add -D @tailwindcss/postcss prettier prettier-plugin-tailwindcss @types/node@^22`
- **Tailwind v4 gate (do this before writing any CSS):** Confirm `tailwind.config.ts` does NOT exist. Confirm `postcss.config.mjs` contains `"@tailwindcss/postcss": {}`. Replace any generated `@tailwind base/components/utilities` directives with `@import "tailwindcss";`. If scaffold generated v3 config, fix before proceeding.
- **globals.css structure — dual registration required:** CSS vars in `:root {}` for `var()` usage in CSS Modules; same vars re-registered in `@theme inline {}` so Tailwind generates utilities (e.g., `bg-surface`, `text-primary`). CSS Module class names must be semantic (`.heroWrapper`, `.navItem`) — never `.container`, `.flex`, `.grid`, `.card` which collide with Tailwind utilities.
- **Color palette (exact values):** `--color-background: #0A0A0A`, `--color-surface: #141414`, `--color-surface-hover: #1C1C1C`, `--color-border: #2A2A2A`, `--color-text-primary: #F5F0E8`, `--color-text-secondary: #A39E93`, `--color-primary: #C4A265`, `--color-primary-hover: #D4B67A`, `--color-accent: #8B3A3A`, `--color-whatsapp: #25D366`
- **Font loading:** `Inter` (variable `--font-inter`) + `Noto_Serif_JP` (weights `['400', '700']`, variable `--font-noto-serif-jp`). Apply both `font.variable` class names (not `font.className`) to `<html lang="pt-BR">`. Bridge to Tailwind: `@theme inline { --font-sans: var(--font-inter); --font-display: var(--font-noto-serif-jp); }`
- **Metadata pitfall:** `themeColor` and `colorScheme` must be in `export const viewport: Viewport` — NOT inside `export const metadata: Metadata`. Both must be exported from `app/layout.tsx`. Set `metadataBase: new URL('https://chefviegas.vercel.app')`.
- **`lib/constants.ts` must be the very first file created** — zero dependencies, 10+ dependents. Exports: `WHATSAPP_NUMBER = '5551997590041'`, `EMAIL = 'viegascaua@outlook.com'`, `INSTAGRAM_URL = 'https://instagram.com/viegasc_'`, `LOCATION = 'Porto Alegre, RS — Atende em todo estado'`, `NAV_LINKS: NavLink[]`, `GALLERY_ITEMS: GalleryItem[]`, `SERVICE_ITEMS: ServiceItem[]`, `STAT_ITEMS: StatItem[]`, and pre-built WhatsApp URLs using `buildWhatsAppUrl()` for each service and the FAB general greeting.
- **`lib/utils.ts`:** `export function buildWhatsAppUrl(phone: string, message: string): string { return \`https://wa.me/\${phone}?text=\${encodeURIComponent(message)}\` }` — `encodeURIComponent` is non-negotiable for Portuguese accented characters.
- **`types/index.ts`:** Export `ServiceItem`, `GalleryItem`, `StatItem`, `NavLink`, `SocialLink` interfaces — exact shapes documented in ARCHITECTURE.md.
- **Vercel project setup:** Create project via Vercel dashboard. Set Node.js version to 22 LTS (Next.js 16 requires >=20.9.0). Note deployment URL for `metadataBase`.
- **TypeScript strict mode:** `tsconfig.json` must have `"strict": true`. `"noEmit": true` for tsc check. No `any` types at any point. `params` in any route handler is `Promise<{}>` in Next.js 15+ — `await params` before destructuring.

---

### Phase 2: Server Sections
**Goal**: The full page skeleton is visible — Hero, About, Services, and Footer render as static HTML with zero client JavaScript; all leaf UI atoms exist and are reusable; image placeholders use correct aspect ratios via `next/image`; the page is deployable to Vercel and scores 90+ on Lighthouse before any client interactivity is added.
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, SERV-01, SERV-02, SERV-03, SERV-04, FOOT-01, FOOT-02
**Success Criteria** (what must be TRUE):
  1. Visiting the site shows all four sections (Hero, About, Services, Footer) with correct layout at mobile (375px), tablet (768px), and desktop (1280px) widths — no horizontal scroll at any breakpoint
  2. The hero image placeholder fills the viewport with a visible surface-color background; no `<img>` tags exist anywhere in the page source — only `next/image`-generated markup
  3. All three ServiceCard WhatsApp CTA links open `https://wa.me/5551997590041` with the correct pre-filled service message on click (verify URLs contain `encodeURIComponent`-encoded text)
  4. Page source for all sections contains zero `"use client"` directives — pure Server Components confirmed in Next.js DevTools or by inspecting the component source
  5. Stat cards display "7+ Anos de Dedicação", "12+ Eventos Exclusivos", "50k+ Alcance Mensal" with correct Portuguese text and no typos
**Plans**: 4 plans

Plans:
- [x] 02-01: Leaf UI atoms — Button, SectionTitle, StatCard, SocialIcons
- [x] 02-02: ServiceCard and Hero section
- [x] 02-03: About section and Footer
- [x] 02-04: Services section and page assembly (app/page.tsx stub)

**Implementation notes:**

- **Component file structure:** All UI atoms in `components/ui/`, sections in `components/sections/`, layout in `components/layout/`. Every component file has a co-located `ComponentName.module.css`. No inline styles; no arbitrary Tailwind for brand colors (use CSS custom property utilities instead).
- **`next/image` fill pattern for Hero:** Hero wrapper must have `position: relative` (CSS Module class, not Tailwind `relative` — they both work, but be consistent). Use `fill` + `object-cover` on the `<Image>`. `sizes="100vw"`. Add `priority` prop (not `preload`) on hero image — this is the LCP element and must be preloaded.
- **`next/image` portrait and gallery placeholders:** Use explicit `width` and `height` props (not `fill`). Apply `style={{ width: '100%', height: 'auto' }}` for fluid sizing. Portrait: width 600, height 800 (3:4). Gallery images: width 800, height 600 (4:3). Set `sizes` prop accurately: portrait `"(max-width: 768px) 100vw, 50vw"`, gallery `"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`.
- **Placeholder implementation:** Use `src` pointing to a non-existent path (e.g., `/images/hero-bg.jpg`) — this is intentional. Add `unoptimized={false}` and a background color via CSS Module (`background-color: var(--color-surface)`) on the image wrapper so the placeholder is visually present. No external placeholder services.
- **`ServiceCard` CTA links:** Each card uses a static `<a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">` — NOT a `<button>` with an `onClick`. This must work with JavaScript disabled. WhatsApp URLs are pre-computed in `lib/constants.ts` using `buildWhatsAppUrl()`.
- **Button component:** Polymorphic — renders as `<a>` when `href` prop is present, `<button>` otherwise. Typed with discriminated union or overloaded interface. No `onClick` on the Server Component version (pass `onClick` only when used inside a Client Component).
- **Services section (`SERV-04`):** Confirm zero `"use client"` in the file tree for `sections/Services.tsx`, `ui/ServiceCard.tsx`, `ui/Button.tsx`, `ui/SectionTitle.tsx`, `ui/StatCard.tsx`, `layout/Footer.tsx`, `sections/Hero.tsx`, `sections/About.tsx`.
- **CSS Module naming:** `.heroSection`, `.heroContent`, `.aboutGrid`, `.statGrid`, `.servicesGrid`, `.serviceCard`, `.footerWrapper` — semantic names that describe the element's role, not its visual state.
- **道 kanji:** Every instance must have `aria-hidden="true"` — it is purely decorative. Use `Noto_Serif_JP` font class for authentic rendering.
- **Contact info in Footer:** Import `EMAIL`, `WHATSAPP_NUMBER`, `INSTAGRAM_URL` from `lib/constants.ts`. Never type contact info directly in JSX.
- **Import casing discipline:** File is `Footer.tsx`, import is `import Footer from '@/components/layout/Footer'` — exact case match. Vercel's Linux filesystem is case-sensitive; macOS silently allows mismatches.
**UI hint**: yes

---

### Phase 3: Client Islands
**Goal**: All interactive features work correctly — Header scroll blur and mobile hamburger (including iOS scroll lock), Gallery grid with hover overlays and a fully accessible keyboard-navigable Lightbox, Contact form with client-side validation and WhatsApp redirect, and a WhatsApp FAB that hides when the Contact section is visible. The full page is functionally complete.
**Depends on**: Phase 2
**Requirements**: HEAD-01, HEAD-02, HEAD-03, HEAD-04, HEAD-05, GAL-01, GAL-02, GAL-03, GAL-04, GAL-05, CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, FAB-01, FAB-02, FAB-03, FAB-04, FAB-05
**Success Criteria** (what must be TRUE):
  1. On a real mobile device: opening the hamburger drawer prevents background scroll (iOS Safari tested); clicking a nav link closes the drawer and smooth-scrolls to the correct section
  2. Clicking a gallery image opens the Lightbox; pressing Tab cycles focus only within the Lightbox (never escapes to page behind); pressing Escape closes the Lightbox and returns focus to the thumbnail that was clicked
  3. Submitting the Contact form with all required fields filled opens WhatsApp on a real mobile device with a correctly encoded pre-filled message containing the form data; Portuguese accented characters display correctly
  4. The WhatsApp FAB is visible when above the Contact section, disappears when the Contact section enters the viewport, and reappears when scrolling back up — without any scroll event listener (IntersectionObserver only)
  5. Scrolling down from the top of the page causes the Header background to blur/darken after 20px; the Header remains fixed at the top at all viewport widths
**Plans**: 4 plans

Plans:
- [ ] 03-01: Header — scroll blur, hamburger drawer, iOS scroll lock
- [ ] 03-02: Gallery section — grid, GalleryImage hover, Lightbox with full focus trap
- [ ] 03-03: Contact section — ContactForm with validation and WhatsApp redirect
- [ ] 03-04: WhatsApp FAB — IntersectionObserver visibility, pulse animation

**Implementation notes:**

- **Build order within this phase is sequential:** Header can be built independently. Gallery must be complete before FAB is wired (FAB targets `#contact` DOM ID — Contact section must exist in the DOM before FAB's `useEffect` runs, which it will as long as both are rendered on the page). Recommended order: Header → Gallery → Contact → FAB.
- **Header scroll state:** `useEffect` with `window.addEventListener('scroll', handler, { passive: true })`. Cleanup with `removeEventListener`. Set `scrolled` state when `window.scrollY > 20`. Apply blur via CSS Module: `backdrop-filter: blur(12px); background-color: rgba(10, 10, 10, 0.85);` on a class toggled by `scrolled` state.
- **iOS scroll lock (hamburger):** Do NOT use `document.body.style.overflow = 'hidden'` — broken on iOS Safari. Use the fixed-position pattern: on open, store `scrollY`, set `body` to `position: fixed; top: -${scrollY}px; width: 100%`. On close, restore position and call `window.scrollTo(0, scrollY)`. Implement in `useEffect` triggered by `isOpen` state.
- **`aria-expanded` on hamburger button:** Must toggle between `true` (drawer open) and `false` (drawer closed). Drawer element needs `aria-hidden={!isOpen}`.
- **Gallery state:** `Gallery` is a Client Component owning `openIndex: number | null`. `GalleryImage` receives `onClick: (index: number) => void` prop. `Lightbox` receives `images`, `currentIndex`, `onClose`, `onPrev`, `onNext`. Do NOT lift state to `page.tsx` — page is a Server Component and cannot hold state.
- **Lightbox focus trap (complete checklist):**
  - Container: `role="dialog"`, `aria-modal="true"`, `aria-label="Galeria de imagens"`, `tabIndex={-1}`, `ref={modalRef}`
  - On open: `modalRef.current?.focus()`
  - On close: return focus to `document.querySelector(\`[data-gallery-index="\${closedIndex}"]\`)` (add `data-gallery-index` to each thumbnail button)
  - Keyboard: `keydown` listener for `Escape` (close), `ArrowLeft` (prev), `ArrowRight` (next)
  - Tab cycling: collect all focusable elements inside modal, intercept Tab/Shift+Tab to cycle within
  - `useEffect` cleanup: `removeEventListener` on unmount
- **Lightbox with `yet-another-react-lightbox`:** If using the library, verify React 19 compatibility (3.31.0 is confirmed compatible). The library handles focus trap and keyboard nav internally — verify WCAG compliance still holds after integration.
- **ContactForm fields:** `nome` (text, required), `email` (email, required), `telefone` (tel, optional), `interesse` (select, options: "Eventos Exclusivos", "Consultoria para Restaurante", "Cursos & Workshops", "Outro"), `mensagem` (textarea, required). All controlled via `useState`. Validation: check required fields before opening WhatsApp; show visual error state (red border + error message) on invalid fields.
- **ContactForm submit handler:** `e.preventDefault()`. Build message string: `\`Olá! Sou \${nome}.\nEmail: \${email}\nTelefone: \${telefone}\nInteresse: \${interesse}\n\nMensagem: \${mensagem}\``. Call `window.open(buildWhatsAppUrl(WHATSAPP_NUMBER, message), '_blank', 'noopener,noreferrer')`. Never make a fetch/API call.
- **Contact section `id` attribute:** `<section id="contact">` — this exact DOM ID is the IntersectionObserver target for WhatsAppFAB. Must exist before FAB mounts.
- **WhatsApp FAB IntersectionObserver:** Inside `useEffect`, `document.getElementById('contact')` then `new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting), { threshold: 0.1 })`. Cleanup: `return () => observer.disconnect()`. Do NOT use a scroll event listener.
- **FAB pulse animation:** CSS Module `@keyframes` — a subtle glow/scale pulse on the WhatsApp icon. Duration 2s, `animation-iteration-count: infinite`, `animation-timing-function: ease-in-out`. Must not cause layout shift (use `transform: scale()` not `width/height`).
- **FAB visibility:** Controlled by `isVisible` state only — Lightbox open/closed state is irrelevant to FAB. When `!isVisible`, use `display: none` or unmount (not just `opacity: 0` — screen readers would still announce a hidden FAB).
- **Client component `"use client"` placement:** Directive at the top of each file: `Header.tsx`, `Gallery.tsx`, `GalleryImage.tsx`, `Lightbox.tsx`, `ContactForm.tsx`, `WhatsAppFAB.tsx`. Never on `page.tsx`, `layout.tsx`, or any Server section file.
**UI hint**: yes

---

### Phase 4: QA & Launch
**Goal**: The production Vercel deployment passes 90+ Lighthouse on all four categories, TypeScript strict mode reports zero errors, all WCAG AA accessibility requirements are verified, and the live URL functions correctly on a real mobile device including WhatsApp redirects.
**Depends on**: Phase 3
**Requirements**: PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05, A11Y-06
**Success Criteria** (what must be TRUE):
  1. `npx tsc --noEmit` exits with code 0 and zero output — no TypeScript errors under strict mode
  2. `npx next build` completes locally without errors — CSS ordering, import casing, and bundle issues caught before Vercel sees the code
  3. Lighthouse run in Chrome DevTools (mobile emulation) shows Performance >= 90, Accessibility >= 90, Best Practices >= 90, SEO >= 90
  4. On a real Android or iOS device: clicking any WhatsApp CTA (Services cards, FAB, Contact form submit) opens WhatsApp with correctly encoded Portuguese text in the pre-filled message
  5. Keyboard-only navigation covers the full page — every interactive element is reachable via Tab, all focus indicators are visible, the Lightbox focus trap works, and the skip-to-content link skips to `<main>`
**Plans**: 3 plans

Plans:
- [ ] 04-01: TypeScript audit and local build verification
- [ ] 04-02: Lighthouse performance and accessibility audit with fixes
- [ ] 04-03: Real-device WhatsApp URL testing and Vercel production deployment

**Implementation notes:**

- **TypeScript audit checklist:** Run `npx tsc --noEmit`. Fix all errors before proceeding. Common sources: missing interface fields, `any` in event handlers (`e: React.FormEvent<HTMLFormElement>` not `e: any`), untyped `useState` initial values, missing return types on utility functions.
- **No-`any` sweep:** Search codebase for `: any` and `as any`. Every prop must have an explicit interface. If a third-party type is needed (e.g., Lightbox slide type from `yet-another-react-lightbox`), import and use it — do not cast to `any`.
- **Local build:** `npx next build` — watch for CSS ordering warnings, missing `sizes` prop warnings (`next/image`), and unresolved imports. Fix all before deploying.
- **Case-sensitive import check:** On Windows, macOS allows `import Footer from './footer'` when file is `Footer.tsx`. Vercel (Linux) will fail. Review all imports. File names use PascalCase for components, camelCase for lib files. Every import must match the file name exactly.
- **`next/image` final checklist:**
  - Hero: `priority` prop present, `sizes="100vw"`, parent has `position: relative` and explicit height
  - Portrait: `sizes="(max-width: 768px) 100vw, 50vw"`, no `fill` prop, has `width` and `height`
  - Gallery images: `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`
  - Zero `<img>` tags in page source (Lighthouse will flag them)
- **Lighthouse audit process:** Open Chrome, navigate to production URL (or localhost with `next build && next start`). DevTools -> Lighthouse -> Mobile -> Generate report. Run twice (first run may be cold). Target: all four categories >= 90. Common failures to fix: missing `alt` text, low contrast text, missing `aria-label` on icon-only buttons, render-blocking resources, missing `sizes` prop on images.
- **WCAG AA color contrast:** Test `#F5F0E8` on `#0A0A0A` (primary text on background — passes), `#C4A265` on `#0A0A0A` (gold CTA text — verify), `#A39E93` on `#141414` (secondary text — verify). Use browser DevTools accessibility panel or axe extension. Fix any failures before deployment.
- **44x44px tap targets:** Check all buttons, links, and interactive elements in Chrome DevTools -> Layers or mobile emulation. FAB, hamburger button, nav links, gallery thumbnails, close/prev/next in Lightbox. Use `min-height: 44px; min-width: 44px` in CSS Module if native size is smaller.
- **Real-device WhatsApp test (mandatory):** Open the production URL on an actual Android or iOS device (not Chrome DevTools emulation). Click each WhatsApp entry point:
  1. FAB -> general greeting message
  2. Each of the three ServiceCard CTAs -> service-specific messages
  3. Contact form submit (fill all fields, submit) -> form data message
  Verify: WhatsApp opens, pre-filled text is readable Portuguese (not garbled), accented characters render correctly.
- **SEO final check:** View page source and confirm: `<title>` present, `<meta name="description">` present, Open Graph tags present (`og:title`, `og:description`, `og:image`, `og:url`), JSON-LD `<script type="application/ld+json">` present with valid LocalBusiness schema. Robots meta tag allows indexing.
- **Vercel deployment:** Connect GitHub repo (or `vercel --prod` via CLI). Confirm Node.js 22 LTS is set in project settings. First deploy will show build logs — confirm green. Check that environment matches local build (no env vars needed for this project, but confirm). Verify the production URL loads with HTTPS.
- **Post-deploy smoke test:** On the live Vercel URL, verify: page loads without JS errors in console, all sections visible, fonts loading (not system fallbacks), all CTA links functional, Lighthouse on the live URL (not localhost).

---

## Progress

**Execution Order:**
Phases execute in strict numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/3 | In Progress|  |
| 2. Server Sections | 4/4 | Complete   | 2026-04-14 |
| 3. Client Islands | 0/4 | Not started | - |
| 4. QA & Launch | 0/3 | Not started | - |
| 5. Visual Redesign | 5/5 | Complete   | 2026-04-15 |
| 6. Website Improvements | 0/5 | Not started | - |

---

## Requirement Coverage

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| FOUND-06 | Phase 1 | Pending |
| FOUND-07 | Phase 1 | Pending |
| FOUND-08 | Phase 1 | Pending |
| FOUND-09 | Phase 1 | Pending |
| FOUND-10 | Phase 1 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| HERO-04 | Phase 2 | Pending |
| ABOUT-01 | Phase 2 | Pending |
| ABOUT-02 | Phase 2 | Pending |
| ABOUT-03 | Phase 2 | Pending |
| ABOUT-04 | Phase 2 | Pending |
| SERV-01 | Phase 2 | Pending |
| SERV-02 | Phase 2 | Pending |
| SERV-03 | Phase 2 | Pending |
| SERV-04 | Phase 2 | Pending |
| FOOT-01 | Phase 2 | Pending |
| FOOT-02 | Phase 2 | Pending |
| HEAD-01 | Phase 3 | Pending |
| HEAD-02 | Phase 3 | Pending |
| HEAD-03 | Phase 3 | Pending |
| HEAD-04 | Phase 3 | Pending |
| HEAD-05 | Phase 3 | Pending |
| GAL-01 | Phase 3 | Pending |
| GAL-02 | Phase 3 | Pending |
| GAL-03 | Phase 3 | Pending |
| GAL-04 | Phase 3 | Pending |
| GAL-05 | Phase 3 | Pending |
| CONT-01 | Phase 3 | Pending |
| CONT-02 | Phase 3 | Pending |
| CONT-03 | Phase 3 | Pending |
| CONT-04 | Phase 3 | Pending |
| CONT-05 | Phase 3 | Pending |
| CONT-06 | Phase 3 | Pending |
| FAB-01 | Phase 3 | Pending |
| FAB-02 | Phase 3 | Pending |
| FAB-03 | Phase 3 | Pending |
| FAB-04 | Phase 3 | Pending |
| FAB-05 | Phase 3 | Pending |
| PERF-01 | Phase 4 | Pending |
| PERF-02 | Phase 4 | Pending |
| PERF-03 | Phase 4 | Pending |
| PERF-04 | Phase 4 | Pending |
| PERF-05 | Phase 4 | Pending |
| PERF-06 | Phase 4 | Pending |
| A11Y-01 | Phase 4 | Pending |
| A11Y-02 | Phase 4 | Pending |
| A11Y-03 | Phase 4 | Pending |
| A11Y-04 | Phase 4 | Pending |
| A11Y-05 | Phase 4 | Pending |
| A11Y-06 | Phase 4 | Pending |
| VIS-PALETTE | Phase 5 | Pending |
| VIS-TYPO | Phase 5 | Pending |
| VIS-IMAGES | Phase 5 | Pending |
| VIS-HEADER | Phase 5 | Pending |
| VIS-NAV | Phase 5 | Pending |
| VIS-HERO | Phase 5 | Pending |
| VIS-ABOUT | Phase 5 | Pending |
| VIS-VOICE | Phase 5 | Pending |
| VIS-SERVICES | Phase 5 | Pending |
| VIS-UI-ATOMS | Phase 5 | Pending |
| VIS-ROUNDED | Phase 5 | Pending |
| VIS-FOOTER | Phase 5 | Pending |
| VIS-SCROLL-ANIM | Phase 5 | Pending |
| VIS-DIVIDERS | Phase 5 | Pending |
| VIS-BUILD | Phase 5 | Pending |
| IMP-DARKMODE | Phase 6 | Pending |
| IMP-HEADER-CTA | Phase 6 | Pending |
| IMP-MOBILE-NAV | Phase 6 | Pending |
| IMP-SERVICE-CARDS | Phase 6 | Pending |
| IMP-FONT-FIX | Phase 6 | Pending |
| IMP-GALLERY | Phase 6 | Pending |
| IMP-IMAGES | Phase 6 | Pending |

**Coverage:** 76/76 requirements mapped (54 v1 + 15 v2 visual redesign + 7 v3 improvements). No orphans.

### Phase 5: Full visual redesign — Japanese aesthetic, header/nav, real images, animations, first-person copy

**Goal:** Complete visual overhaul of the page: replace the dark theme with a warm off-white Japanese aesthetic (#F8F4EF), swap Noto Serif JP for Cormorant Garamond headings, add real photography from the images/ folder, create a sticky header with mobile hamburger drawer, add CSS scroll-driven entrance animations, rewrite all copy to first-person Brazilian Portuguese, and apply rounded corners + hover effects to all interactive elements. The build passes after all changes.
**Requirements**: VIS-PALETTE, VIS-TYPO, VIS-IMAGES, VIS-HEADER, VIS-NAV, VIS-HERO, VIS-ABOUT, VIS-VOICE, VIS-SERVICES, VIS-UI-ATOMS, VIS-ROUNDED, VIS-FOOTER, VIS-SCROLL-ANIM, VIS-DIVIDERS, VIS-BUILD
**Depends on:** Phase 2 (Server Sections must exist before redesigning them)
**Plans:** 5/5 plans executed

Plans:
- [x] 05-01-PLAN.md — Foundation: copy/rename images, rewrite globals.css light palette, update layout.tsx fonts
- [x] 05-02-PLAN.md — Header: sticky nav, mobile hamburger drawer, scroll-aware frosted glass
- [x] 05-03-PLAN.md — Hero + About: real images, entrance animation, flipped About layout, first-person copy
- [x] 05-04-PLAN.md — Services + UI atoms: rounded corners, hover effects, light palette, Cormorant Garamond
- [x] 05-05-PLAN.md — Footer + scroll animations + dividers + build gate

**Success Criteria** (what must be TRUE):
  1. Page background is #F8F4EF (warm off-white), not #0A0A0A (old dark)
  2. All headings render in Cormorant Garamond (not Noto Serif JP or system serif)
  3. Hero displays real photograph (hero-bg.jpeg) with animated title entrance
  4. About section has portrait on LEFT and bio on RIGHT, with first-person copy
  5. Sticky header is visible at all scroll positions with frosted glass on scroll
  6. All cards and buttons have rounded corners (12-16px) and hover scale + shadow
  7. Sections animate in on scroll via CSS animation-timeline: view()
  8. Gold decorative dividers separate sections
  9. All visible text is first-person Brazilian Portuguese
  10. `pnpm build` exits with code 0

---

### Phase 6: Website Improvements — gallery, service card images, dark mode, header CTA

**Goal:** Extend the Phase 5 light-aesthetic site with: full background images on service cards with gradient overlay, a gallery preview section on the homepage plus a dedicated /gallery page with lightbox, a dark/light mode toggle (system-aware + localStorage + manual override), a WhatsApp CTA button in the header, and additional real photography integrated contextually throughout existing sections. All visible text in Brazilian Portuguese.
**Requirements**: IMP-IMAGES, IMP-SERVICE-CARDS, IMP-GALLERY, IMP-DARKMODE, IMP-HEADER-CTA, IMP-FONT-FIX, IMP-MOBILE-NAV
**Depends on:** Phase 5
**Plans:** 5 plans

Plans:
- [x] 06-01-PLAN.md — Dark mode foundation: CSS tokens, ThemeToggle component, FOUC prevention
- [ ] 06-02-PLAN.md — Header restructure: grid layout, WhatsApp CTA, mobile drawer fix
- [ ] 06-03-PLAN.md — Service card background images + highlight font fix
- [ ] 06-04-PLAN.md — Gallery: constants update, preview section, /gallery page, lightbox
- [ ] 06-05-PLAN.md — Dark mode polish + build gate

**Success Criteria** (what must be TRUE):
  1. Each of the three service cards has a full background image with gradient overlay — text remains legible (WCAG AA contrast)
  2. Gallery preview section appears on homepage showing 6 images in a responsive grid
  3. Clicking a gallery image opens a lightbox (keyboard-navigable, focus-trapped)
  4. /gallery page exists and shows all 14 available images
  5. Dark/light mode toggle in header — system preference is default, user override persists in localStorage
  6. Header includes a WhatsApp CTA button ("Entrar em Contato")
  7. All new text is in Brazilian Portuguese
  8. `pnpm build` exits with code 0

---

*Roadmap created: 2026-04-13*
*Last updated: 2026-04-15 after Phase 6 planning*
