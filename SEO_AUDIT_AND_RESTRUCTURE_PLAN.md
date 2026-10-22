# SEO Audit & Restructure Plan - rejishkhanal.com.np

Date: 2026-10-22
Status: DESTRUCTIVE actions (redirects/noindex/deletions) require manual GSC + GA4 + backlink review before implementation.

---

## EXECUTIVE SUMMARY

### Critical Findings

| # | Issue | Severity |
|---|-------|----------|
| 1 | Homepage H1 "Technical SEO Expert in Nepal" cannibalizes /technical-seo-expert-nepal AND /seo-expert-nepal | CRITICAL |
| 2 | /blog/top-seo-expert-nepal-best-seo-freelancer is a commercial SEO service page disguised as a blog post | CRITICAL |
| 3 | /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo duplicates /seo-specialist-kathmandu (~80%) | CRITICAL |
| 4 | /blog/seo-specialist-in-kathmandu-nepal overlaps both Kathmandu pages (~85%) | HIGH |
| 5 | /seo-specialist-kathmandu has a visible "SEO Keywords This Page Is Built to Target" keyword list on-page | CRITICAL |
| 6 | Footer copyright: "Independent Technical SEO Technical SEO Expert" - word duplication | MEDIUM |
| 7 | /services service grid links all CTAs to /contact instead of individual service pages | MEDIUM |
| 8 | Blog posts do NOT link back to commercial service pages with descriptive anchors | MEDIUM |
| 9 | /wordpress-seo-expert-nepal also has a "Keywords This Page Targets" visible keyword list | HIGH |
| 10 | All 57 URLs return 200, self-canonical, valid JSON-LD (per seo-qa-report.md) | OK |

### GSC / GA4 / Backlink Data - NOT AVAILABLE
No destructive actions will be implemented. All redirect/consolidation/remove recommendations are marked as PROPOSED.

---

## PHASE 1: COMPLETE SEO INVENTORY

### PRIMARY COMMERCIAL PAGE

#### 1. /seo-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 OK |
| Indexability | Index, Follow |
| Canonical | self-referencing |
| Meta Title | "SEO Expert in Nepal | Rejish Khanal" |
| Meta Description | "Work with Rejish Khanal, an SEO expert in Nepal providing technical SEO, content optimization, local SEO, AEO, GEO, and search strategy." |
| H1 | "SEO Expert in Nepal for Technical SEO and Organic Growth" |
| Primary Keyword | SEO expert in Nepal |
| Secondary Keywords | freelance SEO expert Nepal, SEO freelancer Nepal, hire SEO expert Nepal, independent SEO expert Nepal, freelance SEO services Nepal |
| Search Intent | Transactional / Commercial investigation |
| Internal Links IN | 19 pages (all commercial pages, footer, services, about, tools) |
| Internal Links OUT | /contact, /seo-audit-nepal, /technical-seo-expert-nepal, /seo-consultant-nepal, /local-seo-services-nepal, /case-studies |
| Schema | ProfessionalService, Service, WebPage, BreadcrumbList, FAQPage |
| Content Similarity | HIGH overlap with /seo-specialist-kathmandu (~70%), /blog/top-seo-expert-nepal-best-seo-freelancer (~65%) |
| Organic Clicks | MANUAL: Check GSC |
| Organic Impressions | MANUAL: Check GSC |
| Avg Position | MANUAL: Check GSC |
| Conversions | MANUAL: Check GA4 |
| Backlinks | MANUAL: Check Ahrefs/GSC Links |

RECOMMENDED ACTION: KEEP AND IMPROVE. This is the primary commercial landing page. Strengthen as the hub page for the entire "SEO expert Nepal" cluster.

Specific improvements:
- Add a dedicated section for "freelance SEO expert in Nepal" / "hire SEO expert in Nepal" / "independent SEO expert" language naturally
- Add pricing/engagement models section (transactional intent requires commercial detail)
- Add social proof (client logos, testimonials, or metrics)
- Strengthen internal links to all sub-service pages with descriptive anchor text
- Remove generic filler and add Nepal-market-specific proof points

