# Design System - ExcelAccessConsultant.com

**Current Implementation:** Tailwind CSS (Primary) + Custom CSS (Legacy Components)

**Status:** ✅ Tailwind CSS is installed and actively used throughout the application

**⚠️ IMPORTANT:** This document contains legacy color examples. The actual implementation uses the new logo-based color scheme:

- **Primary:** `#C8102E` (Crimson Red - Access) - Access pages, general pages
- **Secondary:** `#107C41` (Green - Excel, matches logo) - Excel pages
- **NO BLUE COLOR** - Blue has been completely removed from the theme
- **NO GRADIENTS** - All colors are solid only

See `.cursorrules` and `DESIGN_PROPOSAL.md` for current color specifications.

---

## Brand Identity

**Logo-Based Color Scheme (NO GRADIENTS - SOLID COLORS ONLY)**

**Primary Color (Crimson Red - Access):**

- Hex: `#C8102E`
- RGB: `rgb(200, 16, 46)`
- Usage: Access pages, general pages, navigation, footer, homepage sections
- Hover: `#9a0c24` (Darker Red)
- Pages: Homepage, `/access-consulting`, `/database-migration`, general content

**Secondary Color (Green - Excel, matches logo):**

- Hex: `#107C41`
- RGB: `rgb(16, 124, 65)`
- Usage: Excel-related pages, Excel service features, buttons, links, CTAs
- Hover: `#0D6535` (Darker Green)
- Pages: `/excel-automation`, `/vba-development`, `/financial-modeling`

**Rationale:** Colors are based on the logo design:

