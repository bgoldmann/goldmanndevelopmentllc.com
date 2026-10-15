import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  SERVICE_SLUGS,
  SERVICE_NAMES,
  SERVICE_DETAILS,
  SITE_URL,
  AUTHORITY_LINKS,
} from "@/lib/data/services";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/JsonLd";
import { ButtonLink, Container, PageHero } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

const DEFAULT_FAQS = [
  { question: "How long does an engagement typically take?", answer: "Engagements vary by scope; we provide a timeline in our proposal after scoping." },
  { question: "Do you sign NDAs?", answer: "Yes. We work under NDA with all enterprise clients." },
  { question: "What deliverables do I receive?", answer: "You receive a detailed report, remediation guidance, and optional retesting." },
];

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = SERVICE_SLUGS.includes(slug as typeof SERVICE_SLUGS[number])
    ? SERVICE_NAMES[slug as keyof typeof SERVICE_NAMES]
    : null;
  if (!name) return {};
  const title = name + " Services";
  const description = "Expert " + name + " services for enterprise security. Request a scope today.";
  const url = SITE_URL + "/services/" + slug;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!SERVICE_SLUGS.includes(slug as typeof SERVICE_SLUGS[number])) notFound();
  const name = SERVICE_NAMES[slug as keyof typeof SERVICE_NAMES];
  const detail = SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS];
  const url = SITE_URL + "/services/" + slug;
  const related = SERVICE_SLUGS.filter((s) => s !== slug).slice(0, 3);

  return (
    <div>
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }, { name: name + " Services", url }]} />
      <ServiceSchema name={name} description={"Expert " + name + " services."} url={url} />
      <FAQSchema faqs={DEFAULT_FAQS} />
      <PageHero eyebrow={`Service ${detail.index}`} title={`${name} Services`} lede={detail.tagline} />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-10">
            <section aria-labelledby="what-we-do">
              <h2 id="what-we-do" className="font-serif text-2xl text-gold-soft">What We Do</h2>
              <p className="mt-3 leading-relaxed text-muted">{detail.summary}</p>
            </section>
            <section aria-labelledby="who-this-is-for">
              <h2 id="who-this-is-for" className="font-serif text-2xl text-gold-soft">Who This Is For</h2>
              <p className="mt-3 leading-relaxed text-muted">{detail.audience}</p>
            </section>
            <section aria-labelledby="methodology">
              <h2 id="methodology" className="font-serif text-2xl text-gold-soft">Our Methodology</h2>
              <p className="mt-3 leading-relaxed text-muted">{detail.methodology}</p>
            </section>
            <section aria-labelledby="deliverables">
              <h2 id="deliverables" className="font-serif text-2xl text-gold-soft">Deliverables</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
                {detail.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="faqs">
              <h2 id="faqs" className="font-serif text-2xl text-gold-soft">FAQs</h2>
              <dl className="mt-4 space-y-5">
                {DEFAULT_FAQS.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-medium text-foreground">{faq.question}</dt>
                    <dd className="mt-1 text-muted">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gold/20 bg-panel p-6">
              <p className="text-sm text-muted">Ready to scope your {name.toLowerCase()} engagement?</p>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="gold">Request Scope</ButtonLink>
              </div>
            </div>
            <section aria-labelledby="related-services">
              <h2 id="related-services" className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Related Services
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((s) => (
                  <li key={s}>
                    <Link href={"/services/" + s} className="text-gold-soft hover:underline">
                      {SERVICE_NAMES[s as keyof typeof SERVICE_NAMES]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <p className="mt-14 text-sm text-muted">
          References:{" "}
          <a href={AUTHORITY_LINKS.owasp.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.owasp.label}</a>
          , <a href={AUTHORITY_LINKS.nist.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.nist.label}</a>
          , <a href={AUTHORITY_LINKS.iso27001.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.iso27001.label}</a>
          , <a href={AUTHORITY_LINKS.cisa.href} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gold-soft">{AUTHORITY_LINKS.cisa.label}</a>
        </p>
      </Container>
    </div>
  );
}
