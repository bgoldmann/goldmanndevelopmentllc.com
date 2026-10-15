import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your payment was successful.",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <Container className="py-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Confirmed</p>
      <h1 className="mt-4 font-serif text-4xl text-gold-soft">Thank You</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Your payment was successful. We will be in touch regarding your scope request.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="gold">Return to Home</ButtonLink>
      </div>
    </Container>
  );
}
