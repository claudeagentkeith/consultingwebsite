# LinkedIn Company Page kickoff — Hitmaker Engineering

A LinkedIn Company Page can only be created by a person with a LinkedIn account at the firm's domain (LinkedIn requires identity-tied creation). The setup itself takes ~5 minutes; once it's live, Claude can take over content drafting and scheduling. This doc is the single-action prompt for Keith plus the founding-content draft so the page is non-empty on day one.

---

## Single action for Keith — create the page

**URL:** [https://www.linkedin.com/company/setup/new/](https://www.linkedin.com/company/setup/new/)

**Time:** ~5 minutes.

**Fields and recommended values:**

- **Company name:** `Hitmaker Engineering`
- **LinkedIn public URL:** `linkedin.com/company/hitmaker-engineering` (or the closest available)
- **Website URL:** `https://hitmakerengineering.com`
- **Industry:** `Medical Device` (LinkedIn taxonomy)
- **Company size:** Pick the bracket that fits today (likely "2-10 employees" or "Self-employed").
- **Company type:** `Privately held`
- **Logo:** Upload `outputs/assets/hitmaker-logo-square-800.png` once generated (see `industry-directory-submissions.md` for the asset spec). For now, the stepped-block "H" SVG from `/icon.svg` rendered at 800×800 PNG.
- **Tagline:** `End-to-end product development for medical devices and combination products.`
- **About section:** Paste the 500-word description from `outputs/backlink-outreach-templates.md` (the longest version).
- **Verification:** LinkedIn will email a verification step. Confirm.

After creation, the page is **live but empty**. The next step is the founding announcement post and the 90-day cadence — both drafted below.

---

## Founding announcement post (publish day 1, after page creation)

Post type: text + link card to hitmakerengineering.com. Use the link card; LinkedIn weights link posts well when the link is active.

---

> Today we're launching Hitmaker Engineering — an end-to-end product development consultancy for medical devices and combination products.
>
> Most regulated-product programs do not break down on the technology. They break down at the seams: between user needs and design inputs, between engineering and design controls, between design and manufacturing, between launch and the next platform.
>
> We engage at those seams. We work across the full lifecycle — user research and human-centered design, ideation, design engineering, regulatory and quality and design controls, manufacturing transfer, and sustaining — under FDA 21 CFR 820/Part 4, ISO 13485:2016, ISO 14971:2019, and IEC 62366-1:2015.
>
> The first set of working notes is now live at hitmakerengineering.com/insights:
>
> → Why medical device development breaks down between user needs, engineering, and manufacturing
> → 21 CFR Part 4 in practice: where combination-product programs actually stall
> → From user research to verifiable requirements
> → Manufacturing transfer readiness: 12 things most teams miss
> → Design controls that survive audit
> → Sustaining engineering for combination products: cost vs. risk
>
> If you're working on a regulated product and a phase transition is on the calendar, we'd welcome the conversation.
>
> #MedicalDevices #CombinationProducts #DesignControls #FDA #ProductDevelopment

---

## 90-day content cadence — 3 posts/week

Post structure: 3 categories on rotation. Each Monday/Wednesday/Friday.

### Mondays — Insight excerpts (insight category)

A 200-300 word LinkedIn-native excerpt from one of the published `/insights` articles, ending with a link to the full piece. Six articles cover roughly 12 weeks at this cadence (each article supports 2 distinct excerpt angles).

### Wednesdays — Lifecycle commentary (commentary category)

A 200-300 word original observation tied to a current event — an FDA guidance update, a notable industry conference, a publicly-discussed regulatory decision, a device recall pattern. Frames the firm's lifecycle-integration view on the event.

### Fridays — Practitioner observation (observation category)

A 100-150 word short observation pattern: "we see this in regulated-product programs" or "the difference between [X] and [Y] is often [Z]." Anonymous and pattern-level, never client-specific.

---

## Founding-month draft posts (12 posts, weeks 1-4)

Each is 200-300 words for Mon/Wed, 100-150 words for Fri. Drafted to publish in sequence; each gets Keith's approval click before going live.

### Week 1

**Monday — Insight excerpt 1 (the lifecycle seam piece)**

> Most medical-device programs do not fail on the technology. They fail at the seams.
>
> User research outputs are narrative. Engineering inputs need to be discrete and verifiable. Without a deliberate translation step that converts user needs into testable design inputs, engineering builds against an interpretation of the research instead of the research itself, and the audit trail breaks.
>
> Late-stage design changes are most often driven by manufacturing or process realities that surface only when a real supplier engages with real drawings, real materials, and a real process FMEA. The root cause: design-for-manufacture is treated as a downstream review rather than an upstream constraint.
>
> The five seams in regulated-product programs:
>
> 1. User research → design inputs
> 2. Design inputs → risk-controlled design
> 3. Engineering → verifiable evidence
> 4. Design → manufacturing
> 5. Launch → development (the post-market loop)
>
> Each is a translation problem with predictable failure modes you can architect around. The fix in each case is the same shape: one shared traceability spine, cross-disciplinary review at every gate, a program owner who reconciles daily, and a design history file built incrementally.
>
> Full piece: hitmakerengineering.com/insights/why-medical-device-development-breaks-down

**Wednesday — Lifecycle commentary 1 (QMSR transition)**

> The FDA's 2024 final rule incorporating ISO 13485:2016 by reference into the QSR (now the QMSR) takes full effect in 2026 — and most program-level prep is already late.
>
> The harmonization aligns the structural elements of 21 CFR 820 with ISO 13485 §7.3, but it does not eliminate the regulation-by-regulation differences. ISO 13485 adds explicit requirements for a design and development file (§7.3.10) and integrates more tightly with risk management per ISO 14971 throughout.
>
> For most US-regulated programs, the practical transition question is not which framework to anchor on — it is whether the existing 820-anchored QMS is structurally sound enough that the additional ISO 13485 §7 expectations land cleanly on top of it.
>
> Programs that are running their existing QSR posture as a generated artifact (records captured as work happens) will pick up the QMSR transition with minimal additional work. Programs that have been curating their DHF retroactively will discover the gap during the transition.
>
> #QMSR #ISO13485 #FDA #MedicalDevice

**Friday — Practitioner observation 1**

> Pattern we see in regulated-product programs:
>
> Verification protocols are written late, by people who were not in the requirements decisions. They verify what is convenient to verify, rather than what was specified.
>
> The fix is not better protocols. It's writing the verification approach into the design input at approval time — so verification becomes a generated artifact, not a curated one.
>
> #DesignControls #Verification

### Week 2

**Monday — Insight excerpt 2 (combination-product Part 4 piece)**

> 21 CFR Part 4 is one of the shortest regulations in the medical-product world. Combination-product programs rarely stall on the regulation itself.
>
> They stall in three predictable places:
>
> 1. Constituent classification and primary mode of action — the architectural decision that anchors center jurisdiction, submission pathway, and quality-system framework. PMOA under 21 CFR 3.2(m) is not a regulatory-affairs deliverable; it's a Phase 1 architectural decision.
>
> 2. Streamlined CGMP integration under §4.4(a). The regulation lets manufacturers anchor on Part 820 (with the additional specified Part 211 provisions of §4.4(b)(1)) or Part 211 (with the additional specified Part 820 provisions of §4.4(b)(2)). Programs that don't pick the anchor explicitly drift into a hybrid that satisfies neither cleanly.
>
> 3. Change control across the device-drug interface. A change-control system that handles device changes correctly under 820.30(i) and drug changes correctly under Part 211 can still be non-compliant under Part 4 if a change touching the device but affecting the drug isn't evaluated under both frameworks.
>
> Full piece (with the six-step framework for standing up streamlined CGMP): hitmakerengineering.com/insights/21-cfr-part-4-where-combination-products-stall

**Wednesday — Lifecycle commentary 2 (FDA cybersecurity guidance)**

> The FDA's September 2023 final guidance on cybersecurity in medical devices changed the program-level expectation: cybersecurity is now design-controls-integrated, not a parallel workstream.
>
> For connected devices, this means cybersecurity-driven changes are evaluated under 820.30(i) design changes, with the same impact-assessment scope as any other design change. A vulnerability disclosure that triggers a software update needs change-control logic that scopes against the affected requirements, validation evidence, and risk file — not just the patched component.
>
> The pattern that works: cybersecurity change control as a sub-category of design changes, not as a parallel workstream coordinated by a different team. Same change-control board, same change-decision logic, same DHF entry.
>
> Programs that handle cybersecurity changes as design changes save themselves the coordination overhead of running two parallel systems.

**Friday — Practitioner observation 2**

> Pattern: a supplier change for a critical component that looks like a pure purchasing decision is actually a design change.
>
> The replacement component meets the print, but a different manufacturer's process produces a different particulate profile, residual stress, or surface finish — and these differences interact with risk controls in ways the print does not capture.
>
> Per 820.50, the supplier is qualified before they ship. Per 820.30(i), the change is evaluated for design impact. The trap is treating it as one or the other instead of both.

### Week 3

**Monday — Insight excerpt 3 (user research → verifiable inputs)**

> User research produces narrative. Design controls require verifiable inputs.
>
> Between the two, there is a translation step. It is the artifact that goes missing.
>
> A user need that says "the clinician should be able to set up the device quickly between cases without losing sterility" is not yet a design input. It becomes one when it is restated in a form that another engineer can write a verification protocol for — including the verification approach and acceptance criterion at approval time.
>
> The translation step produces three artifacts, not two: the user research output, the design input, and a traceability record connecting them. The traceability record is the one that frequently goes missing — and the one a regulator will ask to see first.
>
> The five-stage framework (use specification → user needs → design inputs with verification approach → design outputs and traceability → verification and validation) is here: hitmakerengineering.com/insights/user-research-to-verifiable-requirements

**Wednesday — Lifecycle commentary 3 (combination-product PMOA disputes)**

> Primary mode of action determinations under 21 CFR 3.2(m) are one of the highest-stakes decisions in a combination-product program — and one of the most frequently deferred.
>
> PMOA determines lead-center jurisdiction (CDER, CDRH, or CBER), submission pathway, review division, and the framework anchor for the streamlined CGMP system under §4.4(a). A program that designs around a device-led PMOA and discovers during pre-submission that the agency views the product as drug-led pays the cost twice: in the submission strategy and in the already-implemented quality system.
>
> The fix is to make PMOA a Phase 1 decision, validated through a pre-IND or pre-submission meeting before substantial engineering commits. The cost of an early PMOA conversation with the Office of Combination Products is one of the highest-leverage hours in a regulated-product program.

**Friday — Practitioner observation 3**

> Pattern: the design history file is assembled before submission rather than generated during development.
>
> Inspectors recognize this quickly — the gap between the index and the records is visible in the records themselves (different revision styles, different approval signatures, different naming conventions across the same purported workstream).
>
> The fix is not a better assembly process. It's making design-controls work the medium through which design decisions are made — so the records are generated as a byproduct.

### Week 4

**Monday — Insight excerpt 4 (manufacturing transfer)**

> Design transfer under 21 CFR 820.30(h) is the most expensive seam in a regulated-product program.
>
> The regulation is a single paragraph. The readiness work behind a successful transfer is the largest single integration effort in development — covering design output completeness, process validation under 820.75, supplier readiness under 820.50, and inspection posture across the DHF and DMR.
>
> Twelve specific gaps practitioner teams should close before transfer kicks off:
>
> 1-4: Design output package (BOM completeness, tolerance vs. process capability, locked inspection criteria, DFMEA-PFMEA cross-reference)
>
> 5-8: Process readiness (IQ/OQ/PQ scope, DMR construction, test method validation, representative-build batches)
>
> 9-12: Supplier and QMS readiness (820.50 supplier qualification, transfer-phase change control, incremental DHF, inspection-readiness rehearsal)
>
> Full piece: hitmakerengineering.com/insights/manufacturing-transfer-readiness

**Wednesday — Lifecycle commentary 4 (audit-readiness rehearsal)**

> Inspections are passed before they happen.
>
> Programs that schedule an inspection-readiness rehearsal — walking an experienced auditor through the DHF, DMR, supplier files, and process validation records — surface gaps and close them before an actual investigator does.
>
> The rehearsal also surfaces narrative gaps: places where the records are correct but the program owner cannot explain them coherently. Those are a different category of inspection risk and equally addressable.
>
> The cost of a one-day readiness rehearsal is small relative to a deferred PMA or a 483 finding. The most common reason teams skip it is that they're already running close to schedule — which is the same reason it would have produced the most value.

**Friday — Practitioner observation 4**

> Pattern: a complaint pattern that existed for two years gets rediscovered as a "user need" during the ideation phase of the next platform.
>
> The team congratulates itself on a fresh insight that was already in the complaint database.
>
> The post-market feedback loop (ISO 14971:2019 §10) closes when complaints are categorized against the hazard analysis taxonomy, the rate per hazard is tracked, and a hazard exceeding its expected rate triggers a CAPA whose closure can include a design change feeding the next platform.

---

## Engagement protocol

**Comments and replies**

Reply to every comment within 24 hours. Reply tone: short, direct, technical when the comment is substantive; warm when the comment is collegial. Avoid corporate-comms language. Mirror the depth of the original comment.

**Mentions and direct messages**

Direct messages from named buyers (decisionmakers at known firms) get prioritized within hours, not days. Direct messages from job-seekers or speculative outreach get a polite acknowledgment and a redirect to the contact form.

**Reciprocal engagement**

Spend 10 minutes per posting day commenting on adjacent firms' and individuals' posts. Add substance — never "great post." LinkedIn weights reciprocal engagement when prioritizing future post visibility.

---

## Approval flow (Claude → Keith)

For each scheduled post:

1. Claude drafts the post.
2. Drops it into a `outputs/linkedin-posts/<post-slug>.md` file in this repo, with the publish date and post-type tag in the frontmatter.
3. Surfaces the draft URL to Keith via dispatch parent.
4. Keith reads, edits if needed, approves with a click.
5. Claude (or Keith manually) schedules in LinkedIn's native scheduler.

Eventually this can become more autonomous — but the founding-month posts should each get explicit approval.

---

## Verification, day 7 and day 30

**Day 7:**
- Page is live.
- Founding announcement and 3 follow-up posts are scheduled or published.
- At least one inbound connection request from a relevant audience (likely from Keith's existing LinkedIn network).

**Day 30:**
- ~12 posts published (founding-month draft above).
- Followers count: 50-200 typical for a deliberate launch.
- At least one substantive comment thread on a post.
- One inbound DM from a buyer-shaped contact.

If day 30 numbers are well below this, the issue is usually content reach (LinkedIn's algorithm) — fix by adding a recurring weekly long-form article (separate from the daily-cadence posts), which LinkedIn weights more aggressively than short posts.
