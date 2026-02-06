# PRD — GoldmannDevelopmentLLC.com
### React / Next.js + Supabase + Vercel — SEO & Backlink Optimized

**Version:** 1.1 (SEO + Backlink Expansion)  
**Date:** February 06, 2026  
**Owner:** Bernie Goldmann — Goldmann Development LLC  

---

## 1. Objective

Rebuild **goldmanndevelopmentllc.com** as a high‑authority, SEO‑first, conversion‑optimized cybersecurity website using a modern stack (**React / Next.js, Supabase, Vercel**) while preserving all current services and expanding:

- Search engine visibility (technical SEO + content SEO)
- Authority via **internal & external backlinks**
- Lead generation for enterprise security services
- Brand trust for CISOs, CTOs, and compliance buyers

---

## 2. Core SEO Strategy

### 2.1 Technical SEO (Must-Have)

- Next.js App Router with **server-side rendering (SSR)** for all money pages
- Static generation (ISR) for blog/resources
- Clean semantic HTML5 structure
- Core Web Vitals targets:
  - LCP < 2.0s
  - CLS < 0.1
  - INP < 200ms
- XML Sitemap (auto-generated)
- robots.txt (environment-aware)
- Canonical URLs on every page
- 301 redirects from all legacy URLs
- OpenGraph + Twitter cards
- JSON‑LD Schema:
  - Organization
  - Service
  - FAQ
  - Article
  - Breadcrumb

---

## 3. Backlink Strategy (Built Into Site Architecture)

### 3.1 Internal Backlinks (Authority Flow)

Every service page must internally link to:
- Related services
- At least 2 blog posts
- 1 case study
- Contact / CTA

**Example:**
```
Pentesting →
  Cloud Security →
    DevSecOps →
      Compliance →
        vCISO →
          Incident Response
```

Footer-wide persistent backlinks:
- All services
- About
- Contact
- Blog
- Security & Responsible Disclosure
- Privacy / Terms

---

### 3.2 External Backlinks (Planned & Supported)

#### Authoritative outbound links (nofollow where required):
- OWASP Top 10
- NIST SP 800‑53
- ISO/IEC 27001
- CISA
- Cloud providers (AWS, GCP, Azure security docs)

These increase **topical authority** and trust.

---

### 3.3 Cross‑Project Backlinks (Goldmann Network)

Add a **“Goldmann Group” ecosystem section** (footer + About page):

Backlinks to:
- probwin.ai
- aicalcoach.com
- 0098listing.com
- housecalldoctor.ir
- acfixfinder.com
- opensignalfoundation.org

Rules:
- Contextual backlinks only (not link farms)
- Descriptive anchor text
- One backlink per page max

---

## 4. SEO‑Driven Page Structure

### 4.1 Homepage

- H1: Enterprise Cybersecurity & Offensive Security Services
- H2 blocks for each service (SEO indexable)
- Trust signals (certifications, NDA-safe clients)
- Internal links to all services
- CTA blocks every ~2 scroll depths

---

### 4.2 Service Pages (Money Pages)

Each service page must include:

- H1: `<Service Name> Services`
- H2: What We Do
- H2: Who This Is For
- H2: Our Methodology
- H2: Deliverables
- H2: Related Services (internal links)
- H2: FAQs (schema-enabled)
- CTA: “Request Scope”

---

### 4.3 Blog / Resources (Traffic Engine)

Content types:
- “What is …” explainers
- Comparison posts
- Compliance checklists
- Security breach analyses
- DevSecOps best practices
- SOC 2 / ISO readiness guides

SEO rules:
- 1 primary keyword
- 3–5 secondary keywords
- Internal links to services
- Outbound authority links
- Table of contents
- 1200–2500 words per article

---

## 5. Supabase Content Model (SEO-Aware)

### Tables (SEO Fields Added)

**services**
- slug
- title
- seo_title
- meta_description
- og_image
- faq_json

**posts**
- slug
- title
- seo_title
- meta_description
- tags
- internal_links (jsonb)

**case_studies**
- industry
- anonymized_results
- related_services

---

## 6. Backlink Automation & Growth Hooks

- RSS feed for blog syndication
- Auto‑generated `/resources/` hub
- Public security checklists (link‑bait assets)
- “Security Glossary” (A–Z pages)
- Case study snippets embeddable by partners
- Open Responsible Disclosure page (attracts backlinks)

---

## 7. Analytics & SEO Monitoring

- Google Search Console
- Bing Webmaster Tools
- Plausible / PostHog
- Weekly crawl error reports
- Keyword tracking (external tool ready)

---

## 8. Acceptance Criteria (SEO)

- All pages indexed correctly
- No duplicate titles or descriptions
- Lighthouse SEO score ≥ 95
- Schema validation passes
- Backlink sections present and crawlable
- Internal link depth ≤ 3 clicks

---

## 9. Phase Roadmap

**Phase 1 (Launch)**
- Core pages + services
- SEO foundation
- Backlink structure live

**Phase 2**
- Blog scale (20–30 posts)
- Authority assets
- Partner backlinks

**Phase 3**
- Client portal
- Multi‑language
- Programmatic SEO pages

---

## 10. Final Note

This PRD is designed so the website:
- Ranks competitively in cybersecurity keywords
- Converts enterprise leads
- Builds long‑term domain authority
- Integrates seamlessly into the Goldmann ecosystem

---

**END OF PRD**
