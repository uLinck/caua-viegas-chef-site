# Website Development Prompt — Cauã Viegas | Personal Chef

## Project Overview

You are building a **professional, conversion-focused single-page website** for **Cauã Viegas**, a Personal Chef specialized in high-end Japanese gastronomy. This is a recreation of an existing generic website builder site, now being rebuilt with a proper modern stack.

The website must communicate **premium positioning, technical mastery, and exclusivity** while remaining intuitive and guiding visitors toward contact/conversion.

> **Important:** This is the initial version — clean, minimal animations, impeccable code quality. The architecture must be prepared for future enhancements (animations, new features, backend integration). Prioritize maintainability and scalability over visual complexity.

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS (utility-level: spacing, layout, responsive) + CSS Modules (component-specific: animations, pseudo-elements, complex styles). **Every component must have its own `.module.css` file** — never pile styles inline in JSX. Tailwind and CSS Modules complement each other; they don't compete.
- **SSR:** Server-side rendering by default (leverage Next.js App Router conventions)
- **Deploy target:** Vercel
- **Package manager:** pnpm (preferred) or npm
- **Linting/Formatting:** ESLint + Prettier (pre-configured)

---

## Architecture & Project Structure

Use a scalable, well-organized structure. All component names, variables, functions, and comments must be in **English**. All user-facing text (UI content) must be in **Brazilian Portuguese**.

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, global providers)
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Global styles, Tailwind directives, CSS variables
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   ├── WhatsAppFAB.tsx
│   │   └── WhatsAppFAB.module.css
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.module.css
│   │   ├── AboutSection.tsx
│   │   ├── AboutSection.module.css
│   │   ├── ServicesSection.tsx
│   │   ├── ServicesSection.module.css
│   │   ├── GallerySection.tsx
│   │   ├── GallerySection.module.css
│   │   ├── ContactSection.tsx
│   │   └── ContactSection.module.css
│   ├── ui/
│   │   ├── SectionTitle.tsx
│   │   ├── SectionTitle.module.css
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceCard.module.css
│   │   ├── StatCard.tsx
│   │   ├── StatCard.module.css
│   │   ├── GalleryImage.tsx
│   │   ├── GalleryImage.module.css
│   │   ├── Lightbox.tsx
│   │   ├── Lightbox.module.css
│   │   ├── ContactForm.tsx
│   │   ├── ContactForm.module.css
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   └── icons/
│       └── SocialIcons.tsx     # SVG icon components (Instagram, WhatsApp, Email)
├── lib/
│   ├── constants.ts        # WhatsApp number, email, social links, external URLs
│   └── utils.ts            # Helper functions (e.g., WhatsApp URL builder)
├── types/
│   └── index.ts            # Shared TypeScript interfaces/types
└── public/
    └── images/             # ← IMAGE DIRECTORY (see section below)
```

### Key Architectural Decisions

1. **Each section is an independent component** — easy to reorder, remove, or modify without side effects.
2. **UI components are atomic and reusable** — `Button`, `SectionTitle`, `ServiceCard` etc. accept props and can be styled via variants.
3. **Constants are centralized in `lib/constants.ts`** — contact info, WhatsApp messages, social links. One place to update, reflects everywhere.
4. **CSS variables for theming** — colors and fonts defined as CSS custom properties in `globals.css`, consumed by Tailwind via `theme.extend`. This makes future palette changes trivial.
5. **TypeScript strict mode** — all props typed, no `any`.
6. **CSS is always separated from markup** — every component has its own co-located `.module.css` file. Tailwind handles utility-level styling (spacing, flex, grid, responsive breakpoints), while CSS Modules handle component-specific styles (animations, complex selectors, pseudo-elements, custom layouts). This keeps `.tsx` files clean and focused on structure/logic, and `.module.css` files focused on presentation. Never inline complex styles in JSX.

---

## Image Directory

All images will be placed in:

```
📁 IMAGE PATH: _______________________________________________
```

> **Instructions for now:** Use clean, professional placeholder containers with the correct aspect ratios using the surface color (`#141414`) with a subtle border (`#2A2A2A`). Each placeholder should display the image description text centered inside it in the secondary text color. Prepare the `<Image />` (next/image) components with proper `alt` attributes, `width`, `height`, and `sizes` props so that swapping placeholders for real images later requires only changing the `src` path.

