import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  description: "Checkout was cancelled.",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-zinc-900">Checkout Cancelled</h1>
      <p className="mt-4 text-zinc-600">
        You cancelled the checkout. You can request a scope again from the Contact page.
      </p>
      <Link href="/contact" className="mt-8 inline-block rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800">
        Back to Contact
      </Link>
    </div>
  );
}
