import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hitmaker Engineering about a medical device or combination product engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Hitmaker Engineering",
    description:
      "Most engagements start with a one-hour scoping call. Tell us what the program needs.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <Section className="pt-20">
      <div className="grid gap-12 sm:grid-cols-[1fr,1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">
            Tell us what the program needs.
          </h1>
          <p className="mt-6 text-lg text-ink-600">
            Most engagements start with a one-hour scoping call. Share a few
            sentences on the program, the question, and the timeline — we&apos;ll
            get back to you.
          </p>
          <div className="mt-8 space-y-2 text-sm text-ink-600">
            <p>
              <span className="text-ink-500">Email · </span>
              <a
                href="mailto:hello@hitmakerengineering.com"
                className="text-ink-900 no-underline hover:underline"
              >
                hello@hitmakerengineering.com
              </a>
            </p>
            <p>
              <span className="text-ink-500">Based in · </span>
              San Francisco, CA
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
      </Section>
    </>
  );
}
