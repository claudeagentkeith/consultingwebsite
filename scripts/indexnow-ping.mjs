#!/usr/bin/env node
// Submit the canonical sitemap URLs to IndexNow (Bing, Yandex, Seznam).
// Run manually after a content drop, or wire to a Vercel deploy hook.
//
// IndexNow is permissionless: as long as the key file at
// https://hitmakerengineering.com/<KEY>.txt returns the matching key string,
// the search engine accepts the submission. There is no signin or API
// token. Reference: https://www.indexnow.org/documentation
//
// Usage:
//   node scripts/indexnow-ping.mjs               # submit all sitemap URLs
//   node scripts/indexnow-ping.mjs <url> ...     # submit specific URLs only
//
// Exit code is non-zero on any failure so CI / deploy hooks can flag it.

const HOST = "hitmakerengineering.com";
const KEY = "ce111e934638afe3581e4a9ccf321c50";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error("Sitemap returned no URLs.");
  }
  return urls;
}

async function ping(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  // Per spec: 200 = received, 202 = accepted (key not yet validated).
  // 4xx = permanent error; 5xx = retry-worthy.
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `IndexNow ping failed: ${res.status} ${res.statusText}\n${text}`,
    );
  }
  return { status: res.status, body: text };
}

async function main() {
  const cliUrls = process.argv.slice(2).filter((arg) => /^https?:\/\//.test(arg));
  const urls = cliUrls.length > 0 ? cliUrls : await fetchSitemapUrls();

  // Same-host check; IndexNow rejects mixed-host submissions.
  const offHost = urls.find(
    (u) => !u.startsWith(`https://${HOST}/`) && u !== `https://${HOST}`,
  );
  if (offHost) {
    throw new Error(
      `Refusing to submit ${offHost} — must be on https://${HOST}.`,
    );
  }

  console.log(
    `IndexNow: submitting ${urls.length} URL(s) for ${HOST} (key location: ${KEY_LOCATION})`,
  );
  const result = await ping(urls);
  console.log(`IndexNow: ${result.status} ${result.body || "(no body)"}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
