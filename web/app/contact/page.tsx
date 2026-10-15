import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { CheckoutButton } from "@/components/CheckoutButton";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Goldmann Development LLC for scope requests and enterprise security services.",
  alternates: { canonical: SITE_URL + "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Engage"
        title="Contact"
        lede="Request a scope for pentesting, compliance, vCISO, or other services. Start with a deposit when you are ready to lock a window."
      />
      <Container className="py-12 sm:py-16">
        <div className="max-w-xl rounded-2xl border border-gold/20 bg-panel p-8">
          <p className="font-serif text-2xl text-gold-soft">Request scope</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Use the button below to start a scope request and pay a deposit via Stripe.
          </p>
          <div className="mt-6">
            <CheckoutButton />
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Prefer to talk first? Reach out before payment and we will confirm fit.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="ghost">
            ← Back to Home
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
