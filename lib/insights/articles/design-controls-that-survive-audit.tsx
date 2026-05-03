import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "design-controls-that-survive-audit",
  title: "Design controls that survive audit: a practitioner's guide to 21 CFR 820.30",
  description:
    "Design controls under 21 CFR 820.30 are not a paperwork exercise. The structural integrity of the program — design plan, inputs, outputs, verification, validation, transfer, changes, and DHF — is what survives an FDA inspection. A practitioner's view of how to architect a design-controls system that holds up under coordinated inspection.",
  topic: "Regulatory & Quality",
  publishedAt: "2026-05-03",
  status: "published",
  excerpt:
    "21 CFR 820.30 lists eight elements: design and development planning, design input, design output, design review, design verification, design validation, design transfer, and design changes — plus the design history file. The list is short. The architectural decisions behind a design-controls system that survives audit are not. A practitioner's view of where to invest rigor.",
  keywords: [
    "21 CFR 820.30",
    "design controls FDA",
    "design history file",
    "FDA inspection readiness",
    "ISO 13485 design and development",
    "design controls audit",
    "design verification validation traceability",
  ],
  readingMinutes: 14,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "What does 21 CFR 820.30 actually require?",
    answer:
      "21 CFR 820.30 requires that each manufacturer of a Class II or Class III device, and certain Class I devices, establish and maintain procedures to control the design of the device to ensure that specified design requirements are met. The regulation lists eight elements: design and development planning (820.30(b)), design input (820.30(c)), design output (820.30(d)), design review (820.30(e)), design verification (820.30(f)), design validation (820.30(g)), design transfer (820.30(h)), and design changes (820.30(i)). Section 820.30(j) requires the design history file to contain or reference the records that demonstrate the design was developed in accordance with the approved design plan.",
  },
  {
    question:
      "What's the most common FDA 483 finding under design controls?",
    answer:
      "The most commonly cited finding is incomplete or inadequate design history files — most often documented under FDA Form 483 observations referencing 21 CFR 820.30(j). The pattern: the DHF lacks evidence of one or more design controls activities, the records exist somewhere but are not in or referenced by the DHF, or the DHF was assembled retroactively and the assembly itself is the only evidence. Closely related findings cite 820.30(c) (design inputs not adequate), 820.30(f) (design verification not adequate), 820.30(g) (design validation not adequate), and 820.30(i) (design changes not controlled).",
  },
  {
    question:
      "How is the design history file (DHF) different from the device master record (DMR)?",
    answer:
      "The DHF (21 CFR 820.30(j)) documents the design history of a finished device — the records that demonstrate the design was developed according to the approved design plan. The DMR (21 CFR 820.181) documents the production specifications of the finished device — drawings, BOMs, process specifications, packaging, labeling, installation/maintenance/servicing. The DHF is about how the design was developed; the DMR is about how the device is built. They are different artifacts with different scopes, and they should reference each other but not overlap.",
  },
  {
    question:
      "Does ISO 13485:2016 add anything beyond 21 CFR 820.30?",
    answer:
      "ISO 13485:2016 §7.3 covers design and development with broadly similar elements to 820.30 — design planning, inputs, outputs, review, verification, validation, transfer, and change control. ISO 13485 includes additional requirements around design and development files (§7.3.10), and integrates more tightly with risk management per ISO 14971 throughout. For most US-regulated programs, the practical question is not which framework to follow — the question is how to architect a single integrated system that satisfies both. The two frameworks were specifically harmonized in the FDA's 2024 final rule incorporating ISO 13485:2016 by reference into the QSR.",
  },
  {
    question:
      "When should the design plan be written, and what should it contain?",
    answer:
      "Per 21 CFR 820.30(b), each manufacturer shall establish and maintain plans that describe or reference the design and development activities and define responsibility for implementation. The plan should identify and describe the interfaces with different groups or activities that provide, or result in, input to the design and development process. Plans must be reviewed, updated, and approved as design and development evolves. In practice, the design plan is written at the start of design and development (Phase 2-3 of the lifecycle), updated as the program evolves, and acts as the governance document the rest of design controls hangs from.",
  },
];

