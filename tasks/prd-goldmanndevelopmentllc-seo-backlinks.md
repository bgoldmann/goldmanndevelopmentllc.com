# PRD: GoldmannDevelopmentLLC.com — SEO, Backlinks & Stripe (Expanded)

**Version:** 1.2 (Expanded with User Stories + Stripe)  
**Date:** February 06, 2026  
**Owner:** Bernie Goldmann — Goldmann Development LLC  

---

## 1. Introduction / Overview

Rebuild **goldmanndevelopmentllc.com** as a high-authority, SEO-first, conversion-optimized cybersecurity website using a modern stack (**React / Next.js, Supabase, Vercel**). The site will preserve all current services and expand search engine visibility (technical and content SEO), authority via internal and external backlinks, lead generation for enterprise security services, and brand trust for CISOs, CTOs, and compliance buyers. **Stripe** is the payment system for one-time and/or recurring payments (e.g. "Request Scope" or vCISO retainer).

---

## 2. Goals

- All money pages use **server-side rendering (SSR)** for indexability and performance.
- Blog/resources use **ISR** with configurable revalidate.
- **Core Web Vitals** targets: LCP < 2.0s, CLS < 0.1, INP < 200ms.
- **Technical SEO**: XML sitemap, environment-aware robots.txt, canonical URLs on every page, 301 redirects for legacy URLs, OpenGraph and Twitter cards, JSON-LD schema (Organization, Service, FAQ, Article, Breadcrumb).
- **Internal link depth** ≤ 3 clicks; every service page links to related services, ≥2 blog posts, 1 case study, and contact/CTA.
- **Footer** and **Goldmann Group** sections provide persistent, crawlable backlinks.
- **Lighthouse SEO score** ≥ 95; no duplicate titles or descriptions; schema validation passes.
- **Stripe**: Support one-time payments (e.g. scope request) and optionally recurring subscriptions (e.g. vCISO); webhooks and optional Supabase persistence for CRM/fulfillment.

---

## 3. User Stories

Stories are ordered by dependency. Phase tags: **P1** = Phase 1 (Launch), **P2** = Phase 2 (Blog/authority), **P3** = Phase 3 (Portal/i18n/programmatic).

### 3.1 Supabase Content Model (P1)

#### US-001: services table SEO fields
**Description:** As a developer, I need the `services` table to include SEO and FAQ fields so that service pages can be optimized and FAQ schema can be rendered.

**Acceptance Criteria:**
- [ ] Table has columns: slug, title, seo_title, meta_description, og_image, faq_json
- [ ] Migration applied successfully
- [ ] Typecheck passes

#### US-002: posts table SEO fields
**Description:** As a developer, I need the `posts` table to include SEO and internal link metadata so that blog pages are indexable and internal linking is data-driven.

**Acceptance Criteria:**
- [ ] Table has columns: slug, title, seo_title, meta_description, tags, internal_links (jsonb)
- [ ] Migration applied successfully
- [ ] Typecheck passes

#### US-003: case_studies table fields
**Description:** As a developer, I need the `case_studies` table to include industry, anonymized results, and related services so that case studies can be linked from service pages.

**Acceptance Criteria:**
- [ ] Table has columns: industry, anonymized_results, related_services
- [ ] Migration applied successfully
- [ ] Typecheck passes

### 3.2 Technical SEO (P1)

#### US-004: Next.js App Router SSR for money pages
**Description:** As a search engine, I need money pages to be server-rendered so that content is indexable and fast.

**Acceptance Criteria:**
- [ ] Money pages use server components / SSR
- [ ] No client-only content for above-the-fold critical content
- [ ] Typecheck passes

#### US-005: Static generation (ISR) for blog/resources
**Description:** As a developer, I need blog and resource routes to use ISR so that content is fast and periodically refreshed.

**Acceptance Criteria:**
- [ ] Blog/resource routes use ISR with revalidate
- [ ] Revalidate interval configurable
- [ ] Typecheck passes

#### US-006: Semantic HTML5 and Core Web Vitals
**Description:** As a user and search engine, I need semantic structure and good performance so that the site is accessible and ranks well.

**Acceptance Criteria:**
- [ ] Semantic HTML5 tags used (header, main, nav, article, section, etc.)
- [ ] LCP < 2s, CLS < 0.1, INP < 200ms (measured)
- [ ] Typecheck passes

#### US-007: XML Sitemap and robots.txt
**Description:** As a search engine, I need a sitemap and robots.txt so that I can crawl the site correctly.

