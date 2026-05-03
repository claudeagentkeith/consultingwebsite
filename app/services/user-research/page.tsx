import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/user-research";
const TITLE = "User Research & Human-Centered Design for Medical Devices";
const DESCRIPTION =
  "User research and human-centered design for medical-device and combination-product teams — workflow research, user needs, usability strategy, use-related risk, and IEC 62366 evidence.";

export const metadata: Metadata = {
  title: "User Research & Human-Centered Design",
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
    question: "What does user research cover at the front of the lifecycle?",
    answer:
      "Workflow and contextual research with the actual users in the actual environments — clinicians, technicians, patients, lay users — to identify needs, pain points, decision points, and use scenarios. Research is structured to feed design inputs, the use specification, and the use-related risk analysis, not to sit as standalone qualitative findings.",
  },
  {
    question: "How does this work integrate with IEC 62366 and ISO 14971?",
    answer:
      "IEC 62366-1 specifies the usability engineering process; ISO 14971 governs risk management. In practice, the use specification, user-interface specification, and use-related risk analysis (URRA) need to integrate cleanly with hazard analysis. We treat URRA as a peer to the broader hazard analysis, not a downstream artifact, so summative results land cleanly.",
  },
  {
    question: "What is the difference between formative and summative evaluations?",
    answer:
      "Formative evaluations happen iteratively during development to identify use-errors and refine the user interface. Summative evaluations happen on the validation build and demonstrate that critical tasks can be performed correctly under representative use. Skipping formative work, or running summative on an unfrozen design, is the most common reason summative results don't hold up.",
  },
  {
    question: "Combination products — is the human-factors evidence different?",
    answer:
      "Yes. FDA expects combination products to demonstrate that the user can correctly perform critical tasks across both constituents. URRA and the use specification need to span the whole use scenario, including the drug constituent's preparation and administration steps where applicable.",
  },
];

export default function UserResearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "User Research & Human-Centered Design", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="User Research and Human-Centered Design"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 1</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          User research and human-centered design for medical devices and
          combination products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Identify user needs, workflows, and use-related risks early — and
          translate them into product direction, design inputs, and IEC 62366
          evidence that holds up downstream.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Early user research needs to become a clear product direction.
              </Bullet>
              <Bullet>
                A combination product is approaching summative evaluation and
                the use-related risk file is not yet aligned with IEC 62366.
              </Bullet>
              <Bullet>
                Customer and user research needs to be calibrated into design
                inputs, not just left as qualitative findings.
              </Bullet>
              <Bullet>
                A submission reviewer has flagged the human-factors evidence
                package and remediation needs to land before the next round.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Field and contextual research first — clear users,
                environments, and use scenarios before user-interface
                decisions.
              </Bullet>
              <Bullet>
                Use-related risk analysis (URRA) as a peer to broader hazard
                analysis, not a downstream artifact.
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
          <Bullet>Field research and workflow mapping.</Bullet>
          <Bullet>Use specification (IEC 62366-1).</Bullet>
          <Bullet>User-interface specification.</Bullet>
          <Bullet>
            Use-related risk analysis (URRA) integrated with the ISO 14971
            risk management file.
          </Bullet>
          <Bullet>
            Formative and summative evaluation plans, protocols, and
            analysis.
          </Bullet>
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
      <p className="eyebrow">Adjacent phases</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        <li>
          <Link
            href="/services/ideation-strategy"
            className="text-ink-900 no-underline hover:underline"
          >
            Ideation &amp; product strategy →
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
            href="/services/design-controls"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory, quality &amp; design controls →
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
            Need user research or HFE evidence that holds up?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to map where the
            product is in the lifecycle and the timeline you are working
            toward.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
