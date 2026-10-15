import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lede="Engagements, deposits, and published materials are governed by the agreement we send at scoping."
      />
      <Container className="py-12">
        <p className="max-w-3xl leading-relaxed text-muted">
          This page is a placeholder — add your full terms of service here.
        </p>
      </Container>
    </div>
  );
}