**Acceptance Criteria:**
- [ ] `/sitemap.xml` auto-generated from routes/data
- [ ] `robots.txt` environment-aware (e.g. disallow in staging if needed)
- [ ] Typecheck passes

#### US-008: Canonical URLs and 301 redirects
**Description:** As a search engine, I need canonical URLs and legacy redirects so that duplicate content and old URLs are handled.

**Acceptance Criteria:**
- [ ] Every page has a canonical link tag
- [ ] Redirect config for legacy URLs (301)
- [ ] Typecheck passes

#### US-009: OpenGraph and Twitter cards
**Description:** As a user sharing a link, I need rich previews so that shares look correct on social platforms.

**Acceptance Criteria:**
- [ ] OpenGraph and Twitter card meta tags on all public pages
- [ ] Typecheck passes

#### US-010: JSON-LD Schema (Organization, Service, FAQ, Article, Breadcrumb)
**Description:** As a search engine, I need structured data so that rich results can be shown.

**Acceptance Criteria:**
- [ ] Organization schema where appropriate
- [ ] Service schema on service pages
- [ ] FAQ schema on pages with FAQs
- [ ] Article schema on blog posts
- [ ] Breadcrumb schema on relevant pages
- [ ] Schema validation passes (e.g. Google Rich Results Test)
- [ ] Typecheck passes

### 3.3 Page Structure (P1)

#### US-011: Homepage SEO structure
**Description:** As a visitor and search engine, I need a clear homepage structure so that services and trust signals are visible.

**Acceptance Criteria:**
- [ ] H1: Enterprise Cybersecurity & Offensive Security Services
- [ ] H2 blocks for each service (SEO indexable)
- [ ] Trust signals (certifications, NDA-safe clients)
- [ ] Internal links to all services
- [ ] CTA blocks every ~2 scroll depths
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

#### US-012: Service page template
**Description:** As a visitor and search engine, I need consistent service pages so that I can compare offerings and take action.

**Acceptance Criteria:**
- [ ] H1: `<Service Name> Services`
- [ ] H2: What We Do, Who This Is For, Our Methodology, Deliverables, Related Services, FAQs
- [ ] FAQ schema enabled for FAQs
- [ ] CTA: "Request Scope"
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

#### US-013: Blog/Resources SEO
**Description:** As a content manager, I need blog and resource pages to follow SEO rules so that they rank and support internal linking.

**Acceptance Criteria:**
- [ ] 1 primary keyword and 3–5 secondary keywords per piece
- [ ] Internal links to services; outbound authority links where appropriate
- [ ] Table of contents for long articles
- [ ] 1200–2500 words per article (content guideline)
- [ ] Typecheck passes

### 3.4 Internal Backlinks (P1)

#### US-014: Service page internal links
**Description:** As a visitor, I need each service page to link to related content so that I can explore and convert.

**Acceptance Criteria:**
- [ ] Each service page links to related services
- [ ] At least 2 blog posts linked per service page
- [ ] 1 case study linked per service page
- [ ] Contact / CTA linked
- [ ] Typecheck passes

#### US-015: Footer persistent links
**Description:** As a visitor and crawler, I need the footer to link to key areas so that navigation and authority flow are consistent.

**Acceptance Criteria:**
- [ ] Footer links to: all services, About, Contact, Blog, Security & Responsible Disclosure, Privacy / Terms
- [ ] Links crawlable (no JS-only navigation for crawlers)
- [ ] Typecheck passes

### 3.5 External Backlinks (P1)

#### US-016: Authority outbound links
**Description:** As a visitor and search engine, I need authoritative outbound links so that the site demonstrates topical authority.

**Acceptance Criteria:**
- [ ] Support outbound links to OWASP Top 10, NIST SP 800-53, ISO/IEC 27001, CISA, cloud provider security docs
- [ ] nofollow where required (e.g. user-generated or paid contexts)
- [ ] Links contextual, not link farms
- [ ] Typecheck passes

### 3.6 Cross-Project / Goldmann Group (P1)

#### US-017: Goldmann Group ecosystem section
**Description:** As a visitor, I need to see the Goldmann Group ecosystem so that I understand the broader offering.

**Acceptance Criteria:**
- [ ] "Goldmann Group" block in footer and About page
- [ ] Links to: probwin.ai, aicalcoach.com, 0098listing.com, housecalldoctor.ir, acfixfinder.com, opensignalfoundation.org
- [ ] One backlink per page max; descriptive anchor text; contextual only
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### 3.7 Backlink Automation (P1/P2)