- Red represents Access (Access's traditional color) - Now the PRIMARY color
- Green represents Excel (Excel's brand association) - SECONDARY color
- **NO BLUE COLOR** - Blue has been completely removed from the theme
- All colors are solid - NO gradients allowed

---

## Color Palette

### Primary Colors (NO BLUE - REMOVED | NO GRADIENTS - SOLID COLORS ONLY)

```css
/* Primary - Crimson Red (Access) */
--primary: #c8102e; /* Crimson Red - Access pages, general pages, navigation */
--primary-hover: #9a0c24; /* Darker red for hover states */

/* Secondary - Green (Excel, matches logo) */
--secondary: #107c41; /* Green - Excel-related pages */
--secondary-hover: #0d6535; /* Darker green for hover states */
```

### Color Usage Rules

- **Excel pages** (`/excel-automation`, `/vba-development`, `/financial-modeling`): Use `secondary` (green) for all buttons, links, headings, CTAs, step numbers, pricing
- **Access pages** (`/access-consulting`, `/database-migration`): Use `primary` (red) for all buttons, links, headings, CTAs, step numbers, pricing
- **General pages** (homepage): Use `primary` (red) for all buttons, links, headings, CTAs
- **NO BLUE COLOR** - Blue has been completely removed from the theme
- **NO GRADIENTS** - All backgrounds and colors must be solid only

### Neutral Colors (Tailwind Slate)

```css
--slate-50: #f8fafc; /* Light backgrounds */
--slate-400: #94a3b8; /* Borders, dividers */
--slate-700: #334155; /* Secondary text */
--slate-800: #1e293b; /* Headings */
--slate-900: #0f172a; /* Primary text */
```

### Base Background

```css
--base: #f5f7fa; /* Page background */
```

---

## Typography System - STANDARD SIZES (MANDATORY)

### Font Family

- **Primary:** IBM Plex Sans - **Matches logo font style exactly**
- **Display:** IBM Plex Sans (headings)
- **Mono:** IBM Plex Mono (code, numbers)
- **Font Stack:** 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Weights Available:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extra bold)
- **H1 uses weight 800 (extra bold) to match logo's bold, prominent appearance**

### Display Sizes (Hero, Large Headings - Matches Logo Bold Style)

```css
text-display-2xl: 72px, line-height 1.1, weight 800 (extra bold), letter-spacing -0.02em  /* Desktop H1 */
text-display-xl:  64px, line-height 1.1, weight 800 (extra bold), letter-spacing -0.02em  /* Tablet H1 */
text-display-lg:  48px, line-height 1.2, weight 800 (extra bold), letter-spacing -0.01em  /* Mobile H1, Desktop H2 */
text-display-md:  40px, line-height 1.2, weight 700 (bold), letter-spacing -0.01em  /* Tablet H2 */
text-display-sm:  36px, line-height 1.2, weight 700 (bold), letter-spacing -0.01em  /* Mobile H2 */
```

### Heading Sizes (Section Titles, Subheadings)

```css
text-heading-xl: 32px, line-height 1.3, weight 700  /* Desktop H3 */
text-heading-lg: 28px, line-height 1.3, weight 700  /* Tablet H3 */
text-heading-md: 24px, line-height 1.4, weight 600  /* Mobile H3, Desktop H4 */
text-heading-sm: 20px, line-height 1.4, weight 600  /* Tablet H4, Desktop H5 */
text-heading-xs: 18px, line-height 1.4, weight 600  /* Mobile H4, Desktop H6 */
```

### Body Sizes (Content, Paragraphs)

```css
text-body-xl:  20px, line-height 1.7, weight 400  /* Large emphasis text */
text-body-lg:  18px, line-height 1.7, weight 400  /* Intro paragraphs, important content */
text-body-base: 16px, line-height 1.6, weight 400  /* Standard body text - DEFAULT */
text-body-sm:  14px, line-height 1.5, weight 400  /* Secondary text, captions */
text-body-xs:  12px, line-height 1.5, weight 400  /* Fine print, disclaimers */
```

### Label Sizes (Form Labels, Small Text)

```css
text-label-lg:  16px, line-height 1.5, weight 500  /* Form labels, navigation */
text-label-base: 14px, line-height 1.5, weight 500  /* Standard labels */
text-label-sm:  12px, line-height 1.4, weight 500  /* Small labels, badges */
```

### Typography Usage Examples

```jsx
// H1 - Main Page Titles
<h1 className="text-display-lg md:text-display-xl lg:text-display-2xl">
  Page Title
</h1>

// H2 - Section Titles
<h2 className="text-display-sm md:text-display-md lg:text-display-lg">
  Section Title
</h2>

// H3 - Subsection Titles
<h3 className="text-heading-md md:text-heading-lg">
  Subsection Title
</h3>

// Body Text (default)
<p className="text-body-base">
  Standard paragraph text
</p>

// Emphasis Body Text
<p className="text-body-lg">
  Important introductory text
</p>
```

### Font Weights

- **Display/Headings:** Bold (700) for H1-H3, Semibold (600) for H4-H6
- **Body:** Regular (400) - default
- **Labels/Buttons:** Medium (500) to Semibold (600)
- **Strong/Bold:** Semibold (600)

### Line Heights

- **Display:** 1.1-1.2 (tight for large headings)
- **Headings:** 1.3-1.4 (comfortable for headings)
- **Body:** 1.6-1.7 (readable for paragraphs)
- **Labels:** 1.4-1.5 (compact for labels)

### Letter Spacing

- **Display:** -0.02em to -0.01em (tight tracking for large text)
- **Headings/Body:** Normal (0) - default
- **Labels:** Normal (0) - default

---

## Spacing System - STANDARD SIZES (MANDATORY)

### Base Unit

- **4px** - All spacing is multiples of 4px for consistency

### Standard Spacing Scale

```css
space-1:  4px   (0.25rem)  /* Tight spacing, icon padding */
space-2:  8px   (0.5rem)   /* xs - Small gaps between related items */
space-3:  12px  (0.75rem)  /* Tight gaps */
space-4:  16px  (1rem)     /* sm - Standard gaps, paragraph spacing */
space-5:  20px  (1.25rem)  /* Medium-small gaps */
space-6:  24px  (1.5rem)    /* md - Medium gaps between sections */
space-8:  32px  (2rem)     /* lg - Large gaps */
space-10: 40px  (2.5rem)   /* Extra large gaps */
space-12: 48px  (3rem)     /* xl - Section spacing */
space-16: 64px  (4rem)     /* 2xl - Major section spacing */
space-20: 80px  (5rem)     /* Very large spacing */
space-24: 96px  (6rem)     /* 3xl - Major section spacing */
```

### Semantic Spacing (Use for consistency)

```css
xs:  8px   /* Small gaps between related items (icons and text, badges) */
sm:  16px  /* Standard gaps (between form fields, list items) */
md:  24px  /* Medium gaps between sections (card padding, section gaps) */
lg:  32px  /* Large gaps (between major elements) */
xl:  48px  /* Extra large gaps (section spacing) */
2xl: 64px  /* Major section spacing (between page sections) */
3xl: 96px  /* Maximum spacing (hero sections, major page breaks) */
```

### Spacing Usage Examples

```jsx
// Section Padding (responsive)
<section className="py-md md:py-lg lg:py-xl">
  Content
</section>

// Container Padding (responsive)
<div className="px-4 md:px-6 lg:px-8">
  Content
</div>

// Card Padding
<div className="card p-md">
  Card content
</div>

// Paragraph Spacing
<p className="mb-sm">Paragraph with standard spacing</p>

// Flex/Grid Gaps
<div className="flex gap-sm md:gap-md">
  Related items
</div>

// Section Margins
<section className="mb-lg md:mb-xl">
  Section content
</section>
```

### Spacing Rules

- **Padding:** Use `p-sm` (16px) for cards, `p-md` (24px) for sections, `p-lg` (32px) for large containers
- **Margins:** Use `mb-sm` (16px) for paragraphs, `mb-md` (24px) for sections, `mb-lg` (32px) for major sections
- **Gaps:** Use `gap-sm` (16px) for flex/grid with related items, `gap-md` (24px) for standard layouts, `gap-lg` (32px) for large layouts
- **Section Spacing:** Use `py-md md:py-lg lg:py-xl` for vertical section padding (responsive)
- **Container Padding:** Use `px-4 md:px-6 lg:px-8` for horizontal container padding (responsive)
- **Always use semantic spacing** - never arbitrary values like `p-[13px]` or `m-[7px]`

---

## Components

### Primary Button

```css
.btn-primary {
  background: #a32228; /* excel color */
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #8a1c21; /* excel-hover */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Tailwind Classes:**

```html
<button class="bg-excel hover:bg-excel-hover text-white px-6 py-3 rounded-md font-medium">
  Button Text
</button>
```

### Secondary Button

```css
.btn-secondary {
  background: white;
  color: #a32228;
  border: 2px solid #a32228;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #a32228;
  color: white;
}
```

**Tailwind Classes:**

```html
<button
  class="bg-white text-excel border-2 border-excel hover:bg-excel hover:text-white px-6 py-3 rounded-md font-medium"
>
  Button Text
</button>
```

### Phone CTA Button

```html
<a
  href="tel:8016163702"
  class="bg-white hover:bg-slate-50 text-excel border-2 border-excel px-8 py-4 rounded-md text-center flex items-center justify-center gap-2"
>
  <span>📞</span>
  <span>Call 801-616-3702</span>
</a>
```

### Cards

```css
.card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
  border-color: #a32228;
}
```

**Tailwind Classes:**

```html
<div
  class="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
