import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security & Responsible Disclosure",
  description: "How to report security vulnerabilities to Goldmann Development LLC responsibly.",
  alternates: { canonical: SITE_URL + "/security-disclosure" },
};

export default function SecurityDisclosurePage() {
  return (
    <div>
      <PageHero
        eyebrow="Trust"
        title="Security & Responsible Disclosure"
        lede="If you believe you have found a security vulnerability in our systems or services, we encourage you to report it to us responsibly."
      />
      <Container className="py-12 sm:py-16">
        <section className="max-w-3xl" aria-labelledby="how-to-report">
          <h2 id="how-to-report" className="font-serif text-2xl text-gold-soft">How to Report</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Please send a detailed description of the issue to our contact channel. Include steps to reproduce, impact, and any proof-of-concept if possible. We will acknowledge receipt and respond within a reasonable time.
          </p>
        </section>
        <section className="mt-10 max-w-3xl" aria-labelledby="what-we-expect">
          <h2 id="what-we-expect" className="font-serif text-2xl text-gold-soft">What We Ask</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
            <li>Give us reasonable time to address the issue before public disclosure.</li>
            <li>Do not access or modify data that is not your own.</li>
            <li>Do not perform attacks that could impact availability or other users.</li>
          </ul>
        </section>
        <p className="mt-10 text-sm text-muted">
          We appreciate the security community and will credit researchers when appropriate (with your permission).
        </p>
      </Container>
    </div>
  );
}