#### US-018: RSS feed for blog
**Description:** As a syndication partner or reader, I need an RSS feed so that I can subscribe to new content.

**Acceptance Criteria:**
- [ ] `/feed.xml` or equivalent; valid RSS
- [ ] Typecheck passes

#### US-019: /resources/ hub
**Description:** As a visitor and crawler, I need a resources hub so that all resources are discoverable.

**Acceptance Criteria:**
- [ ] Auto-generated `/resources/` hub listing resources
- [ ] Crawlable
- [ ] Typecheck passes

#### US-020: Security checklists and Glossary
**Description:** As a visitor or partner, I need public checklists and a glossary so that I can use and link to them.

**Acceptance Criteria:**
- [ ] Public security checklist pages (link-bait assets)
- [ ] Security Glossary (A–Z pages)
- [ ] Linkable, crawlable
- [ ] Typecheck passes

#### US-021: Responsible Disclosure page
**Description:** As a security researcher or partner, I need a clear responsible disclosure page so that I can report issues and the site can attract trust/backlinks.

**Acceptance Criteria:**
- [ ] Public Responsible Disclosure page with clear policy
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### 3.8 Analytics & SEO Monitoring (P1)

#### US-022: Analytics and SEO monitoring
**Description:** As an operator, I need analytics and SEO monitoring so that I can measure and fix issues.

**Acceptance Criteria:**
- [ ] Google Search Console and Bing Webmaster Tools ready (doc or config)
- [ ] Plausible or PostHog integrated
- [ ] Documentation or config for weekly crawl error reports and keyword tracking (external tool ready)
- [ ] Typecheck passes

### 3.9 Stripe Payment System (P1)

Implementation should follow the existing Stripe integration guide (e.g. `ralph-main 2/.cursor/rules/stripe.md`) for Next.js, Checkout, and webhooks.

#### US-023: Stripe environment and API wiring
**Description:** As a developer, I need Stripe SDK and env configured so that payment flows can be built.

**Acceptance Criteria:**
- [ ] Stripe SDK installed (server + client)
- [ ] Env vars for publishable and secret keys
- [ ] Server-side Stripe client initialized
- [ ] Typecheck passes

#### US-024: Checkout session for one-time payment
**Description:** As a visitor, I want to pay for a scope request or assessment deposit so that I can engage the service.

**Acceptance Criteria:**
- [ ] API route creates Stripe Checkout session (e.g. for "Request Scope" or assessment deposit)
- [ ] Redirects to Stripe Hosted Checkout
- [ ] Success and cancel URLs configured
- [ ] Typecheck passes

#### US-025: Checkout success and cancel pages
**Description:** As a visitor, I want clear feedback after payment or cancellation so that I know what happened.

**Acceptance Criteria:**
- [ ] `/checkout/success` and `/checkout/cancel` (or equivalent) pages exist
- [ ] Success page shows confirmation
- [ ] Cancel page returns user to CTA/service context
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

#### US-026: Stripe webhooks
**Description:** As a system, I need to handle Stripe events so that payment state stays in sync.

**Acceptance Criteria:**
- [ ] Webhook endpoint verifies Stripe signature
- [ ] Handles `checkout.session.completed` (and optionally `invoice.payment_succeeded` / `invoice.payment_failed`)
- [ ] Handlers idempotent
- [ ] Typecheck passes

#### US-027: Link payments to Supabase (optional)
**Description:** As an operator, I want payment/session data in Supabase so that I can use it for CRM and fulfillment.

**Acceptance Criteria:**
- [ ] On checkout completion, store customer/payment/session metadata in Supabase (e.g. `payments` or `leads` table)
- [ ] Migration applied if new table
- [ ] Typecheck passes

#### US-028: Billing portal or subscription (optional)
**Description:** As a customer, I want to manage my subscription or payment method so that I can update or cancel.

**Acceptance Criteria:**
- [ ] If scope includes recurring (e.g. vCISO retainer): Stripe Customer + subscription Checkout and/or Customer Billing Portal
- [ ] Documented in PRD/runbook
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

## 4. Functional Requirements