---

### RELATED COMMERCIAL PAGES

#### 2. /seo-consultant-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "SEO Consultant in Nepal | Strategy & Advice | Rejish Khanal" (69 chars - may truncate) |
| H1 | "SEO Consultant in Nepal for Practical Strategy and Advice" |
| Primary Keyword | SEO consultant in Nepal |
| Search Intent | Advisory / Consulting |
| Internal Links IN | 8 pages |
| Content Similarity | LOW overlap - well differentiated |
| Recommended Action | KEEP AND IMPROVE |

Issues:
- Title is 69 chars (over 60-char recommendation)
- Add fractional/retainer engagement models more prominently
- Add "fractional SEO consultant Nepal" secondary keyword naturally

---

#### 3. /technical-seo-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "Technical SEO Expert in Nepal | Rejish Khanal" |
| H1 | "Technical SEO Expert in Nepal for Complex Website Issues" |
| Primary Keyword | technical SEO expert in Nepal |
| Search Intent | Problem-solving / Commercial |
| Internal Links IN | 15+ pages |
| Content Similarity | HIGH overlap with homepage (~60%) - homepage H1 targets same keyword |
| Recommended Action | KEEP AND IMPROVE - MUST resolve homepage overlap |

Critical issue: Homepage H1 "Technical SEO Expert in Nepal" directly targets the same primary keyword. See Homepage section.

---

#### 4. /seo-audit-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "SEO Audit Services in Nepal | Rejish Khanal" |
| H1 | "SEO Audit in Nepal to Find What Is Hurting Your Rankings, Traffic, and Leads" |
| Primary Keyword | SEO audit services Nepal |
| Search Intent | Transactional (defined deliverable) |
| Content Similarity | LOW overlap |
| Recommended Action | KEEP AND IMPROVE |

Improvements:
- Add pricing anchor or starting price range
- Add sample audit deliverable screenshot or PDF preview
- Add turnaround time prominently (currently buried in FAQ)

---

#### 5. /local-seo-services-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "Local SEO Services in Nepal | Rejish Khanal" |
| H1 | "Local SEO Services in Nepal to Rank on Google Maps and Local Search" |
| Primary Keyword | local SEO services Nepal |
| Search Intent | Transactional / Local commercial |
| Content Similarity | LOW overlap |
| Recommended Action | KEEP AND IMPROVE |

Improvements:
- Add case study embed (local-seo-restaurant case study exists)
- Add Google Business Profile optimization screenshot/example
- Add Nepal-specific local SEO statistics

---

#### 6. /seo-specialist-kathmandu

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "SEO Specialist in Kathmandu | Rejish Khanal" |
| H1 | "SEO Expert in Kathmandu Helping Businesses Rank Higher, Get More Traffic, and Generate Better Leads" |
| Primary Keyword | SEO expert in Kathmandu |
| Secondary Keywords | SEO consultant Kathmandu, SEO services Kathmandu, local SEO expert Kathmandu |
| Content Similarity | CRITICAL OVERLAP with /seo-expert-nepal (~70%), two Kathmandu blog posts (~80-85%) |
| Recommended Action | REPOSITION - resolve 3-way blog cannibalization |

Critical issues:
1. URL says "specialist" but H1 says "expert" - keep URL for ranking preservation, use "expert" in body
2. "SEO Keywords This Page Is Built to Target" section is visible on-page - lists 15 keywords including "SEO expert in Nepal", "SEO consultant in Nepal", "AEO expert in Nepal", "GEO expert in Nepal". This is keyword stuffing visible to users and cannibalizes /seo-expert-nepal. REMOVE ENTIRELY.
3. Page repeats "SEO expert in Kathmandu" unnaturally

