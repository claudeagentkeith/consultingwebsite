import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "sustaining-engineering-cost-vs-risk",
  title:
    "Sustaining engineering for combination products: cost reduction vs. regulatory risk",
  description:
    "Sustaining engineering on a combination product is the most underestimated phase in the lifecycle. Cost-reduction opportunities are real but every change traverses 21 CFR 820.30(i) design changes, ISO 14971 risk re-evaluation, and 21 CFR Part 4 cross-constituent impact. A practitioner's framework for evaluating sustaining changes against the cost / risk frontier.",
  topic: "Combination Products",
  publishedAt: "2026-05-03",
  status: "published",
  excerpt:
    "Once a combination product is launched, the sustaining-engineering phase begins — and it is the most underestimated phase in the lifecycle. Cost-reduction opportunities are real, but each change traverses design controls, risk management, and combination-product CGMP. A practitioner's framework for evaluating sustaining changes against the cost-vs-regulatory-risk frontier.",
  keywords: [
    "sustaining engineering medical device",
    "combination product change control",
    "21 CFR 820.30(i)",
    "ISO 14971 post-production",
    "510(k) change-decision logic",
    "cost reduction medical device",
    "post-market surveillance combination product",
  ],
  readingMinutes: 12,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "What is sustaining engineering in a regulated-product context?",
    answer:
      "Sustaining engineering is the post-launch phase where a commercialized device or combination product is maintained, improved, and adapted in response to field experience, supply-chain shifts, regulatory changes, and ongoing product strategy. Unlike new development, every sustaining change traverses an existing approved baseline — so each change carries change-control overhead under 21 CFR 820.30(i), risk-file re-evaluation under ISO 14971, and (for combination products) cross-constituent impact assessment under 21 CFR Part 4. Sustaining is where the lifecycle integration of design controls, risk, and post-market surveillance has to actually work in steady state.",
  },
  {
    question:
      "What does ISO 14971:2019 §10 require for post-production?",
    answer:
      "ISO 14971:2019 §10 (Production and post-production activities) requires the manufacturer to actively collect and review information about the medical device during production and after release. The information must be assessed for its relevance to safety, particularly whether previously unrecognized hazards or hazardous situations are present, whether estimated risks are no longer acceptable, and whether the original assessment is otherwise invalidated. The output of this review feeds back into the risk management file as post-production input, and may trigger updates to risk controls, design changes, or post-market actions.",
  },
  {
    question:
      "When does a sustaining change require a new 510(k) submission?",
    answer:
      "FDA's guidance 'Deciding When to Submit a 510(k) for a Change to an Existing Device' (October 2017, the 'change guidance') outlines the decision logic. The high-level question: does the change significantly affect the safety or effectiveness of the device? The guidance walks specific decision logic for changes affecting labeling, technology/engineering/performance, materials, or other categories — including a flowchart structure for documenting the analysis. A change that does not require a new 510(k) still requires documentation of the analysis under 820.30(i). Combination products may also require parallel evaluation under 21 CFR Part 4 for the drug constituent.",
  },
  {
    question:
      "How are post-market complaints linked to design changes?",
    answer:
      "Per 21 CFR 820.198 (Complaint files), each manufacturer must maintain complaint files and review and evaluate complaints to determine whether an investigation is necessary. Complaints that indicate a non-conformance trigger CAPA per 820.100; CAPA closure may include a design change under 820.30(i). The chain is: complaint → review → investigation (where required) → CAPA → design change → re-verification → risk file update. Programs that handle the chain as discrete handoffs between functions tend to lose information at each handoff; programs that handle it as a single integrated process — same data model, shared traceability — close the loop in weeks rather than quarters.",
  },
  {
    question:
      "What's the most common cost-reduction trap in sustaining engineering?",
    answer:
      "The most common trap is a supplier change for a critical component that looks like a pure purchasing decision but is actually a design change. The replacement component meets the print, but a different manufacturer's process produces a different particulate profile, a different residual stress, a different surface finish, or a different lot-to-lot variability — and these differences interact with risk controls in ways the print does not capture. Per 21 CFR 820.50 (Purchasing controls), suppliers are qualified before they ship; per 820.30(i), the change is evaluated for design impact. The trap is treating it as one or the other instead of both.",
  },
];

