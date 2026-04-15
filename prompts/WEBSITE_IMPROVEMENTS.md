# Website Improvement Prompt

## Context

This is a **Next.js + Tailwind CSS + CSS Modules** project for a Japanese gastronomy chef's website.
Images are already available in the `/images` folder. WhatsApp contact link is already defined and must be used in all relevant CTAs.

Before making any changes, **read the full codebase structure** to understand the current component tree, styling approach, and routing. Do not rewrite what works — improve and extend only what is needed.

---

## Tasks

### 1. Integrate More Food & Work Images Throughout the Site

- Audit all sections and identify places where images are underused or absent.
- Use the images available in `/images` to enrich the visual experience: hero area, about/chef section, course and consultancy sections, and the gallery.
- Prioritize images that are contextually relevant to each section (e.g., plating shots near the consultancy section, hands-on technique shots near the course section).
- Images should be responsive and properly optimized using Next.js `<Image>` component with appropriate `alt` text.

---

### 2. Fix the Highlights Font

- The current highlight font is barely readable. **Replace it** with a clean, legible font — use the same body font family already in the project.
- Instead of relying on a decorative font to convey emphasis, **use a strong accent color** from the existing palette (e.g., a warm amber, gold, or red tone consistent with Japanese aesthetics) to make highlighted words or phrases stand out.
- This approach should feel intentional and refined — **color as emphasis, not font weight as decoration**.

---

### 3. Improve the Header

- The current header feels too sparse. Improve it with the following:
  - **Center the navigation links** or implement a more balanced layout (e.g., logo on the left, nav centered, CTA button on the right).
  - Add a **WhatsApp CTA button** in the header (e.g., "Book a Consultation" or "Get in Touch") — styled prominently but not aggressively.
  - Add the **dark/light mode toggle** icon in the header (see Task 4).
- Keep the header clean and professional — avoid adding noise, but make it feel more complete and trustworthy.

---

### 4. Add Dark / Light Mode

- Implement a **system-preference-aware** dark/light mode using `prefers-color-scheme` as the default.
- Allow the user to **manually override** via a toggle in the header (sun/moon icon or similar).
- Persist the user's preference using `localStorage`.
- Use **CSS custom properties (variables)** scoped to `[data-theme="dark"]` and `[data-theme="light"]` (or the equivalent Tailwind dark mode strategy already in use).
- Ensure **all sections, components, and text** adapt correctly — no hardcoded colors that break in either mode.
- The dark mode palette should feel intentional: dark backgrounds with warm accent tones, not just inverted colors.

---

### 5. Fix Mobile Header / Navigation Menu

- The current mobile menu **opens full-screen and blocks the entire page**, which is disruptive.
- Replace it with a **slide-in drawer** (from the right or top) or a **compact dropdown** that overlays only a portion of the screen.
- The background page content should remain partially visible (dimmed overlay is acceptable).
- The menu should close when: a link is clicked, the overlay is tapped, or the close button is pressed.
- Ensure smooth open/close transitions using CSS or Framer Motion (whichever is already in the project).

---

### 6. Add Missing Content Sections

#### 6a. Add Background Images to Existing Service Cards

The "O Que Ofereço" section already has three service cards (Eventos Exclusivos, Consultoria, Curso). **Do not rewrite or restructure these cards.** The only change needed is converting each card to use a **full background image with a dark gradient overlay**, so the content remains fully readable on top of the photo.

Implementation guidelines:
- Use `position: relative` on the card with a `<Image>` filling it via `object-fit: cover` as the background layer.
- Apply a gradient overlay on top of the image — **two layers**: a subtle dark vignette overall (`rgba(0,0,0,0.45)`) plus a stronger gradient from bottom (`rgba(0,0,0,0.72)` at 55% → `rgba(0,0,0,0.15)` at 100%). This ensures the text area at the bottom is always legible while the top of the image breathes.
- All text, lists, and CTA buttons must sit above the overlay layer (`position: relative; z-index: 1`).
- Text colors on top of the overlay: titles in `#fff`, body and list items in `rgba(255,255,255,0.82)`, the accent subtitle (currently amber/gold) should remain its accent color — bump luminosity slightly if needed for contrast.
- The CTA button at the bottom must retain sufficient contrast — keep it green with white text or adjust to a warm tone consistent with the palette.
- Use contextually relevant photos from `/images` for each card:
  - *Eventos Exclusivos* → an image conveying an elegant plated dining experience.
  - *Consultoria* → an image conveying a professional kitchen or precise technical preparation.
  - *Curso* → an image conveying a hands-on sushi-making or learning moment.
- Cards must look correct in both **light and dark mode** — the overlay handles this naturally since image + overlay is self-contained.
- Use Next.js `<Image>` with proper `alt` text. Ensure card has a defined `min-height` so the layout doesn't collapse.

#### 6b. Gallery Section + Page



- Add a **gallery preview section** on the homepage showing a curated grid of 6–9 images from `/images`.
- Include a **"View Full Gallery" button** that navigates to a dedicated `/gallery` page.
- The `/gallery` page should display all available images from `/images` in a responsive masonry or grid layout.
- Images should open in a **lightbox** on click (use a lightweight library or a custom implementation).
- The gallery page should inherit the site's dark/light mode and overall visual identity.

---

## Language Requirement

**All visible text on the website must be written in Brazilian Portuguese (pt-BR).** This includes headings, body copy, button labels, placeholder text, alt text, aria labels, error messages, and any new content added during this sprint. Do not write or leave any user-facing text in English.

---

## General Guidelines

- **Do not break existing functionality** — audit before editing.
- **Maintain visual consistency** — all new sections must match the existing design language (spacing, border-radius, font sizes, color palette).
- **Accessibility matters** — all images need `alt` text, interactive elements need focus states, color contrast must meet WCAG AA minimum.
- **Mobile-first** — every new section and component must be fully responsive.
- **Performance** — use Next.js `<Image>` for all images, avoid unnecessary re-renders, keep bundle size in check.