### Image Inventory

| ID | Usage | Alt Text (pt-BR) | Aspect Ratio |
|---|---|---|---|
| hero-bg | Hero section background | Sushi preparado artesanalmente | 16:9 |
| chef-portrait | About section | Cauã Viegas - Personal Chef | 3:4 |
| gallery-01 | Gallery | Chef preparando sushi | 4:3 |
| gallery-02 | Gallery | Nigiri tradicional | 4:3 |
| gallery-03 | Gallery | Certificação de chef | 4:3 |
| gallery-04 | Gallery | Maturação de peixes | 4:3 |
| gallery-05 | Gallery | Curso de sushi | 4:3 |

---

## Color Palette & Visual Style

### Visual Direction: Clean Dark + Japanese Aesthetic

The visual identity must feel like a **modern Japanese interior** — dark, intentional, with every element placed with purpose. Think: the atmosphere of a high-end omakase counter — dark wood, warm minimal lighting, deliberate negative space.

**Key principles:**
- Dark backgrounds with warm undertones (not pure black — avoid `#000`)
- Accent colors inspired by traditional Japanese palette: muted golds (kinsui/金水), warm whites (shironeri/白練), and subtle reds (akane/茜) used **very sparingly**
- Generous whitespace (or rather, "dark space") — let elements breathe
- Subtle texture is welcome (very faint grain or noise on backgrounds) but not mandatory in the initial version
- Cards and surfaces should be slightly lighter than the background, creating depth through value contrast rather than borders
- Gold/warm tones reserved for CTAs and key highlights — never overused

```
Color Palette:

Background:         #0A0A0A  (near-black with warm undertone — main page bg)
Surface:            #141414  (cards, elevated sections — subtle lift from bg)
Surface Hover:      #1C1C1C  (interactive card states)
Border/Divider:     #2A2A2A  (subtle separators, card borders)

Text Primary:       #F5F0E8  (warm off-white — shironeri inspired — main text)
Text Secondary:     #A39E93  (muted warm gray — subtitles, descriptions)

Primary/Gold:       #C4A265  (muted gold — kinsui — CTAs, highlights, kanji accent)
Primary Hover:      #D4B67A  (lighter gold for hover states)

Accent/Red:         #8B3A3A  (deep akane red — used VERY sparingly: one or two key moments, e.g., a single line accent or the 道 kanji)

Success/WhatsApp:   #25D366  (WhatsApp brand green — only for WhatsApp FAB)
```

> **Implementation:** Define all colors as CSS custom properties in `globals.css`. Extend Tailwind theme to consume them. The entire palette must be swappable by editing one block of variables.

### Typography

Choose a font pairing that communicates **elegance, precision, and Japanese-inspired minimalism** — clean lines, deliberate spacing, quiet confidence.

Recommended direction:
- **Headings:** A refined, geometric sans-serif with good letter-spacing (e.g., Cormorant Garamond, Libre Caslon Display, or a clean geometric like Outfit). Should feel sharp and intentional — not decorative.
- **Body:** A highly legible, neutral sans-serif with excellent readability on dark backgrounds (e.g., Inter, DM Sans, Satoshi). Warm and clean.
- **Kanji 道:** Should be rendered in a serif or brush-inspired style that contrasts with the geometric headings — consider using Noto Serif JP or a similar font specifically for this character.

Load fonts via `next/font/google` for optimal performance. Define font variables in the root layout and reference them in Tailwind config. Use generous letter-spacing on headings (tracking-wide or wider) to reinforce the Japanese aesthetic of intentional spacing.

