import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://hitmakerengineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hitmaker Engineering — end-to-end product development for medical devices & combination products",
    template: "%s · Hitmaker Engineering",
  },
  description:
    "End-to-end product development for medical devices and combination products — user research, ideation, engineering, design controls, manufacturing transfer, launch, and sustaining support.",
  applicationName: "Hitmaker Engineering",
  keywords: [
    "medical device consulting",
    "combination products consulting",
    "medical device product development",
    "user research medical device",
    "design controls",
    "21 CFR 820",
    "21 CFR Part 4",
    "ISO 13485",
    "ISO 14971",
    "IEC 62366",
    "manufacturing transfer medical device",
    "sustaining engineering medical device",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hitmaker Engineering",
    title: "Hitmaker Engineering — end-to-end product development for medical devices & combination products",
    description:
      "End-to-end product development for medical-device and combination-product teams — from user research and ideation through engineering, design controls, manufacturing transfer, launch, and sustaining.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hitmaker Engineering — end-to-end product development for medical devices and combination products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitmaker Engineering",
    description:
      "End-to-end product development for medical-device and combination-product teams — from user research and ideation through engineering, design controls, manufacturing transfer, launch, and sustaining.",
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
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: "7f6UmT4LN3MIq3m67dyJLquoRTWNezY8Ead4-oVgvU0",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#12161c" },
  ],
  colorScheme: "light",
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
