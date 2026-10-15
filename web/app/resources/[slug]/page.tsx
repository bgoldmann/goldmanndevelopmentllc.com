import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, AUTHORITY_LINKS } from "@/lib/data/services";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Container, PageHero } from "@/components/ui";

export const revalidate = 3600;

const PLACEHOLDER_POSTS: Record<string, { title: string; body: string }> = {
  "what-is-pentesting": {
    title: "What Is Pentesting?",
    body: "Penetration testing (pentesting) is authorized simulated attacks on your systems to find vulnerabilities before attackers do. Enterprises use pentests to validate security controls and meet compliance requirements. At " + SITE_NAME + " we follow industry methodologies and deliver clear, actionable reports.",
  },
  "soc2-readiness-guide": {
    title: "SOC 2 Readiness Guide",
    body: "Preparing for SOC 2 involves defining scope, implementing controls, and documenting policies. This guide outlines key steps. For tailored support, see our Compliance services.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(PLACEHOLDER_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = PLACEHOLDER_POSTS[slug];
  if (!post) return {};
  const url = SITE_URL + "/resources/" + slug;
  return {
    title: post.title,
    description: post.body.slice(0, 160),
    alternates: { canonical: url },
    openGraph: { title: post.title, url },
  };
}

export default async function ResourcePostPage({ params }: Props) {
  const { slug } = await params;
  const post = PLACEHOLDER_POSTS[slug];
  if (!post) notFound();
  const url = SITE_URL + "/resources/" + slug;

  return (
    <div>
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }, { name: "Resources", url: SITE_URL + "/resources" }, { name: post.title, url }]} />
      <PageHero eyebrow="Essay" title={post.title} lede="From the Goldmann Development library of field notes." />
      <Container className="py-12">
        <article className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{post.body}</p>
          <p className="mt-10 text-sm text-muted">
            References:{" "}
            <a href={AUTHORITY_LINKS.owasp.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.owasp.label}</a>
            ,{" "}
            <a href={AUTHORITY_LINKS.nist.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.nist.label}</a>.
          </p>
          <Link href="/resources" className="mt-8 inline-block text-gold hover:text-gold-soft">
            ← Back to Resources
          </Link>
        </article>
      </Container>
    </div>
  );
}
