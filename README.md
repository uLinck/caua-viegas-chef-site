# Cauã Viegas | Personal Chef Website

A premium, conversion-focused single-page website for **Cauã Viegas**, a Personal Chef specialized in high-end Japanese gastronomy.

The project is built to communicate exclusivity, technical mastery, and trust — and to convert visitors quickly through WhatsApp contact.

## Overview

This website follows a dark Japanese-inspired visual direction, with performance and clarity as top priorities.

### Main goals
- Present Cauã’s premium positioning clearly
- Showcase services and portfolio with strong visual quality
- Reduce friction to conversion (WhatsApp CTA flows)
- Keep Lighthouse scores high with minimal client-side JavaScript

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **UI Styling:** Tailwind CSS v4 + CSS Modules
- **UI Runtime:** React 19
- **Gallery Lightbox:** yet-another-react-lightbox
- **Utility:** clsx
- **Linting/Formatting:** ESLint + Prettier
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Project Structure

```bash
app/                 # App Router pages and layout
components/          # Reusable UI, sections, and layout components
lib/                 # Constants and shared helpers
types/               # TypeScript type definitions
public/images/       # Optimized static assets
```

## Architecture Notes

- **Server Components by default** for better performance
- `"use client"` only where interactivity is required (e.g., header/drawer, gallery lightbox)
- **No external UI libraries** (custom UI only)
- **No hardcoded contact info in components** — sourced via `lib/constants.ts`
- All images are handled with **`next/image`**

## Getting Started

### Prerequisites
- Node.js 22 LTS (recommended)
- pnpm 10+

### Install

```bash
pnpm install
```

### Run in development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Performance & Quality Targets

- Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)
- WCAG-oriented contrast and legibility checks
- Minimal hydration and client bundle size

## Deployment

The project is intended for deployment on **Vercel**.

Recommended:
- Set Node runtime to **22.x**
- Validate production build with `pnpm build` before deploy

## Brand & Content Context

The website messaging emphasizes:
- Private dining and exclusive events
- Japanese gastronomy technique and precision
- Consulting services (including fish handling/maturation)
- Fast conversion through WhatsApp CTAs

---

If you want, I can also add:
- a **Portuguese version** of this README (`README.pt-BR.md`)
- a **Contributing** section with commit conventions
- a **Roadmap summary** for upcoming improvements
