# UI Specifications — Cauã Viegas | Personal Chef
> Version 1.1 — Bio & About CTA Update

---

## 1. Design Language

### 1.1 Concept

**"Omakase Counter"** — a high-end Japanese tasting experience translated into visual design. Every element is placed with purpose. Nothing is decorative for decoration's sake. The atmosphere mirrors the physical space of a top-tier omakase restaurant: low lighting, deliberate negative space, materials that are quiet but not cheap.

The site must feel like entering a world — not consuming a webpage.

### 1.2 Core Visual Principles

| Principle | Application |
|---|---|
| **Quiet authority** | Typography with wide tracking, not aggressive sizing |
| **Depth through value** | Cards elevate from bg via lightness, not borders |
| **Intentional restraint** | Gold accent used in ≤ 2 focal points per section |
| **Dark space over whitespace** | Negative space is treated as a design element |
| **Material texture** | Surfaces feel like matte lacquer — not flat UI |

---

## 2. Color System

### 2.1 CSS Custom Properties

Define in `globals.css` under `:root`:

```css
:root {
  /* Backgrounds */
  --color-bg:              #0A0A0A;
  --color-surface:         #141414;
  --color-surface-hover:   #1C1C1C;
  --color-border:          #2A2A2A;

  /* Text */
  --color-text-primary:    #F5F0E8;
  --color-text-secondary:  #A39E93;

  /* Brand */
  --color-gold:            #C4A265;
  --color-gold-hover:      #D4B67A;
  --color-accent-red:      #8B3A3A;

  /* Utility */
  --color-whatsapp:        #25D366;

  /* Transparency layers */
  --overlay-hero:          rgba(10, 10, 10, 0.65);
  --overlay-gallery:       rgba(10, 10, 10, 0.75);
}
```

### 2.2 Usage Rules

| Token | Where to use | Where NOT to use |
|---|---|---|
| `--color-bg` | Page background | Never on cards/surfaces |
| `--color-surface` | All cards, section alternates | Inline text backgrounds |
| `--color-gold` | CTAs, highlights, kanji accent, stat numbers | Body copy, icon fills (except key moments) |
| `--color-accent-red` | 道 kanji (optional), single accent line in hero | Anything else. Maximum 1–2 uses per page |
| `--color-text-secondary` | Subtitles, descriptions, labels, placeholders | Headlines |
| `--color-whatsapp` | FAB only | Any other element |

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Google Font Import | Fallback |
|---|---|---|---|
| **Display / Headings** | Cormorant Garamond | `Cormorant+Garamond:wght@300;400;500;600` | Georgia, serif |
| **Body / UI** | DM Sans | `DM+Sans:wght@300;400;500` | system-ui, sans-serif |
| **Kanji accent (道)** | Noto Serif JP | `Noto+Serif+JP:wght@300;400` | serif |

Load via `next/font/google` in `layout.tsx`. Assign as CSS variables:

```css
:root {
  --font-display:  var(--font-cormorant), Georgia, serif;
  --font-body:     var(--font-dm-sans), system-ui, sans-serif;
  --font-kanji:    var(--font-noto-serif-jp), serif;
}
```

### 3.2 Type Scale

All values in `rem`. Base: 16px.

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `text-display` | 4.5rem (72px) | 300 | 1.05 | `0.08em` | Hero name |
| `text-h1` | 3rem (48px) | 400 | 1.1 | `0.06em` | Section hero titles |
| `text-h2` | 2rem (32px) | 400 | 1.2 | `0.04em` | Section titles |
| `text-h3` | 1.375rem (22px) | 500 | 1.3 | `0.02em` | Card titles, labels |
| `text-body-lg` | 1.125rem (18px) | 300 | 1.75 | `0.01em` | About bio, key paragraphs |
| `text-body` | 1rem (16px) | 400 | 1.7 | `0` | General body text |
| `text-small` | 0.875rem (14px) | 400 | 1.6 | `0.02em` | Labels, captions, metadata |
| `text-micro` | 0.75rem (12px) | 500 | 1.5 | `0.08em` | ALL CAPS labels, form hints |

