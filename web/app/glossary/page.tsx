import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security Glossary",
  description: "A–Z glossary of cybersecurity and compliance terms.",
  alternates: { canonical: SITE_URL + "/glossary" },
};

const TERMS = [
  { term: "Pentesting", definition: "Authorized simulated attacks to find vulnerabilities." },
  { term: "SOC 2", definition: "Service Organization Control 2 — a compliance framework for security, availability, and confidentiality." },
  { term: "vCISO", definition: "Virtual Chief Information Security Officer — outsourced CISO services." },
];

export default function GlossaryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Lexicon"
        title="Security Glossary"
        lede="A–Z definitions for common cybersecurity and compliance terms."
      />
      <Container className="py-12 sm:py-16">
        <dl className="space-y-6">
          {TERMS.map(({ term, definition }) => (
            <div key={term} className="rounded-2xl border border-gold/15 bg-panel p-6">
              <dt className="font-serif text-2xl text-gold-soft">{term}</dt>
              <dd className="mt-2 text-muted">{definition}</dd>
            </div>
          ))}
        </dl>
        <Link href="/resources" className="mt-10 inline-block text-sm text-muted hover:text-gold-soft">
          ← Resources
        </Link>
      </Container>
    </div>
  );
}