- **FR-1:** Next.js App Router with SSR for all money pages.
- **FR-2:** ISR for blog and resource routes with configurable revalidate.
- **FR-3:** Semantic HTML5; Core Web Vitals: LCP < 2.0s, CLS < 0.1, INP < 200ms.
- **FR-4:** XML sitemap auto-generated; robots.txt environment-aware.
- **FR-5:** Canonical URL on every page; 301 redirects for legacy URLs.
- **FR-6:** OpenGraph and Twitter card meta tags on all public pages.
- **FR-7:** JSON-LD schema: Organization, Service, FAQ, Article, Breadcrumb on relevant pages.
- **FR-8:** Homepage: H1, H2 per service, trust signals, internal links, CTAs every ~2 scroll depths.
- **FR-9:** Service pages: H1, H2s (What We Do, Who This Is For, Methodology, Deliverables, Related Services, FAQs), FAQ schema, "Request Scope" CTA.
- **FR-10:** Each service page links to related services, ≥2 blog posts, 1 case study, contact/CTA.
- **FR-11:** Footer links to all services, About, Contact, Blog, Security/Disclosure, Privacy/Terms.
- **FR-12:** Authority outbound links (OWASP, NIST, ISO, CISA, cloud docs); nofollow where required.
- **FR-13:** Goldmann Group section in footer and About with links to probwin.ai, aicalcoach.com, 0098listing.com, housecalldoctor.ir, acfixfinder.com, opensignalfoundation.org; one per page; descriptive anchors.
- **FR-14:** RSS feed for blog; auto-generated `/resources/` hub; public checklists and A–Z glossary; Responsible Disclosure page.
- **FR-15:** Analytics: GSC/Bing ready; Plausible or PostHog; doc/config for crawl and keyword tracking.
- **FR-16:** Stripe: env and SDK wired; Checkout session for one-time payment; success/cancel pages; webhook handling; optional Supabase persistence; optional billing portal/subscription.

---

## 5. Non-Goals

- **Phase 3 scope** (client portal, multi-language, programmatic SEO pages) is out of scope for this PRD unless explicitly added later.
- **Link buying or link farms** are not allowed; only contextual, descriptive backlinks.
- **In-house card form** for payments: use Stripe Checkout or Stripe Elements per the Stripe guide; do not store raw card data.
- **Cryptocurrency payments** are out of scope for this PRD (Stripe only).

---

## 6. Design Considerations

- **H1/H2:** One H1 per page; H2s for major sections (see service page template).
- **CTA placement:** CTAs every ~2 scroll depths on homepage; "Request Scope" on every service page.
- **Goldmann Group:** Footer and About page; one link per destination per page; descriptive anchor text.

---

## 7. Technical Considerations

- **Stack:** React, Next.js (App Router), Supabase, Vercel. Use [ralph-main 2/.cursor/rules/stripe.md](ralph-main%202/.cursor/rules/stripe.md) for Stripe (Next.js API routes, Checkout, webhooks).
- **Core Web Vitals:** LCP < 2s, CLS < 0.1, INP < 200ms.
- **Schema:** Organization, Service, FAQ, Article, Breadcrumb (JSON-LD).
- **Supabase tables:** services (slug, title, seo_title, meta_description, og_image, faq_json); posts (slug, title, seo_title, meta_description, tags, internal_links jsonb); case_studies (industry, anonymized_results, related_services).
- **Stripe:** Env vars (publishable + secret); webhook signature verification; idempotent event handling; optional `payments`/`leads` table in Supabase.

---

## 8. Success Metrics

- All pages indexed correctly; no duplicate titles or descriptions.
- Lighthouse SEO score ≥ 95.
- Schema validation passes (e.g. Rich Results Test).
- Backlink sections present and crawlable; internal link depth ≤ 3 clicks.
- Analytics (GSC, Bing, Plausible/PostHog) and crawl/keyword config in place.
- Stripe Checkout completes successfully; webhooks process without errors (and optional Supabase rows created).

---

## 9. Open Questions

1. **Legacy URL map:** Exact list of legacy URLs and their 301 targets?
2. **Keyword tracking:** Which external tool for keyword tracking (e.g. Ahrefs, SEMrush, other)?
3. **Partner backlinks:** Process for adding or approving partner backlinks to the site?
4. **Stripe use case:** One-time only (e.g. scope request deposit), subscription only, or both? If both, which products use which?
5. **Responsible Disclosure:** Legal review of policy wording before publish?

---

## 10. Phase Roadmap (from original PRD)

- **Phase 1 (Launch):** Core pages + services; SEO foundation; backlink structure live; Stripe one-time (and optional subscription) as scoped.
- **Phase 2:** Blog scale (20–30 posts); authority assets; partner backlinks.
- **Phase 3:** Client portal; multi-language; programmatic SEO pages.

---

**END OF EXPANDED PRD**
