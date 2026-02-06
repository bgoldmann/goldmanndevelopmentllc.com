import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Security & Responsible Disclosure",
  description: "How to report security vulnerabilities to Goldmann Development LLC responsibly.",
  alternates: { canonical: SITE_URL + "/security-disclosure" },
};

export default function SecurityDisclosurePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Security &amp; Responsible Disclosure</h1>
      <p className="mt-4 text-zinc-600">
        We take security seriously. If you believe you have found a security vulnerability in our systems or services, we encourage you to report it to us responsibly.
      </p>
      <section className="mt-8" aria-labelledby="how-to-report">
        <h2 id="how-to-report" className="text-2xl font-semibold text-zinc-900">How to Report</h2>
        <p className="mt-2 text-zinc-600">
          Please send a detailed description of the issue to our contact channel. Include steps to reproduce, impact, and any proof-of-concept if possible. We will acknowledge receipt and respond within a reasonable time.
        </p>
      </section>
      <section className="mt-8" aria-labelledby="what-we-expect">
        <h2 id="what-we-expect" className="text-2xl font-semibold text-zinc-900">What We Ask</h2>
        <ul className="mt-2 list-inside list-disc text-zinc-600">
          <li>Give us reasonable time to address the issue before public disclosure.</li>
          <li>Do not access or modify data that is not your own.</li>
          <li>Do not perform attacks that could impact availability or other users.</li>
        </ul>
      </section>
      <p className="mt-8 text-sm text-zinc-500">
        We appreciate the security community and will credit researchers when appropriate (with your permission).
      </p>
    </div>
  );
}
