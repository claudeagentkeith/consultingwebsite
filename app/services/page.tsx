import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design engineering, program leadership, regulatory & quality, and combination product consulting for medical device and pharma teams.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Hitmaker Engineering",
    description:
      "Design engineering, program leadership, regulatory & quality, and combination product consulting.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    eyebrow: "Design engineering",
    title: "Architecture, mechanism, and systems design",
    body: "Hands-on mechanical, optical, and systems engineering for instruments, consumables, and combination products. Architecture trade studies, design-for-reliability, design-for-manufacture, and prototype development with manufacturing partners.",
    points: [
      "Novel mechanism and platform architecture",
      "Design for reliability, GD&T, and FMEA",
      "Automated assembly readiness; unit-cost reduction at 300K–1M+ unit volumes",
      "Industrial design and human-factors-informed enclosures",
    ],
  },
  {
    eyebrow: "Program leadership",
    title: "Program and portfolio leadership",
    body: "PMP-credentialed program ownership for cross-functional, multi-site product programs. Stand up cadences, integrate Hardware/Firmware/Software/Bio/Chem, and run executive-grade governance.",
    points: [
      "Single-accountable leader for 100+ contributor programs",
      "Stage-gate, design control, and portfolio governance",
      "Platform consolidation and innovation transfer",
      "Operational Excellence and Right First Time culture",
    ],
  },
  {
    eyebrow: "Regulatory & quality",
    title: "Design controls, risk, and FDA strategy",
    body: "Design controls and risk-based engineering aligned to FDA 21 CFR 820, 21 CFR Part 4, ISO 13485, ISO 14971, and IEC 62366. Direct experience negotiating change-decision logic with FDA SMEs.",
    points: [
      "FDA 21 CFR 820, 21 CFR Part 4 (combination products)",
      "ISO 13485, ISO 14971 risk management, IEC 62366 usability",
      "510(k) change-decision logic and Assay Migration / RRIFP strategy",
      "Design History File rebuilds and audit readiness",
    ],
  },
  {
    eyebrow: "Combination products & HFE",
    title: "Combination products and human factors",
    body: "Formative-to-summative human factors evidence for combination product submissions. URRA, IEC 62366, and design control integration — with first-hand experience standing up a Human Factors Experience Center.",
    points: [
      "Use-Related Risk Analysis (URRA) and HF validation",
      "Lateral flow, molecular, and connected platform experience",
      "Drug delivery device architecture (pump and valve systems)",
      "Customer / user research and requirements calibration",
    ],
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
      <ServiceJsonLd
        name="Medical device and combination product engineering consulting"
        slug="/services"
        description="Design engineering, program leadership, regulatory & quality, and combination product consulting for medical device and pharma teams."
        serviceType="Medical Device Engineering Consulting"
      />
      <Section className="pt-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Senior engineering judgment, applied to the moments that decide a program.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Engagements are scoped to specific decisions: an architecture review,
          a regulatory strategy, a program in trouble, a platform that needs
          consolidation. Below are the four buckets most engagements fall into.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.title}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="mt-3 text-2xl">{s.title}</h2>
              <p className="mt-3 text-ink-600">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-700">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink-900"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Not sure which bucket fits?</h2>
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
