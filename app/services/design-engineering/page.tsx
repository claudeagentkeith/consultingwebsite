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
const TITLE = "Design Engineering & Development for Medical Devices";
const DESCRIPTION =
  "Design engineering and development for medical-device and combination-product teams — system architecture, mechanical/fluidic/optical design, requirements, prototyping, and verification strategy.";

export const metadata: Metadata = {
  title: "Design Engineering & Development",
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
    question: "What disciplines does design engineering cover?",
    answer:
      "Mechanical, optical, fluidics, and systems engineering for instruments, consumables, and combination products — with adjacent fluency in firmware, software, and biology/chemistry interfaces. The principals have led design engineering at unit volumes ranging from prototype quantities through hundreds of thousands of units per year.",
  },
  {
    question: "Can you take a program from concept through verification?",
    answer:
      "Yes. System architecture, breadboard and prototype, design-for-reliability, FMEA, GD&T, and verification protocols — coordinated with the design controls and risk management workstreams so design controls produce real evidence rather than retrospective documentation.",
  },
  {
    question: "How are requirements developed and traced?",
    answer:
      "Requirements are developed alongside design rather than waterfalled in front of it. Design inputs trace from user needs and use specification through subsystem requirements, into design outputs, and onward to verification protocols. The traceability is structured for ISO 13485 / 21 CFR 820 design controls from the start, not bolted on later.",
  },
  {
    question: "Do you work with internal teams or external partners?",
    answer:
      "Both. We embed with internal engineering when the program needs senior technical leadership in the room. We also work alongside contract manufacturers and design houses when the program is run by external partners and the firm needs an independent technical owner.",
  },
];

export default function DesignEngineeringPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Design Engineering & Development", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Design Engineering and Development"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 3</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Design engineering and development for medical devices and
          combination products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Develop the mechanisms, systems, requirements, prototypes, and
          technical solutions that turn product concepts into manufacturable,
          regulated products — with design controls and risk management
          integrated from day one.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A platform program needs an architecture call before downstream
                work commits.
              </Bullet>
              <Bullet>
                A novel mechanism — pump, valve, optical path, microfluidic
                system — needs cross-functional engineering judgment to close
                the cheaper-faster trade space.
              </Bullet>
              <Bullet>
                Design-controls artifacts and engineering reality have drifted
                apart and need to be re-aligned.
              </Bullet>
              <Bullet>
                Manufacturing readiness is uncertain and the design needs a
                hard DFM pass before tooling investment.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                System-level architecture first, with explicit subsystem
                interfaces and an integration plan.
              </Bullet>
              <Bullet>
                Requirements developed alongside design — design inputs
                engineering can actually verify.
              </Bullet>
              <Bullet>
                Design-for-reliability and FMEA driven by ISO 14971 hazard
                analysis, not done as a parallel exercise.
              </Bullet>
              <Bullet>
                Verification strategy designed up front, not improvised under
                a milestone.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>System architecture and trade studies.</Bullet>
          <Bullet>
            Mechanical, fluidic, optical, and systems design.
          </Bullet>
          <Bullet>System and subsystem requirements decomposition.</Bullet>
          <Bullet>
            Engineering prototypes and breadboards tied to design verification.
          </Bullet>
          <Bullet>FMEA aligned to ISO 14971 risk management.</Bullet>
          <Bullet>
            Verification strategy, protocols, and design output package.
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
            href="/services/ideation-strategy"
            className="text-ink-900 no-underline hover:underline"
          >
            Ideation &amp; product strategy →
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
            Working on a design engineering challenge?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to map where the
            program is in the lifecycle and the decision you are facing.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