**Rule:** All display and h1/h2 headings use `--font-display`. All body, UI, and form text uses `--font-body`. The 道 kanji always uses `--font-kanji`.

### 3.3 Special Treatment — 道 Kanji

- Color: `--color-accent-red` (Hero, Logo) or `--color-gold` (subtle bg usage)
- Always rendered in `--font-kanji`
- In logo: ~1.2× the size of "CAUÃ VIEGAS"
- In hero (decorative): 20–30rem, `opacity: 0.04–0.06`, `--color-gold`, positioned as overlay

---

## 4. Spacing System

Use Tailwind's default scale. Key vertical rhythm values:

| Usage | Value |
|---|---|
| Section padding (top/bottom) | `py-24` (96px) → `py-32` (128px) on desktop |
| Section padding (mobile) | `py-16` (64px) |
| Content max-width | `max-w-7xl` (1280px), centered |
| Horizontal page padding | `px-6` (mobile) → `px-12` (desktop) |
| Card internal padding | `p-8` (32px) |
| Element gap (grid) | `gap-6` → `gap-8` |
| Stack spacing between text blocks | `space-y-4` → `space-y-6` |

---

## 5. Component Specifications

### 5.1 Button

**Variants:**

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| `primary` | `--color-gold` | `--color-bg` | none | `--color-gold-hover`, slight scale up |
| `outline` | transparent | `--color-gold` | 1px `--color-gold` | bg fills to `--color-gold`, text to `--color-bg` |
| `ghost` | transparent | `--color-text-primary` | none | text to `--color-gold` |

**Sizing:**

| Size | Padding | Font size | Letter spacing |
|---|---|---|---|
| `md` (default) | `px-7 py-3` | 0.875rem | `0.06em` |
| `lg` | `px-10 py-4` | 1rem | `0.06em` |

**Common properties:**
- Font: `--font-body`, weight 500
- Text transform: uppercase
- Transition: `all 200ms ease`
- Border radius: `2px` (subtle, not rounded — reflects Japanese precision)
- Cursor: pointer
- Min tap target: 44px height enforced via `min-h-[44px]`

---

### 5.2 SectionTitle

Structure:
```
[optional eyebrow label — ALL CAPS, text-micro, color-gold, letter-spacing wide]
[main title — font-display, text-h2]
[optional subtitle — font-body, text-body-lg, color-text-secondary]
[decorative line — 40px wide, 1px height, color-gold, mt-4]
```

Alignment variants: `left` (default) | `center`

---

### 5.3 ServiceCard

Dimensions: flexible height, min-height ~420px on desktop.

Structure:
```
[card container — bg: surface, border: 1px color-border, p-8]
  [icon area — 40×40px, color-gold, mb-6]
  [subtitle — text-micro, ALL CAPS, color-gold, letter-spacing: 0.1em, mb-2]
  [title — font-display, text-h3, color-text-primary, mb-4]
  [description — font-body, text-body, color-text-secondary, mb-6]
  [divider — 1px, color-border, mb-6]
  [includes list — each item: text-small, color-text-secondary, with "—" prefix, space-y-1]
  [CTA button — outline variant, full width, mt-auto]
```

Hover state:
- Background: `--color-surface-hover`
- Border color: `--color-border` → `#3A3A3A` (slightly more visible)
- Transition: `200ms ease`

---

### 5.4 StatCard

Used in About section. 3 cards in a row.

Structure:
```
[container — text-center, py-8, border-right: 1px color-border (except last)]
  [number — font-display, 3rem, color-gold, font-weight 300]
  [label — text-small, ALL CAPS, color-text-secondary, letter-spacing 0.08em, mt-2]
```

Mobile: stack vertically, border-right → border-bottom.

---

### 5.5 GalleryImage

