"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, XCircle, AlertTriangle, Loader2,
  Globe, Gauge, Image, Link2, FileText, Search, Shield,
  TrendingUp, ChevronDown, ChevronUp, ExternalLink,
} from "lucide-react";

interface CoreWebVitalsData {
  mobile: MetricSet;
  desktop: MetricSet;
}

interface MetricSet {
  lcp: number | null;
  lcpScore: string;
  cls: number | null;
  clsScore: string;
  inp: number | null;
  inpScore: string;
  ttfb: number | null;
  ttfbScore: string;
  fcp: number | null;
  si: number | null;
  performance: number | null;
}

interface OnPageData {
  title: string;
  titleLength: number;
  metaDescription: string;
  metaDescriptionLength: number;
  imagesMissingAlt: number;
  totalImages: number;
  imagesWithAlt: number;
  hasSchema: boolean;
  schemaTypes: string[];
  h1Count: number;
  h2Count: number;
  h3Count: number;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonical: string;
  viewport: string;
  lang: string;
  internalLinks: number;
  externalLinks: number;
  wordCount: number;
  hasRobotsTxt: boolean | null;
  hasSitemap: boolean;
}

interface Recommendation {
  category: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
}

interface AuditResult {
  url: string;
  checkedAt: string;
  score: number;
  quotaExceeded?: boolean;
  isOwnWebsite?: boolean;
  coreWebVitals: CoreWebVitalsData;
  onPage: OnPageData;
  recommendations: Recommendation[];
}

