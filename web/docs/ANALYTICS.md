# Analytics & SEO Monitoring (US-022)

- **Google Search Console**: Add the property at [search.google.com/search-console](https://search.google.com/search-console). Verify via DNS or HTML tag.
- **Bing Webmaster Tools**: Add the site at [bing.com/webmasters](https://www.bing.com/webmasters).
- **Plausible or PostHog**: Add the script to `app/layout.tsx` in `<head>` or before `</body>`:
  - Plausible: `<script defer data-domain="goldmanndevelopmentllc.com" src="https://plausible.io/js/script.js"></script>`
  - PostHog: follow [posthog.com/docs](https://posthog.com/docs) for Next.js snippet.
- **Weekly crawl error reports**: Use GSC/Bing coverage reports; optional: external crawler (e.g. Screaming Frog) for deeper audits.
- **Keyword tracking**: Use an external tool (Ahrefs, SEMrush, or similar) and document the chosen tool here.
