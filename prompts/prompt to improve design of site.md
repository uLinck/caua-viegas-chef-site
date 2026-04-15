# REDESIGN PROMPT — PERSONAL CHEF CAUÃ VIEGAS WEBSITE

---

## Available images

The website images are located in the following folder:

```
[C:\Users\linck\Desktop\caua viegas sushi\images]
```

Read all image files from that folder before starting. Use them in the appropriate sections of the site (hero, about the chef, gallery, etc.), prioritizing the ones that best fit each section visually.

---

## General objective

Redesign the Personal Chef Cauã Viegas website following the guidelines below. The site must convey **professionalism, sophistication and a refined Japanese aesthetic** — minimalist, with generous negative space, strong typography and a lighter, more elegant color palette.

---

## Voice and tone — first person throughout

**All visible text on the site must be written in the first person**, as if Cauã himself is speaking directly to the visitor. This applies to every section — hero, about, services, testimonials, CTA, footer copy, everything.

- ❌ "Cauã oferece experiências gastronômicas únicas."
- ✅ "Ofereço experiências gastronômicas únicas."

- ❌ "Com mais de X anos de experiência, o chef Cauã..."
- ✅ "Com mais de X anos de experiência, levo para a sua mesa..."

Rewrite any existing third-person copy to follow this rule. The tone should feel personal, warm and confident — like the chef is welcoming you himself.

**All on-screen text must remain in Brazilian Portuguese.**

---

## 1. Color palette — less density, more elegance

The current burgundy tone is too heavy. Replace it with a Japanese-inspired palette:

- **Main background:** Warm off-white or very light beige (`#F8F4EF` or similar)
- **Primary accent:** Muted Japanese red / elegant terracotta (`#A03030` or `#8B2E2E`) — used sparingly
- **Secondary color:** Charcoal gray (`#2C2C2C`) for text and structural elements
- **Subtle accents:** Matte gold or sand (`#C9A96E`) for decorative details
- **Alternating section backgrounds:** Medium beige (`#EDE8E0`) to create rhythm without visual weight

> The goal is an **airy, clean and premium** look — like a high-end Japanese restaurant menu.

---

## 2. UX/UI — fluidity, rounded corners and animations

Apply the following visual experience improvements:

- **Rounded corners** on all cards, buttons, images and containers (generous `border-radius`: 12px–24px depending on the element)
- **Smooth entrance animations** (fade-in + slight upward translate) on scroll — use `IntersectionObserver` or CSS `@keyframes`
- **Elaborate hover states** on buttons and cards: subtle scale (`scale(1.03)`), soft shadow and smooth color transition
- **Decorative dividers** between sections inspired by Japanese elements: thin lines, subtle decorative kanji or minimalist geometric patterns
- **Smooth scrolling** across the entire page (`scroll-behavior: smooth`)
- **300–400ms transitions** with `ease-in-out` as the global default

---

## 3. "Sobre o Chef" section — photo on the left

Change the layout of the "Sobre o Chef" section:

- The **chef's photo must be on the left**
- The biographical text stays on the right
- On mobile, the photo stacks above the text naturally
- The photo should have rounded corners (`border-radius: 16px`) and a subtle shadow

---

## 4. Hero section (first impression) — more visual impact

The main section is too simple and flat. Redesign it with:

- **High-impact title** taking visual center stage, for example:
  ```
  PERSONAL CHEF
  CAUÃ VIEGAS
  ```
  Large, bold or extra-bold typography, uppercase, with elegant `letter-spacing`
- **Subtitle** with a value proposition written in first person, for example: *"Levo experiências gastronômicas únicas para a intimidade da sua casa."*
- **Background or side image** in high quality (use images from the provided folder)
- **Subtle Japanese decorative element** in the hero: a thin vertical line with a decorative kanji character, a geometric pattern in the corner, or a Japanese paper texture in the background
- **Visible and elegant CTA**: refined button style, not aggressive
- **Title entrance animation**: words enter in sequence with fade + smooth slide

---

## 5. Overall Japanese aesthetic — style guidelines

Incorporate elements throughout the site that reference sophisticated Japan (not pop/anime Japan):

- **Typography:** Use personality-driven fonts — an elegant serif for headings (e.g. `Playfair Display`, `Cormorant Garamond`) combined with a clean sans-serif for body text (e.g. `Inter`, `DM Sans`)
- **Negative space:** Increase `padding` and `margin` between sections — breathing room is central to Japanese design
- **Decorative micro-details:** Thin horizontal lines (`1px solid`) in sand/gold tones to separate elements; small rotated squares or dashes as list markers
- **Photography:** Images should have a warm, slightly desaturated visual treatment conveying sophistication
- **Overall tone:** The site should feel like a **premium culinary atelier**, not a common catering service

---

## Delivery checklist

Before finishing, verify:

- [ ] Updated color palette (no heavy burgundy)
- [ ] Hero with high-impact title and animations
- [ ] All visible text in Brazilian Portuguese
- [ ] All copy written in first person (Cauã speaking directly to the visitor)
- [ ] Chef photo on the left in the "Sobre" section
- [ ] Rounded corners applied globally
- [ ] Scroll animations implemented
- [ ] Japanese identity present without being a caricature
- [ ] Mobile responsiveness maintained
- [ ] Images from the provided folder properly used