---

## Contact Information

```
WhatsApp Number (international format): +55 51 99759-0041
WhatsApp Link: https://wa.me/5551997590041
Email: viegascaua@outlook.com (use mailto:viegascaua@outlook.com for links)
Instagram Handle: @viegasc_
Instagram URL: https://www.instagram.com/viegasc_/
Location (display text): Porto Alegre, RS — Atendo em todo estado
```

> **Implementation:** All contact info must be centralized in `lib/constants.ts`. Never hardcode contact details directly in components.

---

## Content & Copywriting Guidelines

### Brand Voice

- **Tone:** Professional, premium, confident — but approachable and intuitive. Never cold or pretentious.
- **Language level:** Refined Brazilian Portuguese. Avoid overly technical jargon that a client wouldn't understand. Avoid clichés.
- **Positioning:** Cauã is not just "another sushi chef" — he is a technical specialist who treats Japanese gastronomy as a discipline, not a trend.

### Copywriting & Conversion Strategy

You must **rewrite and restructure** all the content below applying UX writing, copywriting, and conversion optimization principles:

- **Headlines must hook** — clear value proposition in the first 3 seconds.
- **Microcopy matters** — button labels, form placeholders, and section subtitles should guide the user naturally.
- **Each section has ONE job** — Hero = capture attention + position brand. About = build trust + authority. Services = show value + drive action. Gallery = visual proof. Contact = eliminate friction.
- **CTAs must be action-oriented** — avoid generic "Saiba mais". Use verbs that imply transformation or exclusivity.
- **Social proof** — use the stats (7+ years, 12+ events, 50k+ reach) strategically, not just as decoration.
- **Reduce cognitive load** — break text into scannable chunks. Short paragraphs. Breathing room.

### Raw Content to Rewrite

Use the following information as **source material**. Rewrite with the guidelines above:

#### Brand Identity

- **Name:** Cauã Viegas
- **Title:** Personal Chef
- **Symbol:** 道 (Dō — "the way/path") — Japanese kanji used as visual identity element alongside the name
- **Tagline:** "Eventos Exclusivos • Consultorias • Cursos"
- **Positioning statement:** "Excelência baseada em fundamento"

#### About Section — Source Bio

> Sou Cauã Viegas, chef especializado em gastronomia japonesa e em experiências exclusivas de alto padrão. Minha atuação é fundamentada na técnica — domínio de cortes, controle preciso do arroz, equilíbrio de sabores, estética na montagem e seleção criteriosa de insumos. A tradição japonesa não é apenas referência estética, mas base estrutural do meu trabalho.
>
> Em um cenário onde muitas vezes a estética e a variedade de ingredientes ganham mais destaque do que o processo, acredito que a verdadeira excelência está na base: entendimento profundo da matéria-prima, manipulação correta, respeito ao tempo e execução consistente. Estrutura vem antes de vitrine.
>
> Atendo clientes que buscam mais do que um jantar: buscam autenticidade, refinamento e execução impecável. Além das experiências privadas, desenvolvo consultorias e treinamentos técnicos, estruturando processos, padronização e identidade gastronômica.
>
> Meu compromisso é claro: excelência baseada em fundamento.

**Stats to display:**
- 7+ Anos de Dedicação
- 12+ Eventos Exclusivos
- 50k+ Alcance Mensal

#### Services — Source Content

**Service 1: Eventos Exclusivos**
- Subtitle: Experiências Gastronômicas
- Description: Levo ao seu evento uma experiência gastronômica estruturada, técnica e executada ao vivo, com foco em precisão, estética e fluidez de serviço. Cada evento é planejado de forma personalizada, respeitando o perfil dos convidados e o contexto da ocasião — seja um jantar intimista, celebração especial ou evento corporativo.
- Highlight: "Mais do que servir sushi, entrego organização, padrão e consistência do início ao fim."
- Includes: Desenvolvimento de menu exclusivo, Seleção criteriosa de insumos, Preparação técnica e apresentação ao vivo, Estrutura completa de serviço (quando necessário)
- CTA: Solicitar Orçamento

