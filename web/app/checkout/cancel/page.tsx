import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  description: "Checkout was cancelled.",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <Container className="py-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Paused</p>
      <h1 className="mt-4 font-serif text-4xl text-gold-soft">Checkout Cancelled</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        You cancelled the checkout. You can request a scope again from the Contact page.
      </p>
      <div className="mt-8">
        <ButtonLink href="/contact" variant="gold">Back to Contact</ButtonLink>
      </div>
    </Container>
  );
}
