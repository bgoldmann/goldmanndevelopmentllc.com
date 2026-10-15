import Link from "next/link";
import {
  GOLDMANN_GROUP_LINKS,
  SERVICE_NAMES,
  SERVICE_SLUGS,
  SITE_NAME,
} from "@/lib/data/services";
import { INSTAGRAM, YOUTUBE } from "@/lib/data/media";
import { AMAZON_AUTHOR_URL, APPLE_BOOKS_AUTHOR_URL } from "@/lib/data/books";
import { GoldRule, Mark } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-panel text-muted">
      <GoldRule />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <section>
            <div className="flex items-center gap-2 text-gold">
              <Mark className="h-8 w-8" />
              <p className="font-serif text-lg text-gold-soft">{SITE_NAME}</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Enterprise cybersecurity, live broadcast, and a published library on AI-powered security.
            </p>
            <ul className="mt-5 flex flex-wrap gap-3 text-sm">
              <li>
                <a href={YOUTUBE.channelUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                  YouTube
                </a>
              </li>
              <li>
                <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                  Instagram
                </a>
              </li>
              <li>
                <a href={AMAZON_AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                  Amazon
                </a>
              </li>
              <li>
                <a href={APPLE_BOOKS_AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                  Apple Books
                </a>
              </li>
            </ul>
          </section>

          <section aria-label="Services">
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={`/services/${slug}`} className="hover:text-gold-soft">
                    {SERVICE_NAMES[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Studio">
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Studio</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/live" className="hover:text-gold-soft">Live Broadcast</Link></li>
              <li><Link href="/books" className="hover:text-gold-soft">Books</Link></li>
              <li><Link href="/about" className="hover:text-gold-soft">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold-soft">Contact</Link></li>
              <li><Link href="/resources" className="hover:text-gold-soft">Blog &amp; Resources</Link></li>
              <li><Link href="/security-disclosure" className="hover:text-gold-soft">Responsible Disclosure</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-soft">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-soft">Terms</Link></li>
            </ul>
          </section>

          <section aria-label="Goldmann Group">
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Goldmann Group</h3>
            <ul className="space-y-2 text-sm">
              {GOLDMANN_GROUP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mt-12 border-t border-gold/10 pt-8 text-center text-xs tracking-wide">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
