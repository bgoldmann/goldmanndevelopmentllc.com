import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Goldmann Development LLC for scope requests and enterprise security services.",
  alternates: { canonical: SITE_URL + "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Contact</h1>
      <p className="mt-4 text-zinc-600">
        Request a scope for pentesting, compliance, vCISO, or other services.
      </p>
      <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <p className="font-medium text-zinc-900">Request Scope (payment)</p>
        <p className="mt-2 text-sm text-zinc-600">Use the button below to start a scope request and pay a deposit via Stripe.</p>
        <div className="mt-4">
          <CheckoutButton />
        </div>
      </div>
      <p className="mt-6 text-sm text-zinc-500">
        Or email us to discuss your needs before payment.
      </p>
      <Link href="/" className="mt-6 inline-block text-zinc-900 hover:underline">← Back to Home</Link>
    </div>
  );
}
