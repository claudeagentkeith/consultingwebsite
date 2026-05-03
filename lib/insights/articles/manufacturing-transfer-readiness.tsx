import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "manufacturing-transfer-readiness",
  title:
    "Manufacturing transfer readiness: the 12 things most medical-device teams miss",
  description:
    "Design transfer under 21 CFR 820.30(h) is one of the most expensive seams in regulated-product development. The regulation is short; the readiness checklist is long. Twelve specific gaps practitioner teams should close before transfer — covering DHF, DFM, process validation under 820.75, supplier readiness, and inspection posture.",
  topic: "Manufacturing & Lifecycle",
  publishedAt: "2026-05-03",
  status: "published",
  excerpt:
    "Design transfer is the seam where engineering hands the device to manufacturing. The regulation (21 CFR 820.30(h)) is one paragraph. The readiness work is the largest single integration effort in a regulated-product program — and the place where late discoveries are most expensive. Twelve specific gaps practitioner teams should close before transfer kicks off.",
  keywords: [
    "manufacturing transfer medical device",
    "design transfer 820.30(h)",
    "process validation 820.75",
    "IQ OQ PQ medical device",
    "DFM medical device",
    "design history file inspection readiness",
    "supplier qualification 820.50",
  ],
  readingMinutes: 13,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "What does 21 CFR 820.30(h) require for design transfer?",
    answer:
      "21 CFR 820.30(h) requires that each manufacturer establish and maintain procedures to ensure that the device design is correctly translated into production specifications. The regulation is intentionally short — it does not specify how. It does require the procedures to be documented and the transfer to be reviewed and recorded. In practice, the burden of demonstrating correct translation falls on the design output package: drawings, specifications, software builds, process descriptions, work instructions, and inspection criteria. The transfer is correct when manufacturing can build a unit that meets the design output specifications without consulting design engineering.",
  },
  {
    question:
      "What's the difference between design transfer and process validation?",
    answer:
      "Design transfer (820.30(h)) is the activity of translating the device design into production specifications. Process validation (21 CFR 820.75) is the activity of validating manufacturing processes whose results cannot be fully verified by inspection or test. They overlap but are distinct — a process can be transferred without being validated, but it cannot be commercialized without process validation evidence for any process where the regulation applies. Most regulated-product transfers include process validation as a parallel work stream: IQ (installation qualification), OQ (operational qualification), and PQ (performance qualification) for each non-verifiable process.",
  },
  {
    question: "When should manufacturing engage in the development program?",
    answer:
      "Manufacturing should engage during design output (Phase 3-4 of the lifecycle), not at design transfer. The structural reason: by the time design freeze approaches, a DFM finding is no longer a suggestion — it is a change request against a frozen baseline that triggers re-verification, risk-file updates, and possibly 510(k) change-decision logic. Engaging manufacturing during design output makes those findings forcing functions on the design rather than rework on a locked baseline. The minimum viable engagement is one manufacturing-engineering reviewer in design output reviews; the full version is a manufacturing readiness lane that runs in parallel with verification.",
  },
  {
    question:
      "What does 'process validation' mean under 21 CFR 820.75?",
    answer:
      "21 CFR 820.75 requires that processes whose results cannot be fully verified by subsequent inspection and test be validated with a high degree of assurance and approved according to established procedures. Examples include sterilization, lyophilization, certain bonding processes, certain laser-welding operations, and most software-controlled processes where output verification is impractical. Process validation typically uses an IQ/OQ/PQ structure: installation qualification (the equipment is installed and configured per specification), operational qualification (the equipment performs across the range of operating parameters), and performance qualification (the process produces conforming output across the expected variation in inputs).",
  },
  {
    question:
      "What's the most expensive late discovery during manufacturing transfer?",
    answer:
      "The most expensive late discovery is a design parameter that is achievable at engineering bench scale but not at production scale — typically a tolerance, a bond geometry, or a cycle-time constraint that requires a process the supplier cannot reliably hold. The expense compounds because the change triggers re-verification (820.30(f)), risk-file updates (ISO 14971), and on Class II combination products may trigger 510(k) change-decision logic (FDA's Deciding When to Submit a 510(k) for a Change to an Existing Device guidance, also known as the 'change guidance'). The fix is engaging the supplier and process FMEA during design output, not after design freeze.",
  },
];

