# Goldmann Development LLC — Website

SEO-first, backlink-optimized marketing site for **goldmanndevelopmentllc.com**. Enterprise cybersecurity and offensive security services: pentesting, cloud security, DevSecOps, compliance, vCISO, and incident response.

## Repository structure

| Path | Description |
|------|--------------|
| **web/** | Next.js 16 App Router app (TypeScript, Tailwind, Supabase, Stripe). Run the site from here. |
| **supabase/migrations/** | Database migrations for `services`, `posts`, and `case_studies` tables. |
| **tasks/** | Expanded PRD and user stories (SEO & backlinks, Stripe). |
| **PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md** | High-level PRD: objectives, SEO strategy, backlink strategy, page structure, Supabase model, roadmap. |

## Quick start

1. **Web app**  
   ```bash
   cd web
   cp .env.example .env.local
   # Edit .env.local with Supabase and Stripe keys and NEXT_PUBLIC_SITE_URL
   pnpm install
   pnpm dev
   ```

2. **Database**  
   Apply migrations from project root (Supabase CLI) or run the SQL in `supabase/migrations/` in the Supabase dashboard.

3. **Docs**  
   - [Changelog](changelog.md) — notable changes (read before making changes).  
   - [Web app README](web/README.md) — stack, setup, scripts.  
   - [Analytics](web/docs/ANALYTICS.md) — GSC, Bing, Plausible/PostHog.

## PRD & tasks

- **PRD (high level):** [PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md](PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md)  
- **Expanded PRD & user stories:** [tasks/prd-goldmanndevelopmentllc-seo-backlinks.md](tasks/prd-goldmanndevelopmentllc-seo-backlinks.md)

## Tech stack (web)

- **Next.js 16** (App Router), **React 19**, **Tailwind CSS 4**
- **Supabase** — content (services, posts, case_studies)
- **Stripe** — Checkout and webhooks for scope-request deposits
- **Vercel** — deployment (recommended)

---

*Before making changes, read [changelog.md](changelog.md). After each change, update the changelog.*
