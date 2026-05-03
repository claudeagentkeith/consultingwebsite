import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/design-controls";
const TITLE =
  "Regulatory, Quality & Design Controls for Medical Devices and Combination Products";
const DESCRIPTION =
  "Regulatory, quality, and design controls support for medical-device and combination-product teams — design-control planning, ISO 14971 risk, DHF readiness, traceability, and submission-support strategy.";

export const metadata: Metadata = {
  title: "Regulatory, Quality & Design Controls",
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: `${TITLE} · Hitmaker Engineering`,
    description: DESCRIPTION,
    url: SLUG,
    type: "website",
  },
};

const faqs: FaqEntry[] = [
  {
    question: "Which standards do you work under?",
    answer:
      "FDA 21 CFR Part 820 (QSR), 21 CFR Part 4 for combination products, ISO 13485 for medical-device QMS, ISO 14971 for risk management, and IEC 62366 for usability engineering. We also work fluently with the design controls and risk management linkages between them.",
  },
  {
    question: "How do design controls integrate with combination products?",
    answer:
      "21 CFR Part 4 lets a combination product comply with either the device QSR (Part 820) plus specified drug CGMP requirements (Part 211), or vice versa, under a streamlined approach. Getting the integration of device design controls and drug CGMP right is the single biggest determinant of audit and submission readiness — and the place combination-product programs most often stall.",
  },
  {
    question: "Can you support FDA submissions or pre-submission interactions?",
    answer:
      "We support submission strategy and the engineering and design-controls evidence behind it — change-decision logic, risk justifications, design history file structure, and verification/validation traceability. We work alongside the firm's regulatory submissions counsel rather than replacing it.",
  },
  {
    question: "What does an engagement look like?",
    answer:
      "Most engagements start with a scoping call to map the question, the stakeholders, and the regulatory surface area. Typical engagements run from a focused two-week assessment to a multi-quarter embedded engagement spanning design freeze, V&V, and submission support.",
  },
];

export default function DesignControlsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Regulatory, Quality & Design Controls", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Regulatory, Quality and Design Controls"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 4</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Regulatory, quality, and design controls — connected to the rest of
          development.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Connect requirements, risks, verification, validation, usability,
          and regulatory evidence into a coherent design controls package —
          aligned to FDA 21 CFR 820 / Part 4, ISO 13485, ISO 14971, and IEC
          62366.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A program is approaching design freeze and the design history
                file isn&apos;t in shape for an FDA inspection.
              </Bullet>
              <Bullet>
                A drug-device combination product needs a coherent regulatory
                strategy under 21 CFR Part 4 — not two disconnected
                Part&nbsp;820 / Part&nbsp;211 workstreams.
              </Bullet>
              <Bullet>
                A change is coming and the team needs change-decision logic
                that will hold up against 510(k) precedent.
              </Bullet>
              <Bullet>
                Risk-management and design-controls artifacts have drifted
                apart and the next audit is on the calendar.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Map the regulatory surface area first — primary mode of
                action, predicate strategy, applicable standards, and the
                cause-and-effect chain back to user needs.
              </Bullet>
              <Bullet>
                Treat ISO 14971 risk management as the architectural backbone
                of the QMS, not a parallel deliverable.
              </Bullet>
              <Bullet>
                Build verification and validation evidence so traceability
                from user needs → design inputs → design outputs → V&amp;V is
                auditable end-to-end.
              </Bullet>
              <Bullet>
                Coordinate with regulatory counsel on submission strategy and
                with quality on inspection readiness.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Design History File rebuild or remediation plan.</Bullet>
          <Bullet>
            Risk Management File aligned to ISO 14971:2019 — hazard analysis,
            risk-control traceability, and post-production input.
          </Bullet>
          <Bullet>
            Design controls procedure suite scoped to QSR / ISO 13485
            expectations.
          </Bullet>
          <Bullet>
            510(k) change-decision logic memo and supporting evidence.
          </Bullet>
          <Bullet>
            21 CFR Part 4 mapping and combination-product gap analysis.
          </Bullet>
          <Bullet>
            Submission-support engineering evidence package and FDA inspection
            readiness assessment.
          </Bullet>
        </ul>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Frequently asked questions</h2>
        <div className="mt-6 max-w-3xl">
          <ServiceFaq items={faqs} />
        </div>
      </Section>

      <CrossLinks />
      <CtaBlock />
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink-900"
      />
      <span>{children}</span>
    </li>
  );
}

function CrossLinks() {
  return (
    <Section bordered>
      <p className="eyebrow">Adjacent phases</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        <li>
          <Link
            href="/services/user-research"
            className="text-ink-900 no-underline hover:underline"
          >
            User research &amp; human-centered design →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Design engineering &amp; development →
          </Link>
        </li>
        <li>
          <Link
            href="/services/manufacturing-transfer"
            className="text-ink-900 no-underline hover:underline"
          >
            Manufacturing transfer &amp; commercialization →
          </Link>
        </li>
      </ul>
    </Section>
  );
}

function CtaBlock() {
  return (
    <Section bordered>
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl">
            Approaching design freeze, V&amp;V, or submission?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to map the
            regulatory surface area and the timeline you are working toward.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
