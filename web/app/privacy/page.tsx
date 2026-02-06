import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Privacy Policy</h1>
      <p className="mt-4 text-zinc-600">
        We respect your privacy. This page is a placeholder — add your full privacy policy here. Payment data is processed by Stripe; see Stripe&apos;s privacy policy for payment handling.
      </p>
    </div>
  );
}
