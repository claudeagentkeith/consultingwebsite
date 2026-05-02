import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://hitmakerengineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hitmaker Engineering — medical device & combination product consulting",
    template: "%s · Hitmaker Engineering",
  },
  description:
    "Senior engineering consulting for medical devices and combination products — design controls, regulatory strategy, and program leadership.",
  applicationName: "Hitmaker Engineering",
  keywords: [
    "medical device consulting",
    "combination products consulting",
    "21 CFR 820",
    "21 CFR Part 4",
    "ISO 13485",
    "ISO 14971",
    "IEC 62366",
    "medical device program management",
    "human-centered design medical device",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hitmaker Engineering",
    title: "Hitmaker Engineering — medical device & combination product consulting",
    description:
      "Senior consulting engineering for medical devices and combination products.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hitmaker Engineering — medical device and combination product consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitmaker Engineering",
    description:
      "Senior consulting engineering for medical devices and combination products.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <OrganizationJsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
