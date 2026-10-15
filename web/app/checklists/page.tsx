import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security Checklists",
  description: "Public security checklists for pre-audit and compliance readiness.",
  alternates: { canonical: SITE_URL + "/checklists" },
};

const CHECKLISTS = [
  { slug: "pre-pentest", title: "Pre-Pentest Checklist" },
  { slug: "soc2-readiness", title: "SOC 2 Readiness Checklist" },
];

export default function ChecklistsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Prep"
        title="Security Checklists"
        lede="Use these checklists to prepare for audits and pentests. Free to use and share."
      />
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2">
          {CHECKLISTS.map((c) => (
            <li key={c.slug}>
              <Link
                href={"/checklists/" + c.slug}
                className="block rounded-2xl border border-gold/15 bg-panel p-6 font-serif text-2xl text-gold-soft hover:border-gold/40"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/resources" className="mt-10 inline-block text-sm text-muted hover:text-gold-soft">
          ← Resources
        </Link>
      </Container>
    </div>
  );
}
