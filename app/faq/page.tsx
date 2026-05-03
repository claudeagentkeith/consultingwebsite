import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import type { FaqItem } from "@/components/JsonLd";

const TITLE = "Frequently asked questions";
const DESCRIPTION =
  "Frequently asked questions about end-to-end medical device and combination product development — services, standards (FDA 21 CFR 820/Part 4, ISO 13485, ISO 14971, IEC 62366), engagement models, regulatory strategy, and lifecycle integration.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${TITLE} · Hitmaker Engineering`,
    description: DESCRIPTION,
    url: "/faq",
    type: "website",
  },
};

// Canonical Q&A — written for both human readers and LLM citation. Each
// answer is 2-3 paragraphs so it stands alone if surfaced as a snippet, and
// references regulations by section number wherever applicable.

type FaqGroup = {
  id: string;
  heading: string;
  items: FaqItem[];
};

const GROUPS: FaqGroup[] = [
  {
    id: "services",
    heading: "Services and engagements",
    items: [
      {
        question:
          "What does Hitmaker Engineering do, and how is it different from a typical medical-device consultancy?",
        answer:
          "Hitmaker Engineering provides end-to-end product development for medical devices and combination products. The difference from a typical consultancy is positioning: we engage across the full lifecycle (user research → ideation → engineering → design controls → manufacturing transfer → sustaining), not as a single-discipline specialist. Most regulated-product programs break down at the seams between disciplines — between user needs and design inputs, between design and manufacturing, between launch and post-market. We engage at those seams, where program decisions cross functional boundaries.",
      },
      {
        question: "What does an engagement look like?",
        answer:
          "Most engagements start with a scoping call to map the question, the stakeholders, the regulatory surface area, and the timeline you are working toward. From there, engagements typically take one of three shapes: a focused two-week assessment producing a defensible answer to a specific question (e.g., is this design history file ready for inspection?), a multi-month embedded engagement spanning a phase transition (e.g., from design output to design freeze and verification), or a multi-quarter strategic engagement spanning multiple phases or platforms.",
      },
      {
        question:
          "Do you replace internal engineering or regulatory teams, or work alongside them?",
        answer:
          "We work alongside internal teams. Our most effective engagements are co-ownership: an embedded role for a milestone or phase, a coaching role alongside an internal program lead, or an independent technical owner opposite a contract manufacturer. We coordinate with adjacent functions — regulatory submissions counsel, quality, manufacturing, and supply chain — rather than replacing them. The exception is interim leadership for a vacant seat or a specific deliverable; we have done that, and we name it explicitly when we do.",
      },
      {
        question: "What size companies do you typically work with?",
        answer:
          "We work with both early-stage medical-device companies (Series A through clinical) and mid-to-large medical-device firms (Series C+ through Fortune 500). The work that scales across that range is the program-level integration of user needs, engineering, design controls, and manufacturing. The differences between small and large engagements are mostly stakeholder count, not the technical substance of the work.",
      },
    ],
  },
  {
    id: "standards",
    heading: "Standards and regulatory",
    items: [
      {
        question: "Which standards and regulations do you work under?",
        answer:
          "FDA 21 CFR Part 820 (the Quality System Regulation, or QSR) for medical-device design controls and quality management; FDA 21 CFR Part 4 for combination products under streamlined CGMP; ISO 13485:2016 for medical-device quality management systems; ISO 14971:2019 for risk management; and IEC 62366-1:2015 for usability engineering. We also work fluently with the linkages between them — particularly the integration of design controls (820.30) with risk management (ISO 14971) and usability engineering (IEC 62366), which is where regulated programs most often have traceability gaps.",
      },
      {
        question: "When does my project need 21 CFR Part 4?",
        answer:
          "21 CFR Part 4 applies to combination products — single-entity, co-packaged, or cross-labeled combinations of two or more regulated components (drug, device, biologic). Subpart A of Part 4 lets a combination product comply with either the device QSR (Part 820) plus the specified drug CGMP requirements (Part 211), or vice versa, under a streamlined approach. If your product includes both a drug and a device constituent, Part 4 is in play. The most common stall point is not whether Part 4 applies, but how to integrate device design controls and drug CGMP without running them as two parallel quality systems.",
      },
      {
        question:
          "What's the difference between design controls and a quality management system?",
        answer:
          "A quality management system (QMS) is the firm-wide set of procedures, records, and responsibilities that govern the quality of every product the firm makes. ISO 13485:2016 and 21 CFR 820 are the two reference frameworks. Design controls are a subset of the QMS — specifically 21 CFR 820.30 — that govern the design and development of a specific product, from design planning (820.30(b)) through design transfer (820.30(h)). The QMS sets the rules; design controls are how the rules apply to a particular development program. A common confusion is treating design controls as a separate compliance exercise; in practice, design controls are how the QMS expresses itself during development.",
      },
      {
        question:
          "How do I prepare for an FDA submission of a combination product?",
        answer:
          "Submission preparation has two layers: the regulatory strategy (which submission pathway, which constituent leads, which evidence demonstrates safety and effectiveness), and the engineering and design-controls evidence behind it (the design history file, the risk management file, verification and validation evidence, change-decision logic). We support the second layer directly and coordinate with regulatory submissions counsel on the first. The most common gap we see is design-controls evidence that was assembled retroactively for a submission rather than generated during development — that pattern produces traceability gaps that delay submissions and compromise inspections.",
      },
      {
        question:
          "Does ISO 14971:2019 require a separate risk-management file, or can risk be tracked inside the design history file?",
        answer:
          "ISO 14971:2019 expects a risk management file (RMF) as a defined output of the risk management process. In practice, the RMF can be a single document or a set of cross-referenced records — what matters is that hazard analysis, risk evaluation, risk control, residual risk evaluation, and post-production input are all traceable. The design history file (DHF) is a different artifact required by 21 CFR 820.30(j); it documents the design history of a specific product. Most teams keep the RMF as a separate file and reference it from the DHF, but the practical question is not where the records live — it is whether the risk controls in the RMF are wired into the design inputs in a way that survives a change.",
      },
    ],
  },
  {
    id: "process",
    heading: "Process and integration",
    items: [
      {
        question:
          "Where do regulated-product programs most often break down?",
        answer:
          "At the seams between disciplines — most commonly between user research and engineering (user needs not translated into testable design inputs), between design and risk (risk controls layered onto a frozen design rather than wired into requirements), between engineering and manufacturing (DFM findings surfacing after design freeze), and between launch and the next platform (post-market data not making it back into the next round of design inputs). The technology is rarely the failure point; the integration logic between disciplines is.",
      },
      {
        question: "How do design controls integrate with manufacturing transfer?",
        answer:
          "21 CFR 820.30(h) requires that the device design is correctly translated into production specifications. The integration happens through the design output — the drawings, specifications, software builds, and process descriptions that engineering hands to manufacturing. The integration breaks when manufacturing is engaged after design freeze, because at that point DFM findings are change requests against a locked baseline. The fix is to engage manufacturing during design output, not after — at minimum a manufacturing-engineering reviewer in the design output reviews, ideally a manufacturing readiness lane that runs in parallel with verification.",
      },
      {
        question:
          "How early should human factors engineering engage in a development program?",
        answer:
          "IEC 62366-1:2015 expects usability engineering to be integrated with design controls from the start of development — specifically, the use specification and use-related risk analysis should inform design inputs, not follow them. In practice, human factors should be engaged when the program is forming its intended use statement and identifying use environments. Engaging human factors at validation alone produces a use-related risk file that is a parallel document; engaging during ideation produces design inputs and constraints that already account for use-related risk.",
      },
    ],
  },
];