export const tableOfContents = [
  { id: "the-eight-elements", label: "The eight elements of 820.30" },
  { id: "structural-integrity", label: "What 'structural integrity' means" },
  { id: "common-failures", label: "The four common failure patterns" },
  { id: "architecture", label: "An architecture that survives audit" },
  { id: "iso-13485-overlay", label: "The ISO 13485:2016 overlay" },
  { id: "summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];

export function Body() {
  return (
    <Prose>
      <p>
        Design controls under 21 CFR 820.30 are not a paperwork exercise.
        The regulation lists eight elements — design and development
        planning, design input, design output, design review, design
        verification, design validation, design transfer, design changes —
        plus the design history file. The list is short. The architectural
        decisions behind a design-controls system that holds up under FDA
        inspection are not.
      </p>

      <p>
        This is a working note on what those decisions are, what the most
        common failure patterns look like, and how to architect a
        design-controls system whose evidence is generated as the work
        happens rather than curated before an inspection.
      </p>

      <PullQuote>
        Design history files that are generated artifacts (records captured
        as work happens) audit faster than design history files that are
        curated artifacts (records assembled before inspection). The
        difference is whether the index points at existing records or
        whether the index itself is the deliverable.
      </PullQuote>

      <h2 id="the-eight-elements">The eight elements of 820.30</h2>

      <p>
        The structural anchor of design controls is 21 CFR 820.30, which
        lists eight elements plus the design history file. Each element has
        a specific scope and a specific evidence requirement:
      </p>

      <ul>
        <li>
          <strong>820.30(b) Design and development planning.</strong> Plans
          that describe or reference design and development activities,
          define responsibility, and identify interfaces with other groups.
          Updated as design evolves.
        </li>
        <li>
          <strong>820.30(c) Design input.</strong> Procedures ensuring
          design inputs are appropriate to the device, address user/patient
          needs, and resolve incomplete, ambiguous, or conflicting
          requirements. Documented, reviewed, and approved.
        </li>
        <li>
          <strong>820.30(d) Design output.</strong> Procedures defining and
          documenting design outputs in terms that allow adequate evaluation
          for conformance to design input requirements. Outputs essential
          to the proper functioning of the device must be identified.
        </li>
        <li>
          <strong>820.30(e) Design review.</strong> Procedures ensuring
          formal documented reviews are planned and conducted at appropriate
          stages. Reviews include independent reviewers and any necessary
          specialists; results are documented in the DHF.
        </li>
        <li>
          <strong>820.30(f) Design verification.</strong> Procedures
          confirming design output meets design input requirements. Results
          documented in the DHF, including identification of the design,
          method(s), date, and individual(s) performing verification.
        </li>
        <li>
          <strong>820.30(g) Design validation.</strong> Procedures ensuring
          devices conform to defined user needs and intended uses, including
          testing under actual or simulated use conditions, on initial
          production units (or equivalents). Includes software validation
          and risk analysis where appropriate.
        </li>
        <li>
          <strong>820.30(h) Design transfer.</strong> Procedures ensuring
          the device design is correctly translated into production
          specifications.
        </li>
        <li>
          <strong>820.30(i) Design changes.</strong> Procedures for
          identification, documentation, validation or where appropriate
          verification, review, and approval of design changes before their
          implementation.
        </li>
        <li>
          <strong>820.30(j) Design history file.</strong> A DHF for each
          type of device, containing or referencing the records necessary
          to demonstrate the design was developed in accordance with the
          approved design plan and the requirements of this section.
        </li>
      </ul>

      <Callout kind="regulatory" title="The DHF is the audit-facing artifact">
        <p>
          820.30(j) does not require the DHF to be a single physical
          document — it can contain or <em>reference</em> records held
          elsewhere. What it requires is that the records demonstrating
          compliance with the rest of 820.30 exist and are findable through
          the DHF. The DHF is the index, the records are the evidence, and
          both have to hold up.
        </p>
      </Callout>

      <h2 id="structural-integrity">What &quot;structural integrity&quot; means</h2>

      <p>
        A design-controls system has structural integrity when each element
        of 820.30 produces evidence that traces — without retroactive
        curation — to the elements upstream and downstream of it. In
        practice:
      </p>

      <ul>
        <li>
          <strong>Forward traceability:</strong> every user need traces to
          one or more design inputs; every design input traces to one or
          more design outputs; every design output traces to verification
          and (for the device as a whole) validation evidence; every change
          traces back to the affected inputs, outputs, and re-verification.
        </li>
        <li>
          <strong>Backward traceability:</strong> every design output
          references the design input(s) it implements; every verification
          record references the design input verified; every validation
          record references the user need validated.
        </li>
        <li>
          <strong>Risk traceability:</strong> every risk control measure
          (per ISO 14971) is implemented as a design input or output, has
          verification evidence, and has post-production input feedback.
        </li>
      </ul>

      <p>
        Structural integrity is what makes the difference between a DHF that
        an inspector can navigate fluently and one that requires the program
        owner to narrate the connections.
      </p>

      <h2 id="common-failures">The four common failure patterns</h2>

      <h3 id="failure-1">1. The retroactively-assembled DHF</h3>

      <p>
        The DHF is assembled in the weeks or months before submission or
        inspection, by someone who was not in the design decisions, from
        records that were generated for other purposes. The assembly itself
        becomes the only evidence; the index points at records that exist
        but were not generated as design-controls evidence. Inspectors
        recognize this pattern quickly — the gap between the index and the
        records is visible in the records themselves (different revision
        styles, different approval signatures, different naming conventions
        across the same purported workstream).
      </p>

      <h3 id="failure-2">2. The traceability matrix that doesn&apos;t close</h3>

      <p>
        A traceability matrix exists but has gaps: design inputs without
        design outputs, design outputs without verification, verifications
        without validation, or risk controls without verification. The
        matrix gives the appearance of structure without the substance. The
        fix is not a better matrix — it is the closure of each gap as it
        appears, throughout development, with explicit gate criteria that
        prevent gaps from compounding.
      </p>

      <h3 id="failure-3">3. The risk file as a parallel deliverable</h3>

      <p>
        Risk management (per ISO 14971:2019) is run as a parallel work
        stream by the QA function, with risk controls listed in the risk
        file but not propagated into the requirements document. When
        requirements change, the controls do not track; when changes
        propagate through 820.30(i), the risk file is not updated; when
        post-production input arrives (per ISO 14971 §10), it does not feed
        back into the next round of design inputs. The risk file becomes a
        compliance artifact rather than a forcing function.
      </p>

      <h3 id="failure-4">4. The change-control system that doesn&apos;t see scope</h3>

      <p>
        Design changes (820.30(i)) are tracked, but the impact assessment
        scopes too narrowly — a change to one component is evaluated only
        against the directly-affected requirements, not against the broader
        risk file, validation evidence, or supplier-controlled processes.
        This pattern is especially common at the device-drug interface in
        combination products, where a device change can affect drug
        constituent specifications without obviously touching them.
      </p>

      <Callout kind="pitfall" title="The shape of these failures at audit">
        <p>
          These four patterns produce different audit findings, but they
          share a structural cause: design controls were treated as a
          deliverable rather than as the operating model of the development
          program. The fix is not better deliverables; it is making
          design-controls work the medium through which design decisions
          are made, recorded, and reviewed.
        </p>
      </Callout>

      <h2 id="architecture">An architecture that survives audit</h2>

      <p>
        The architecture that holds up under coordinated inspection has six
        properties:
      </p>

      <ol>
        <li>
          <strong>One traceability spine.</strong> User needs, design
          inputs, design outputs, verification, validation, risk hazards,
          and risk controls all carry IDs that reference each other. The
          spine is the audit trail; the DHF is the index over the spine.
        </li>
        <li>
          <strong>Approval-time discipline on inputs.</strong> Each design
          input ships through 820.30(c) approval with a verification
          approach and acceptance criterion already attached. Verification
          is a generated artifact, not a curated one.
        </li>
        <li>
          <strong>Risk integration into requirements.</strong> Risk control
          measures are expressed as design inputs (or constraints) in the
          requirements document, not as a parallel section of the risk file.
          The risk file analyzes; the requirements document constrains.
        </li>
        <li>
          <strong>Cross-disciplinary design reviews (820.30(e)).</strong>{" "}
          Reviews include independent reviewers and any necessary
          specialists, and the review record captures decisions, action
          items, and approval — not just attendance.
        </li>
        <li>
          <strong>Tight change control with broad impact assessment.</strong>{" "}
          Each change scope-asses against the full requirements set, the
          risk file, validation evidence, and supplier-controlled processes
          — not only the directly-touched component.
        </li>
        <li>
          <strong>Incremental DHF construction.</strong> The DHF is built
          as work happens, not assembled before inspection. The
          design-controls procedures specify what records belong in the
          DHF and where; the DHF index is generated, not authored.
        </li>
      </ol>

      <PullQuote>
        Design controls work when they are the medium through which design
        decisions are made — not when they are the paperwork that follows
        the decisions.
      </PullQuote>

      <h2 id="iso-13485-overlay">The ISO 13485:2016 overlay</h2>

      <p>
        Most US-regulated programs operate against both 21 CFR 820 and ISO
        13485:2016. The two frameworks were harmonized in the FDA&apos;s
        2024 final rule that incorporates ISO 13485:2016 by reference into
        the Quality Management System Regulation (the new name for what was
        called the QSR). The harmonization aligns the structural elements
        but does not eliminate the regulation-by-regulation differences.
      </p>

      <p>
        ISO 13485:2016 §7.3 covers design and development with elements
        broadly similar to 820.30 — planning (§7.3.2), inputs (§7.3.3),
        outputs (§7.3.4), review (§7.3.5), verification (§7.3.6), validation
        (§7.3.7), transfer (§7.3.8), and change control (§7.3.9). ISO 13485
        adds explicit requirements for a design and development file
        (§7.3.10) that captures the records of the design and development
        activities and is broadly equivalent to the DHF.
      </p>

      <p>
        For most programs, the practical question is not which framework to
        anchor on but how to operate against both with one integrated
        system. The system that satisfies 820.30 with structural integrity
        will also satisfy ISO 13485 §7.3 — the additional ISO 13485
        requirements (the design file, the more explicit risk-management
        integration) are largely satisfied as a side effect of doing
        820.30 well.
      </p>

      <h2 id="summary">Practitioner summary</h2>

      <p>
        Design controls under 21 CFR 820.30 are the operating model of a
        regulated-product development program, not a deliverable layered on
        top. Programs that treat them as the operating model produce
        audit-ready DHFs as a side effect of doing the engineering work;
        programs that treat them as a deliverable pay the cost in
        retroactive curation, traceability gaps, and 483 findings under
        820.30(j).
      </p>

      <p>
        The four common failure patterns — retroactively-assembled DHF,
        traceability matrix that doesn&apos;t close, risk file as parallel
        deliverable, narrow-scope change control — are recognizable from
        their shape long before an inspector arrives. The architectural
        fix in each case is to make design-controls work the medium
        through which design decisions are made.
      </p>

      <p>
        For the regulatory and design-controls service area, see{" "}
        <Link href="/services/design-controls">
          Regulatory, Quality &amp; Design Controls
        </Link>
        . For the user-research-to-design-input translation step, see{" "}
        <Link href="/insights/user-research-to-verifiable-requirements">
          From user research to verifiable requirements
        </Link>
        .
      </p>
    </Prose>
  );
}