export const tableOfContents = [
  { id: "the-frontier", label: "The cost-vs-risk frontier" },
  { id: "regulatory-stack", label: "The regulatory stack on a sustaining change" },
  { id: "evaluation-framework", label: "A four-question evaluation framework" },
  { id: "common-changes", label: "Three common sustaining-change patterns" },
  { id: "post-market-loop", label: "The post-market feedback loop" },
  { id: "summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];

export function Body() {
  return (
    <Prose>
      <p>
        Sustaining engineering on a combination product is the most
        underestimated phase in the lifecycle. From the outside it looks
        like maintenance — keep the product on the market, address
        complaints, take cost out where possible. From the inside it looks
        like a continuous, multi-year program of small changes against a
        locked baseline, where every change traverses 21 CFR 820.30(i)
        design change-control, ISO 14971:2019 §10 post-production input,
        and (for combination products) 21 CFR Part 4 cross-constituent
        impact analysis.
      </p>

      <p>
        The economics are straightforward when you read them right: real
        cost-reduction opportunities exist, and each one carries a
        regulatory and operational risk that has to be evaluated against
        the cost benefit. This is a working note on how practitioner teams
        evaluate sustaining changes against that cost-vs-risk frontier
        without sliding off either end.
      </p>

      <PullQuote>
        Sustaining engineering is not maintenance. It is a continuous
        change-control program against a locked baseline, where every
        change has a regulatory cost and a benefit that must be evaluated
        against it.
      </PullQuote>

      <h2 id="the-frontier">The cost-vs-risk frontier</h2>

      <p>
        Every sustaining change has a cost in regulatory and operational
        overhead — change control, risk re-evaluation, possibly verification
        or validation, possibly a regulatory submission. It also has a
        benefit: reduced unit cost, improved reliability, supply-chain
        resilience, addressing a complaint pattern, regulatory updates.
      </p>

      <p>
        A sustaining change makes sense when the benefit exceeds the cost.
        The cost has two components — the direct cost of the regulatory
        work, and the residual risk that the change introduces (or fails to
        eliminate) in the field. Programs that ignore either component tend
        to either over-conservative inaction (no change is worth the
        overhead, so nothing improves) or under-conservative action (every
        change is approved on benefit alone, and post-market issues
        accumulate).
      </p>

      <Callout kind="note" title="The frontier is not a curve, it&apos;s a discipline">
        <p>
          Programs that handle this well do not have a fancy
          cost-vs-risk model. They have a disciplined evaluation question
          set, applied to every sustaining change, that surfaces the
          regulatory cost and the residual risk before the change is
          approved. The four-question framework below is a working version.
        </p>
      </Callout>

      <h2 id="regulatory-stack">The regulatory stack on a sustaining change</h2>

      <p>
        For a US-marketed combination product, a single sustaining change
        can touch four regulatory frameworks:
      </p>

      <ul>
        <li>
          <strong>21 CFR 820.30(i) — Design changes.</strong> Each change is
          identified, documented, validated or where appropriate verified,
          reviewed, and approved before implementation.
        </li>
        <li>
          <strong>ISO 14971:2019 §10 — Production and post-production.</strong>{" "}
          Information from production and post-production is collected,
          assessed for relevance to safety, and used to update the risk
          management file as needed.
        </li>
        <li>
          <strong>21 CFR Part 4 (combination products).</strong> Changes
          touching the device constituent that affect the drug constituent
          (or vice versa) are evaluated under both Part 820 and Part 211
          frameworks under the streamlined CGMP system.
        </li>
        <li>
          <strong>FDA change-decision logic.</strong> Per the October 2017
          FDA guidance &quot;Deciding When to Submit a 510(k) for a Change
          to an Existing Device,&quot; the firm evaluates whether the change
          requires a new 510(k) submission. Changes that do not require a
          new submission still require documentation of the analysis.
        </li>
      </ul>

      <p>
        For supplier-driven changes (a component substitution, a process
        change at a contract manufacturer), 21 CFR 820.50 (Purchasing
        controls) and ISO 13485 §7.4 (Purchasing) add an additional layer.
        For changes triggered by complaints, 21 CFR 820.198 (Complaint files)
        and 820.100 (CAPA) drive the upstream chain.
      </p>

      <PullQuote>
        A single supplier change on a combination product can require
        evaluation under 820.30(i), 820.50, ISO 14971 §10, 21 CFR Part 4,
        and the 510(k) change guidance — five distinct evaluations against
        five distinct frameworks. Programs that evaluate against only one
        find the others at audit.
      </PullQuote>

      <h2 id="evaluation-framework">A four-question evaluation framework</h2>

      <p>
        For each sustaining change, a structured evaluation surfaces both
        cost and risk before approval. The four questions:
      </p>

      <h3 id="q1">1. What does the change touch and what does it affect?</h3>

      <p>
        &quot;Touch&quot; is the direct scope of the change — a component, a
        process step, a software module, a label. &quot;Affect&quot; is the
        broader scope — what other components, processes, requirements,
        risks, or constituents could change behavior because of the
        touch-scope change. The most common error is treating the
        affect-scope as equal to the touch-scope. A device-side change that
        modifies fluid path geometry touches a device component and{" "}
        <em>affects</em> drug-product contact-surface chemistry. Both
        evaluations are required.
      </p>

      <h3 id="q2">2. Does the change affect safety or effectiveness?</h3>

      <p>
        This is the central question of the FDA change guidance. The
        analysis follows the guidance&apos;s decision logic: changes
        affecting labeling, technology/engineering/performance, materials,
        or other categories are evaluated against specific question sets to
        determine whether a new 510(k) is required. Changes that do not
        require a new submission still require documented analysis under
        820.30(i). The documented analysis is what survives an inspection.
      </p>

      <h3 id="q3">3. What is the residual risk after the change?</h3>

      <p>
        Per ISO 14971:2019 §10, post-production information assesses
        whether estimated risks are no longer acceptable. A sustaining
        change can also affect the risk file directly: a new component may
        introduce a new failure mode (which then needs evaluation against
        the existing risk controls), or eliminate one (which may allow
        relaxing a control that was previously needed). The change is not
        approved until the risk file is updated to reflect the new risk
        landscape and the residual risk is acceptable per the firm&apos;s
        risk-acceptance criteria.
      </p>

      <h3 id="q4">4. What is the benefit, and is it greater than the cost?</h3>

      <p>
        The benefit side of the frontier — unit cost reduction, complaint
        reduction, supply-chain resilience, performance improvement — is
        usually quantified by the function proposing the change. The cost
        side has two components: the direct regulatory work (change
        control, risk re-evaluation, possibly verification or submission)
        and the residual risk introduced or accepted. A sustaining change
        is approved when the structured analysis of all four shows benefit
        exceeds cost, with explicit acknowledgment of any residual risk.
      </p>

      <h2 id="common-changes">Three common sustaining-change patterns</h2>

      <h3 id="pattern-1">1. The supplier-substitution cost-reduction</h3>

      <p>
        A second supplier qualifies for a critical component at lower cost.
        On a print basis, the components are equivalent. On a process basis,
        they may differ in particulate profile, residual stress, surface
        finish, lot-to-lot variability, or contact-surface chemistry. The
        sustaining change must evaluate against 820.50 (the supplier
        qualification), 820.30(i) (the design change), ISO 14971 (any new
        or eliminated failure modes), and — for a fluid-path or
        drug-product-contact component — 21 CFR Part 4 cross-constituent
        impact.
      </p>

      <h3 id="pattern-2">2. The software update for connected devices</h3>

      <p>
        A connected device receives a software update that adds a feature,
        fixes a defect, or addresses a security finding. The update
        traverses 820.30(i) design changes, 820.30(g) design validation
        (often a regression test cycle on the existing intended uses), and
        — depending on what the update changes — the FDA change guidance
        or its software-specific companion guidance. Cybersecurity-driven
        updates have an additional regulatory frame under FDA&apos;s
        cybersecurity guidance (the September 2023 final guidance on
        cybersecurity in medical devices); programs that handle these as a
        sub-category of design changes rather than as a separate workstream
        save themselves coordination overhead.
      </p>

      <h3 id="pattern-3">3. The complaint-driven design change</h3>

      <p>
        A complaint pattern emerges from post-market surveillance — a
        specific use error, a specific component failure mode, a specific
        environmental sensitivity. The CAPA that closes the complaint may
        include a design change to address the root cause. The chain runs
        from 820.198 (complaints) → 820.100 (CAPA) → 820.30(i) (design
        change) → 820.30(f) (re-verification of affected requirements) →
        ISO 14971 §10 (risk file update). Done well, the chain closes in
        weeks; done poorly, each handoff loses information and the
        complaint pattern recurs in the next product.
      </p>

      <h2 id="post-market-loop">The post-market feedback loop</h2>

      <p>
        The structural property that distinguishes effective sustaining
        engineering from reactive post-market firefighting is the
        post-market feedback loop. ISO 14971:2019 §10 describes the
        loop in process terms; the practitioner version is concrete:
      </p>

      <ul>
        <li>
          Complaints are categorized against the hazard analysis taxonomy,
          not a free-text complaint code system. Each complaint type maps
          to one or more hazards in the risk file.
        </li>
        <li>
          The rate of complaints per hazard is tracked as a post-production
          input. When a hazard exceeds its expected rate, it triggers
          deeper investigation — and possibly a CAPA whose closure includes
          a design change.
        </li>
        <li>
          The design change feeds the next platform&apos;s design inputs.
          The complaint that drove the change becomes a design constraint
          on the next product, not a fresh insight rediscovered during
          ideation.
        </li>
      </ul>

      <Callout kind="note" title="The feedback loop as competitive advantage">
        <p>
          Programs with a working post-market feedback loop ship next-
          generation products faster because the hardest design inputs
          (the ones that come from real field experience) are already
          formalized when ideation begins. Programs without one rediscover
          the same constraints in every cycle and pay full price for them
          each time.
        </p>
      </Callout>

      <h2 id="summary">Practitioner summary</h2>

      <p>
        Sustaining engineering on a combination product is a continuous
        change-control program against a locked baseline. The economics
        favor disciplined evaluation: cost-reduction opportunities are
        real, and each one carries a regulatory cost and a residual risk
        that has to be evaluated against the benefit. The four-question
        framework — what does the change touch and affect, does it affect
        safety or effectiveness, what is the residual risk, and what is
        the benefit relative to the cost — is the working version of that
        evaluation.
      </p>

      <p>
        The post-market feedback loop is the structural property that
        distinguishes effective sustaining from reactive firefighting.
        Programs that close the loop ship the next platform faster because
        the field-derived constraints are already formalized when ideation
        begins.
      </p>

      <p>
        For the sustaining-engineering service area, see{" "}
        <Link href="/services/sustaining-engineering">
          Sustaining Engineering &amp; Lifecycle Management
        </Link>
        . For the design-controls architecture that the sustaining phase
        operates against, see{" "}
        <Link href="/insights/design-controls-that-survive-audit">
          Design controls that survive audit
        </Link>
        .
      </p>
    </Prose>
  );
}
