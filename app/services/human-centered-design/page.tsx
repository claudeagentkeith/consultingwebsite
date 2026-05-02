import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/human-centered-design";
const TITLE = "Human-Centered Design (IEC 62366) for Medical Devices";
const DESCRIPTION =
  "Human-centered design and human factors engineering under IEC 62366 — use specification, use-related risk analysis, and formative-to-summative evaluation.";

export const metadata: Metadata = {
  title: "Human-Centered Design",
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
      "What is IEC 62366 and how does it fit with ISO 14971?",
    answer:
      "IEC 62366-1 specifies a usability engineering process for medical devices; IEC 62366-2 is the application guidance. Both feed into the ISO 14971 risk management file via use-related risk analysis (URRA). In practice, getting the use specification, user-interface specification, and usability evaluation plan to integrate cleanly with hazard analysis is what separates a usable evidence package from a rework cycle.",
  },
  {
    question:
      "What is the difference between formative and summative evaluations?",
    answer:
      "Formative evaluations happen iteratively during development to identify use-errors and refine the user interface. Summative evaluations happen on the validation build and demonstrate that critical tasks can be performed correctly under representative use. Skipping formative work, or running summative on an unfrozen design, is the most common reason summative results don't hold up.",
  },
  {
    question:
      "Do you run usability studies in-house?",
    answer:
      "We design and supervise usability studies and integrate them with the broader human-factors and design-controls programs. We typically partner with specialized usability test facilities for actual study execution, but the methodology, protocol, and connection to the risk file are owned by the firm.",
  },
  {
    question:
      "Combination products — is the human factors evidence different?",
    answer:
      "Yes. FDA expects combination products to demonstrate that the user can correctly perform critical tasks across both constituents. URRA and the use specification need to span the whole use scenario, including the drug constituent's preparation and administration steps where applicable.",
  },
];

export default function HumanCenteredDesignPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Human-Centered Design", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Human-Centered Design"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Human-Centered Design</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Human-centered design and IEC 62366 usability engineering for
          medical devices.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Senior human-factors and human-centered design consulting for
          medical device and combination product programs. Use specification,
          use-related risk analysis, formative and summative evaluation, and
          tight integration with the ISO 14971 risk management file.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A combination product is approaching summative evaluation and
                the use-related risk file is not yet aligned with IEC 62366.
              </Bullet>
              <Bullet>
                A submission reviewer has flagged the human factors evidence
                package and remediation needs to land before the next round.
              </Bullet>
              <Bullet>
                A new device is being scoped and the team wants
                human-centered design embedded from the architecture stage,
                not retrofitted near validation.
              </Bullet>
              <Bullet>
                Customer and user research needs to be calibrated into design
                inputs, not just left as qualitative findings.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Use specification first — clear users, environments, and use
                scenarios before user-interface decisions.
              </Bullet>
              <Bullet>
                Use-related risk analysis (URRA) as a peer to the broader
                hazard analysis, not a downstream artifact.
              </Bullet>
              <Bullet>
                Formative evaluation as a design feedback loop, not a
                checkpoint.
              </Bullet>
              <Bullet>
                Summative protocols designed to demonstrate critical tasks
                under representative conditions — and to survive scrutiny.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Use specification (IEC 62366-1).</Bullet>
          <Bullet>User-interface specification.</Bullet>
          <Bullet>
            Use-related risk analysis (URRA) integrated with the ISO 14971
            risk management file.
          </Bullet>
          <Bullet>Formative evaluation plan, protocols, and analysis.</Bullet>
          <Bullet>Summative usability evaluation plan and protocol.</Bullet>
          <Bullet>Human factors engineering report (HFE/UE report).</Bullet>
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
            href="/services/regulatory-quality"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory &amp; quality consulting →
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
            Need IEC 62366 evidence that holds up?
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