Specific fixes:
- Remove the keyword list section immediately
- Refocus content exclusively on Kathmandu-local intent
- Remove broad "SEO expert in Nepal" targeting from this page
- Add Kathmandu-specific case studies, local results, neighborhood knowledge
- "specialist" appears only in title (URL constraint) and natural context

---

#### 7. /wordpress-seo-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "WordPress SEO Expert in Nepal | Rejish Khanal" |
| H1 | "WordPress SEO Expert in Nepal for Faster, Crawlable, and Rankable Websites" |
| Primary Keyword | WordPress SEO expert Nepal |
| Content Similarity | LOW overlap |
| Recommended Action | KEEP AND IMPROVE |

Improvements:
- Page is thinner than others - add WooCommerce section, plugin comparison table
- Add WordPress-specific case study or speed improvement metrics
- Remove the "Keywords This Page Targets" section (same keyword-stuffing concern)

---

#### 8. /google-search-console-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "Google Search Console Expert in Nepal | Rejish Khanal" |
| H1 | "Google Search Console Expert in Nepal for Indexing, Coverage & Search Performance" |
| Primary Keyword | Google Search Console expert Nepal |
| Content Similarity | LOW overlap - well differentiated niche |
| Recommended Action | RETAIN TEMPORARILY PENDING DATA - check GSC impressions; keep if >100/mo |

---

#### 9. /core-web-vitals-optimization

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "Core Web Vitals Optimization Services | Rejish Khanal" |
| H1 | "Core Web Vitals Optimization in Nepal for Faster Websites and Better User Experience" |
| Primary Keyword | Core Web Vitals optimization Nepal |
| Content Similarity | LOW overlap |
| Recommended Action | KEEP AND IMPROVE |

Improvement: Add own website's CWV metrics as proof (LCP 1.4s, INP 82ms, CLS 0.02 shown on homepage telemetry).

---

#### 10. /aeo-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "AEO Expert in Nepal | Answer Engine Optimization" |
| H1 | "AEO Expert in Nepal Helping Businesses Get Found in Answer Engines" |
| Primary Keyword | AEO expert Nepal |
| Content Similarity | LOW overlap |
| Recommended Action | KEEP - emerging keyword, first-mover advantage |

---

#### 11. /geo-expert-nepal

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "GEO Expert in Nepal | Generative Engine Optimization" |
| H1 | "GEO Expert in Nepal Helping Brands Become Visible in AI Search" |
| Primary Keyword | GEO expert Nepal |
| Content Similarity | LOW overlap with AEO page |
| Recommended Action | KEEP - emerging keyword, first-mover advantage |

Note: AEO and GEO pages should cross-link more explicitly and add "AEO vs GEO: What's the Difference?" comparison section.

---

#### 12. /services

| Field | Value |
|-------|-------|
| HTTP Status | 200 |
| Indexability | Index, Follow |
| Canonical | self |
| Meta Title | "SEO and Web Development Services | Rejish Khanal" |
| H1 | "Technical SEO & Engineering Services Organized Around Problems" |
| Content Similarity | Hub page - appropriate overlap by design |
| Recommended Action | KEEP AND IMPROVE |

Critical issue: The 10-card service grid has all CTAs pointing to /contact. Each card should link to its corresponding service page:
- Technical SEO Audit -> /technical-seo-expert-nepal
- Core Web Vitals -> /core-web-vitals-optimization
- AEO -> /aeo-expert-nepal
- GEO -> /geo-expert-nepal
- Local SEO -> /local-seo-services-nepal
- SEO Consultant -> /seo-consultant-nepal

---

### HOMEPAGE (/)

| Field | Value |
|-------|-------|
| H1 | "Technical SEO Expert in Nepal, I Fix What's Preventing Your Website from Ranking on Google" |
| Conflict | Directly competes with /technical-seo-expert-nepal (same primary keyword) |

RECOMMENDED ACTION: REPOSITION homepage H1.

