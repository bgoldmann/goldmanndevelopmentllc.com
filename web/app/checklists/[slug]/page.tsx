import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

const CHECKLISTS: Record<string, { title: string; body: string }> = {
  "pre-pentest": {
    title: "Pre-Pentest Checklist",
    body: "Before your penetration test: document in-scope assets, obtain written authorization, ensure backups are current, and designate a point of contact. Share only necessary credentials and network segments.",
  },
  "soc2-readiness": {
    title: "SOC 2 Readiness Checklist",
    body: "For SOC 2: define scope (trust service criteria), document policies and procedures, implement access controls and monitoring, and prepare evidence. Consider a readiness assessment.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(CHECKLISTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = CHECKLISTS[slug];
  if (!c) return {};
  return { title: c.title, alternates: { canonical: SITE_URL + "/checklists/" + slug } };
}

export default async function ChecklistDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = CHECKLISTS[slug];
  if (!c) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">{c.title}</h1>
      <p className="mt-6 text-zinc-600">{c.body}</p>
      <Link href="/checklists" className="mt-8 inline-block text-zinc-600 hover:underline">← All checklists</Link>
    </div>
  );
}
