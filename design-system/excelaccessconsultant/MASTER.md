# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/excelaccessconsultant/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** ExcelAccessConsultant
**Updated:** 2026-06-11
**Category:** B2B Consulting — Trust & Authority (ui-ux-pro-max)
**Stack:** Next.js App Router · Tailwind CSS · `src/app/styles/global.css`

---

## Global Rules

### Color Palette (logo-aligned)

| Role | Hex | Tailwind | CSS Variable | Usage |
|------|-----|----------|--------------|-------|
| Primary (Excel) | `#1B5E20` | `primary` | `--color-primary` | CTAs, links, general pages, nav active |
| Primary Hover | `#155016` | `primary-hover` | `--color-primary-hover` | Button/link hover |
| Secondary (Access) | `#8B1A1A` | `secondary` | `--color-secondary` | Access pages, accent metrics |
| Secondary Hover | `#6E1515` | `secondary-hover` | `--color-secondary-hover` | Access button hover |
| Charcoal | `#2D2D2D` | `text` | `--color-text` | Body copy |
| Navy | `#0F172A` | `navy` | `--color-navy` | Footer, dark bands |
| Background | `#F8FAFC` | `background` / `surface` | `--color-background` | Page sections |
| Base (cards) | `#FFFFFF` | `base` | — | Cards, panels |

**Aliases:** `excel` → `#1B5E20`, `access` → `#8B1A1A`.

### Premium Effects (homepage)

| Token | Value | Usage |
|-------|-------|-------|
| `--glass-bg` | `rgba(255,255,255,0.72)` | Frosted cards on light backgrounds |
| `--elevation-1` … `--elevation-4` | layered shadows | Card depth hierarchy |
| `--ease-spring` / `--ease-out-expo` | cubic-bezier | Motion curves |
| `--ambient-green` / `--ambient-crimson` | brand glows | Hero/CTA mesh backgrounds |

**Motion rules:** Respect `prefers-reduced-motion`. No layout-shifting hover scales. Transitions 150–300ms.

**Color routing by page type:**

| Page type | Buttons / accents |
|-----------|-------------------|
| Access, general, blog (Access topics) | `primary` (red) |
| Excel (`/excel-automation`, `/vba-development`, `/financial-modeling`) | `green` prop → `secondary` (green) |

**Forbidden:** Blue accents, purple/pink AI gradients, multi-color gradients. **Solid colors only.**

---

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Manrope | 700 |
| Body / UI | Manrope | 400–500 |
| Emphasis / buttons | Manrope | 600 |

**Fallback stack (if Manrope fails to load):** Plus Jakarta Sans → system UI.

**Google Fonts import** (`src/app/layout.jsx`):

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**CSS stack:**