The homepage should not compete with its own service pages. Proposed new H1:
- "Rejish Khanal - Technical SEO & Full-Stack Development" (brand-focused)
- Or: "I Fix What's Preventing Your Website from Ranking on Google" (benefit-focused)

This frees /technical-seo-expert-nepal to own "Technical SEO Expert in Nepal" and /seo-expert-nepal to own "SEO Expert in Nepal."

---

### POTENTIALLY OVERLAPPING BLOG POSTS

#### 13. /blog/top-seo-expert-nepal-best-seo-freelancer

| Field | Value |
|-------|-------|
| Meta Title | "SEO, AEO and GEO Expert in Nepal | How to Choose the Right Expert" |
| H1 | "SEO, AEO and GEO Expert in Nepal: How to Choose the Right Expert" |
| Primary Keyword targeted | SEO expert in Nepal, top SEO expert Nepal, best SEO freelancer Nepal |
| Content Type | Commercial - a long-form SEO service page |
| Content Similarity | ~65% overlap with /seo-expert-nepal |
| Recommended Action | CONSOLIDATE into /seo-expert-nepal - PROPOSED, requires GSC data review |

Rationale: This post is not a genuine blog article. It is a commercial service page disguised as a blog post. Textbook keyword cannibalization.

Before consolidating, check:
1. Does this URL have unique backlinks? (GSC Links report / Ahrefs)
2. Does it receive organic traffic? (GSC Performance)
3. Does it generate conversions? (GA4)

If traffic/backlinks exist: 301 redirect to /seo-expert-nepal and migrate unique content sections.
If no traffic/backlinks: Remove from sitemap, keep as noindex or delete after 90 days.

---

#### 14. /blog/freelance-seo-web-developer-nepal-2026

| Field | Value |
|-------|-------|
| Meta Title | "Freelance SEO & Web Developer in Nepal | Rejish Khanal" |
| H1 | "Freelance SEO and Web Developer in Nepal: Services, Process, and Pricing (2026 Guide)" |
| Primary Keyword | freelance SEO and web developer in Nepal |
| Content Type | Informational + Commercial investigation |
| Content Similarity | LOW overlap - focuses on SEO + development combination, pricing ranges |
| Recommended Action | KEEP AND IMPROVE |

This post is well-positioned. Keep focused on the dual-discipline angle. Add internal link to /seo-expert-nepal for readers who only need SEO.

---

#### 15. /blog/how-to-choose-seo-specialist-nepal

| Field | Value |
|-------|-------|
| Meta Title | "How to Choose the Best SEO Specialist | Rejish Khanal" |
| H1 | "SEO Specialist in Nepal: How to Hire the Right Expert" |
| Primary Keyword | how to choose an SEO expert in Nepal |
| Content Type | Informational (hiring guide) |
| Content Similarity | MEDIUM overlap - framed as hiring guide |
| Recommended Action | KEEP AND IMPROVE |

Improvements:
- 23 min read - consider tighter guide with downloadable checklist
- Add "SEO hiring checklist" with checkboxes
- Add "red flags" section with specific warning signs
- Internal link to /seo-expert-nepal (hire intent) and /seo-consultant-nepal (advisory)
- Avoid duplicating full service descriptions - link to service pages instead

---

#### 16. /blog/how-to-hire-remote-seo-expert

| Field | Value |
|-------|-------|
| Primary Keyword | how to hire a remote SEO expert |
| Content Similarity | LOW overlap - remote/hiring focus |
| Recommended Action | KEEP - distinct remote-hire intent |

---

#### 17. /blog/seo-specialist-in-kathmandu-nepal

| Field | Value |
|-------|-------|
| Meta Title | "SEO Specialist in Kathmandu, Nepal | Rejish Khanal" |
| H1 | "SEO Specialist in Kathmandu, Nepal | Technical SEO, AEO and GEO Expert" |
| Primary Keyword | SEO specialist in Kathmandu |
| Content Similarity | ~85% overlap with /seo-specialist-kathmandu, ~70% overlap with the other Kathmandu blog post |
| Recommended Action | CONSOLIDATE into /seo-specialist-kathmandu - PROPOSED, requires GSC data review |

