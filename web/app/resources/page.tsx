import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/data/services";

export const revalidate = 3600; // ISR: revalidate every hour

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Security explainers, compliance checklists, and best practices from Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/resources" },
};

// In production, fetch from Supabase posts table
const PLACEHOLDER_POSTS = [
  { slug: "what-is-pentesting", title: "What Is Pentesting?", excerpt: "An introduction to penetration testing for enterprises." },
  { slug: "soc2-readiness-guide", title: "SOC 2 Readiness Guide", excerpt: "Steps to prepare for SOC 2 compliance." },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Blog &amp; Resources</h1>
      <p className="mt-4 text-zinc-600">
        Security explainers, compliance checklists, and best practices from {SITE_NAME}.
      </p>
      <ul className="mt-10 space-y-6">
        {PLACEHOLDER_POSTS.map((post) => (
          <li key={post.slug}>
            <article>
              <Link href={"/resources/" + post.slug} className="group">
                <h2 className="text-xl font-semibold text-zinc-900 group-hover:underline">{post.title}</h2>
                <p className="mt-1 text-zinc-600">{post.excerpt}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-zinc-500">
        <Link href="/feed.xml" className="underline">RSS feed</Link> · <Link href="/checklists" className="underline">Security checklists</Link> · <Link href="/glossary" className="underline">Glossary</Link>
      </p>
    </div>
  );
}
