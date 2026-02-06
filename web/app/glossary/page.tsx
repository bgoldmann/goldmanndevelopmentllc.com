import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

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
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Security Glossary</h1>
      <p className="mt-4 text-zinc-600">
        A–Z definitions for common cybersecurity and compliance terms.
      </p>
      <dl className="mt-8 space-y-6">
        {TERMS.map(({ term, definition }) => (
          <div key={term}>
            <dt className="font-semibold text-zinc-900">{term}</dt>
            <dd className="mt-1 text-zinc-600">{definition}</dd>
          </div>
        ))}
      </dl>
      <Link href="/resources" className="mt-8 inline-block text-zinc-600 hover:underline">← Resources</Link>
    </div>
  );
}
