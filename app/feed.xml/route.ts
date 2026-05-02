import { publishedInsights } from "@/lib/insights";

const SITE_URL = "https://hitmakerengineering.com";
const SITE_NAME = "Hitmaker Engineering — Insights";
const SITE_DESCRIPTION =
  "Working notes on regulated medical-device engineering — combination products, risk management, design controls, and human factors.";

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = publishedInsights();
  const lastBuildDate = new Date().toUTCString();

  const itemsXml = items
    .map((insight) => {
      const url = `${SITE_URL}/insights/${insight.slug}`;
      const pubDate = new Date(insight.publishedAt).toUTCString();
      return [
        "<item>",
        `<title>${escape(insight.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${pubDate}</pubDate>`,
        `<description>${escape(insight.description)}</description>`,
        `<category>${escape(insight.topic)}</category>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escape(SITE_NAME)}</title>`,
    `<link>${SITE_URL}/insights</link>`,
    `<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    `<description>${escape(SITE_DESCRIPTION)}</description>`,
    `<language>en-US</language>`,
    `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    itemsXml,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