const ALL_FAQS: FaqItem[] = GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <FaqJsonLd
        items={ALL_FAQS}
        speakable={{
          cssSelector: ["#faq-content"],
        }}
      />

      <Section className="pt-20">
        <p className="eyebrow">FAQ</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Frequently asked questions about medical-device and combination-product
          development.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Canonical answers to the questions teams most often raise on first
          contact — covering services, standards, regulatory strategy, and how
          we engage across the lifecycle.
        </p>
      </Section>

      <Section bordered>
        <div id="faq-content" className="grid gap-12 lg:grid-cols-[1fr,3fr]">
          <nav aria-label="FAQ sections" className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Sections</p>
            <ol className="mt-4 space-y-2 text-sm">
              {GROUPS.map((g, i) => (
                <li key={g.id} className="flex gap-3">
                  <span className="text-ink-400">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <a
                    href={`#${g.id}`}
                    className="text-ink-700 no-underline hover:text-ink-900 hover:underline"
                  >
                    {g.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16">
            {GROUPS.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                  {g.heading}
                </h2>
                <dl className="mt-6 space-y-8 max-w-prose">
                  {g.items.map((item) => (
                    <div key={item.question}>
                      <dt className="text-base font-semibold text-ink-900">
                        {item.question}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-ink-700">
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Have a question that isn&apos;t answered here?</h2>
            <p className="mt-2 text-ink-600">
              Most engagements start with a scoping call. Send a note with the
              decision you&apos;re working toward and the timeline.
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