```css
font-family: 'Manrope', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Mood:** Modern, trustworthy, professional, approachable — matches logo wordmark.

#### Type scale (Tailwind)

| Token | Size | Use |
|-------|------|-----|
| `text-display-2xl` | 72px | Desktop H1 |
| `text-display-xl` | 64px | Tablet H1 |
| `text-display-lg` | 48px | Mobile H1 / desktop H2 |
| `text-display-md` | 40px | Tablet H2 |
| `text-display-sm` | 36px | Mobile H2 |
| `text-heading-xl` … `text-heading-xs` | 32–18px | H3–H6 |
| `text-body-xl` … `text-body-xs` | 20–12px | Body |
| `text-label-lg` … `text-label-sm` | 16–12px | Labels, eyebrows |

**H1 pattern:** `text-display-lg md:text-display-xl lg:text-display-2xl font-bold font-display tracking-tight`

**Eyebrow / tagline:** `.text-tagline` — uppercase, `letter-spacing: 0.12em`, navy at 70% opacity.

**Hero accent:** `.Hero-hours-highlight` — primary red, solid underline bar (no gradient).

---

### Spacing

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `--space-xs` | 4px | `1` | Tight gaps |
| `--space-sm` | 8px | `2` / `xs` | Icon gaps |
| `--space-md` | 16px | `4` / `sm` | Fields, paragraphs |
| `--space-lg` | 24px | `6` / `md` | Card padding |
| `--space-xl` | 32px | `8` / `lg` | Large gaps |
| `--space-2xl` | 48px | `12` / `xl` | Section spacing |
| `--space-3xl` | 64px | `16` / `2xl` | Hero padding |

**Section padding:** `py-12 md:py-16` or `py-md md:py-lg lg:py-xl`
**Container:** `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`

---

### Shadows & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` / `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` / `shadow-card` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` / `shadow-card-hover` | `0 10px 15px rgba(0,0,0,0.1)` | Hover cards |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Modals |
| `--radius-btn` / `rounded-btn` | 8px | Buttons, inputs |
| `--radius-card` / `rounded-card` | 12px | Cards |

---

## Motion & Effects (ui-ux-pro-max)

| Effect | Implementation | Usage |
|--------|----------------|-------|
| Scroll reveal | `ScrollReveal` component | Homepage / long sections |
| Stat pulse | `animate-pulse-metric` / `.stat-pill__value` | Hero trust metrics |
| Card lift | `motion-safe:hover:-translate-y-0.5` + shadow | `.card--interactive` |
| Button lift | `motion-safe:hover:-translate-y-px` | `Button`, `.btn-primary` |
| Fade in | `animate-fade-in` | Hero columns on load |
| Transitions | `duration-standard` (200ms) | All interactive states |

**Reduced motion:** `prefers-reduced-motion` disables animations in `global.css`. Use `motion-safe:` prefix for transforms.

**Anti-pattern:** Layout-shifting scale on hover — use small `translateY` only, not `scale()` on layout elements.

---

## Component Specs

### Buttons (`Button.jsx` + `.btn-primary` / `.btn-secondary`)

| Variant | Style |
|---------|-------|
| `primary` | `bg-primary` red, white text, shadow, hover lift |
| `secondary` | Transparent, `border-primary`, hover fill red |
| `primary-green` | `bg-secondary` green (Excel pages) |
| `secondary-green` | Green outline (Excel pages) |
| `outline-white` | White border on dark bands |

```css
/* Primary — matches Tailwind Button primary */
.btn-primary {
  background: #A4373A;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-primary:hover {
  background: #872E31;
  transform: translateY(-1px);
}
```

### Cards (`.card`, `.card--interactive`)

- White background, `border-slate-200`, `shadow-card`, `p-md` (24px), `rounded-card`
- Interactive: hover shadow + `-translate-y-0.5`

### Stat pills (`.stat-pill`, `.stat-pill__value`)

- Hero trust row: 20+ years, 500+ projects, etc.
- Value: `text-primary`, optional `animate-pulse-metric`

### Section eyebrow (`.section-eyebrow`)

- Horizontal rule + `.text-tagline` label above section titles

### Inputs (`.input-field`)

- `border-slate-200`, `rounded-btn`, focus ring `ring-primary/20`

### Layout

- **Header:** Sticky, `bg-white/90 backdrop-blur-md`, pill nav, `shadow-nav`
- **Footer:** `bg-navy`, inverted logo, `text-slate-300`
- **Skip link:** `focus:bg-primary focus:text-white`

### Shared page components

| Component | Path |
|-----------|------|
| `HomeHero` | `src/components/HomeHero/HomeHero.jsx` |
| `ContactCTAs` | `src/components/ui/ContactCTAs/ContactCTAs.jsx` |
| `PageCTASection` | `src/components/ui/PageCTASection/PageCTASection.jsx` |
| `ServicePageSections` | `src/components/ui/ServicePageSections/ServicePageSections.jsx` |
| `ScrollReveal` | `src/components/ui/ScrollReveal/ScrollReveal.jsx` |

---

## Page Pattern — B2B Consulting Landing

**Style:** Trust & Authority
**Keywords:** Credentials, case study metrics, before/after, fixed-price, free consultation

**Section order (homepage):**

1. Hero — phone-first CTA + before/after proof + testimonial
2. Problems I Solve
3. Client Results / case studies
4. Industries Served
5. Services grid
6. Process
7. FAQ
8. ROI calculator (optional)
9. Final dual CTA

**CTA placement:** Hero (phone card) + mid-page + footer on every service page.

---

## Anti-Patterns (Do NOT Use)

- Generic marketing fluff (“innovative”, “cutting-edge”, “transformative”)
- Emojis as icons — use SVG (`Icons.jsx`)
- Missing `cursor-pointer` on clickables
- Low-contrast text (< 4.5:1)
- Instant state changes (always 150–300ms transitions)
- Invisible focus states
- Blue or gradient accents
- `min-h-screen` hero (mobile viewport issues)

---

## Pre-Delivery Checklist

- [ ] Logo colors: red (Access/general), green (Excel) — no blue
- [ ] Manrope loads; Plus Jakarta Sans fallback in stack
- [ ] `cursor-pointer` on all clickables
- [ ] Hover transitions 150–300ms
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind sticky header
- [ ] No horizontal scroll on mobile
- [ ] SEO meta + schema unchanged when restyling

---

## Implementation Reference

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Theme tokens, animations |
| `src/app/styles/global.css` | CSS variables, `@layer components` |
| `src/config/brand.js` | `FONT_FAMILY`, `BRAND_COLORS` |
| `src/app/layout.jsx` | Font loading, root shell |
| `src/app/components/Layout.jsx` | Header, footer, nav |
