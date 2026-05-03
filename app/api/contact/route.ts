import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  productType?: string;
  developmentPhase?: string;
  timeline?: string;
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot — silently succeed so bots don't learn anything
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  const message = (body.message || "").trim().slice(0, 5000);
  const productType = (body.productType || "").trim().slice(0, 200);
  const developmentPhase = (body.developmentPhase || "").trim().slice(0, 100);
  const timeline = (body.timeline || "").trim().slice(0, 200);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and a description of the challenge are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet. Please email hello@hitmakerengineering.com directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Hitmaker Engineering — scoping request from ${name}`;
  const text = [
    `From: ${name} <${email}>`,
    productType ? `Product type: ${productType}` : null,
    developmentPhase ? `Current development phase: ${developmentPhase}` : null,
    timeline ? `Desired timeline: ${timeline}` : null,
    "",
    "Main challenge:",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const metaRows = [
    productType
      ? `<p><strong>Product type:</strong> ${escapeHtml(productType)}</p>`
      : "",
    developmentPhase
      ? `<p><strong>Current development phase:</strong> ${escapeHtml(developmentPhase)}</p>`
      : "",
    timeline
      ? `<p><strong>Desired timeline:</strong> ${escapeHtml(timeline)}</p>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const html = [
    `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    metaRows,
    `<p><strong>Main challenge:</strong></p>`,
    `<p style="white-space: pre-wrap; font-family: ui-sans-serif, system-ui, sans-serif;">${escapeHtml(message)}</p>`,
  ].join("");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Email service error. Please try again or email hello@hitmakerengineering.com directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json(
      { error: "Email service error. Please try again or email hello@hitmakerengineering.com directly." },
      { status: 502 },
    );
  }
}