Container: aspect-ratio 4/3, overflow hidden, relative positioning.

States:
- **Default:** image fills container
- **Hover:** overlay fades in (bg: `--overlay-gallery`), "Ver Imagem" text appears centered (text-small, ALL CAPS, color-text-primary, letter-spacing 0.1em), subtle scale on image (scale: 1.03)
- Transition: `300ms ease`

Placeholder (until real images): bg `--color-surface`, centered description text in `--color-text-secondary`, dashed border `--color-border`.

---

### 5.6 Lightbox

Full-screen modal overlay (`position: fixed`, z-index: 9999).

Structure:
```
[backdrop — rgba(0,0,0,0.92), click to close]
[image container — max-w-5xl, centered, relative]
  [image — next/image, object-fit: contain, max-h: 90vh]
  [close button — top-right corner, 44×44px, "×" or X icon, color-text-secondary → color-text-primary on hover]
  [prev button — left side, absolute, arrow icon, 44×44px]
  [next button — right side, absolute, arrow icon, 44×44px]
  [caption — below image, text-small, color-text-secondary, text-center]
```

Behavior:
- Opens on GalleryImage click
- Keyboard: `Escape` closes, arrow keys navigate
- Body scroll locked when open
- WhatsApp FAB remains visible (z-index: FAB must be above lightbox or lightbox must not cover FAB — use z-index: 10000 on FAB)

---

### 5.7 ContactForm

Fields:

| Field | Type | Required | Placeholder |
|---|---|---|---|
| Nome | text | ✅ | Seu nome completo |
| Email | email | ✅ | seu@email.com |
| Telefone | tel | ❌ | (00) 00000-0000 |
| Interesse | select | ✅ | Selecione um serviço |
| Mensagem | textarea | ✅ | Conte-me sobre seu projeto ou evento... |

Select options:
- Eventos Exclusivos
- Consultoria para Restaurante
- Cursos & Workshops
- Outro

**Field styling:**
- Background: `--color-surface`
- Border: 1px `--color-border`
- Border-radius: 2px
- Padding: `px-4 py-3`
- Text: `--color-text-primary`, font-body, 1rem
- Placeholder: `--color-text-secondary`
- Focus state: border-color → `--color-gold`, outline: none, box-shadow: `0 0 0 1px var(--color-gold)` (subtle glow)
- Error state: border-color → `--color-accent-red`

**Submit button:** `primary` variant, full width, text "Enviar pelo WhatsApp →"

**Submit behavior:**
1. Validate required fields client-side
2. Build WhatsApp message:
   ```
   Olá! Me chamo [Nome].
   Interesse: [Interesse selecionado]
   [Mensagem do formulário]
   ```
3. Encode and redirect to `https://wa.me/5551997590041?text=[encoded]`

---

### 5.8 WhatsApp FAB

Position: `fixed`, `bottom-6 right-6`, z-index: 10000.

Structure:
```
[button — 56×56px, circular, bg: --color-whatsapp]
  [WhatsApp SVG icon — 28×28px, white fill]
[pulse ring — absolute, same size, border: 2px --color-whatsapp, border-radius: 50%, animation: pulse]
```

Pulse animation (CSS):
```css
@keyframes fab-pulse {
  0%   { transform: scale(1);    opacity: 0.6; }
  70%  { transform: scale(1.4);  opacity: 0;   }
  100% { transform: scale(1.4);  opacity: 0;   }
}
```
Animation: `fab-pulse 2.5s ease-out infinite`

Hover: scale 1.05, brightness 1.1.

**Visibility logic (Intersection Observer):**
- Observe `#contact` section
- When `#contact` is ≥ 30% in viewport → `opacity: 0`, `pointer-events: none`
- Otherwise → `opacity: 1`, `pointer-events: auto`
- Transition: `opacity 300ms ease`

WhatsApp link: `https://wa.me/5551997590041?text=Olá!%20Gostaria%20de%20mais%20informações.`

