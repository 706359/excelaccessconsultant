# Homepage Page Overrides

> **PROJECT:** ExcelAccessConsultant
> **Page Type:** Landing / Marketing — Trust & Authority + Social Proof

> ⚠️ Rules here **override** `MASTER.md` for homepage only.

---

## Hero Layout (`HomeHero` component)

**Pattern:** Hero + Testimonials + Before/After metrics (ui-ux-pro-max)

### Structure (ui-ux-pro-max) — single `.Hero-panel`

1. **Accent bar** — `.Hero-panel__accent` (primary top stripe)
2. **Eyebrow** — `.section-eyebrow` + `TRUST.eyebrow`
3. **Stat row** — `.Hero-stat-row` inline metrics with dividers
4. **H1** — Display scale; `.Hero-hours-highlight` accent
5. **Lead** — One punchy paragraph (`max-w-3xl`)
6. **Conversion grid** (`lg:grid-cols-5`) inside one panel:
   - **Col 1–3:** Dual CTAs (`Book Free Consultation` + `Request Fixed-Price Estimate`) + `.Hero-trust-chip` row
   - **Col 4–5:** `.Hero-metric-card` before/after + `.Hero-quote` testimonial
7. **Service links** — `.Hero-service-pill` below panel

### Layout

- **Full width:** `.Hero` + `.Hero-panel` span 100% viewport (no side card inset)
- **Centered content:** `.Hero-inner` — `max-w-4xl mx-auto text-center`
- **Stagger:** `.hero-enter` + `.hero-enter-1` … `6` on load
- **Background:** white, solid only (no gradients)
- **Padding:** `py-10 md:py-14 lg:py-16`

### Color

- Stat values: `text-primary` (`#A4373A`)
- After metric: `border-secondary` / `text-secondary` (`#107C41`)
- Cards: white on slate-50

### Typography

- H1: `text-display-lg md:text-display-xl lg:text-display-2xl`, Manrope 700
- Body: `text-body-lg` / `text-body-base`
- Fallback font: Plus Jakarta Sans

### Motion

- Hero columns: `motion-safe:animate-fade-in` with staggered delay
- Stat pills: `animate-pulse-metric` on values (respects reduced motion)

### Conversion

- Phone card is primary CTA above fold
- Before/after proof in hero
- Testimonial in hero
- Service links reduce navigation friction

### Avoid

- `min-h-screen` hero
- Decorative blur overlays / broken hero images
- Unicode arrows or emoji icons
- Blue or gradient accents

---

## Remaining Homepage Sections

Use `ScrollReveal` wrapper on major sections below the hero:

2. Problems I Solve — `.card.card--interactive`
3. Client Results
4. Industries Served
5. Services
6. Process steps
7. FAQ
8. ROI Calculator
9. Final CTA — `ContactCTAs`
