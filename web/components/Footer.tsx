import Link from "next/link";
import {
  SERVICE_SLUGS,
  SERVICE_NAMES,
  GOLDMANN_GROUP_LINKS,
  SITE_NAME,
} from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-600">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <section aria-label="Services">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="hover:text-zinc-900 hover:underline"
                  >
                    {SERVICE_NAMES[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section aria-label="Company">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-zinc-900 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-900 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-zinc-900 hover:underline">
                  Blog &amp; Resources
                </Link>
              </li>
              <li>
                <Link href="/security-disclosure" className="hover:text-zinc-900 hover:underline">
                  Security &amp; Responsible Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-zinc-900 hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900 hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </section>
          <section aria-label="Goldmann Group">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Goldmann Group
            </h3>
            <ul className="space-y-2">
              {GOLDMANN_GROUP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