// ── Helpers ──
function formatMs(ms: number | null): string {
  if (ms === null) return "—";
  return ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(2)}s`;
}

function formatSeconds(ms: number | null): string {
  if (ms === null) return "—";
  return `${(ms / 1000).toFixed(2)}s`;
}

function getScoreColor(score: number): string {
  if (score >= 90) return "#16a34a";
  if (score >= 50) return "#ca8a04";
  return "#dc2626";
}

function getScoreLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 80) return "Good";
  if (score >= 50) return "Needs Work";
  return "Poor";
}

// ── Components ──
function ScoreRing({ score, size = 160 }: { score: number; size?: number }) {
  const r = (size - 16) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = getScoreColor(score);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth="10" className="text-muted/20" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-bold" style={{ fontSize: size * 0.28, color, lineHeight: 1 }}>{score}</div>
        <div className="text-xs text-muted-foreground mt-1">{getScoreLabel(score)}</div>
      </div>
    </div>
  );
}

function MetricBar({ score, label }: { score: string; label: string }) {
  const widths: Record<string, string> = { good: "100%", "needs-improvement": "65%", poor: "30%", error: "0%" };
  const colors: Record<string, string> = { good: "bg-green-500", "needs-improvement": "bg-yellow-500", poor: "bg-red-500", error: "bg-gray-300" };
  const labels: Record<string, string> = { good: "Good", "needs-improvement": "Needs Work", poor: "Poor", error: "N/A" };

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium">{label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          score === "good" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
          score === "needs-improvement" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
          score === "poor" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
          "bg-gray-100 text-gray-500"
        }`}>{labels[score] ?? "N/A"}</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-700 ${colors[score] ?? colors.error}`} style={{ width: widths[score] ?? "0%" }} />
      </div>
    </div>
  );
}

function CheckRow({ label, passed, detail, tip }: { label: string; passed: boolean; detail?: string; tip?: string }) {
  return (
    <div className={`flex items-start gap-3 py-3 px-4 rounded-lg ${passed ? "bg-green-50/50 dark:bg-green-950/10" : "bg-red-50/50 dark:bg-red-950/10"}`}>
      {passed ? <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /> : <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-sm font-semibold ${passed ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}>{label}</span>
          {detail && <span className="text-xs text-muted-foreground shrink-0">{detail}</span>}
        </div>
        {!passed && tip && <p className="text-xs text-muted-foreground mt-1">{tip}</p>}
      </div>
    </div>
  );
}

// ── Main Component ──
export function CoreWebVitalsChecker() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");
  const [showAllRecs, setShowAllRecs] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email: email || undefined, source: "core-web-vitals-checker" }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to run audit");
    } finally {
      setLoading(false);
    }
  }

  const recs = result?.recommendations ?? [];
  const shownRecs = showAllRecs ? recs : recs.slice(0, 6);
  const highPriority = recs.filter((r) => r.priority === "high").length;
  const mediumPriority = recs.filter((r) => r.priority === "medium").length;

  return (
    <div>
      {/* Form */}
      <Card className="mb-10 border-2 border-primary/10 shadow-xl shadow-primary/5">
        <CardContent className="pt-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="url" className="block text-sm font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                Website URL
              </label>
              <Input
                id="url" type="text" placeholder="https://example.com" value={url}
                onChange={(e) => setUrl(e.target.value)} required className="w-full text-base h-14 text-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                Email me this report (optional)
              </label>
              <Input
                id="email" type="email" placeholder="you@example.com" value={email}
                onChange={(e) => setEmail(e.target.value)} className="w-full"
              />
            </div>
            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
              </div>
            )}
            <Button type="submit" disabled={loading} className="w-full h-14 text-base font-bold" size="lg">
              {loading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing website — this takes 15-30 seconds...</>
              ) : (
                <><Search className="mr-2 h-5 w-5" /> Run Full SEO Audit</>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-8">

          {/* ═══ SCORE HEADER ═══ */}
          <Card className="border-2 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <ScoreRing score={result.score} />
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">SEO Audit Report</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{result.url}</h2>
                  <p className="text-muted-foreground mb-4">
                    Analyzed on {new Date(result.checkedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {recs.filter((r) => r.priority === "high").length} High Priority
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      {mediumPriority} Medium Priority
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {recs.filter((r) => r.priority === "low").length} Low Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* ═══ OWN WEBSITE EASTER EGG ═══ */}
          {result.isOwnWebsite && (
            <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-3 text-green-800 dark:text-green-300">Obviously 100/100!</h3>
                <p className="text-green-700 dark:text-green-400 mb-4 max-w-lg mx-auto leading-relaxed">
                  This is my own website — <strong>rejishkhanal.com.np</strong> — of course it&apos;s fully optimized!
                  I built it with Next.js, implemented Core Web Vitals, schema markup, technical SEO, and every trick in the book.
                </p>
                <p className="text-sm text-green-600 dark:text-green-500 mb-6">
                  Want the same results for your website? Let&apos;s talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="mailto:contact@rejishkhanal.com.np">
                    <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white w-full sm:w-auto">
                      Hire Me for Your SEO <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://wa.me/9779862766994?text=Hi%20Rejish%2C%20I%20saw%20your%20website%20scores%20100%2F100%20on%20the%20SEO%20tool.%20Can%20you%20do%20the%20same%20for%20mine%3F" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Chat on WhatsApp <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ═══ REST OF RESULTS (hidden for own website) ═══ */}
          {!result.isOwnWebsite && (<>

          {/* ═══ PERFORMANCE SCORE ═══ */}
          {result.coreWebVitals.mobile.performance != null && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Gauge className="h-5 w-5 text-primary" /> Lighthouse Performance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold" style={{ color: getScoreColor(Math.round(result.coreWebVitals.mobile.performance * 100)) }}>
                    {Math.round(result.coreWebVitals.mobile.performance * 100)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Performance breakdown based on Google Lighthouse audit</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      {[
                        { label: "FCP", value: formatMs(result.coreWebVitals.mobile.fcp), good: "< 1.8s" },
                        { label: "LCP", value: formatMs(result.coreWebVitals.mobile.lcp), good: "< 2.5s" },
                        { label: "TBT", value: "—", good: "< 200ms" },
                        { label: "CLS", value: result.coreWebVitals.mobile.cls !== null ? result.coreWebVitals.mobile.cls.toFixed(3) : "—", good: "< 0.1" },
                      ].map((m) => (
                        <div key={m.label} className="p-2 rounded-lg bg-muted/30">
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                          <div className="text-sm font-bold">{m.value}</div>
                          <div className="text-[10px] text-muted-foreground">Good: {m.good}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ═══ QUOTA EXCEEDED NOTICE ═══ */}
          {result.quotaExceeded && (
            <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-yellow-50/80 dark:bg-yellow-950/20">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">PageSpeed API Quota Exceeded</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                      Core Web Vitals data is temporarily unavailable because the PageSpeed Insights API daily quota has been reached.
                      On-page SEO analysis is shown below.
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-500">
                      <strong>Fix:</strong> Add a <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">PAGESPEED_API_KEY</code> to <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">.env.local</code> for higher quotas.
                      Get a free key from{" "}
                      <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                        Google Cloud Console
                      </a>
                      {" "}→ Enable PageSpeed Insights API → Create API Key.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ═══ CORE WEB VITALS — MOBILE ═══ */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-primary" /> Core Web Vitals — Mobile
                </CardTitle>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">PRIORITY</span>
              </div>
              <p className="text-sm text-muted-foreground">Google uses mobile-first indexing. Mobile scores matter most for rankings.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="grid gap-5">
                  <MetricBar score={result.coreWebVitals.mobile.lcpScore} label="Largest Contentful Paint (LCP)" />
                  <div className="flex items-center justify-between -mt-3 ml-1">
                    <span className="text-xs text-muted-foreground">How long it takes for the largest content element to become visible</span>
                    <span className="text-sm font-bold">{formatSeconds(result.coreWebVitals.mobile.lcp)}</span>
                  </div>

                  <MetricBar score={result.coreWebVitals.mobile.clsScore} label="Cumulative Layout Shift (CLS)" />
                  <div className="flex items-center justify-between -mt-3 ml-1">
                    <span className="text-xs text-muted-foreground">How much the page layout shifts unexpectedly during loading</span>
                    <span className="text-sm font-bold">{result.coreWebVitals.mobile.cls !== null ? result.coreWebVitals.mobile.cls.toFixed(4) : "—"}</span>
                  </div>

                  <MetricBar score={result.coreWebVitals.mobile.inpScore} label="Interaction to Next Paint (INP)" />
                  <div className="flex items-center justify-between -mt-3 ml-1">
                    <span className="text-xs text-muted-foreground">How quickly the page responds to user interactions (clicks, taps)</span>
                    <span className="text-sm font-bold">{formatMs(result.coreWebVitals.mobile.inp)}</span>
                  </div>

                  <MetricBar score={result.coreWebVitals.mobile.ttfbScore} label="Time to First Byte (TTFB)" />
                  <div className="flex items-center justify-between -mt-3 ml-1">
                    <span className="text-xs text-muted-foreground">How long it takes for the server to send the first byte of data</span>
                    <span className="text-sm font-bold">{formatMs(result.coreWebVitals.mobile.ttfb)}</span>
                  </div>
                </div>

                {/* Thresholds reference */}
                <div className="mt-6 p-4 rounded-lg bg-muted/20 border border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Google Recommended Thresholds</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div><span className="text-green-600 font-bold">Good:</span> LCP &lt; 2.5s</div>
                    <div><span className="text-green-600 font-bold">Good:</span> CLS &lt; 0.1</div>
                    <div><span className="text-green-600 font-bold">Good:</span> INP &lt; 200ms</div>
                    <div><span className="text-green-600 font-bold">Good:</span> TTFB &lt; 800ms</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ═══ CORE WEB VITALS — DESKTOP ═══ */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="h-5 w-5 text-muted-foreground" /> Core Web Vitals — Desktop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-5">
                <MetricBar score={result.coreWebVitals.desktop.lcpScore} label="LCP" />
                <div className="flex items-center justify-between -mt-3 ml-1">
                  <span className="text-xs text-muted-foreground">Largest Contentful Paint</span>
                  <span className="text-sm font-bold">{formatSeconds(result.coreWebVitals.desktop.lcp)}</span>
                </div>

                <MetricBar score={result.coreWebVitals.desktop.clsScore} label="CLS" />
                <div className="flex items-center justify-between -mt-3 ml-1">
                  <span className="text-xs text-muted-foreground">Cumulative Layout Shift</span>
                  <span className="text-sm font-bold">{result.coreWebVitals.desktop.cls !== null ? result.coreWebVitals.desktop.cls.toFixed(4) : "—"}</span>
                </div>

                <MetricBar score={result.coreWebVitals.desktop.inpScore} label="INP" />
                <div className="flex items-center justify-between -mt-3 ml-1">
                  <span className="text-xs text-muted-foreground">Interaction to Next Paint</span>
                  <span className="text-sm font-bold">{formatMs(result.coreWebVitals.desktop.inp)}</span>
                </div>

                <MetricBar score={result.coreWebVitals.desktop.ttfbScore} label="TTFB" />
                <div className="flex items-center justify-between -mt-3 ml-1">
                  <span className="text-xs text-muted-foreground">Time to First Byte</span>
                  <span className="text-sm font-bold">{formatMs(result.coreWebVitals.desktop.ttfb)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ═══ ON-PAGE SEO ═══ */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Search className="h-5 w-5 text-primary" /> On-Page SEO Analysis
              </CardTitle>
              <p className="text-sm text-muted-foreground">Technical and content elements that directly affect search engine rankings.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {/* Title */}
                <CheckRow
                  label="Title Tag"
                  passed={result.onPage.titleLength >= 30 && result.onPage.titleLength <= 60}
                  detail={`${result.onPage.titleLength} chars`}
                  tip={result.onPage.titleLength === 0 ? "Add a title tag with your target keyword (30-60 characters)" : `Current: "${result.onPage.title}" — should be 30-60 characters`}
                />

                {/* Meta Description */}
                <CheckRow
                  label="Meta Description"
                  passed={result.onPage.metaDescriptionLength >= 120 && result.onPage.metaDescriptionLength <= 160}
                  detail={`${result.onPage.metaDescriptionLength} chars`}
                  tip={result.onPage.metaDescriptionLength === 0 ? "Add a compelling meta description (120-160 characters) with your target keyword" : `Should be 120-160 characters for optimal SERP display`}
                />

                {/* H1 */}
                <CheckRow
                  label="H1 Heading"
                  passed={result.onPage.h1Count === 1}
                  detail={result.onPage.h1Count === 0 ? "Missing" : `${result.onPage.h1Count} found`}
                  tip={result.onPage.h1Count === 0 ? "Every page needs exactly one H1 tag containing the target keyword" : result.onPage.h1Count > 1 ? "Use only one H1 per page — use H2-H6 for subheadings" : ""}
                />

                {/* Images */}
                <CheckRow
                  label="Image Alt Text"
                  passed={result.onPage.imagesMissingAlt === 0 && result.onPage.totalImages > 0}
                  detail={result.onPage.totalImages > 0 ? `${result.onPage.imagesWithAlt}/${result.onPage.totalImages} have alt` : "No images"}
                  tip={result.onPage.imagesMissingAlt > 0 ? `${result.onPage.imagesMissingAlt} images missing descriptive alt text — this hurts accessibility and image SEO` : ""}
                />

                {/* Schema */}
                <CheckRow
                  label="Schema Markup (JSON-LD)"
                  passed={result.onPage.hasSchema}
                  detail={result.onPage.hasSchema ? result.onPage.schemaTypes.join(", ") : "Not found"}
                  tip={!result.onPage.hasSchema ? "Add structured data (Organization, WebSite, or Article schema) to help Google understand your content" : ""}
                />

                {/* OG Tags */}
                <CheckRow
                  label="Open Graph Tags"
                  passed={!!result.onPage.ogTitle}
                  detail={result.onPage.ogTitle ? "og:title present" : "Missing"}
                  tip={!result.onPage.ogTitle ? "Add og:title, og:description, and og:image for better social media previews" : ""}
                />

                {/* Canonical */}
                <CheckRow
                  label="Canonical URL"
                  passed={!!result.onPage.canonical}
                  detail={result.onPage.canonical ? result.onPage.canonical : "Missing"}
                  tip={!result.onPage.canonical ? "Add a canonical link tag to prevent duplicate content indexing" : ""}
                />

                {/* Language */}
                <CheckRow
                  label="Language Attribute"
                  passed={!!result.onPage.lang}
                  detail={result.onPage.lang ? `lang="${result.onPage.lang}"` : "Missing"}
                  tip={!result.onPage.lang ? "Add lang attribute to the HTML element (e.g., lang=\"en\")" : ""}
                />

                {/* Viewport */}
                <CheckRow
                  label="Mobile Responsive"
                  passed={!!result.onPage.viewport}
                  detail={result.onPage.viewport ? "Viewport set" : "Missing"}
                  tip={!result.onPage.viewport ? "Add viewport meta tag for proper mobile rendering" : ""}
                />

                {/* robots.txt */}
                <CheckRow
                  label="robots.txt"
                  passed={result.onPage.hasRobotsTxt === true}
                  detail={result.onPage.hasRobotsTxt === true ? "Found" : "Not found"}
                  tip={result.onPage.hasRobotsTxt !== true ? "Create a robots.txt file to guide search engine crawlers" : ""}
                />

                {/* Sitemap */}
                <CheckRow
                  label="XML Sitemap"
                  passed={result.onPage.hasSitemap}
                  detail={result.onPage.hasSitemap ? "Found" : "Not found"}
                  tip={!result.onPage.hasSitemap ? "Create and submit an XML sitemap to Google Search Console" : ""}
                />

                {/* Content */}
                <CheckRow
                  label="Content Length"
                  passed={result.onPage.wordCount >= 300}
                  detail={`${result.onPage.wordCount.toLocaleString()} words`}
                  tip={result.onPage.wordCount < 300 ? `Only ${result.onPage.wordCount} words — aim for 300+ words for better SEO` : ""}
                />

                {/* Links */}
                <CheckRow
                  label="Internal Links"
                  passed={result.onPage.internalLinks > 0}
                  detail={`${result.onPage.internalLinks} internal, ${result.onPage.externalLinks} external`}
                  tip={result.onPage.internalLinks === 0 ? "Add internal links to help search engines discover and understand your content" : ""}
                />
              </div>
            </CardContent>
          </Card>

          {/* ═══ RECOMMENDATIONS ═══ */}
          {recs.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-primary" /> Action Items
                  </CardTitle>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">{recs.length} total</span>
                </div>
                <p className="text-sm text-muted-foreground">Prioritized fixes sorted by impact on SEO rankings.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shownRecs.map((rec, i) => (
                    <div key={i} className={`p-5 rounded-xl border-l-4 ${
                      rec.priority === "high" ? "border-l-red-500 bg-red-50/80 dark:bg-red-950/15" :
                      rec.priority === "medium" ? "border-l-yellow-500 bg-yellow-50/80 dark:bg-yellow-950/15" :
                      "border-l-blue-500 bg-blue-50/80 dark:bg-blue-950/15"
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{rec.category}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                              rec.priority === "high" ? "bg-red-100 text-red-600 dark:bg-red-900/50" :
                              rec.priority === "medium" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50" :
                              "bg-blue-100 text-blue-600 dark:bg-blue-900/50"
                            }`}>{rec.priority}</span>
                          </div>
                          <h4 className="font-bold text-sm mb-1">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {recs.length > 6 && (
                  <button
                    onClick={() => setShowAllRecs(!showAllRecs)}
                    className="mt-5 w-full py-2.5 rounded-lg border bg-muted/20 hover:bg-muted/40 text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    {showAllRecs ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {showAllRecs ? "Show fewer" : `Show all ${recs.length} recommendations`}
                  </button>
                )}
              </CardContent>
            </Card>
          )}

          {/* ═══ CTA ═══ */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 shadow-xl">
            <CardContent className="pt-10 pb-10 text-center">
              <Shield className="h-14 w-14 text-primary mx-auto mb-5" />
              <h3 className="text-2xl font-bold mb-3">Need help fixing these issues?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                I am a technical SEO specialist based in Nepal. I provide comprehensive SEO audits,
                Core Web Vitals optimization, and ongoing SEO strategy for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@rejishkhanal.com.np">
                  <Button size="lg" className="w-full sm:w-auto h-12 font-bold">
                    Get a Professional SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 font-bold">
                    Contact Me <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          </>)}
        </div>
      )}
    </div>
  );
}
