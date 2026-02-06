# Goldmann Development LLC — Website

SEO-first, backlink-optimized marketing site with Stripe payments. Built with Next.js (App Router), Supabase, and Vercel.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS**
- **Supabase** (content: services, posts, case_studies)
- **Stripe** (Checkout, webhooks)

## Setup

1. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://goldmanndevelopmentllc.com`)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`

2. Run Supabase migrations (from project root):
   ```bash
   supabase db push
   ```
   Or apply the SQL in `../supabase/migrations/` manually in the Supabase dashboard.

3. Install and run:
   ```bash
   npm install
   npm run dev
   ```

4. Stripe webhook: point your Stripe webhook endpoint to `https://your-domain.com/api/webhooks/stripe` and set `STRIPE_WEBHOOK_SECRET`.

## PRD

See [tasks/prd-goldmanndevelopmentllc-seo-backlinks.md](../tasks/prd-goldmanndevelopmentllc-seo-backlinks.md) and [PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md](../PRD_GoldmannDevelopmentLLC_SEO_Backlinks.md) for user stories and acceptance criteria.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint
