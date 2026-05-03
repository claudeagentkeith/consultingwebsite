import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/sustaining-engineering";
const TITLE =
  "Sustaining Engineering & Lifecycle Management for Medical Devices";
const DESCRIPTION =
  "Sustaining engineering and lifecycle management for launched medical-device and combination-product programs — complaint investigations, design changes, CAPA support, cost reduction, and post-market improvements.";

export const metadata: Metadata = {
  title: "Sustaining Engineering & Lifecycle Management",
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
    question: "What kinds of products do you sustain?",
    answer:
      "Launched medical devices and combination products — instruments, consumables, drug-delivery devices, and connected diagnostic platforms. Engagements typically focus on field-issue remediation, design changes, cost-reduction roadmaps, and post-market surveillance integration with the design and risk file.",
  },
  {
    question: "How do you handle CAPA effectiveness verification?",
    answer:
      "CAPA effectiveness is structured against the original failure mode, the design and process change implemented, and the post-implementation evidence — not just procedural closure. We treat effectiveness verification as design controls work, not just quality reporting, so the change actually closes the underlying risk.",
  },
  {
    question: "Can you do cost reduction without regulatory rework?",
    answer:
      "Often, yes — when the cost-reduction work is scoped against design controls, change-control logic, and the risk file in parallel. Cost reduction tied to the design and the supply base, with clear regulatory and quality risk assessment, can move without re-opening the submission. We refuse engagements that would treat cost reduction as a back-door redesign.",
  },
  {
    question: "Can you support post-market surveillance integration?",
    answer:
      "Yes. Post-market data — complaints, field-service records, returns, surveillance — should feed back into the risk file and design history file as design inputs, not just be filed for the next audit. We help structure that loop so post-market signals actually drive product improvements.",
  },
];

export default function SustainingEngineeringPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Sustaining Engineering & Lifecycle Management", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Sustaining Engineering and Lifecycle Management"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 6</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Sustaining engineering and lifecycle management for launched
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Address post-launch issues, design changes, complaints, cost
          reduction, and product improvements — without regressing on
          regulatory or quality posture.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A launched product is facing complaint trends, field issues,
                or yield problems.
              </Bullet>
              <Bullet>
                A cost-reduction effort is needed without regressing on
                regulatory or quality posture.
              </Bullet>
              <Bullet>
                A design change is being scoped and change-control logic
                across constituents needs to be crisp.
              </Bullet>
              <Bullet>
                Post-market surveillance signals are showing up in the risk
                file and remediation needs to be planned.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Complaint and CAPA work driven by root-cause analysis, not
                band-aid fixes.
              </Bullet>
              <Bullet>
                Design changes scoped against design controls, risk
                management, regulatory, and manufacturing in parallel.
              </Bullet>
              <Bullet>
                Cost reduction tied to the design and the supply base, not
                isolated value-engineering exercises.
              </Bullet>
              <Bullet>
                Post-market data treated as design inputs, not just a quality
                reporting obligation.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Complaint investigation and root-cause analysis.</Bullet>
          <Bullet>CAPA support and effectiveness verification.</Bullet>
          <Bullet>
            Design change scoping and change-control logic memo.
          </Bullet>
          <Bullet>
            Cost-reduction roadmap with regulatory and quality risk
            assessment.
          </Bullet>
          <Bullet>
            Post-market surveillance integration with the design and risk
            file.
          </Bullet>
          <Bullet>Field-issue remediation plans with named owners.</Bullet>
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
            href="/services/manufacturing-transfer"
            className="text-ink-900 no-underline hover:underline"
          >
            Manufacturing transfer &amp; commercialization →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-controls"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory, quality &amp; design controls →
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
            Sustaining a launched product?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to map the
            field-issue picture, change-control posture, and what good would
            look like.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
