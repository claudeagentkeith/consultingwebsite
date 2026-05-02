import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/regulatory-quality";
const TITLE = "Regulatory & Quality Consulting (FDA 21 CFR 820, ISO 13485)";
const DESCRIPTION =
  "Senior regulatory and quality consulting for medical device and combination product companies — design controls, risk management, FDA strategy, and audit readiness.";

export const metadata: Metadata = {
  title: "Regulatory & Quality Consulting",
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
    question:
      "Which standards do you work under?",
    answer:
      "FDA 21 CFR Part 820 (QSR), 21 CFR Part 4 for combination products, ISO 13485 for medical-device QMS, ISO 14971 for risk management, and IEC 62366 for usability engineering. We also work fluently with the Design Controls and Risk Management linkages between them.",
  },
  {
    question:
      "Do you build a QMS from scratch, or improve an existing one?",
    answer:
      "Both. New programs typically need design controls and a risk management file aligned to ISO 14971 from day one. Mature organizations engage us for audit readiness, gap remediation, or to integrate combination-product workflows into an established ISO 13485 QMS.",
  },
  {
    question:
      "Can you support FDA submissions or pre-submission interactions?",
    answer:
      "We support submission strategy and the engineering and design-controls evidence behind it — change-decision logic, risk justifications, design history file structure, and verification/validation traceability. We work alongside the firm's regulatory submissions counsel rather than replacing it.",
  },
  {
    question:
      "What does an engagement look like?",
    answer:
      "Most engagements start with a one-hour scoping call to map the question, the stakeholders, and the regulatory surface area. Typical engagements run from a focused two-week assessment to a multi-quarter embedded engagement.",
  },
];

export default function RegulatoryQualityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Regulatory & Quality", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Regulatory and Quality Consulting"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Regulatory &amp; Quality</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Regulatory and quality engineering, aligned to FDA 21 CFR 820 and
          ISO 13485.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Senior regulatory and quality consulting for medical device and
          combination product teams. Design controls, risk management, FDA
          strategy, and audit readiness — with deep fluency in 21 CFR 820,
          21 CFR Part 4, ISO 13485, ISO 14971, and IEC 62366.
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
                strategy under 21 CFR Part 4 — not just two disconnected
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
                actual cause-and-effect chain back to user needs.
              </Bullet>
              <Bullet>
                Treat ISO 14971 risk management as the architectural backbone
                of the QMS, not a parallel deliverable.
              </Bullet>
              <Bullet>
                Build verification and validation evidence so the traceability
                path from user needs → design inputs → design outputs →
                verification → validation is auditable end-to-end.
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
            Risk Management File aligned to ISO 14971:2019, with hazard
            analysis, risk-control traceability, and post-production input.
          </Bullet>
          <Bullet>
            Design controls procedure suite scoped to QSR / ISO 13485 expectations.
          </Bullet>
          <Bullet>510(k) change-decision logic memo and supporting evidence.</Bullet>
          <Bullet>Combination-product 21 CFR Part 4 mapping and gap analysis.</Bullet>
          <Bullet>FDA inspection readiness assessment and remediation roadmap.</Bullet>
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
      <p className="eyebrow">Related services</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        <li>
          <Link
            href="/services/combination-products"
            className="text-ink-900 no-underline hover:underline"
          >
            Combination products consulting →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Medical device design engineering →
          </Link>
        </li>
        <li>
          <Link
            href="/services/human-centered-design"
            className="text-ink-900 no-underline hover:underline"
          >
            Human-centered design (IEC 62366) →
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
            Have a regulatory question that needs senior judgment?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a one-hour scoping call.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a conversation
        </Link>
      </div>
    </Section>
  );
}