Rationale: Almost a word-for-word duplicate of /seo-specialist-kathmandu. Three pages targeting "SEO Kathmandu" is unsustainable.

---

#### 18. /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo

| Field | Value |
|-------|-------|
| Meta Title | "SEO Expert in Kathmandu, Nepal | Technical | Rejish Khanal" |
| H1 | "SEO Expert in Kathmandu, Nepal | Technical SEO, AEO and GEO Specialist" |
| Primary Keyword | SEO expert in Kathmandu |
| Content Similarity | ~80% overlap with /seo-specialist-kathmandu, ~85% overlap with /blog/seo-specialist-in-kathmandu-nepal |
| Recommended Action | CONSOLIDATE into /seo-specialist-kathmandu - PROPOSED, requires GSC data review |

Rationale: Third page in the Kathmandu keyword cluster. Same content, different format.

---

## PHASE 2: PRIMARY KEYWORD MAP

### Enforced Keyword Map

| URL | Page Type | Primary Keyword | Intent |
|-----|-----------|----------------|--------|
| /seo-expert-nepal | Primary commercial landing | SEO expert in Nepal | Transactional |
| /seo-consultant-nepal | Consulting/advisory | SEO consultant in Nepal | Commercial investigation |
| /technical-seo-expert-nepal | Technical implementation | technical SEO expert in Nepal | Problem-solving |
| /seo-audit-nepal | Defined deliverable | SEO audit services Nepal | Transactional |
| /local-seo-services-nepal | Local commercial | local SEO services Nepal | Local transactional |
| /seo-specialist-kathmandu | Kathmandu-local commercial | SEO expert in Kathmandu | Local commercial |
| /wordpress-seo-expert-nepal | WordPress niche | WordPress SEO expert Nepal | Niche commercial |
| /google-search-console-expert-nepal | GSC niche | Google Search Console expert Nepal | Niche commercial |
| /core-web-vitals-optimization | Performance niche | Core Web Vitals optimization Nepal | Problem-solving |
| /aeo-expert-nepal | AEO niche | AEO expert Nepal | Emerging commercial |
| /geo-expert-nepal | GEO niche | GEO expert Nepal | Emerging commercial |
| /blog/freelance-seo-web-developer-nepal-2026 | Informational/commercial | freelance SEO and web developer in Nepal | Commercial investigation |
| /blog/how-to-choose-seo-specialist-nepal | Informational | how to choose an SEO expert in Nepal | Informational |
| /blog/how-to-hire-remote-seo-expert | Informational | how to hire a remote SEO expert | Informational |

### Terminology Rules

- Use "expert" when describing Rejish across all pages
- Retain "specialist" only in /seo-specialist-kathmandu (URL constraint) and natural contextual usage
- Do not repeatedly call Rejish an "SEO specialist" - replace with "SEO expert" in body copy

---

## PHASE 3: CANNIBALIZATION MATRIX

### Overlap Map

CLUSTER: "SEO expert / SEO services in Nepal"
- / (homepage H1) -> REMOVE from cluster
- /seo-expert-nepal -> ANCHOR PAGE
- /blog/top-seo-expert-nepal-best-seo-freelancer -> CONSOLIDATE into anchor
- /seo-specialist-kathmandu -> REFOCUS to Kathmandu only

CLUSTER: "Technical SEO expert Nepal"
- / (homepage H1) -> REMOVE from cluster
- /technical-seo-expert-nepal -> ANCHOR PAGE
- /blog/technical-seo-checklist-nepal -> KEEP (informational, distinct)

CLUSTER: "SEO Kathmandu"
- /seo-specialist-kathmandu -> ANCHOR PAGE
- /blog/seo-specialist-in-kathmandu-nepal -> CONSOLIDATE
- /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo -> CONSOLIDATE

