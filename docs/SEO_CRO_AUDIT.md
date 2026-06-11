# SEO/CRO Audit — ExcelAccessConsultant.com

June 2026. Full site audit for SEO, conversion, trust, and content. Each recommendation uses the standard format.

---

## 1. Homepage Audit

### H1-01: Client Results lack Problem/Solution/Outcome labels

**Current Issue:** Client Results cards show metrics and before/after but do not label Problem, Solution, and Outcome explicitly.

**Why It Matters:** B2B buyers scan for cause-and-effect proof. Unlabeled metrics read as marketing claims rather than documented project outcomes.

**Recommended Change:** Extract data to `src/constants/homeClientResults.js` with `problem`, `solution`, `outcome` fields. Render labeled lines inside `cs-result-card`.

**Expected Impact:** Trust, Conversion

**Priority:** High

### H1-02: Same three case studies repeated across hero, Client Results, and Services

**Current Issue:** Manufacturing, construction, and finance case studies appear in hero proof grid, Client Results, and Services subsection.

**Why It Matters:** Repetition reduces perceived breadth of experience on a long scroll.

**Recommended Change:** Diversify hero proof outcomes to include distribution or SQL migration case studies. Keep Client Results as the primary proof block.

**Expected Impact:** Trust, Authority

**Priority:** High

### H1-03: Generic section headers

**Current Issue:** Headers such as "Simple, transparent process from consultation to delivery" and "A Specialist for Complex Enterprises" are vague.

**Why It Matters:** Weak headers miss keyword and specificity opportunities without adding trust.

**Recommended Change:** Rewrite to reference fixed-price quotes, 48-hour estimates, and Microsoft stack specialization.

**Expected Impact:** Conversion, SEO

**Priority:** Medium

### H1-04: Testimonials use glass styling

**Current Issue:** Testimonial cards use `card-glass` with `backdrop-filter`, conflicting with flat design system rules.

**Why It Matters:** Visual inconsistency and banned pattern on a trust-critical section.

**Recommended Change:** Use flat bordered `.testimonial-card` without glass modifier.

**Expected Impact:** Trust, UX

**Priority:** Low

### H1-05: Only 3 of 5 testimonials visible

**Current Issue:** `HOME_TESTIMONIALS.slice(0, 3)` hides distribution and retail quotes from the page while they remain in ReviewSchema.

**Why It Matters:** Strong outcome quotes (50MB spreadsheet, $30K–$50K pricing error) are invisible to visitors.

**Recommended Change:** Show 4 testimonials in a 2×2 grid on desktop or rotate the third/fourth slot periodically.

**Expected Impact:** Trust

**Priority:** Medium

---

## 2. Hero Review

### H2-01: No database mockup below 1024px

**Current Issue:** Mobile and tablet users see abstract pillar icons only. Orders, customers, inventory, and reports are hidden.

**Why It Matters:** Primary visual issue: hero feels empty on phones and tablets where most initial visits occur.

**Recommended Change:** Add compact dashboard variant in `HeroVisual.jsx` with mini titlebar, 2-row table, status badges, and pillar chips.

**Expected Impact:** Conversion, UX

**Priority:** High

### H2-02: Table status column unstyled

**Current Issue:** Shipped, Processing, and Pending render as plain text without visual status indicators.

**Why It Matters:** Status chips reinforce "live operations system" credibility at a glance.

**Recommended Change:** Add `.hero-db__status-pill` with access/excel token colors per status.

**Expected Impact:** UX, Trust

**Priority:** High

### H2-03: Duplicate hero proof link to construction case study

**Current Issue:** Hero proof items 1 and 4 both link to `construction-automated-reporting`.

**Why It Matters:** Wasted proof slot; suggests limited project variety.

**Recommended Change:** Point KPI reporting item to `distribution-slow-spreadsheet` or `access-sql-migration-enterprise`.

**Expected Impact:** Trust

**Priority:** Low

### H2-04: No phone link in hero

**Current Issue:** Hero has two form CTAs but no clickable phone number above the fold.

**Why It Matters:** High-intent Access emergencies often convert via phone.

**Recommended Change:** Add text link below CTA row using `CTA.phoneHref`.

**Expected Impact:** Conversion

**Priority:** Medium

---

## 3. Conversion Audit

### C3-01: Lead magnet delivers PDF in-browser only

**Current Issue:** `/api/lead-magnet` emails owner via SMTP but visitor gets immediate client-side download, not email delivery.

**Why It Matters:** Users may expect email delivery; mismatch reduces follow-up nurture opportunity.

**Recommended Change:** Clarify post-submit copy. Document ConvertKit/Mailchimp integration as Phase 5. Do not promise "check your inbox" until email automation exists.

**Expected Impact:** Conversion, Trust

**Priority:** High

### C3-02: ROI calculator result CTA is generic

**Current Issue:** After calculation, CTA does not reference the user's computed annual waste figure.

