import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/data/services";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME + " | Enterprise Cybersecurity",
    template: "%s | " + SITE_NAME,
  },
  description:
    "Enterprise cybersecurity and offensive security services. Pentesting, cloud security, DevSecOps, compliance, vCISO, incident response. Live broadcast and published books by Bernie Goldmann.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${outfit.variable} ${instrument.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
