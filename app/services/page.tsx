import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design engineering, program leadership, regulatory & quality, combination products, and human-centered design — for medical device and pharma teams.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Hitmaker Engineering",
    description:
      "Design engineering, program leadership, regulatory & quality, combination products, and human-centered design.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    slug: "/services/regulatory-quality",
    eyebrow: "Regulatory & quality",
    title: "Regulatory & Quality Consulting",
    body: "Design controls, risk management, FDA strategy, and audit readiness. FDA 21 CFR 820, 21 CFR Part 4, ISO 13485, ISO 14971, IEC 62366.",
  },
  {
    slug: "/services/program-leadership",
    eyebrow: "Program leadership",
    title: "Program Leadership",
    body: "PMP-credentialed program ownership for cross-functional medical device programs. Stage-gate governance, integration, and recovery.",
  },
  {
    slug: "/services/combination-products",
    eyebrow: "Combination products",
    title: "Combination Products Consulting",
    body: "Drug-device strategy under FDA 21 CFR Part 4 — integrated design controls, human factors, and change-decision logic across constituents.",
  },
  {
    slug: "/services/design-engineering",
    eyebrow: "Design engineering",
    title: "Medical Device Design Engineering",
    body: "Mechanical, optical, fluidics, and systems engineering — architecture trade studies through design-for-manufacture, with design controls integrated.",
  },
  {
    slug: "/services/human-centered-design",
    eyebrow: "Human-centered design",
    title: "Human-Centered Design (IEC 62366)",
    body: "Use specification, use-related risk analysis, and formative-to-summative evaluation tied to the ISO 14971 risk management file.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Senior engineering judgment, applied to the moments that decide a
          program.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Engagements are scoped to specific decisions: an architecture review,
          a regulatory strategy, a program in trouble, a platform that needs
          consolidation. Choose the area that fits — or start with a scoping
          call and we&apos;ll triangulate together.
        </p>
      </Section>

      <Section bordered>
        <ul className="grid gap-10 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="mt-3 text-2xl">
                <Link
                  href={s.slug}
                  className="text-ink-900 no-underline hover:underline"
                >
                  {s.title}
                </Link>
              </h2>
              <p className="mt-3 text-ink-600">{s.body}</p>
              <p className="mt-4">
                <Link
                  href={s.slug}
                  className="text-sm font-medium text-ink-900 no-underline hover:underline"
                >
                  Read more about {s.eyebrow.toLowerCase()} →
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Not sure which fits?</h2>
            <p className="mt-2 text-ink-600">
              Most first conversations start with a quick scoping call to
              triangulate the actual question and pick the right shape of
              engagement.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
        </div>
      </Section>
    </>
  );
}
