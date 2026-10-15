import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Security explainers, compliance checklists, and best practices from Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/resources" },
};

const PLACEHOLDER_POSTS = [
  { slug: "what-is-pentesting", title: "What Is Pentesting?", excerpt: "An introduction to penetration testing for enterprises." },
  { slug: "soc2-readiness-guide", title: "SOC 2 Readiness Guide", excerpt: "Steps to prepare for SOC 2 compliance." },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Field notes"
        title="Blog & Resources"
        lede={`Security explainers, compliance checklists, and best practices from ${SITE_NAME}.`}
      />
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2">
          {PLACEHOLDER_POSTS.map((post) => (
            <li key={post.slug}>
              <article className="h-full rounded-2xl border border-gold/15 bg-panel p-6 transition hover:border-gold/40">
                <Link href={"/resources/" + post.slug} className="group">
                  <h2 className="font-serif text-2xl text-gold-soft group-hover:underline">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          <Link href="/feed.xml" className="underline hover:text-gold-soft">RSS feed</Link>
          {" · "}
          <Link href="/checklists" className="underline hover:text-gold-soft">Security checklists</Link>
          {" · "}
          <Link href="/glossary" className="underline hover:text-gold-soft">Glossary</Link>
        </p>
      </Container>
    </div>
  );
}