---

## 6. Layout — Section by Section

### 6.1 Header

Height: 72px (desktop) / 64px (mobile).

**Default state:** `background: transparent`

**Scrolled state** (after 20px scroll):
- `background: rgba(10, 10, 10, 0.85)`
- `backdrop-filter: blur(12px)`
- `border-bottom: 1px solid var(--color-border)`
- Transition: `all 300ms ease`

**Logo:**
```
CAUÃ VIEGAS  道
```
- "CAUÃ VIEGAS": font-body, weight 500, text-small, ALL CAPS, letter-spacing 0.15em, color-text-primary
- "道": font-kanji, weight 300, ~1.4rem, color-accent-red, ml-2

**Nav links:** text-small, ALL CAPS, letter-spacing 0.08em, color-text-secondary. Hover → color-gold. Active → color-gold. Transition 150ms.

**Desktop layout:** Logo left, nav links right, `gap-8` between nav items.

**Mobile:** Logo left, hamburger right.

Hamburger menu:
- Icon: 3 horizontal lines (24×18px), color-text-primary
- Drawer: slides in from right, full height, `width: min(280px, 85vw)`, bg `--color-surface`, `border-left: 1px var(--color-border)`
- Drawer nav: vertical list, `py-6 px-8`, each link `text-h3`, font-display, weight 400
- Backdrop: rgba(0,0,0,0.5) covers rest of page, click closes drawer
- Close button: top-right of drawer, "×", 44×44px

---

### 6.2 Hero Section

Height: `100vh`, `min-height: 600px`.

Layers (back to front):
1. Background image placeholder (`position: absolute`, `inset: 0`, `object-fit: cover`)
2. Gradient overlay: `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.95) 100%)`
3. Decorative 道 kanji: `position: absolute`, `right: 8%`, `bottom: 10%`, `font-size: 28rem`, `opacity: 0.04`, `color: var(--color-gold)`, font-kanji, pointer-events: none
4. Content: `position: relative`, z-index: 10, centered vertically via flex

**Content layout (centered, text-center on mobile; left-aligned on desktop):**
```
[eyebrow — "Personal Chef • Porto Alegre, RS", text-micro, ALL CAPS, color-gold, letter-spacing 0.15em]
[name — "CAUÃ VIEGAS", display, font-display, color-text-primary]
[tagline — "Eventos Exclusivos • Consultorias • Cursos", text-body-lg, color-text-secondary, mt-4]
[CTA button — primary lg, "Solicitar Experiência", mt-10, links to #contact]
```

Positioning: content block pinned at `bottom: 15%` or vertically centered — design decision: **bottom-aligned** feels more dramatic and cinematic. Content at ~60–65% from top.

---

### 6.3 About Section

Background: `--color-bg` (alternates from hero which fades to near-black).

**Desktop grid:** `grid-cols-2`, gap-16. Left: text content. Right: chef portrait.

**Left column:**
```
[SectionTitle — left aligned, eyebrow: "Sobre o Chef", title: "Fundamento antes da vitrine."]
[bio paragraphs — text-body-lg, color-text-secondary, space-y-4, mt-8]
[stats row — mt-12, grid-cols-3, StatCards]
[CTA secundário — mt-8]
  [Button ghost — "Ver meus serviços →", scroll anchor para #servicos]
```

> **Nota:** O CTA ghost após os stats captura visitantes convencidos pela bio que ainda não estão prontos para contato direto, reduzindo o salto cognitivo entre "me interessa" e "quero contratar".

**Right column:**
- Portrait image: aspect-ratio 3/4, `max-w-sm`, aligned right
- Placeholder: bg surface, border color-border
- Subtle decorative element: thin vertical line in `--color-gold`, `2px × 80px`, positioned left of image container

**Mobile:** Text first, stats, CTA ghost, then portrait below.

**Bio (3 parágrafos):**

