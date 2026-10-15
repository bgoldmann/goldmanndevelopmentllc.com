import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="We respect your privacy. Payment data is processed by Stripe; see Stripe's privacy policy for payment handling."
      />
      <Container className="py-12">
        <p className="max-w-3xl leading-relaxed text-muted">
          This page is a placeholder — add your full privacy policy here. We collect only what is needed to respond to scope requests and operate the site.
        </p>
      </Container>
    </div>
  );
}