**Why It Matters:** Personalized context increases consultation booking intent.

**Recommended Change:** Add dynamic line: "At $X/year in manual work, a fixed-price automation project often pays back in months."

**Expected Impact:** Conversion

**Priority:** Medium

### C3-03: Contact form math captcha friction

**Current Issue:** Step 2 requires solving a math problem with no helper text.

**Why It Matters:** Minor friction for legitimate users; acceptable for spam prevention.

**Recommended Change:** Add one-line helper: "Quick check to reduce spam."

**Expected Impact:** Conversion

**Priority:** Low

### C3-04: Mid-page CTAs share identical button labels

**Current Issue:** Service mid-page CTAs use generic `ContactCTAs` without service-specific subtext on buttons.

**Why It Matters:** Contextual CTAs improve qualified lead rate.

**Recommended Change:** Keep button labels from `CTA` constants; strengthen heading/subtext per service in `servicePageContent.js`.

**Expected Impact:** Conversion

**Priority:** Medium

---

## 4. Trust & Authority Audit

### T4-01: Inconsistent experience claims (15+ vs 20+)

**Current Issue:** `site.js` uses 20+ years; some blog posts and `.cursorrules` reference 15+ years.

**Why It Matters:** Inconsistent claims undermine credibility if a prospect notices both.

**Recommended Change:** Standardize on `TRUST.years` from `src/constants/site.js` everywhere.

**Expected Impact:** Trust, Authority

**Priority:** High

### T4-02: Anonymous testimonials

**Current Issue:** Testimonials show role and industry only, no client names.

**Why It Matters:** Privacy-safe but weaker than named reviews when available.

**Recommended Change:** Keep anonymous format; ensure every quote includes a specific metric (already mostly done).

**Expected Impact:** Trust

**Priority:** Medium

### T4-03: TrustBadge popup separate from homepage flow

**Current Issue:** TrustBadge appears after 5 seconds globally, not integrated into homepage sections.

**Why It Matters:** Minor; per strategy rules, do not add new trust sections.

**Recommended Change:** Leave as-is.

**Expected Impact:** N/A

**Priority:** Low

---

## 5. Service Page Audit

### S5-01: Identical How It Works flow on all six pages

**Current Issue:** Same 5-step consultation → quote → build → training → support on every service page.

**Why It Matters:** Missed opportunity to address service-specific concerns (e.g., migration data validation steps).

**Recommended Change:** Vary step descriptions per service in `servicePageContent.js`.

**Expected Impact:** Trust, Conversion

**Priority:** Medium

### S5-02: Repeated generic benefits trio

**Current Issue:** "You Own Everything", "Fixed-Price Delivery", "Long-Term Support" repeat identically.

**Why It Matters:** Benefits should reinforce service-specific outcomes.

**Recommended Change:** Add one service-specific benefit bullet per page while keeping shared trust benefits.

**Expected Impact:** Conversion

**Priority:** Medium

### S5-03: Internal linking depth

**Current Issue:** Not every service page links to a relevant case study and two blog posts consistently.

**Why It Matters:** Internal links distribute authority and keep visitors in the funnel.

**Recommended Change:** Add related links block or verify in each service page JSX.

**Expected Impact:** SEO, Conversion

**Priority:** Medium

---

## 6. Case Study Audit

### CS6-01: Only 6 case studies vs 20+ goal

**Current Issue:** Strong registry exists but footprint is small for niche dominance.

**Why It Matters:** Case studies are high-converting proof for high-ticket consulting.

**Recommended Change:** Roadmap 14 additional studies in `docs/CONTENT_EXPANSION_ROADMAP.md`. Implement 2–3 next.

**Expected Impact:** Trust, SEO, Conversion

**Priority:** Medium

### CS6-02: SQL migration case study missing from homepage

**Current Issue:** `access-sql-migration-enterprise` not in Client Results grid.

**Why It Matters:** Migration is a high-value service line with strong proof already written.

**Recommended Change:** Consider swapping one card or featuring on case studies index prominently.

**Expected Impact:** Conversion

**Priority:** Medium

### CS6-03: Case study alias URLs in sitemap

**Current Issue:** Alias slugs (`manufacturing-automation`, etc.) indexed alongside canonicals.

**Why It Matters:** Duplicate content risk and diluted link equity.

**Recommended Change:** Remove aliases from sitemap; keep canonical redirects.

**Expected Impact:** SEO

**Priority:** Low

---

## 7. SEO Audit

### SEO7-01: Duplicate `/services/{slug}` URLs

**Current Issue:** Top-level service paths and `/services/*` mirrors both appear in sitemap.

**Why It Matters:** Keyword cannibalization and crawl budget waste.

**Recommended Change:** Remove `/services/*` from sitemap; add canonical on mirror pages pointing to top-level URLs.

**Expected Impact:** SEO

**Priority:** High

### SEO7-02: Client-side FAQ and Review schema on homepage

