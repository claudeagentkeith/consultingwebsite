import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end product development for medical devices and combination products — user research, ideation, design engineering, design controls, manufacturing transfer, and sustaining.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Hitmaker Engineering",
    description:
      "End-to-end product development for medical devices and combination products — across the full lifecycle.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    slug: "/services/user-research",
    phase: "Phase 1",
    title: "User Research & Human-Centered Design",
    body: "Workflow research, user needs, usability strategy, use-related risk, HFE planning and evidence — IEC 62366 integrated with the ISO 14971 risk file.",
  },
  {
    slug: "/services/ideation-strategy",
    phase: "Phase 2",
    title: "Ideation & Product Strategy",
    body: "Opportunity framing, concept generation, product architecture, feasibility planning, and roadmap and tradeoff strategy across multi-program portfolios.",
  },
  {
    slug: "/services/design-engineering",
    phase: "Phase 3",
    title: "Design Engineering & Development",
    body: "System architecture, mechanical/fluidic/optical design, requirements development, prototyping, and verification strategy — design controls integrated from day one.",
  },
  {
    slug: "/services/design-controls",
    phase: "Phase 4",
    title: "Regulatory, Quality & Design Controls",
    body: "Design-control planning, ISO 14971 risk management, DHF readiness, traceability, and submission-support strategy — across 21 CFR 820, Part 4, ISO 13485, and IEC 62366.",
  },
  {
    slug: "/services/manufacturing-transfer",
    phase: "Phase 5",
    title: "Manufacturing Transfer & Commercialization",
    body: "DFM/DFA, supplier and process readiness, manufacturing handoff, launch-risk reduction, and scale-up support — in parallel with design controls.",
  },
  {
    slug: "/services/sustaining-engineering",
    phase: "Phase 6",
    title: "Sustaining Engineering & Lifecycle Management",
    body: "Complaint-driven investigations, design changes, CAPA support, cost reduction, and post-market product improvements — without regressing on regulatory posture.",
  },
];

const engagements = [
  {
    title: "Product Discovery Sprint",
    body: "For teams that need to clarify user needs, workflows, product opportunities, and concept direction.",
  },
  {
    title: "Concept-to-Architecture Sprint",
    body: "For teams moving from idea to feasible product architecture, requirements, and development roadmap.",
  },
  {
    title: "Design Controls Readiness Review",
    body: "For teams approaching design freeze, verification, validation, or submission preparation.",
  },
  {
    title: "HFE & Use-Related Risk Review",
    body: "For teams needing stronger alignment between user research, usability evidence, risk management, and product design.",
  },
  {
    title: "Manufacturing Transfer Readiness Review",
    body: "For teams preparing to move from development into production, suppliers, assembly, test, or launch.",
  },
  {
    title: "Sustaining Product Improvement Sprint",
    body: "For launched products facing complaints, field issues, cost pressures, usability concerns, or design-change needs.",
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
          End-to-end product development, organized around the lifecycle.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Engage at any phase — from early user research through sustaining
          support after launch — or bring us in to connect the seams between
          phases where regulated-product programs typically stall.
        </p>
      </Section>

      <Section bordered>
        <ul className="grid gap-10 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <p className="eyebrow">{s.phase}</p>
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
                  Read more →
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered>
        <p className="eyebrow">Productized engagements</p>
        <h2 className="mt-3 max-w-3xl text-3xl">Common Ways We Engage</h2>
        <p className="mt-4 max-w-2xl text-ink-600">
          Most engagements start as one of these focused, productized scopes
          — short enough to deliver a defensible answer, long enough to do
          real work. Custom and longer-running engagements follow from the
          same starting point.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e) => (
            <li
              key={e.title}
              className="rounded-2xl border border-ink-100 bg-white p-6"
            >
              <h3 className="text-lg leading-snug">{e.title}</h3>
              <p className="mt-3 text-sm text-ink-600">{e.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Not sure which phase fits?</h2>
            <p className="mt-2 text-ink-600">
              Most first conversations start with a scoping call to map where
              the product is in the lifecycle, the decision in front of you,
              and the timeline you are working toward.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Start a Product Development Conversation
          </Link>
        </div>
      </Section>
    </>
  );
}
