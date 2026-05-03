import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/manufacturing-transfer";
const TITLE =
  "Manufacturing Transfer & Commercialization for Medical Devices";
const DESCRIPTION =
  "Manufacturing transfer and commercialization for medical-device and combination-product teams — DFM/DFA, supplier readiness, process validation, launch-risk reduction, and scale-up support.";

export const metadata: Metadata = {
  title: "Manufacturing Transfer & Commercialization",
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
    question: "When should manufacturing engagement start?",
    answer:
      "Earlier than most programs assume. DFM and process readiness are most valuable while the design is still tractable. Treating manufacturing transfer as a hand-off after design freeze is the single most common cause of late-stage rework, late tooling changes, and slipped launches. We engage during design engineering when possible and lead the formal transfer when the program is ready.",
  },
  {
    question: "Do you work with internal manufacturing or contract manufacturers?",
    answer:
      "Both. We have led transfers into internal sites and into contract manufacturers, and have run engineering ownership opposite both. The mechanics are similar; the politics, documentation, and supplier-management posture differ — and we structure the engagement accordingly.",
  },
  {
    question: "How do you handle process validation?",
    answer:
      "Process validation (IQ/OQ/PQ) is structured against critical-to-quality flow-down from the design risk file, not first-piece inspection. We design the validation strategy alongside the manufacturing process so PFMEA, control plans, capability studies, and validation protocols form one consistent package — not parallel deliverables.",
  },
  {
    question: "Can you support scale-up beyond the initial launch volume?",
    answer:
      "Yes. The principals have led scale-up at unit volumes from prototype quantities through 300K–1M unit/year, including 50–75% unit-cost reduction work via design and process optimization. Scale-up planning addresses tooling life, fixturing, automation, yield, and supplier capacity in parallel — not as serial concerns.",
  },
];

export default function ManufacturingTransferPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Manufacturing Transfer & Commercialization", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Manufacturing Transfer and Commercialization"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 5</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Manufacturing transfer and commercialization for medical devices and
          combination products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Move from development into production, suppliers, assembly, test,
          and launch — with DFM/DFA, process validation, supplier
          qualification, and launch-risk reduction in parallel rather than in
          sequence.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A product is approaching design freeze and manufacturing
                readiness is uncertain.
              </Bullet>
              <Bullet>
                DFM/DFA gaps are surfacing late and tooling or process risk is
                climbing.
              </Bullet>
              <Bullet>
                A supplier or contract manufacturer is being onboarded and
                process readiness needs to be assessed.
              </Bullet>
              <Bullet>
                A launch is approaching and the team needs a launch-risk
                reduction plan that ties product, process, and regulatory.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Design-for-manufacture in parallel with design controls, not
                after design freeze.
              </Bullet>
              <Bullet>
                Process capability and supplier qualification driven by
                critical-to-quality flow-down — not just first-piece
                inspection.
              </Bullet>
              <Bullet>
                Launch readiness measured across product, process, supplier,
                documentation, and regulatory dimensions.
              </Bullet>
              <Bullet>
                Scale-up planning that addresses real volume risk: tooling
                life, fixturing, automation, yield, and supplier capacity.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Manufacturing transfer plan and gating.</Bullet>
          <Bullet>DFM/DFA review and remediation plan.</Bullet>
          <Bullet>
            Process FMEA aligned to ISO 14971 and the design risk file.
          </Bullet>
          <Bullet>
            Supplier qualification plan and audit readiness.
          </Bullet>
          <Bullet>
            Process validation strategy (IQ/OQ/PQ) with control plans and
            capability studies.
          </Bullet>
          <Bullet>
            Launch readiness assessment with named risk owners.
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
            href="/services/design-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Design engineering &amp; development →
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
            href="/services/sustaining-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Sustaining &amp; lifecycle management →
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
          <h2 className="text-2xl">Preparing for transfer or launch?</h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to map the
            transfer plan, supplier posture, and launch timeline.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