> Sou Cauã Viegas — chef especializado em gastronomia japonesa com foco em técnica, precisão e autenticidade. Cada projeto que aceito é tratado como único: do mise en place ao serviço, do cardápio ao resultado que as pessoas vão lembrar.

> Num mercado onde a apresentação frequentemente compensa o que falta em técnica, comigo os dois coexistem — mas a ordem importa. Domínio de cortes, controle de arroz, seleção criteriosa de insumos são a base sobre a qual a experiência visual é construída. Não o contrário.

> Se você está avaliando opções, a pergunta certa não é "qual chef está disponível?" — é "qual chef vai elevar o meu projeto?" A conversa inicial não tem compromisso. O próximo passo é simples.

---

### 6.4 Services Section

Background: `--color-surface` (creates visual separation from About).

Top: SectionTitle centered — eyebrow "Serviços", title "Uma expertise. Três formas de acessá-la."

**Desktop:** `grid-cols-3`, gap-6.
**Tablet:** `grid-cols-1` or stacked.
**Mobile:** stacked.

Service icons (SVG, inline, `--color-gold`, 32×32px):

| Service | Icon suggestion |
|---|---|
| Eventos Exclusivos | Cloche / serving dome |
| Consultoria | Clipboard / chart |
| Cursos | Graduate cap / book |

Use simple, custom SVG icons. No icon library.

**Card content:**

**Card 1 — Eventos Exclusivos**
- Subtitle: "Experiências Gastronômicas"
- Title: "Eventos Exclusivos"
- Description: "Cada evento é um projeto. Planejamento personalizado, execução técnica ao vivo e fluidez de serviço — do mise en place à última peça servida."
- Includes: Menu exclusivo desenvolvido sob medida / Seleção e curadoria de insumos / Preparação e apresentação ao vivo / Estrutura completa de serviço
- CTA: "Solicitar Orçamento"

**Card 2 — Consultoria**
- Subtitle: "Para Restaurantes"
- Title: "Consultoria Técnica"
- Description: "Estruturação e aprimoramento de operações de sushi. Desde ajustes pontuais até reestruturações completas, sempre com foco em processo, consistência e identidade."
- Includes: Desenvolvimento e revisão de cardápio / Padronização técnica de operação / Treinamento de equipe / Controle de qualidade e processos
- CTA: "Solicitar Diagnóstico"

**Card 3 — Curso**
- Subtitle: "Introdução à Arte"
- Title: "Curso de Sushi"
- Description: "Turmas presenciais em pequenos grupos. Da teoria ao preparo real — arroz, cortes, montagem — com acompanhamento individual e atenção a cada detalhe."
- Includes: Fundamentos de preparo e técnica / Montagem guiada das peças / Orientações sobre ingredientes / Material teórico de apoio / Certificado de participação
- CTA: "Solicitar Informações"

---

### 6.5 Gallery Section

Background: `--color-bg`.

Top: SectionTitle centered — eyebrow "Galeria", title "Meu Trabalho."

**Grid:**
- Desktop: `grid-cols-3`, gap-3
- Tablet: `grid-cols-2`
- Mobile: `grid-cols-1`

All images: aspect-ratio 4/3.

Image order and descriptions:
1. `gallery-01` — Chef preparando sushi (featured — position 1)
2. `gallery-02` — Nigiri tradicional
3. `gallery-03` — Certificação de chef
4. `gallery-04` — Maturação de peixes
5. `gallery-05` — Curso de sushi

Fifth image on desktop: spans `col-span-1` normally, or optionally span 2 on tablet for visual balance — implementation choice.

---

### 6.6 Contact Section

Background: `--color-surface`.

ID: `contact` (used by FAB Intersection Observer).

Top: SectionTitle centered — eyebrow "Contato", title "Vamos Conversar."
Subtitle: "Interessado em um evento, consultoria ou curso? Entre em contato e vamos criar algo juntos."

