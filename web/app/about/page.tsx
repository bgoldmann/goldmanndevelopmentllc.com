import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, GOLDMANN_GROUP_LINKS } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "About",
  description: "About Goldmann Development LLC — enterprise cybersecurity and the Goldmann Group ecosystem.",
  alternates: { canonical: SITE_URL + "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">About {SITE_NAME}</h1>
      <p className="mt-6 text-zinc-600">
        We deliver enterprise cybersecurity and offensive security services: pentesting, cloud security, DevSecOps, compliance, vCISO, and incident response. We work with CISOs, CTOs, and compliance teams under NDA.
      </p>
      <section className="mt-10" aria-labelledby="goldmann-group">
        <h2 id="goldmann-group" className="text-2xl font-semibold text-zinc-900">Goldmann Group</h2>
        <p className="mt-2 text-zinc-600">
          Part of the Goldmann ecosystem. Explore our other initiatives:
        </p>
        <ul className="mt-4 space-y-2">
          {GOLDMANN_GROUP_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:underline">{label}</a>
            </li>
          ))}
        </ul>
      </section>
      <Link href="/contact" className="mt-10 inline-block rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800">Contact Us</Link>
    </div>
  );
}