export const tableOfContents = [
  { id: "transfer-anatomy", label: "What design transfer actually is" },
  { id: "design-package", label: "Gaps 1-4 — Design output package" },
  { id: "process-readiness", label: "Gaps 5-8 — Process readiness" },
  { id: "supplier-qms", label: "Gaps 9-12 — Supplier and QMS readiness" },
  { id: "summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];

export const howTo: ArticleModule["howTo"] = {
  name: "Manufacturing transfer readiness checklist for medical device teams",
  description:
    "Twelve specific gaps to close before initiating 21 CFR 820.30(h) design transfer — covering design output completeness, process readiness under 820.75, and supplier qualification under 820.50.",
  steps: [
    {
      name: "Validate design output completeness against the BOM",
      text: "Every BOM line item has a controlled drawing or specification at the released revision. Drawings include all dimensions a supplier needs to quote, build, and inspect — not the engineering shorthand that worked at bench scale.",
    },
    {
      name: "Confirm tolerance stack-up against process capability",
      text: "Critical-to-quality dimensions have tolerances justified by capability data from the actual process or a representative one. Cpk targets are documented at the drawing level for high-risk tolerances.",
    },
    {
      name: "Lock the inspection criteria before transfer",
      text: "Each design output that must be inspected has an inspection method, sample size, and AQL or comparable acceptance criterion in the design output package — not negotiated with QC after transfer.",
    },
    {
      name: "Cross-reference design FMEA with process FMEA",
      text: "Each design FMEA failure mode maps to a process FMEA risk control or to a design feature that prevents the failure mode. Gaps are flagged as transfer blockers.",
    },
    {
      name: "Define IQ/OQ/PQ scope for each non-verifiable process",
      text: "Per 21 CFR 820.75, processes whose results cannot be fully verified by inspection require validation. IQ/OQ/PQ scope, success criteria, and sample sizes are agreed before transfer kicks off.",
    },
    {
      name: "Stand up the device master record (DMR) per 21 CFR 820.181",
      text: "The DMR contains the device specifications, production process specifications, quality assurance procedures, packaging and labeling specifications, and installation/maintenance/servicing specifications. Built incrementally during transfer, not assembled afterward.",
    },
    {
      name: "Qualify suppliers per 21 CFR 820.50",
      text: "Each supplier of a critical component is qualified per the firm's purchasing controls procedure: capability assessment, quality agreement, audit cadence, and approved supplier list entry. Critical components have at least one qualified backup or a documented sole-source justification.",
    },
    {
      name: "Validate test methods before V&V execution",
      text: "Test method validation (TMV) confirms that each non-standard test method actually measures what it claims to. Skipping TMV produces verification data that cannot be defended at audit.",
    },
    {
      name: "Run a representative-build batch before formal transfer",
      text: "A pre-PQ build of representative parts on production-intent processes catches the gap between bench and production before formal verification commits.",
    },
    {
      name: "Stand up the change-control process for the transfer phase",
      text: "Transfer-phase changes are common; they need to route through 820.30(i) design changes and 820.40 document controls without re-opening the design output baseline more than necessary.",
    },
    {
      name: "Build the DHF for the transfer phase incrementally",
      text: "Per 21 CFR 820.30(j), the DHF must contain or reference the records necessary to demonstrate the design was developed in accordance with the approved design plan. Transfer activities, deviations, and resolutions belong in the DHF as they happen.",
    },
    {
      name: "Run an inspection-readiness rehearsal",
      text: "Before scheduled inspections, walk an inspector through the DHF, DMR, supplier files, and process validation records. Identify and close gaps before an actual investigator does.",
    },
  ],
};

export function Body() {
  return (
    <Prose>
      <p>
        21 CFR 820.30(h) on design transfer is one paragraph. The readiness
        work behind a successful transfer is the largest single integration
        effort in a regulated-product program — covering design output
        completeness, process validation under 820.75, supplier readiness
        under 820.50, and inspection posture across the design history file
        and device master record.
      </p>

      <p>
        This is a working note on twelve specific gaps practitioner teams
        should close before transfer kicks off. The list is not exhaustive,
        but it covers the gaps most often surfaced — at the worst possible
        time — by an inspector, an auditor, or a contract manufacturer&apos;s
        first PQ batch.
      </p>

      <PullQuote>
        Design transfer fails when the design output package is correct on
        the engineering bench but incomplete from a manufacturing
        perspective. The regulation does not catch the gap; the first PQ
        batch does.
      </PullQuote>

      <h2 id="transfer-anatomy">What design transfer actually is</h2>

      <p>
        Design transfer is the activity of translating the device design
        into production specifications. The regulation (21 CFR 820.30(h))
        does not specify how — it specifies the property: the design must be
        correctly translated. In practice, the burden of demonstrating
        correct translation falls on the design output package: drawings,
        specifications, software builds, process descriptions, work
        instructions, and inspection criteria.
      </p>

      <p>
        The transfer is correct when manufacturing can build a unit that
        meets the design output specifications without consulting design
        engineering for clarification. Anything less is an incomplete
        transfer — and incomplete transfers are usually not detected at the
        moment they happen, but at the first deviation, the first PQ batch,
        or the first audit finding.
      </p>

      <h2 id="design-package">Gaps 1-4 — Design output package</h2>

      <h3 id="gap-1">1. Design output completeness against the BOM</h3>

      <p>
        Every BOM line has a controlled drawing or specification at a
        released revision. The most common version of this gap is engineering
        notation that worked at bench scale — a shared component number, an
        implicit material callout, a dimension that was held by hand-fit
        rather than specified — that does not survive the move to a contract
        manufacturer. Treat the design output package the way a supplier
        would: if a drawing does not include the dimensions, materials,
        finishes, and inspection criteria a supplier needs to quote, build,
        and inspect, it is incomplete.
      </p>

      <h3 id="gap-2">2. Tolerance stack-up against process capability</h3>

      <p>
        Critical-to-quality dimensions have tolerances justified by
        capability data from the actual process or a representative one. The
        most common pattern: bench-built parts hold tolerances that the
        production process (injection molding, sheet-metal forming,
        automated dispense) cannot reliably hold. The fix is process
        capability data — Cpk targets at the drawing level for high-risk
        tolerances, validated against the supplier&apos;s actual process
        capability before transfer commits.
      </p>

      <h3 id="gap-3">3. Inspection criteria locked before transfer</h3>

      <p>
        Each inspectable design output has an inspection method, sample
        size, and AQL or comparable acceptance criterion in the design
        output package. Negotiating inspection criteria with QC after
        transfer is a common pattern that produces inconsistent acceptance
        decisions and inspection records that do not trace to the design
        output. The acceptance criterion is part of the design output, not
        a downstream QC decision.
      </p>

      <h3 id="gap-4">4. Design FMEA and process FMEA cross-reference</h3>

      <p>
        Each failure mode in the design FMEA maps to a process FMEA risk
        control or to a design feature that prevents the failure mode at the
        device level. Failure modes that have neither are gaps — either the
        FMEA is incomplete or the design and process do not yet jointly
        address the failure mode. Cross-referencing the two FMEAs surfaces
        the gap before transfer.
      </p>

      <Callout kind="pitfall" title="The DFMEA-PFMEA gap">
        <p>
          The most common cause: the DFMEA is owned by design engineering and
          the PFMEA is owned by manufacturing engineering, the two are run on
          different cadences, and no one explicitly checks that every DFMEA
          failure mode has a corresponding PFMEA control. The fix is a
          cross-FMEA review session before transfer with both teams in the
          room and an explicit gap log.
        </p>
      </Callout>

      <h2 id="process-readiness">Gaps 5-8 — Process readiness</h2>

      <h3 id="gap-5">5. IQ/OQ/PQ scope for each non-verifiable process</h3>

      <p>
        21 CFR 820.75 requires validation of processes whose results cannot
        be fully verified by inspection or test. Common examples include
        sterilization, lyophilization, certain bonding processes, certain
        laser-welding operations, and most software-controlled processes
        where output verification is impractical. Each non-verifiable
        process needs a defined IQ/OQ/PQ scope, success criteria, and sample
        sizes — agreed before transfer kicks off, not negotiated during PQ
        execution.
      </p>

      <h3 id="gap-6">6. Device master record (DMR) per 21 CFR 820.181</h3>

      <p>
        The DMR contains or references device specifications, production
        process specifications, quality assurance procedures, packaging and
        labeling specifications, and installation/maintenance/servicing
        specifications. Build the DMR incrementally during transfer, not
        retroactively after launch. A DMR assembled before launch reads as
        an inspection deliverable rather than a working production document.
      </p>

      <h3 id="gap-7">7. Test method validation (TMV)</h3>

      <p>
        Test method validation confirms that each non-standard test method
        actually measures what it claims to. Skipping TMV is a frequent
        cost-and-time shortcut that produces verification data that cannot
        be defended at audit — &quot;how do you know your test method
        produces accurate results?&quot; is the standard auditor question,
        and a verification report without a TMV is the standard wrong
        answer.
      </p>

      <h3 id="gap-8">8. Representative-build batch before formal transfer</h3>

      <p>
        A pre-PQ build of representative parts on production-intent
        processes catches the gap between bench and production before
        formal verification commits. Representative builds surface gaps
        (process settings that drift, fixtures that interfere with
        operators, cycle times that conflict with throughput targets) at
        the lowest cost — before they become PQ deviations.
      </p>

      <h2 id="supplier-qms">Gaps 9-12 — Supplier and QMS readiness</h2>

      <h3 id="gap-9">9. Supplier qualification per 21 CFR 820.50</h3>

      <p>
        Each supplier of a critical component is qualified per the firm&apos;s
        purchasing controls procedure: capability assessment, quality
        agreement, audit cadence, approved supplier list entry. Critical
        components have at least one qualified backup or a documented
        sole-source justification. Sole-source on a critical component
        without a documented mitigation plan is an inspection finding
        waiting to happen.
      </p>

      <h3 id="gap-10">10. Change control during the transfer phase</h3>

      <p>
        Transfer-phase changes are common — DFM findings, supplier
        substitutions, process tweaks. They need to route through 820.30(i)
        design changes and 820.40 document controls without re-opening the
        design output baseline more than necessary. The pattern that works:
        a tight change-control board active during transfer, with explicit
        criteria for which changes return to engineering for re-verification
        and which can be handled within manufacturing-engineering scope.
      </p>

      <h3 id="gap-11">11. DHF built incrementally for the transfer phase</h3>

      <p>
        Per 21 CFR 820.30(j), the DHF must contain or reference the records
        necessary to demonstrate the design was developed in accordance with
        the approved design plan. The transfer phase generates a substantial
        portion of the design history — design output revisions, transfer
        activities, deviations, supplier qualification records, process
        validation records. Building the DHF incrementally during transfer
        is faster and cleaner than assembling it afterward.
      </p>

      <Callout kind="note" title="The DHF as a generated artifact">
        <p>
          Design history files that are generated artifacts (records
          captured as work happens) audit faster than design history files
          that are curated artifacts (records assembled before
          inspection). The difference is whether the index points at
          existing records or whether the index itself is the deliverable.
        </p>
      </Callout>

      <h3 id="gap-12">12. Inspection-readiness rehearsal</h3>

      <p>
        Before any scheduled inspection, walk an experienced auditor through
        the DHF, DMR, supplier files, and process validation records.
        Identify gaps and close them before an actual investigator does.
        The rehearsal also surfaces narrative gaps — places where the records
        are correct but the program owner cannot explain them coherently —
        which are a different category of inspection risk and equally
        addressable.
      </p>

      <PullQuote>
        Inspections are passed before they happen. The inspection-readiness
        rehearsal is the practitioner version of the same principle.
      </PullQuote>

      <h2 id="summary">Practitioner summary</h2>

      <p>
        Manufacturing transfer is the most expensive seam in a
        regulated-product program — the place where late discoveries cost
        the most because the design baseline is locked, the supplier is
        engaged, and the launch timeline is committed. The 12 gaps in this
        note cover the patterns most often surfaced too late: design output
        incompleteness, process capability mismatches, FMEA gaps,
        IQ/OQ/PQ scoping, DMR/DHF curation, and supplier readiness.
      </p>

      <p>
        Programs that work through these gaps before transfer kicks off
        treat transfer as the activity it is — a controlled translation of
        a complete design package into a controlled production process —
        rather than as a discovery phase that surfaces what should have
        been resolved during design output.
      </p>

      <p>
        For the manufacturing-transfer service area, see{" "}
        <Link href="/services/manufacturing-transfer">
          Manufacturing Transfer &amp; Commercialization
        </Link>
        . For where the transfer seam fits in the broader lifecycle, see{" "}
        <Link href="/insights/why-medical-device-development-breaks-down">
          Why medical device development breaks down between user needs,
          engineering, and manufacturing
        </Link>
        .
      </p>
    </Prose>
  );
}
