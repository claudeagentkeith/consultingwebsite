import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/combination-products";
const TITLE = "Combination Products Consulting (FDA 21 CFR Part 4)";
const DESCRIPTION =
  "Combination product consulting under FDA 21 CFR Part 4 — drug-device strategy, integrated design controls, and human factors engineering.";

export const metadata: Metadata = {
  title: "Combination Products Consulting",
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
      "What is 21 CFR Part 4 and why does it matter?",
    answer:
      "21 CFR Part 4 is the FDA regulation that lets a combination product comply with either the device QSR (Part 820) plus specified drug CGMP requirements (Part 211), or vice versa, under a streamlined approach. In practice it determines how the design controls and risk management of the device constituent integrate with the drug constituent's CGMPs — and getting that mapping right is the single biggest determinant of audit and submission readiness.",
  },
  {
    question:
      "Drug-device, device-led, or drug-led — does it matter?",
    answer:
      "Yes. The primary mode of action determines the lead Center and the shape of the submission. The streamlined approach under Part 4 still requires you to demonstrate the non-lead constituent's requirements are met. Getting the determination wrong, or treating it as a paperwork exercise, is one of the most common stall points.",
  },
  {
    question:
      "Where do programs typically stall?",
    answer:
      "Three places: (1) trying to run device design controls and drug CGMP as parallel streams instead of an integrated combination-product workflow; (2) human factors evidence that doesn't connect to the use-related risk file the way Part&nbsp;4 expects; (3) change-control logic that can't justify which constituent's pathway applies to a given change.",
  },
  {
    question:
      "Do you cover delivery devices, diagnostics, or both?",
    answer:
      "Both. The firm's experience spans drug-delivery architectures (pump and valve systems), connected diagnostic platforms, and integrated drug-device systems where the device generates the dosing signal.",
  },
];

export default function CombinationProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Combination Products", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Combination Products Consulting"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Combination Products</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Combination products consulting under FDA 21 CFR Part 4.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Senior engineering, regulatory, and human factors consulting for
          drug-device combination products. We help teams integrate device
          design controls with drug CGMP under 21 CFR Part 4 — and avoid the
          places combination-product programs actually stall.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A drug-device program is being structured under 21 CFR Part 4
                and the team needs an integrated approach instead of two
                parallel workstreams.
              </Bullet>
              <Bullet>
                A delivery device is being adapted for a new drug constituent
                and design controls need to extend cleanly to the new
                indication.
              </Bullet>
              <Bullet>
                Human factors evidence isn&apos;t linking to the use-related
                risk analysis the way the Part&nbsp;4 regulators expect.
              </Bullet>
              <Bullet>
                A change is coming and change-control logic across constituents
                isn&apos;t crisp.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Anchor on primary mode of action and the resulting submission
                pathway and lead Center.
              </Bullet>
              <Bullet>
                Build a single combination-product design controls and risk
                management spine — then map it to the appropriate Part&nbsp;820
                / Part&nbsp;211 obligations.
              </Bullet>
              <Bullet>
                Integrate human factors and use-related risk analysis as
                first-class inputs to design, not back-end deliverables.
              </Bullet>
              <Bullet>
                Coordinate with submissions counsel on Pre-RFD and Pre-Submission
                interactions.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>21 CFR Part 4 mapping and gap analysis.</Bullet>
          <Bullet>Integrated combination-product design controls plan.</Bullet>
          <Bullet>
            Use-related risk analysis (URRA) and IEC 62366 use-specification
            tied to the risk management file.
          </Bullet>
          <Bullet>
            Combination-product change-decision logic across constituents.
          </Bullet>
          <Bullet>Pre-Submission strategy support for combination-product questions.</Bullet>
          <Bullet>Drug-delivery architecture trade studies.</Bullet>
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
            href="/services/regulatory-quality"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory &amp; quality consulting →
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
            Working on a combination product?
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
