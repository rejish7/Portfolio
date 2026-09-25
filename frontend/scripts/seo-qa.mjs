#!/usr/bin/env node
/**
 * SEO acceptance QA crawl.
 *
 * Crawls every URL in sitemap.xml and verifies the implementation brief's
 * acceptance criteria against RENDERED HTML.
 *
 * Usage:  node scripts/seo-qa.mjs [baseUrl]
 * Default baseUrl: http://localhost:3000
 *
 * Output: console summary + seo-qa-report.md (repo/frontend root).
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://rejishkhanal.com.np";
const SITE_NAME = "Rejish Khanal";
const REPORT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "seo-qa-report.md");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const normalizeUrl = (u) => {
  try {
    const url = new URL(u, SITE);
    let path = url.pathname;
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    return `${url.protocol}//${url.host}${path}${url.search}`;
  } catch {
    return u;
  }
};

const matchAll = (html, re) => [...html.matchAll(re)].map((m) => m[1].trim());

function extractJsonLd(html) {
  const blocks = matchAll(html, /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  const docs = [];
  const errors = [];
  for (const raw of blocks) {
    const text = decode(raw).trim();
    try {
      docs.push(JSON.parse(text));
    } catch (e) {
      errors.push(e.message);
    }
  }
  return { docs, errors };
}

function collectTypes(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach((n) => collectTypes(n, out));
  } else if (node && typeof node === "object") {
    if (node["@type"]) out.push(node);
    if (Array.isArray(node["@graph"])) collectTypes(node["@graph"], out);
    for (const [k, v] of Object.entries(node)) {
      if (k !== "@graph" && v && typeof v === "object") collectTypes(v, out);
    }
  }
  return out;
}

async function get(url) {
  const res = await fetch(url, { redirect: "follow" });
  const html = await res.text();
  return { status: res.status, html, finalUrl: res.url };
}

const problems = [];
const notes = [];
const flag = (url, check, detail) => problems.push({ url, check, detail });

async function checkPage(prodLoc, fetchUrl = prodLoc) {
  const { status, html } = await get(fetchUrl);
  const loc = prodLoc;
  const row = { loc, status };

  if (status !== 200) {
    flag(loc, "http-status", `HTTP ${status}`);
    return row;
  }

  // --- titles ---
  const titles = matchAll(html, /<title[^>]*>([\s\S]*?)<\/title>/gi);
  row.title = titles[0] ? decode(titles[0]) : "";
  if (titles.length !== 1) flag(loc, "title-count", `found ${titles.length}`);
  if (!row.title) flag(loc, "title-empty", "empty title");
  if (/\|\s*Rejish Khanal\s*\|\s*Rejish Khanal/i.test(row.title))
    flag(loc, "title-double-brand", row.title);
  if (row.title.length > 75)
    flag(loc, "title-too-long", `${row.title.length} chars: ${row.title}`);
  else if (row.title.length > 60)
    notes.push(
      `Title >60 chars (${row.title.length}) on ${loc.replace(SITE, "")} — SERP may truncate: "${row.title}"`
    );

  // --- meta description ---
  const descs = matchAll(html, /<meta[^>]*name="description"[^>]*content="([^"]*)"/gi);
  row.description = descs[0] ? decode(descs[0]) : "";
  if (descs.length !== 1) flag(loc, "description-count", `found ${descs.length}`);
  if (!row.description) flag(loc, "description-empty", "empty description");

  // --- canonical ---
  const canonicals = matchAll(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/gi);
  row.canonical = canonicals[0] ? decode(canonicals[0]) : "";
  if (canonicals.length !== 1) flag(loc, "canonical-count", `found ${canonicals.length}`);
  if (row.canonical && !row.canonical.startsWith("https://"))
    flag(loc, "canonical-not-https", row.canonical);
  if (row.canonical && normalizeUrl(row.canonical) !== normalizeUrl(loc))
    flag(loc, "canonical-mismatch", `canonical=${row.canonical} sitemap=${loc}`);
  // Homepage: Next.js 16 normalizes root canonical/og:url to origin form
  // (resolve-url.js returns `origin` when pathname === "/"). Both forms are the
  // same resource, so accept origin form and record a note.
  const isRoot = normalizeUrl(loc) === normalizeUrl(SITE + "/");
  if (isRoot && !row.canonical.endsWith("/")) {
    notes.push(
      `Homepage canonical rendered as origin form (${row.canonical}) — Next.js 16 metadata normalization; equivalent to ${SITE}/`
    );
  }

  // --- robots ---
  const robotsMeta = matchAll(html, /<meta[^>]*name="robots"[^>]*content="([^"]*)"/gi);
  row.robots = robotsMeta[0] || "";
  if (/noindex/i.test(row.robots)) flag(loc, "noindex", row.robots);

  // --- open graph ---
  const ogSiteName = matchAll(html, /<meta[^>]*property="og:site_name"[^>]*content="([^"]*)"/gi)[0];
  const ogUrl = matchAll(html, /<meta[^>]*property="og:url"[^>]*content="([^"]*)"/gi)[0];
  row.ogSiteName = ogSiteName ? decode(ogSiteName) : "";
  row.ogUrl = ogUrl ? decode(ogUrl) : "";
  if (row.ogSiteName !== SITE_NAME)
    flag(loc, "og-site-name", `got "${row.ogSiteName}"`);
  if (!row.ogUrl) flag(loc, "og-url-missing", "og:url absent");
  else if (normalizeUrl(row.ogUrl) !== normalizeUrl(row.canonical || loc))
    flag(loc, "og-url-mismatch", `og:url=${row.ogUrl} canonical=${row.canonical}`);

  // --- application name ---
  const appName = matchAll(html, /<meta[^>]*name="application-name"[^>]*content="([^"]*)"/gi)[0];
  row.applicationName = appName ? decode(appName) : "";
  if (row.applicationName && row.applicationName !== SITE_NAME)
    flag(loc, "application-name", `got "${row.applicationName}"`);

  // --- JSON-LD ---
  const { docs, errors } = extractJsonLd(html);
  row.jsonldBlocks = docs.length;
  for (const e of errors) flag(loc, "jsonld-parse", e);

  const nodes = docs.flatMap((d) => collectTypes(d));
  const webSites = nodes.filter(
    (n) => (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]).includes("WebSite")
  );
  row.webSiteCount = webSites.length;
  if (webSites.length > 1) flag(loc, "multiple-website-entities", `${webSites.length} WebSite nodes`);
  for (const w of webSites) {
    if (w.name !== SITE_NAME) flag(loc, "website-name", `WebSite.name = "${w.name}"`);
  }

  const personNodes = nodes.filter(
    (n) =>
      (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]).includes("Person")
  );
  const personDefined = personNodes.some(
    (n) => n["@id"] === `${SITE}/#person` && n.name === SITE_NAME
  );
  row.personEntityDefined = personDefined;
  if (!personDefined) flag(loc, "person-entity-missing", "no Person @id #person with name");
  for (const p of personNodes) {
    if (p["@id"] === `${SITE}/#person` && p.name && p.name !== SITE_NAME)
      flag(loc, "person-name-conflict", `#person name = "${p.name}"`);
  }
  row.barePersons = personNodes.filter((n) => !n["@id"]).length;

  // duplicate @id definitions: same @id declared more than once with
  // substantive definition properties (description/jobTitle/sameAs/serviceType/...)
  const substantive = ["description", "jobTitle", "sameAs", "serviceType", "areaServed", "knowsAbout", "hasOfferCatalog"];
  const byId = new Map();
  for (const n of nodes) {
    if (!n["@id"]) continue;
    const isDefinition = substantive.some((k) => n[k] !== undefined);
    if (!isDefinition) continue;
    byId.set(n["@id"], (byId.get(n["@id"]) || 0) + 1);
  }
  for (const [id, count] of byId) {
    if (count > 1) flag(loc, "duplicate-entity-definition", `${id} defined ${count} times`);
  }

  return row;
}

async function main() {
  console.log(`Crawling sitemap of ${SITE} via ${BASE} ...`);

  const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();

  const sitemapProblems = [];
  if (sitemapRes.status !== 200) sitemapProblems.push(`sitemap HTTP ${sitemapRes.status}`);
  if (!sitemapXml.includes("<?xml")) sitemapProblems.push("missing XML declaration");
  if (/&quot;|&gt;|<a href/.test(sitemapXml))
    sitemapProblems.push("sitemap contains escaped HTML/markup artifacts");
  const locs = matchAll(sitemapXml, /<loc>([\s\S]*?)<\/loc>/g);
  if (!locs.length) sitemapProblems.push("no <loc> entries");

  const seen = new Set();
  const dupes = locs.filter((l) => seen.has(l) || !seen.add(l));
  if (dupes.length) sitemapProblems.push(`duplicate sitemap URLs: ${dupes.join(", ")}`);

  const rows = [];
  for (const prodLoc of locs) {
    const fetchUrl = prodLoc.startsWith(BASE) ? prodLoc : prodLoc.replace(SITE, BASE);
    try {
      rows.push(await checkPage(prodLoc, fetchUrl));
    } catch (e) {
      flag(prodLoc, "fetch-error", e.message);
    }
  }

  // cross-page title uniqueness
  const titleMap = new Map();
  for (const r of rows) {
    if (!r.title) continue;
    if (titleMap.has(r.title)) flag(r.loc, "duplicate-title", `same as ${titleMap.get(r.title)}`);
    else titleMap.set(r.title, r.loc);
  }

  const totalChecks = rows.length * 12;
  const passed = problems.length === 0;

  const lines = [];
  lines.push("# SEO QA Crawl Report");
  lines.push("");
  lines.push(`- Generated: ${new Date().toISOString()}`);
  lines.push(`- Sitemap source: ${BASE}/sitemap.xml`);
  lines.push(`- URLs crawled: ${rows.length}`);
  lines.push(`- Sitemap issues: ${sitemapProblems.length ? sitemapProblems.join("; ") : "none"}`);
  lines.push(`- Result: **${passed ? "PASS — all acceptance checks clean" : `FAIL — ${problems.length} problem(s)`}**`);
  if (notes.length) {
    lines.push("");
    lines.push("## Notes (documented deviations)");
    lines.push("");
    for (const n of [...new Set(notes)]) lines.push(`- ${n}`);
  }
  lines.push("");
  lines.push("## Per-URL results");
  lines.push("");
  lines.push("| URL | HTTP | Title | Canonical OK | og:site_name | WebSite nodes | JSON-LD blocks |");
  lines.push("|---|---|---|---|---|---|---|");
  for (const r of rows) {
    const canonOk =
      r.canonical && normalizeUrl(r.canonical) === normalizeUrl(r.loc) ? "yes" : "NO";
    lines.push(
      `| ${r.loc.replace(SITE, "")} | ${r.status ?? "-"} | ${(r.title || "").replace(/\|/g, "\\|")} | ${canonOk} | ${r.ogSiteName || "-"} | ${r.webSiteCount ?? "-"} | ${r.jsonldBlocks ?? "-"} |`
    );
  }
  if (problems.length) {
    lines.push("");
    lines.push("## Problems");
    lines.push("");
    for (const p of problems) lines.push(`- **${p.check}** — ${p.url}: ${p.detail}`);
  }
  lines.push("");
  lines.push(`Aggregate: ${totalChecks}+ assertions across ${rows.length} URLs, ${problems.length} failure(s).`);

  writeFileSync(REPORT, lines.join("\n"));
  console.log(lines.join("\n"));
  console.log(`\nReport written to ${REPORT}`);
  process.exit(passed ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