>
  Card Content
</div>
```

### Badge

```html
<div class="badge mb-8 text-excel border-excel/30 bg-white/90 backdrop-blur-sm">
  Serving Finance Teams Since 2010
</div>
```

---

## Spacing System (Tailwind)

### Padding

- `p-6` = 24px (standard card padding)
- `px-6` = 24px horizontal
- `py-4` = 16px vertical
- `py-20` = 80px vertical (section spacing on desktop)
- `py-12` = 48px vertical (section spacing on mobile)

### Margins

- `mb-6` = 24px bottom margin
- `mb-16` = 64px bottom margin (section spacing)
- `gap-4` = 16px gap (flex/grid)

### Section Spacing

- Mobile: `py-12` (48px)
- Desktop: `py-20` (80px)

---

## Layout Patterns

### Container

```html
<div class="max-w-6xl mx-auto px-6">Content</div>
```

### Grid (Services, Cards)

```html
<div class="grid md:grid-cols-3 gap-6 md:gap-8">
  <!-- Cards -->
</div>
```

### Hero Section

```html
<section
  class="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center"
>
  <!-- Hero content -->
</section>
```

---

## Visual Hierarchy

### Headings

- **H1:** Extra bold, largest size, primary text color
- **H2:** Bold, large size, primary text color
- **H3:** Bold, medium size, primary text color
- **H4:** Bold, smaller size, secondary text color

### Text Colors

- **Primary Text:** `text-slate-900` (#0F172A)
- **Secondary Text:** `text-slate-700` (#334155)
- **Tertiary Text:** `text-slate-600` (#475569)
- **Links:** `text-excel` (#A32228) with hover state

### Emphasis

- **Bold:** Important information
- **Color:** Brand color for CTAs and key metrics
- **Size:** Larger for primary messages

---

## Shadows

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1); /* Cards default */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1); /* Buttons hover */
--shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15); /* Cards hover */
```