**Service 2: Consultoria em Gastronomia Japonesa**
- Subtitle: Elevando seu Negócio
- Description: Ofereço consultoria para restaurantes que desejam estruturar ou aprimorar sua operação de sushi com base técnica sólida e execução padronizada. Atuo desde ajustes específicos até reestruturações completas, sempre com foco em processo, qualidade e identidade gastronômica.
- Highlight: "Fortalecendo a base antes da vitrine. Excelência baseada em fundamento."
- Includes: Desenvolvimento ou revisão de cardápio, Padronização técnica, Treinamento de equipe, Otimização de processos, Controle de qualidade
- CTA: Solicitar diagnóstico

**Service 3: Curso Introdutório de Sushi**
- Subtitle: Aprenda a Arte
- Description: Curso presencial em pequenos grupos, desenvolvido para iniciantes que desejam aprender a base da culinária japonesa de forma prática, clara e estruturada. Durante a experiência, você aprende os fundamentos essenciais do sushi — do preparo correto do arroz à montagem das peças — com orientação próxima e acompanhamento individual.
- Highlight: "Uma introdução sólida, com atenção aos detalhes e aprendizado aplicado."
- Includes: Fundamentos do preparo do sushi, Técnicas básicas de montagem, Orientações sobre escolha e manipulação de ingredientes, Material teórico de apoio, Certificado de participação
- CTA: Solicitar informações

#### Gallery

- Section title: "Meu Trabalho"
- 5 images with hover overlay effect + lightbox on click

#### Contact Section

- Section title: "Vamos Conversar"
- Subtitle: "Interessado em um evento exclusivo, consultoria ou curso? Entre em contato e vamos criar algo especial juntos."
- Form fields: Nome (required), Email (required), Telefone (optional, placeholder: (00) 00000-0000), Interesse (dropdown: Eventos Exclusivos / Consultoria para Restaurante / Cursos & Workshops / Outro), Mensagem (required, placeholder: "Conte-me sobre seu projeto ou evento...")
- **Form behavior:** On submit, redirect to WhatsApp with a pre-filled message containing the form data (name, interest, and message). Use the WhatsApp API URL format: `https://wa.me/{number}?text={encoded_message}`

---

## Section-by-Section Behavior Specs

### 1. Header (Fixed Navigation)

- Fixed at the top on scroll
- Logo: "CAUÃ VIEGAS" with the kanji 道 styled as a visual element (treat as styled text, not image)
- Navigation links: Início, Sobre, Serviços, Galeria, Contato
- Smooth scroll to sections on click
- Mobile: hamburger menu with slide-in drawer
- Header should have a subtle background blur/opacity change on scroll

### 2. Hero Section

- Full viewport height (100vh)
- Placeholder for a background image (sushi/food)
- Overlay gradient for text readability
- Chef name + title + tagline prominently displayed
- Primary CTA button leading to Contact section
- The kanji 道 can be used as a large, subtle decorative element

### 3. About Section

- Two-column layout on desktop: text left, chef portrait right
- Stacks vertically on mobile (text first, image second)
- Stats displayed in a row below the bio (3 stat cards)
- The bio text should be the rewritten version — scannable, punchy, authoritative

### 4. Services Section

- 3 service cards in a row (desktop) / stacked (mobile)
- Each card: icon or subtle visual element, title, description, included items, CTA button
- Each CTA button links to WhatsApp with a **different pre-filled message** per service:
  - Eventos: "Olá! Tenho interesse em um evento exclusivo. Gostaria de mais informações."
  - Consultoria: "Olá! Tenho interesse na consultoria para meu restaurante. Gostaria de agendar um diagnóstico."
  - Curso: "Olá! Tenho interesse no curso introdutório de sushi. Gostaria de mais informações."