CLUSTER: "SEO consultant Nepal"
- /seo-consultant-nepal -> ANCHOR PAGE (well isolated)

CLUSTER: "SEO audit Nepal"
- /seo-audit-nepal -> ANCHOR PAGE (well isolated)

CLUSTER: "Local SEO Nepal"
- /local-seo-services-nepal -> ANCHOR PAGE (well isolated)

CLUSTER: "WordPress SEO Nepal"
- /wordpress-seo-expert-nepal -> ANCHOR PAGE (well isolated)

CLUSTER: "Freelance SEO Nepal"
- /blog/freelance-seo-web-developer-nepal-2026 -> KEEP (SEO+dev combo angle)
- /blog/how-to-choose-seo-specialist-nepal -> KEEP (hiring guide angle)
- /seo-expert-nepal -> ANCHOR for commercial intent

### Page Classification Summary

| URL | Classification | Action |
|-----|---------------|--------|
| / | Reposition | Change H1 to remove keyword overlap |
| /seo-expert-nepal | Keep and improve | Strengthen as primary commercial hub |
| /seo-consultant-nepal | Keep and improve | Fix title length, add fractional consultant angle |
| /technical-seo-expert-nepal | Keep and improve | Add JS SEO / migration deep-dive sections |
| /seo-audit-nepal | Keep and improve | Add pricing anchor, sample deliverable |
| /local-seo-services-nepal | Keep and improve | Add case study embed, GBP examples |
| /seo-specialist-kathmandu | Reposition | Remove keyword list section, Kathmandu-only focus |
| /wordpress-seo-expert-nepal | Keep and improve | Expand with WooCommerce, plugin comparison |
| /google-search-console-expert-nepal | Retain temporarily pending data | Check GSC impressions |
| /core-web-vitals-optimization | Keep and improve | Add own CWV metrics as trust signal |
| /aeo-expert-nepal | Keep | Emerging keyword, first-mover advantage |
| /geo-expert-nepal | Keep | Emerging keyword, first-mover advantage |
| /services | Keep and improve | Fix service card CTAs to link to service pages |
| /blog/top-seo-expert-nepal-best-seo-freelancer | Consolidate | PROPOSED - merge into /seo-expert-nepal |
| /blog/freelance-seo-web-developer-nepal-2026 | Keep and improve | Focus on SEO+dev combination angle |
| /blog/how-to-choose-seo-specialist-nepal | Keep and improve | Add hiring checklist, red flags |
| /blog/how-to-hire-remote-seo-expert | Keep | Distinct remote-hire intent |
| /blog/seo-specialist-in-kathmandu-nepal | Consolidate | PROPOSED - merge into /seo-specialist-kathmandu |
| /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo | Consolidate | PROPOSED - merge into /seo-specialist-kathmandu |

---

## PHASE 4: INTERNAL LINKING ARCHITECTURE

### Current State
- Footer links all 6 main SEO pages from every page
- Cross-links between commercial pages exist but are inconsistent
- Blog posts do NOT link back to commercial service pages with descriptive anchors
- /services grid cards all point to /contact instead of individual service pages

### Required Internal Link Additions

1. From /services: Each service card links to its dedicated page (not /contact)
2. From every blog post: Add 2-3 contextual links to relevant commercial pages
3. From /seo-expert-nepal: Add "Related services" section linking to all sub-services
4. From /technical-seo-expert-nepal: Add cross-links to /seo-audit-nepal, /core-web-vitals-optimization, /wordpress-seo-expert-nepal
5. From /seo-consultant-nepal: Add cross-links to /seo-expert-nepal (implementation) and /seo-audit-nepal (audit deliverable)

---

## PHASE 5: APPLE DESIGN DIRECTION FOR FRONTEND

The frontend redesign must follow Apple's design language. Key principles to apply:

