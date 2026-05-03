import type { MetadataRoute } from "next";

// User-agents we deliberately Allow on top of the generic `*` rule. These are
// the published crawlers for the major LLM/AI assistants and search-AI
// surfaces. Allowing them explicitly (rather than relying on the wildcard)
// is the convention these crawlers themselves recommend in their docs, and
// it makes our intent visible to anyone auditing crawl posture.
//
// Sources:
// - OpenAI: https://platform.openai.com/docs/bots
// - Anthropic: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
// - Google: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
// - Apple: https://support.apple.com/en-us/119829
// - Common Crawl: https://commoncrawl.org/ccbot
// - Perplexity: https://docs.perplexity.ai/guides/bots
const AI_USER_AGENTS = [
  "GPTBot", // OpenAI training crawler
  "OAI-SearchBot", // OpenAI search crawler (ChatGPT browsing)
  "ChatGPT-User", // OpenAI in-session fetcher
  "ClaudeBot", // Anthropic crawler
  "Claude-Web", // Anthropic browsing fetcher
  "anthropic-ai", // legacy Anthropic UA
  "Google-Extended", // Google AI training opt-in token (Gemini, Vertex AI)
  "Applebot-Extended", // Apple Intelligence training
  "PerplexityBot", // Perplexity index crawler
  "Perplexity-User", // Perplexity in-session fetcher
  "CCBot", // Common Crawl — feeds many open LLM datasets
  "Bytespider", // ByteDance/TikTok AI
  "Meta-ExternalAgent", // Meta AI agents
  "Diffbot", // Knowledge-graph crawler used in AI training
];

export default function robots(): MetadataRoute.Robots {
  const aiAllowRules = AI_USER_AGENTS.map((userAgent) => ({
    userAgent,
    allow: "/",
    disallow: ["/api/", "/draft/"],
  }));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/draft/"],
      },
      ...aiAllowRules,
    ],
    sitemap: "https://hitmakerengineering.com/sitemap.xml",
    host: "https://hitmakerengineering.com",
  };
}