**Current Issue:** `FAQSchema` and `ReviewSchema` inject via `useEffect`; may be missed by some crawlers.

**Why It Matters:** Rich results depend on reliable schema delivery.

**Recommended Change:** Server-render JSON-LD via `HomepageSchema` component in layout or page wrapper.

**Expected Impact:** SEO

**Priority:** High

### SEO7-03: Blog title year drift

**Current Issue:** Excel Automation Cost post title references 2025 in registry.

**Why It Matters:** Stale dates reduce click-through and credibility.

**Recommended Change:** Update to 2026 in registry and post component.

**Expected Impact:** SEO

**Priority:** Medium

### SEO7-04: Thin internal linking on newer blog posts

**Current Issue:** Some posts have fewer than 3 internal links to services and case studies.

**Why It Matters:** Internal links are primary authority distribution mechanism on this site.

**Recommended Change:** Enforce 3–5 links via `BlogPostCTA` and body copy standards.

**Expected Impact:** SEO

**Priority:** Medium

### SEO7-05: Dual SEO system (SSR metadata + client SEO.jsx)

**Current Issue:** Service pages set metadata in layout.jsx and also mount client `<SEO>` component.

**Why It Matters:** Redundant; potential for mismatch after hydration.

**Recommended Change:** Prefer SSR metadata; use client SEO only where `'use client'` pages require it.

**Expected Impact:** SEO

**Priority:** Low

---

## 8. Local SEO Audit

### L8-01: Single Utah landing page is correct approach

**Current Issue:** No issue; `/excel-consultant-utah` covers Springville, SLC, Provo, Ogden without doorway pages.

**Why It Matters:** Google penalizes city doorway pages with thin duplicate content.

**Recommended Change:** Maintain one canonical Utah page. Strengthen with case study and service links.

**Expected Impact:** SEO, Trust

**Priority:** Medium

### L8-02: Utah page internal linking

**Current Issue:** Limited cross-links to case studies and contact from Utah page body.

**Why It Matters:** Local visitors need fast paths to proof and consultation.

**Recommended Change:** Add 2–3 contextual internal links to relevant case studies and `/contact`.

**Expected Impact:** Conversion, SEO

**Priority:** Low

### L8-03: Google Business Profile and citations

**Current Issue:** Operational tasks not tracked in codebase.

**Why It Matters:** Local pack visibility for Utah queries.

**Recommended Change:** Weekly GBP posts, review requests, citation consistency (NAP). Document in TASK_BREAKDOWN.md.

**Expected Impact:** SEO, Trust

**Priority:** Low (operational)

---

## 9. Content Expansion Plan

See dedicated roadmap: [CONTENT_EXPANSION_ROADMAP.md](./CONTENT_EXPANSION_ROADMAP.md).

**Summary:** 15 high-priority Access topics identified. 14 blog posts exist; 11 new posts planned to close gaps. `/pricing` covers consultant pricing; strengthen internal links.

**Expected Impact:** SEO, Authority, Lead Generation

**Priority:** High

---

## 10. Lead Generation Audit

### LG10-01: Contact two-step form

**Current Issue:** None; form matches strategy (service select → details, estimate intent pre-fill).

**Why It Matters:** N/A

**Recommended Change:** Maintain. Add helper text on captcha only.

**Expected Impact:** Conversion

**Priority:** Low

### LG10-02: Lead magnets functional but no nurture

**Current Issue:** Three PDFs, email capture, SMTP notification; no ConvertKit/Mailchimp sequence.

**Why It Matters:** Lost follow-up revenue from checklist downloaders.

**Recommended Change:** Phase 5: integrate email automation. Current flow acceptable for launch.

**Expected Impact:** Conversion

**Priority:** Medium (future)

### LG10-03: GA4 events

**Current Issue:** phone_click, form_submit, calculator_use implemented; blog_read and case_study_view added.

**Why It Matters:** Conversion tracking enables weekly optimization.

**Recommended Change:** Verify events in GA4 debug mode monthly.

**Expected Impact:** Conversion

**Priority:** Low

### LG10-04: CTA language aligned

**Current Issue:** None; `CTA.primary` and `CTA.secondary` match preferred language.

**Why It Matters:** N/A

**Recommended Change:** Use preferred variants in blog CTAs where context fits ("Discuss Your Database Project" on Access posts).

**Expected Impact:** Conversion

**Priority:** Low

---

## Implementation Priority Summary

| Priority | Items |
|----------|-------|
| **High** | H1-01, H1-02, H2-01, H2-02, C3-01, T4-01, SEO7-01, SEO7-02, Content expansion |
| **Medium** | H1-03, H1-05, H2-04, C3-02, C3-04, S5-01, S5-02, S5-03, CS6-01, CS6-02, SEO7-03, SEO7-04, L8-01, LG10-02 |
| **Low** | H1-04, H2-03, C3-03, T4-03, CS6-03, SEO7-05, L8-02, L8-03, LG10-01, LG10-03, LG10-04 |
