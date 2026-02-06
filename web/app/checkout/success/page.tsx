import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your payment was successful.",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-zinc-900">Thank You</h1>
      <p className="mt-4 text-zinc-600">
        Your payment was successful. We will be in touch regarding your scope request.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800">
        Return to Home
      </Link>
    </div>
  );
}
