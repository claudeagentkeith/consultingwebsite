import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://hitmakerengineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hitmaker Engineering — medical device & combination product consulting",
    template: "%s · Hitmaker Engineering",
  },
  description:
    "Senior consulting engineering for medical devices and combination products. Design controls, regulatory strategy, and program leadership from concept through commercialization.",
  openGraph: {
    title: "Hitmaker Engineering",
    description:
      "Senior consulting engineering for medical devices and combination products.",
    url: SITE_URL,
    siteName: "Hitmaker Engineering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitmaker Engineering",
    description:
      "Senior consulting engineering for medical devices and combination products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