### Typography
- Use SF Pro Display for headings, SF Pro Text for body (or Inter as web fallback - already in use)
- Tighten heading letter-spacing: -0.02em on large text, near 0 on body
- Tight line-height on large headings (1.05), looser on body (1.5)
- Optical sizing: font-optical-sizing: auto

### Materials and Depth
- Nav and toolbars: translucent with backdrop-filter: blur(20px) saturate(180%)
- Cards: subtle backdrop blur with rgba backgrounds
- Larger surfaces = stronger blur + deeper shadow
- Never stack light translucent on light translucent

### Motion
- Critically damped springs for UI interactions (damping 1.0, response 0.3-0.4)
- Pointer-down feedback, not release
- Interruptible animations
- prefers-reduced-motion: replace springs with opacity cross-fades

### Layout
- Generous whitespace
- Clear typographic hierarchy using weight + size + leading as a set
- SF Symbol-style iconography consistency
- System font first, custom only with reason

---

## PHASE 6: IMPLEMENTATION PLAN

### SAFE TO IMPLEMENT NOW (no data required)

1. Fix footer copyright: remove "Technical SEO" duplicate word
2. Fix /services service card CTAs to link to individual service pages
3. Remove "SEO Keywords This Page Is Built to Target" section from /seo-specialist-kathmandu
4. Remove "Keywords This Page Targets" section from /wordpress-seo-expert-nepal
5. Reposition homepage H1 to remove "Technical SEO Expert in Nepal" keyword overlap
6. Fix /seo-consultant-nepal title length (69 chars -> target 55-60 chars)
7. Add internal links from blog posts to relevant commercial pages
8. Apply Apple design system to frontend

### REQUIRES MANUAL GSC/GA4/BACKLINK REVIEW

1. Consolidate /blog/top-seo-expert-nepal-best-seo-freelancer into /seo-expert-nepal
2. Consolidate /blog/seo-specialist-in-kathmandu-nepal into /seo-specialist-kathmandu
3. Consolidate /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo into /seo-specialist-kathmandu
4. Evaluate /google-search-console-expert-nepal for retention or removal
5. Evaluate /seo-specialist-uk-technical-seo-wordpress for retention or removal

### REQUIRES CODE CHANGES (safe, content-level)

1. Rewrite /seo-expert-nepal with stronger commercial positioning, engagement models, pricing anchors
2. Refocus /seo-specialist-kathmandu on Kathmandu-only intent
3. Expand /wordpress-seo-expert-nepal with WooCommerce and plugin comparison sections
4. Add "AEO vs GEO" comparison section to both AEO and GEO pages
5. Add pricing anchors to /seo-audit-nepal

---

## DECISIONS REQUIRING MANUAL REVIEW

These decisions CANNOT be made without GSC, GA4, and backlink data:

1. Whether to 301 redirect or noindex /blog/top-seo-expert-nepal-best-seo-freelancer
2. Whether to 301 redirect or noindex /blog/seo-specialist-in-kathmandu-nepal
3. Whether to 301 redirect or noindex /blog/seo-expert-kathmandu-nepal-aeo-geo-technical-seo
4. Whether /google-search-console-expert-nepal has enough search volume to justify its own page
5. Whether /seo-specialist-uk-technical-seo-wordpress should remain in the sitemap
6. Whether /free-seo-review overlaps with /contact and /seo-audit-nepal

### Data to check before making these decisions:

For each URL above, check in Google Search Console (last 12 months):
- Total organic clicks
- Total organic impressions
- Average position
- Top 10 ranking queries
- Whether any backlinks point to this URL (GSC Links report or Ahrefs)

For GA4:
- Organic landing page sessions
- Engagement rate
- Conversions/events triggered

Decision rule:
- If URL has >500 organic clicks OR has unique backlinks -> 301 redirect to anchor page, migrate unique content first
- If URL has 50-500 organic clicks and no backlinks -> add canonical to anchor page, keep URL live for 90 days, then 301
- If URL has <50 organic clicks and no backlinks -> remove from sitemap, add noindex, delete after 90 days
