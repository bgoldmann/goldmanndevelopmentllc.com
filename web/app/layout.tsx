import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/data/services";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME + " | Enterprise Cybersecurity", template: "%s | " + SITE_NAME },
  description: "Enterprise cybersecurity and offensive security services. Pentesting, cloud security, DevSecOps, compliance, vCISO, incident response.",
  openGraph: { type: "website", locale: "en_US", url: SITE_URL, siteName: SITE_NAME },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className={geistSans.variable + " " + geistMono.variable + " min-h-screen antialiased"}>
        {/* Analytics: add Plausible or PostHog script here — see docs/ANALYTICS.md */}
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
