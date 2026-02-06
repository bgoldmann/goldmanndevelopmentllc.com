import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  SERVICE_SLUGS,
  SERVICE_NAMES,
  SITE_URL,
  AUTHORITY_LINKS,
} from "@/lib/data/services";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/JsonLd";

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
  const url = SITE_URL + "/services/" + slug;
  const related = SERVICE_SLUGS.filter((s) => s !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }, { name: name + " Services", url }]} />
      <ServiceSchema name={name} description={"Expert " + name + " services."} url={url} />
      <FAQSchema faqs={DEFAULT_FAQS} />

      <h1 className="text-4xl font-bold text-zinc-900">{name} Services</h1>

      <section className="mt-8" aria-labelledby="what-we-do">
        <h2 id="what-we-do" className="text-2xl font-semibold text-zinc-900">What We Do</h2>
        <p className="mt-2 text-zinc-600">
          We deliver enterprise-grade {name.toLowerCase()} to identify risks, validate controls, and improve your security posture.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="who-this-is-for">
        <h2 id="who-this-is-for" className="text-2xl font-semibold text-zinc-900">Who This Is For</h2>
        <p className="mt-2 text-zinc-600">
          CISOs, CTOs, and compliance teams who need trusted, NDA-safe engagements and clear deliverables.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="methodology">
        <h2 id="methodology" className="text-2xl font-semibold text-zinc-900">Our Methodology</h2>
        <p className="mt-2 text-zinc-600">
          We follow industry standards and frameworks. Our approach is documented and repeatable.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="deliverables">
        <h2 id="deliverables" className="text-2xl font-semibold text-zinc-900">Deliverables</h2>
        <p className="mt-2 text-zinc-600">
          Detailed report, executive summary, remediation guidance, and optional retest to verify fixes.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="related-services">
        <h2 id="related-services" className="text-2xl font-semibold text-zinc-900">Related Services</h2>
        <ul className="mt-2 list-inside list-disc text-zinc-600">
          {related.map((s) => (
            <li key={s}>
              <Link href={"/services/" + s} className="text-zinc-900 hover:underline">{SERVICE_NAMES[s as keyof typeof SERVICE_NAMES]}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="faqs">
        <h2 id="faqs" className="text-2xl font-semibold text-zinc-900">FAQs</h2>
        <dl className="mt-4 space-y-4">
          {DEFAULT_FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="font-medium text-zinc-900">{faq.question}</dt>
              <dd className="mt-1 text-zinc-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <p className="text-zinc-700">Ready to scope your {name.toLowerCase()} engagement?</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800"
        >
          Request Scope
        </Link>
      </section>

      <p className="mt-8 text-sm text-zinc-500">
        References:{" "}
        <a href={AUTHORITY_LINKS.owasp.href} rel="nofollow noopener noreferrer" target="_blank" className="underline">{AUTHORITY_LINKS.owasp.label}</a>
        , <a href={AUTHORITY_LINKS.nist.href} rel="nofollow noopener noreferrer" target="_blank" className="underline">{AUTHORITY_LINKS.nist.label}</a>
        , <a href={AUTHORITY_LINKS.iso27001.href} rel="nofollow noopener noreferrer" target="_blank" className="underline">{AUTHORITY_LINKS.iso27001.label}</a>
        , <a href={AUTHORITY_LINKS.cisa.href} rel="nofollow noopener noreferrer" target="_blank" className="underline">{AUTHORITY_LINKS.cisa.label}</a>
      </p>
    </div>
  );
}
