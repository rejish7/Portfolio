import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

let mongooseConnected = false;

async function connectDB() {
  if (mongooseConnected) return true;
  if (!process.env.MONGODB_URI) return false;
  try {
    const { connectToDatabase } = await import("@/lib/mongodb");
    await connectToDatabase();
    mongooseConnected = true;
    return true;
  } catch {
    return false;
  }
}

function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "127.0.0.1";
}

function isValidUrl(urlStr: string): boolean {
  try {
    const url = new URL(urlStr);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// ── Rate limiting (in-memory) ──
const rateLimitMap = new Map<string, number[]>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    rateLimitMap.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

// ── PageSpeed ──
async function runPageSpeed(url: string, strategy: "mobile" | "desktop") {
  const params = new URLSearchParams({ url, strategy, category: "performance" });
  const hasApiKey = PAGESPEED_API_KEY && !PAGESPEED_API_KEY.startsWith("your_");
  if (hasApiKey) params.set("key", PAGESPEED_API_KEY);

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`,
        { signal: AbortSignal.timeout(90000) }
      );

      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        const isQuota = res.status === 429;
        console.error(`PageSpeed ${strategy} error ${res.status}:`, errBody.slice(0, 200));

        // Don't retry on quota errors
        if (isQuota) {
          return { lcp: null, cls: null, inp: null, ttfb: null, fcp: null, si: null, performance: null, quotaExceeded: true };
        }
        if (attempt === 0) continue;
        return null;
      }

      const data = await res.json();
      const a = data.lighthouseResult?.audits ?? {};

      return {
        lcp: a["largest-contentful-paint"]?.numericValue ?? null,
        cls: a["cumulative-layout-shift"]?.numericValue ?? null,
        inp: a["interaction-to-next-paint"]?.numericValue ?? null,
        ttfb: a["server-response-time"]?.numericValue ?? null,
        fcp: a["first-contentful-paint"]?.numericValue ?? null,
        si: a["speed-index"]?.numericValue ?? null,
        performance: data.lighthouseResult?.categories?.performance?.score ?? null,
        quotaExceeded: false,
      };
    } catch (err) {
      console.error(`PageSpeed ${strategy} attempt ${attempt + 1} failed:`, err instanceof Error ? err.message : err);
      if (attempt === 0) continue;
      return null;
    }
  }
  return null;
}

// ── On-page scraping ──
async function scrapeOnPage(url: string) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(15000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SEOChecker/1.0)" },
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    // Title
    const title = $("title").first().text().trim();

    // Meta description
    const metaDescription = $('meta[name="description"]').attr("content")?.trim() ?? "";

    // Images
    let totalImages = 0;
    let imagesMissingAlt = 0;
    let imagesWithAlt = 0;
    $("img").each((_, el) => {
      totalImages++;
      const alt = $(el).attr("alt");
      if (alt && alt.trim() !== "") imagesWithAlt++;
      else imagesMissingAlt++;
    });

    // Schema / JSON-LD
    const schemaTypes: string[] = [];
    let schemaCount = 0;
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const parsed = JSON.parse($(el).html() ?? "");
        const items = Array.isArray(parsed) ? parsed : [parsed];
        items.forEach((item: Record<string, unknown>) => {
          schemaCount++;
          if (item["@type"]) schemaTypes.push(String(item["@type"]));
        });
      } catch { /* skip */ }
    });

    // Headings
    const h1Count = $("h1").length;
    const h2Count = $("h2").length;
    const h3Count = $("h3").length;

    // Open Graph
    const ogTitle = $('meta[property="og:title"]').attr("content")?.trim() ?? "";
    const ogDescription = $('meta[property="og:description"]').attr("content")?.trim() ?? "";
    const ogImage = $('meta[property="og:image"]').attr("content")?.trim() ?? "";
    const twitterCard = $('meta[name="twitter:card"]').attr("content")?.trim() ?? "";

    // Technical
    const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? "";
    const viewport = $('meta[name="viewport"]').attr("content")?.trim() ?? "";
    const charset = $('meta[charset]').attr("charset")?.trim() ?? $("meta[http-equiv='Content-Type']").attr("content")?.trim() ?? "";
    const lang = $("html").attr("lang")?.trim() ?? "";

    // Links
    let internalLinks = 0;
    let externalLinks = 0;
    const origin = new URL(url).origin;
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      if (href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:")) return;
      try {
        const linkUrl = new URL(href, url);
        if (linkUrl.origin === origin) internalLinks++;
        else externalLinks++;
      } catch { /* skip */ }
    });

    // Word count
    const bodyText = $("body").text().replace(/\s+/g, " ").trim();
    const wordCount = bodyText.split(/\s+/).filter((w) => w.length > 0).length;

    // robots.txt
    let hasRobotsTxt: boolean | null = null;
    try {
      const robotsRes = await fetch(`${origin}/robots.txt`, { signal: AbortSignal.timeout(5000) });
      hasRobotsTxt = robotsRes.ok;
    } catch { hasRobotsTxt = false; }

    // Sitemap
    let hasSitemap = false;
    try {
      const sitemapRes = await fetch(`${origin}/sitemap.xml`, { signal: AbortSignal.timeout(5000) });
      hasSitemap = sitemapRes.ok;
    } catch { /* skip */ }

    return {
      title, titleLength: title.length,
      metaDescription, metaDescriptionLength: metaDescription.length,
      totalImages, imagesMissingAlt, imagesWithAlt,
      hasSchema: schemaCount > 0, schemaTypes, schemaCount,
      h1Count, h2Count, h3Count,
      ogTitle, ogDescription, ogImage, twitterCard,
      canonical, viewport, charset, lang,
      internalLinks, externalLinks,
      wordCount,
      hasRobotsTxt, hasSitemap,
    };
  } catch {
    return null;
  }
}

// ── Scoring ──
function scoreMetric(value: number | null, good: number, poor: number): "good" | "needs-improvement" | "poor" | "error" {
  if (value === null) return "error";
  if (value <= good) return "good";
  if (value <= poor) return "needs-improvement";
  return "poor";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeScore(onPage: any, mobile: any) {
  if (!onPage) return 0;
  let score = 0;
  let maxScore = 0;

  // Core Web Vitals (40 points)
  const cwvMetrics = [
    { value: mobile?.lcp, good: 2500, poor: 4000 },
    { value: mobile?.cls, good: 0.1, poor: 0.25 },
    { value: mobile?.inp, good: 200, poor: 500 },
    { value: mobile?.ttfb, good: 800, poor: 1800 },
  ];
  cwvMetrics.forEach(({ value, good, poor }) => {
    maxScore += 10;
    if (value !== null && value !== undefined && value <= good) score += 10;
    else if (value !== null && value !== undefined && value <= poor) score += 5;
  });

  // On-page SEO (60 points)
  const onPageChecks: Array<{ met: boolean; points: number }> = [
    { met: onPage.titleLength >= 30 && onPage.titleLength <= 60, points: 10 },
    { met: onPage.metaDescriptionLength >= 120 && onPage.metaDescriptionLength <= 160, points: 10 },
    { met: onPage.h1Count === 1, points: 8 },
    { met: onPage.imagesMissingAlt === 0 && onPage.totalImages > 0, points: 6 },
    { met: onPage.hasSchema, points: 8 },
    { met: onPage.ogTitle !== "", points: 4 },
    { met: onPage.ogImage !== "", points: 4 },
    { met: onPage.canonical !== "", points: 4 },
    { met: onPage.lang !== "", points: 3 },
    { met: onPage.viewport !== "", points: 3 },
  ];
  onPageChecks.forEach(({ met, points }) => {
    maxScore += points;
    if (met) score += points;
  });

  return maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
}

function buildRecommendations(onPage: Record<string, unknown>, mobile: Record<string, unknown> | null) {
  const recs: { category: string; title: string; description: string; priority: "high" | "medium" | "low" }[] = [];

  if ((onPage.titleLength as number) < 30 || (onPage.titleLength as number) > 60) {
    recs.push({ category: "SEO", title: "Fix Title Tag Length", description: `Your title is ${onPage.titleLength} characters. Aim for 30-60 characters for optimal display in search results.`, priority: "high" });
  }
  if ((onPage.titleLength as number) === 0) {
    recs.push({ category: "SEO", title: "Add a Title Tag", description: "Every page needs a unique title tag. Include your target keyword near the beginning.", priority: "high" });
  }
  if ((onPage.metaDescriptionLength as number) < 120 || (onPage.metaDescriptionLength as number) > 160) {
    recs.push({ category: "SEO", title: "Fix Meta Description", description: `Your meta description is ${onPage.metaDescriptionLength} characters. Aim for 120-160 characters.`, priority: "high" });
  }
  if ((onPage.metaDescriptionLength as number) === 0) {
    recs.push({ category: "SEO", title: "Add Meta Description", description: "Write a compelling 120-160 character meta description with your target keyword.", priority: "high" });
  }
  if ((onPage.h1Count as number) === 0) {
    recs.push({ category: "SEO", title: "Add H1 Tag", description: "Every page should have exactly one H1 tag that includes the target keyword.", priority: "high" });
  }
  if ((onPage.h1Count as number) > 1) {
    recs.push({ category: "SEO", title: "Reduce H1 Tags", description: `You have ${onPage.h1Count} H1 tags. Use only one H1 per page and use H2-H6 for subheadings.`, priority: "medium" });
  }
  if ((onPage.imagesMissingAlt as number) > 0) {
    recs.push({ category: "Accessibility", title: "Add Alt Text to Images", description: `${onPage.imagesMissingAlt} of ${onPage.totalImages} images are missing alt text. Add descriptive alt text for SEO and accessibility.`, priority: "medium" });
  }
  if (!onPage.hasSchema) {
    recs.push({ category: "SEO", title: "Add Schema Markup", description: "Add JSON-LD structured data (Organization, WebSite, or Article schema) to help search engines understand your content.", priority: "high" });
  }
  if (!onPage.ogTitle) {
    recs.push({ category: "Social", title: "Add Open Graph Tags", description: "Add og:title, og:description, and og:image meta tags for better social media sharing.", priority: "medium" });
  }
  if (!onPage.canonical) {
    recs.push({ category: "SEO", title: "Add Canonical URL", description: "Add a canonical link tag to prevent duplicate content issues.", priority: "medium" });
  }
  if (!onPage.lang) {
    recs.push({ category: "SEO", title: "Add Language Attribute", description: "Add lang attribute to the HTML tag (e.g., lang=\"en\").", priority: "low" });
  }
  if (!onPage.viewport) {
    recs.push({ category: "Mobile", title: "Add Viewport Meta", description: "Add a viewport meta tag for proper mobile rendering.", priority: "high" });
  }
  if ((onPage.wordCount as number) < 300) {
    recs.push({ category: "Content", title: "Add More Content", description: `Your page has only ${onPage.wordCount} words. Aim for 300+ words for better SEO.`, priority: "medium" });
  }
  if (onPage.hasRobotsTxt === false) {
    recs.push({ category: "Technical", title: "Add robots.txt", description: "Create a robots.txt file to guide search engine crawlers.", priority: "medium" });
  }
  if (!onPage.hasSitemap) {
    recs.push({ category: "Technical", title: "Add XML Sitemap", description: "Create and submit an XML sitemap to Google Search Console.", priority: "medium" });
  }

  // Core Web Vitals
  const m = mobile as { lcp?: number | null; cls?: number | null; inp?: number | null; ttfb?: number | null } | null;
  if (m?.lcp && m.lcp > 2500) {
    recs.push({ category: "Performance", title: "Improve LCP", description: `LCP is ${(m.lcp / 1000).toFixed(1)}s. Optimize images, use CDN, reduce server response time.`, priority: "high" });
  }
  if (m?.cls && m.cls > 0.1) {
    recs.push({ category: "Performance", title: "Fix Layout Shifts", description: `CLS is ${m.cls.toFixed(3)}. Set image dimensions, avoid dynamic content insertion.`, priority: "high" });
  }
  if (m?.inp && m.inp > 200) {
    recs.push({ category: "Performance", title: "Improve Responsiveness", description: `INP is ${m.inp}ms. Reduce JavaScript execution time and break up long tasks.`, priority: "high" });
  }
  if (m?.ttfb && m.ttfb > 800) {
    recs.push({ category: "Performance", title: "Reduce Server Response Time", description: `TTFB is ${m.ttfb}ms. Use server-side caching, optimize database queries, use a CDN.`, priority: "medium" });
  }

  return recs;
}

// ── reCAPTCHA (optional) ──
async function verifyRecaptchaOptional(token?: string): Promise<boolean> {
  if (!token) return true;
  if (process.env.RECAPTCHA_ENABLED !== "true") return true;
  const key = process.env.RECAPTCHA_SECRET_KEY;
  if (!key || key.startsWith("your_")) return true;
  try {
    const { verifyRecaptcha } = await import("@/lib/recaptcha");
    const result = await verifyRecaptcha(token);
    return result.success;
  } catch {
    return true;
  }
}

// ── Cache helpers (optional) ──
async function getCached(url: string) {
  try {
    const dbOk = await connectDB();
    if (!dbOk) return null;
    const { AuditCache } = await import("@/models/AuditCache");
    const cached = await AuditCache.findOne({ websiteUrl: url });
    if (cached && Date.now() - cached.cachedAt.getTime() < CACHE_TTL_MS) return cached.result;
    return null;
  } catch { return null; }
}

async function setCache(url: string, result: Record<string, unknown>) {
  try {
    const dbOk = await connectDB();
    if (!dbOk) return;
    const { AuditCache } = await import("@/models/AuditCache");
    await AuditCache.findOneAndUpdate({ websiteUrl: url }, { result, cachedAt: new Date() }, { upsert: true });
  } catch { /* skip */ }
}

async function saveLead(url: string, email?: string, source?: string) {
  try {
    const dbOk = await connectDB();
    if (!dbOk) return;
    const { ToolLead } = await import("@/models/ToolLead");
    await ToolLead.create({ websiteUrl: url, email: email || undefined, source, checkedAt: new Date() });
  } catch { /* skip */ }
}

// ── Email ──
async function sendAuditEmail(to: string, result: Record<string, unknown>) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return;

  const nodemailer = await import("nodemailer");
  const { auditReportTemplate } = await import("./emailTemplate");

  const transporter = nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  const r = result as {
    url: string;
    score: number;
    checkedAt: string;
    coreWebVitals: { mobile: { lcp: number | null; lcpScore: string; cls: number | null; clsScore: string; inp: number | null; inpScore: string; ttfb: number | null; ttfbScore: string }; desktop: { lcp: number | null; lcpScore: string; cls: number | null; clsScore: string; inp: number | null; inpScore: string; ttfb: number | null; ttfbScore: string } };
    onPage: { title: string; titleLength: number; metaDescription: string; metaDescriptionLength: number; imagesMissingAlt: number; totalImages: number; hasSchema: boolean; schemaTypes: string[]; h1Count: number; ogTitle: string; canonical: string; lang: string; hasRobotsTxt: boolean | null; hasSitemap: boolean; wordCount: number; internalLinks: number };
    recommendations: { category: string; title: string; description: string; priority: string }[];
  };

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    replyTo: process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER,
    subject: `Your SEO Audit Report — ${r.url} (Score: ${r.score}/100)`,
    html: auditReportTemplate(r),
  });
}

// ── Handler ──
export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded. Max 5 requests per hour." }, { status: 429 });
    }

    const body = await req.json();
    const { url, email, source, recaptchaToken } = body as { url?: string; email?: string; source?: string; recaptchaToken?: string };

    const captchaOk = await verifyRecaptchaOptional(recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 403 });
    }

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required." }, { status: 400 });
    }

    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
      normalizedUrl = "https://" + normalizedUrl;
    }
    if (!isValidUrl(normalizedUrl)) {
      return NextResponse.json({ error: "Invalid URL format." }, { status: 400 });
    }

    // Easter egg: own website
    const ownDomain = new URL(normalizedUrl).hostname.replace("www.", "");
    if (ownDomain === "rejishkhanal.com.np") {
      return NextResponse.json({
        success: true,
        cached: false,
        result: {
          url: normalizedUrl,
          checkedAt: new Date().toISOString(),
          score: 100,
          isOwnWebsite: true,
          coreWebVitals: {
            mobile: { lcp: 1200, lcpScore: "good" as const, cls: 0.02, clsScore: "good" as const, inp: 80, inpScore: "good" as const, ttfb: 320, ttfbScore: "good" as const, fcp: 900, si: 1800, performance: 0.98 },
            desktop: { lcp: 800, lcpScore: "good" as const, cls: 0.01, clsScore: "good" as const, inp: 40, inpScore: "good" as const, ttfb: 180, ttfbScore: "good" as const, fcp: 600, si: 1200, performance: 1.0 },
          },
          onPage: {
            title: "Rejish Khanal — Technical SEO Specialist & Full Stack Developer",
            titleLength: 60,
            metaDescription: "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal.",
            metaDescriptionLength: 80,
            imagesMissingAlt: 0,
            totalImages: 24,
            hasSchema: true,
            schemaTypes: ["Person", "WebSite", "Organization", "FAQPage", "BreadcrumbList"],
            h1Count: 1,
            h2Count: 6,
            h3Count: 4,
            ogTitle: "Rejish Khanal — Technical SEO Specialist",
            ogDescription: "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal.",
            ogImage: "https://rejishkhanal.com.np/og-image.jpg",
            canonical: "https://rejishkhanal.com.np/",
            viewport: "width=device-width, initial-scale=1",
            lang: "en",
            internalLinks: 48,
            externalLinks: 6,
            wordCount: 4500,
            hasRobotsTxt: true,
            hasSitemap: true,
          },
          recommendations: [],
        },
      });
    }

    // Check cache
    const cached = await getCached(normalizedUrl);
    if (cached) {
      await saveLead(normalizedUrl, email, source);
      return NextResponse.json({ success: true, cached: true, result: cached });
    }

    // Run audits in parallel
    const [mobile, desktop, onPage] = await Promise.all([
      runPageSpeed(normalizedUrl, "mobile"),
      runPageSpeed(normalizedUrl, "desktop"),
      scrapeOnPage(normalizedUrl),
    ]);

    if (!onPage) {
      return NextResponse.json({ error: "Could not fetch the website. Please check the URL and try again." }, { status: 422 });
    }

    const overallScore = computeScore(onPage, mobile);
    const recommendations = buildRecommendations(onPage as unknown as Record<string, unknown>, mobile as unknown as Record<string, unknown> | null);
    const quotaExceeded = (mobile as Record<string, unknown>)?.quotaExceeded === true || (desktop as Record<string, unknown>)?.quotaExceeded === true;

    const result = {
      url: normalizedUrl,
      checkedAt: new Date().toISOString(),
      score: overallScore,
      quotaExceeded,
      coreWebVitals: {
        mobile: {
          lcp: mobile?.lcp ?? null,
          lcpScore: scoreMetric(mobile?.lcp ?? null, 2500, 4000),
          cls: mobile?.cls ?? null,
          clsScore: scoreMetric(mobile?.cls ?? null, 0.1, 0.25),
          inp: mobile?.inp ?? null,
          inpScore: scoreMetric(mobile?.inp ?? null, 200, 500),
          ttfb: mobile?.ttfb ?? null,
          ttfbScore: scoreMetric(mobile?.ttfb ?? null, 800, 1800),
          fcp: mobile?.fcp ?? null,
          si: mobile?.si ?? null,
          performance: mobile?.performance ?? null,
        },
        desktop: {
          lcp: desktop?.lcp ?? null,
          lcpScore: scoreMetric(desktop?.lcp ?? null, 2500, 4000),
          cls: desktop?.cls ?? null,
          clsScore: scoreMetric(desktop?.cls ?? null, 0.1, 0.25),
          inp: desktop?.inp ?? null,
          inpScore: scoreMetric(desktop?.inp ?? null, 200, 500),
          ttfb: desktop?.ttfb ?? null,
          ttfbScore: scoreMetric(desktop?.ttfb ?? null, 800, 1800),
          fcp: desktop?.fcp ?? null,
          si: desktop?.si ?? null,
          performance: desktop?.performance ?? null,
        },
      },
      onPage,
      recommendations,
    };

    // Save in parallel (non-blocking)
    saveLead(normalizedUrl, email, source);
    setCache(normalizedUrl, result as unknown as Record<string, unknown>);

    // Send email if provided (non-blocking)
    if (email && !email.includes("example.com")) {
      sendAuditEmail(email, result).catch((err) => console.error("Failed to send audit email:", err));
    }

    return NextResponse.json({ success: true, cached: false, result });
  } catch (err) {
    console.error("Audit API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
