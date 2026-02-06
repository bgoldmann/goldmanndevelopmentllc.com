import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

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
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Security Checklists</h1>
      <p className="mt-4 text-zinc-600">
        Use these checklists to prepare for audits and pentests. Free to use and share.
      </p>
      <ul className="mt-8 space-y-4">
        {CHECKLISTS.map((c) => (
          <li key={c.slug}>
            <Link href={"/checklists/" + c.slug} className="text-lg font-medium text-zinc-900 hover:underline">{c.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/resources" className="mt-8 inline-block text-zinc-600 hover:underline">← Resources</Link>
    </div>
  );
}