### 5. Gallery Section

- Responsive grid: 3 columns desktop, 2 columns tablet, 1 column mobile
- Each image has a hover overlay with "Ver Imagem" text
- Clicking opens a **Lightbox** (fullscreen modal with the image, close button, and optional next/prev navigation)
- The WhatsApp FAB must remain visible when the lightbox is open

### 6. Contact Section

- Two-column layout: contact info + form (desktop) / stacked (mobile)
- Contact info: WhatsApp, Email, Instagram, Location — each with an icon and clickable link
- Form submits via WhatsApp redirect (no backend)
- Form validation: required fields validated before redirect
- When this section is in viewport, the WhatsApp floating button must **hide**

### 7. WhatsApp Floating Action Button (FAB)

- Fixed position, bottom-right corner
- WhatsApp icon with subtle pulse/glow animation (keep it minimal)
- Links to WhatsApp with generic greeting message
- **Visibility rules:**
  - ✅ Visible on all sections except Contact
  - ✅ Visible when Lightbox (gallery) is open
  - ❌ Hidden when Contact section is in viewport (use Intersection Observer)

### 8. Footer

- Simple, clean
- "CAUÃ VIEGAS — Personal Chef"
- Social links: Instagram, WhatsApp, Email
- Copyright: © 2026 Cauã Viegas. Todos os direitos reservados.

---

## Technical Requirements

### Performance
- Use `next/image` for all images with proper `sizes` and `priority` attributes
- Lazy load below-the-fold images
- Minimize client-side JavaScript — use Server Components by default, only add `"use client"` where interactivity is needed (header, gallery, contact form, FAB)
- Target 90+ Lighthouse score on all categories

### SEO
- Proper semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`)
- Complete `<head>` metadata in layout.tsx (title, description, Open Graph, Twitter Card)
- Structured data (JSON-LD) for LocalBusiness schema
- All images with descriptive `alt` attributes

### Accessibility
- Keyboard navigable (focus states on all interactive elements)
- ARIA labels where needed (hamburger menu, lightbox, FAB)
- Sufficient color contrast ratios (WCAG AA minimum)
- Skip-to-content link

### Responsiveness
- **Mobile-first approach** — design for mobile, then enhance for tablet/desktop
- Breakpoints: mobile (default) → tablet (768px) → desktop (1024px) → wide (1280px)
- Touch-friendly tap targets (minimum 44x44px)
- No horizontal scrolling at any viewport

### Code Quality
- TypeScript strict mode, no `any` types
- Components properly typed with interfaces
- Consistent naming conventions (PascalCase components, camelCase functions/variables)
- Clean, readable code with meaningful comments where logic isn't obvious
- Proper error boundaries

---

## What NOT to Do

- ❌ Do not over-animate. Keep it clean and minimal for now. Smooth scroll and subtle hovers are enough.
- ❌ Do not use any UI library (no Material UI, Chakra, shadcn). Pure Tailwind + custom components.
- ❌ Do not hardcode contact information in components. Use constants.
- ❌ Do not use placeholder text like "Lorem ipsum". All text must be real, rewritten content.
- ❌ Do not skip mobile responsiveness on any component.
- ❌ Do not create overly complex state management. React state + context is enough for now.
- ❌ Do not use `<img>` tags. Always use `next/image`.
- ❌ Do not ignore TypeScript types. Everything must be typed.

---

## Deliverable

A complete, working Next.js project with:

1. All files and folders as described in the architecture
2. Every section fully built with rewritten content
3. Responsive at all breakpoints
4. Functional WhatsApp redirects (CTAs + form + FAB)
5. Working lightbox gallery
6. Clean, production-ready code
7. Ready to deploy on Vercel with `npx next build`

---

*This prompt was crafted for AI-assisted development. Fill in the marked fields (palette, contact info, image path) before using.*
