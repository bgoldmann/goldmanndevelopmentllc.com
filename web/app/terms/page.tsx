import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Goldmann Development LLC.",
  alternates: { canonical: SITE_URL + "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900">Terms of Service</h1>
      <p className="mt-4 text-zinc-600">
        This page is a placeholder — add your full terms of service here.
      </p>
    </div>
  );
}