**Tailwind:**

- `shadow-sm` - Small shadow
- `shadow-md` - Medium shadow
- `shadow-lg` - Large shadow

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

**Usage Example:**

```html
<h1 class="text-4xl md:text-6xl lg:text-7xl">Responsive Heading</h1>
```

---

## Form Elements

### Input Fields

```html
<input
  type="text"
  class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel text-slate-900"
/>
```

### Textarea

```html
<textarea
  class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel text-slate-900"
  rows="4"
></textarea>
```

---

## Status Colors

```css
--success: #28a745; /* Green - success messages */
--warning: #ffc107; /* Yellow - warnings */
--error: #dc3545; /* Red - errors */
```

---

## Animation & Transitions

### Standard Transition

```css
transition: all 0.3s ease;
```

**Tailwind:**

```html
<div class="transition-all duration-300 ease-in-out">Content</div>
```

### Hover Effects

- Buttons: Background color change + shadow
- Cards: Shadow increase + slight lift (translateY)
- Links: Color change + underline

---

## Accessibility

### Focus States

- All interactive elements have visible focus rings
- Focus ring color: `focus:ring-excel` (#A32228)
- Focus ring width: `focus:ring-2`

### Color Contrast

- Text on white: Meets WCAG AA standards
- Text on brand color: White text on red background
- All color combinations tested for accessibility

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Form labels associated with inputs
- Alt text for all images
- ARIA labels where needed

---

## Implementation Notes

- **Framework:** Tailwind CSS (utility-first) ✅ **ACTIVELY USED**
- **Custom Classes:** Defined in `src/styles/global.css` using `@layer components`
- **Color Variables:** Defined in `tailwind.config.js`
- **Component Library:** Custom React components with Tailwind classes
- **Responsive:** Mobile-first approach
- **Legacy CSS:** Some custom CSS files exist (`tokens/core.css`, `components/Button.css`) but are not the primary styling method

## Current Styling Approach

**Primary:** Tailwind CSS utility classes

```jsx
// Example from current codebase
<div className='bg-base min-h-screen text-slate-800 font-sans'>
  <button className='bg-excel hover:bg-excel-hover text-white px-6 py-3 rounded-md'>Button</button>
</div>
```

**Secondary:** Custom component classes (via `@layer components` in global.css)

```jsx
// Custom classes defined in global.css
<button className='btn-primary'>Button</button>
<div className='card'>Content</div>
```

**Legacy:** Custom CSS files (minimal usage)

- `src/styles/tokens/core.css` - CSS variables (legacy)
- `src/styles/components/Button.css` - Button component (legacy, not actively used)
- `src/styles/tokens/semantic.css` - Semantic tokens (legacy)

**Recommendation:** Continue using Tailwind CSS as primary styling method. The legacy CSS files can be removed if not referenced.

---

**Last Updated:** January 24, 2026
**Styling Method:** Tailwind CSS (Confirmed Active)
