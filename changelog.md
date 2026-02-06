# Changelog

All notable changes to the Goldmann Development LLC website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- **Expanded PRD and task breakdown for SEO & Backlinks (with Stripe):**
  - Added `tasks/prd-goldmanndevelopmentllc-seo-backlinks.md` — Full expanded PRD with Introduction, Goals, 28 User Stories (US-001–US-028) with acceptance criteria, Functional Requirements (FR-1–FR-16), Non-Goals, Design/Technical Considerations, Success Metrics, Open Questions, and Stripe/Payments section. Covers Supabase schema, Technical SEO, Page structure, Internal/External backlinks, Goldmann Group, Backlink automation, Analytics, and Stripe payment system.
  - Added `ralph-main 2/prd.json` — Task breakdown in prd.json format: project `goldmanndevelopmentllc.com`, branch `ralph/seo-backlinks`, description "SEO-first, backlink-optimized rebuild with Stripe payments", and 28 user stories with id, title, description, acceptanceCriteria, priority, passes, notes.

- **Implementation (PRD build):**
  - Added `web/` — Next.js 16 App Router app (TypeScript, Tailwind) implementing the expanded PRD.
  - **Supabase:** Migrations in `supabase/migrations/` for `services`, `posts`, and `case_studies` tables (US-001–US-003). Supabase client in `web/lib/supabase/` (client + server).
  - **Layout & navigation:** Root layout with metadata, Header, Footer with all service links, About, Contact, Blog, Security/Disclosure, Privacy/Terms, and Goldmann Group section (US-015, US-017).
  - **Technical SEO:** `app/sitemap.ts`, `app/robots.ts`, canonical and OpenGraph on pages, JSON-LD (Organization, Service, FAQ, Breadcrumb) via `components/JsonLd.tsx` (US-007–US-010).
  - **Pages:** Homepage (H1/H2, services, trust signals, CTAs), service pages at `/services/[slug]` (template with FAQs, related services, authority links, Request Scope CTA), `/resources` and `/resources/[slug]` (ISR), `/about`, `/contact`, `/security-disclosure`, `/checklists`, `/checklists/[slug]`, `/glossary`, `/privacy`, `/terms`, `/checkout/success`, `/checkout/cancel` (US-011–US-012, US-018–US-021).
  - **Stripe:** `lib/stripe.ts`, `app/api/checkout/route.ts`, `app/api/webhooks/stripe/route.ts`, `components/CheckoutButton.tsx`; contact page uses Checkout for scope request deposit (US-023–US-026).
  - **Data/config:** `lib/data/services.ts` (service slugs, Goldmann Group links, authority links), `.env.example`, `docs/ANALYTICS.md` for GSC/Bing/Plausible/PostHog.
  - **RSS:** `app/feed.xml/route.ts` for blog syndication (US-018).
  - **Redirects:** Placeholder in `next.config.ts` for legacy 301s (US-008).

### Changed
- **2026-02-06 — Codebase and docs update:**
  - Added root **README.md**: project overview, repository structure, quick start, PRD/task links, tech stack, and reminder to read/update changelog.
  - **next.config.ts:** Implemented `redirects()` async function with empty array and comment for adding legacy 301 redirects (US-008).
  - **web/README.md:** Updated PRD section to reference existing paths only (`tasks/prd-goldmanndevelopmentllc-seo-backlinks.md`, `PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md`); removed reference to non-existent `ralph-main 2/prd.json`.
