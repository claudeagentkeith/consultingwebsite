import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a product development scoping call with Hitmaker Engineering. Share where your product is in the lifecycle, the decision in front of you, and your timeline.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Hitmaker Engineering",
    description:
      "Request a product development scoping call. Tell us where your product is in the lifecycle, the challenge you are facing, and your timeline.",
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
              Request a Product Development Scoping Call
            </h1>
            <p className="mt-6 text-lg text-ink-600">
              Tell us where your product is in the lifecycle, what decision or
              challenge you are facing, and what timeline you are working
              toward.
            </p>
            <p className="mt-4 text-ink-600">
              Please avoid sharing confidential technical details until an NDA
              is in place.
            </p>
            <div className="mt-8 rounded-xl border border-ink-100 bg-ink-50 p-5 text-sm text-ink-700">
              <p className="font-medium text-ink-900">
                NDA &amp; conflict-check note
              </p>
              <p className="mt-2">
                Because we work in regulated product development, some
                engagements may require a conflict check and NDA before
                detailed technical information is reviewed. We&apos;ll flag
                this on our first reply when applicable.
              </p>
            </div>
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