**Desktop grid:** `grid-cols-2`, gap-16. Left: contact info. Right: form.

**Left — Contact Info:**
```
[heading — "Entre em Contato", text-h3, font-display]
[contact items list — space-y-6, mt-8]
  Each item:
    [icon — 20×20px, color-gold]
    [label — text-micro, ALL CAPS, color-text-secondary]
    [value/link — text-body, color-text-primary, hover: color-gold, transition 150ms]
```

Items:
- WhatsApp: `+55 51 99759-0041` → links to `https://wa.me/5551997590041`
- Email: `viegascaua@outlook.com` → links to `mailto:viegascaua@outlook.com`
- Instagram: `@viegasc_` → links to `https://www.instagram.com/viegasc_/`
- Localização: `Porto Alegre, RS — Atendo em todo estado`

**Right — Form:** ContactForm component (spec in 5.7).

**Mobile:** Info first, form below.

---

### 6.7 Footer

Background: `--color-bg`. `border-top: 1px solid var(--color-border)`.

Padding: `py-10`.

**Layout:**
```
[top row — flex, justify-between, align-center]
  [logo — "CAUÃ VIEGAS 道", same as header treatment]
  [social icons — Instagram, WhatsApp, Email SVGs, 20×20px, color-text-secondary, hover: color-gold, gap-4]
[divider — mt-8, 1px, color-border]
[bottom row — mt-6, flex, justify-between]
  [copyright — "© 2026 Cauã Viegas. Todos os direitos reservados.", text-small, color-text-secondary]
  [optional tagline — "Excelência baseada em fundamento.", text-small, color-text-secondary, italic]
```

Mobile: Stack vertically, center-aligned.

---

## 7. Motion & Interaction

> **Principle for v1.0:** Restraint. Every animation must be functional, not decorative. If removing it doesn't hurt comprehension or feel, remove it.

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Header bg on scroll | opacity/blur fade-in | 300ms | ease |
| Nav links hover | color transition | 150ms | ease |
| Button hover | color/scale transition | 200ms | ease |
| ServiceCard hover | bg color, border | 200ms | ease |
| GalleryImage hover overlay | opacity fade-in + image scale | 300ms | ease |
| Lightbox open | opacity fade-in | 200ms | ease |
| Lightbox close | opacity fade-out | 150ms | ease |
| Hamburger drawer | translate-x slide-in | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |
| FAB pulse ring | infinite pulse | 2500ms | ease-out |
| FAB hide (contact in view) | opacity | 300ms | ease |
| Form focus state | border + box-shadow | 150ms | ease |

**No entrance animations in v1.0.** Architecture should allow adding them later via CSS classes or a motion library hook — but they ship disabled.

---

## 8. Responsive Breakpoints

| Breakpoint | Name | min-width | Key changes |
|---|---|---|---|
| Default | mobile | 0 | Single column, stacked sections |
| `sm` | small | 640px | Gallery → 2 cols |
| `md` | tablet | 768px | Nav visible (no hamburger), about 2-col |
| `lg` | desktop | 1024px | Services 3-col, contact 2-col |
| `xl` | wide | 1280px | Max-width content container |

---

## 9. Semantic HTML Structure

```html
<body>
  <a href="#main" class="skip-link">Pular para o conteúdo</a>
  <Header />                         <!-- <header> -->
  <main id="main">
    <HeroSection />                  <!-- <section id="inicio"> -->
    <AboutSection />                 <!-- <section id="sobre"> -->
    <ServicesSection />              <!-- <section id="servicos"> -->
    <GallerySection />               <!-- <section id="galeria"> -->
    <ContactSection />               <!-- <section id="contato"> -->
  </main>
  <Footer />                         <!-- <footer> -->
  <WhatsAppFAB />
  <Lightbox />                       <!-- portal or absolute at end of body -->
</body>
```

Skip link: visually hidden by default (`position: absolute`, `top: -40px`), visible on focus (`top: 0`). Bg `--color-gold`, text `--color-bg`.

