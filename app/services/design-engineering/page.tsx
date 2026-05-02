import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/design-engineering";
const TITLE = "Medical Device Design Engineering";
const DESCRIPTION =
  "Mechanical, optical, and systems design engineering for medical devices and combination products — architecture, design-for-manufacture, and design controls integration.";

export const metadata: Metadata = {
  title: "Design Engineering",
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
      "What disciplines does design engineering cover?",
    answer:
      "Mechanical, optical, fluidics, and systems engineering for instruments, consumables, and combination products — with adjacent fluency in firmware, software, and biology/chemistry interfaces. We are typically the senior engineering judgment on architecture and integration decisions.",
  },
  {
    question:
      "Can you take a program from concept through DFM?",
    answer:
      "Yes. Architecture trade studies, breadboard and prototype, design-for-reliability, FMEA, GD&T, design-for-manufacture, and tooling readiness — coordinated with the regulatory and quality workstreams so design controls produce real evidence rather than retrospective documentation.",
  },
  {
    question:
      "Do you work with internal teams or external partners?",
    answer:
      "Both. We embed with internal engineering when the program needs senior judgment in the room. We also work alongside contract manufacturers and design houses when the program is run by external partners and the firm needs an independent technical owner.",
  },
  {
    question:
      "What scale of programs do you support?",
    answer:
      "Programs from early-stage architecture through commercial scale. The firm's principals have led design engineering at unit volumes ranging from prototype quantities through hundreds of thousands of units per year.",
  },
];

export default function DesignEngineeringPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Design Engineering", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Medical Device Design Engineering"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Design Engineering</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Senior design engineering for medical devices and combination
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Mechanical, optical, fluidics, and systems engineering — from
          architecture trade studies through design-for-manufacture, with
          design controls and risk management integrated from day one.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A platform program needs a senior architecture call before a
                lot of downstream work commits.
              </Bullet>
              <Bullet>
                Manufacturing readiness is uncertain and the design needs a
                hard DFM pass before tooling investment.
              </Bullet>
              <Bullet>
                A novel mechanism — pump, valve, optical path — needs senior
                engineering judgment that the cheaper-faster trade space
                actually closes.
              </Bullet>
              <Bullet>
                Design-controls artifacts and engineering reality have drifted
                apart and need to be re-aligned.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Architecture before optimization — the right system topology
                makes the rest of engineering cheap.
              </Bullet>
              <Bullet>
                Design-for-reliability and FMEA driven by ISO 14971 hazard
                analysis, not done as a parallel exercise.
              </Bullet>
              <Bullet>
                GD&amp;T discipline tied to actual function — not just
                drawing-package compliance.
              </Bullet>
              <Bullet>
                Manufacturing readiness measured in tooling, fixturing, and
                process capability — not just geometry on a drawing.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Architecture trade study and recommendation memo.</Bullet>
          <Bullet>System-level requirements decomposition.</Bullet>
          <Bullet>FMEA aligned to ISO 14971 risk management.</Bullet>
          <Bullet>GD&amp;T strategy and critical-to-quality (CTQ) flow-down.</Bullet>
          <Bullet>Design-for-manufacture review and remediation plan.</Bullet>
          <Bullet>Verification and validation plan tied to design inputs and outputs.</Bullet>
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
            href="/services/program-leadership"
            className="text-ink-900 no-underline hover:underline"
          >
            Program leadership →
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
            Have a design engineering call that needs senior judgment?
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
