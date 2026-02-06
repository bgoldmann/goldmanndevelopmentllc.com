import Link from "next/link";
import { SERVICE_SLUGS, SERVICE_NAMES, SITE_NAME } from "@/lib/data/services";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4" aria-label="Main">
        <Link href="/" className="text-lg font-semibold text-zinc-900 hover:text-zinc-700">
          {SITE_NAME}
        </Link>
        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-600">
          <li><Link href="/" className="hover:text-zinc-900">Home</Link></li>
          {SERVICE_SLUGS.map((slug) => (
            <li key={slug}>
              <Link href={`/services/${slug}`} className="hover:text-zinc-900">{SERVICE_NAMES[slug]}</Link>
            </li>
          ))}
          <li><Link href="/resources" className="hover:text-zinc-900">Resources</Link></li>
          <li><Link href="/about" className="hover:text-zinc-900">About</Link></li>
          <li><Link href="/contact" className="hover:text-zinc-900">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