---

## 10. Metadata & SEO

In `layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Cauã Viegas | Personal Chef — Gastronomia Japonesa',
  description: 'Chef especializado em gastronomia japonesa de alto padrão. Eventos exclusivos, consultoria para restaurantes e cursos em Porto Alegre, RS.',
  keywords: ['personal chef', 'gastronomia japonesa', 'sushi', 'porto alegre', 'eventos exclusivos', 'consultoria gastronomia'],
  openGraph: {
    title: 'Cauã Viegas | Personal Chef',
    description: 'Excelência baseada em fundamento. Eventos, consultoria e cursos de gastronomia japonesa.',
    locale: 'pt_BR',
    type: 'website',
  },
};
```

JSON-LD (LocalBusiness schema, inline in `layout.tsx`):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cauã Viegas — Personal Chef",
  "description": "Chef especializado em gastronomia japonesa. Eventos exclusivos, consultoria e cursos.",
  "telephone": "+55-51-99759-0041",
  "email": "viegascaua@outlook.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.instagram.com/viegasc_/"
  ]
}
```

---

## 11. `lib/constants.ts` Reference

```typescript
export const CONTACT = {
  whatsapp: '+55 51 99759-0041',
  whatsappUrl: 'https://wa.me/5551997590041',
  email: 'viegascaua@outlook.com',
  emailUrl: 'mailto:viegascaua@outlook.com',
  instagram: '@viegasc_',
  instagramUrl: 'https://www.instagram.com/viegasc_/',
  location: 'Porto Alegre, RS — Atendo em todo estado',
} as const;

export const WHATSAPP_MESSAGES = {
  fab: 'Olá! Gostaria de mais informações.',
  eventos: 'Olá! Tenho interesse em um evento exclusivo. Gostaria de mais informações.',
  consultoria: 'Olá! Tenho interesse na consultoria para meu restaurante. Gostaria de agendar um diagnóstico.',
  curso: 'Olá! Tenho interesse no curso introdutório de sushi. Gostaria de mais informações.',
} as const;

export const buildWhatsAppUrl = (message: string): string =>
  `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
```

---

## 12. Accessibility Checklist

| Item | Implementation |
|---|---|
| Skip-to-content link | Rendered before `<Header>`, visible on focus |
| Focus states | All interactive elements: `outline: 2px solid var(--color-gold); outline-offset: 2px` |
| Hamburger ARIA | `aria-label="Abrir menu"`, `aria-expanded`, `aria-controls` |
| Lightbox ARIA | `role="dialog"`, `aria-modal="true"`, `aria-label="Visualizar imagem"`, focus trap |
| FAB ARIA | `aria-label="Falar pelo WhatsApp"` |
| Form labels | Each field has associated `<label>`, error messages via `aria-describedby` |
| Image alt texts | All images: descriptive pt-BR alt from Image Inventory table |
| Color contrast | All text/bg combinations verified at WCAG AA minimum (4.5:1 for body, 3:1 for large text) |
| Keyboard navigation | Tab order follows visual reading order, no keyboard traps (except lightbox intentional trap) |

---

## 13. z-index Scale

| Layer | z-index | Element |
|---|---|---|
| Base | 0 | Page content |
| Raised | 10 | Decorative 道 kanji, overlay gradients |
| Floating | 100 | Gallery hover overlays |
| Sticky | 1000 | Header |
| Modal | 9000 | Lightbox backdrop |
| Modal content | 9001 | Lightbox image + controls |
| FAB | 10000 | WhatsApp FAB (always on top) |

---

*ui-specs.md — Cauã Viegas Website — v1.1*
*Alterações desta versão: bio reescrita com foco em conversão (seção 6.3), adição de CTA ghost "Ver meus serviços →" após StatCards (seção 6.3)*
*Gerado para uso em desenvolvimento com Next.js + TypeScript + Tailwind CSS + CSS Modules*
