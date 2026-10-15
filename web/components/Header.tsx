"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SERVICE_NAMES, SERVICE_SLUGS, SITE_NAME } from "@/lib/data/services";
import { Mark } from "@/components/ui";

const LINKS = [
  { href: "/live", label: "Live" },
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 text-gold hover:text-gold-soft">
          <Mark className="h-8 w-8" />
          <span className="hidden font-serif text-lg leading-none sm:block">{SITE_NAME}</span>
          <span className="font-serif text-lg sm:hidden">Goldmann</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
          <li className="relative">
            <button
              type="button"
              className={`hover:text-gold-soft ${pathname.startsWith("/services") ? "text-gold-soft" : ""}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
            >
              Services
            </button>
            {servicesOpen ? (
              <ul className="absolute left-0 top-full z-20 mt-3 w-56 rounded-xl border border-gold/20 bg-panel p-2 shadow-xl">
                {SERVICE_SLUGS.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-gold/10 hover:text-gold-soft"
                    >
                      {SERVICE_NAMES[slug]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-gold-soft ${isActive(pathname, link.href) ? "text-gold-soft" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-background hover:bg-gold-soft sm:inline-flex"
          >
            Request Scope
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/25 text-gold lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-gold/15 bg-panel lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm">
            <li className="px-2 pb-1 text-[11px] uppercase tracking-[0.2em] text-gold">Services</li>
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="block rounded-lg px-3 py-2 text-foreground/90 hover:bg-gold/10"
                  onClick={() => setOpen(false)}
                >
                  {SERVICE_NAMES[slug]}
                </Link>
              </li>
            ))}
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 hover:bg-gold/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-gold px-4 py-2.5 text-center font-medium text-background"
                onClick={() => setOpen(false)}
              >
                Request Scope
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
