function formatMs(ms: number | null): string {
  if (ms === null) return "—";
  return ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(2)}s`;
}

function statusColor(score: string): string {
  if (score === "good") return "#16a34a";
  if (score === "needs-improvement") return "#ca8a04";
  return "#dc2626";
}

function statusLabel(score: string): string {
  if (score === "good") return "Good";
  if (score === "needs-improvement") return "Needs Work";
  return "Poor";
}

function checkIcon(passed: boolean): string {
  return passed
    ? '<span style="color:#16a34a;font-size:16px;">&#10003;</span>'
    : '<span style="color:#dc2626;font-size:16px;">&#10007;</span>';
}

export function auditReportTemplate(result: {
  url: string;
  score: number;
  checkedAt: string;
  coreWebVitals: {
    mobile: { lcp: number | null; lcpScore: string; cls: number | null; clsScore: string; inp: number | null; inpScore: string; ttfb: number | null; ttfbScore: string };
    desktop: { lcp: number | null; lcpScore: string; cls: number | null; clsScore: string; inp: number | null; inpScore: string; ttfb: number | null; ttfbScore: string };
  };
  onPage: {
    title: string; titleLength: number;
    metaDescription: string; metaDescriptionLength: number;
    imagesMissingAlt: number; totalImages: number;
    hasSchema: boolean; schemaTypes: string[];
    h1Count: number;
    ogTitle: string; canonical: string; lang: string;
    hasRobotsTxt: boolean | null; hasSitemap: boolean;
    wordCount: number; internalLinks: number;
  };
  recommendations: { category: string; title: string; description: string; priority: string }[];
}): string {
  const scoreColor = result.score >= 80 ? "#16a34a" : result.score >= 50 ? "#ca8a04" : "#dc2626";
  const scoreLabel = result.score >= 80 ? "Good" : result.score >= 50 ? "Needs Work" : "Poor";
  const m = result.coreWebVitals.mobile;
  const d = result.coreWebVitals.desktop;
  const o = result.onPage;

  const highRecs = result.recommendations.filter((r) => r.priority === "high");
  const medRecs = result.recommendations.filter((r) => r.priority === "medium");

  const recRows = result.recommendations.slice(0, 8).map((r) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;">
        <span style="display:inline-block;background-color:${r.priority === "high" ? "#fef2f2" : r.priority === "medium" ? "#fefce8" : "#eff6ff"};color:${r.priority === "high" ? "#dc2626" : r.priority === "medium" ? "#ca8a04" : "#2563eb"};font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;text-transform:uppercase;letter-spacing:0.5px;">${r.priority}</span>
        <span style="color:#64748b;font-size:11px;margin-left:8px;text-transform:uppercase;">${r.category}</span>
        <p style="margin:6px 0 0;color:#1a1a2e;font-size:14px;font-weight:600;">${r.title}</p>
        <p style="margin:4px 0 0;color:#64748b;font-size:13px;line-height:1.5;">${r.description}</p>
      </td>
    </tr>
  `).join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f8f9fa;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa;padding:40px 20px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding:40px 48px; text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;">Rejish Khanal</h1>
              <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">Technical SEO Specialist & Full Stack Developer</p>
            </td>
          </tr>

          <!-- Score Section -->
          <tr>
            <td style="padding:40px 48px;text-align:center;">
              <p style="margin:0 0 4px;color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Your SEO Score</p>
              <div style="display:inline-block;width:100px;height:100px;border-radius:50%;border:6px solid ${scoreColor};line-height:88px;font-size:36px;font-weight:800;color:${scoreColor};">${result.score}</div>
              <p style="margin:12px 0 0;color:${scoreColor};font-size:16px;font-weight:700;">${scoreLabel}</p>
              <p style="margin:8px 0 0;color:#64748b;font-size:13px;">${result.url}</p>
              <p style="margin:4px 0 0;color:#94a3b8;font-size:12px;">Analyzed on ${new Date(result.checkedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

          <!-- Core Web Vitals -->
          <tr>
            <td style="padding:32px 48px;">
              <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:18px;font-weight:700;">Core Web Vitals</h2>

              <p style="margin:0 0 12px;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Mobile</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
                <tr style="background-color:#f8fafc;">
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;">Metric</td>
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;text-align:right;">Value</td>
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;text-align:right;">Status</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">LCP</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${formatMs(m.lcp)}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(m.lcpScore)};font-size:12px;font-weight:600;">${statusLabel(m.lcpScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">CLS</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${m.cls !== null ? m.cls.toFixed(3) : "—"}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(m.clsScore)};font-size:12px;font-weight:600;">${statusLabel(m.clsScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">INP</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${formatMs(m.inp)}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(m.inpScore)};font-size:12px;font-weight:600;">${statusLabel(m.inpScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;">TTFB</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;text-align:right;font-weight:600;">${formatMs(m.ttfb)}</td>
                  <td style="padding:10px 16px;text-align:right;"><span style="color:${statusColor(m.ttfbScore)};font-size:12px;font-weight:600;">${statusLabel(m.ttfbScore)}</span></td>
                </tr>
              </table>

              <p style="margin:0 0 12px;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Desktop</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
                <tr style="background-color:#f8fafc;">
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;">Metric</td>
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;text-align:right;">Value</td>
                  <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#64748b;border-bottom:1px solid #e2e8f0;text-align:right;">Status</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">LCP</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${formatMs(d.lcp)}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(d.lcpScore)};font-size:12px;font-weight:600;">${statusLabel(d.lcpScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">CLS</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${d.cls !== null ? d.cls.toFixed(3) : "—"}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(d.clsScore)};font-size:12px;font-weight:600;">${statusLabel(d.clsScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;">INP</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">${formatMs(d.inp)}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #f1f5f9;text-align:right;"><span style="color:${statusColor(d.inpScore)};font-size:12px;font-weight:600;">${statusLabel(d.inpScore)}</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;">TTFB</td>
                  <td style="padding:10px 16px;font-size:13px;color:#1a1a2e;text-align:right;font-weight:600;">${formatMs(d.ttfb)}</td>
                  <td style="padding:10px 16px;text-align:right;"><span style="color:${statusColor(d.ttfbScore)};font-size:12px;font-weight:600;">${statusLabel(d.ttfbScore)}</span></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

          <!-- On-Page SEO -->
          <tr>
            <td style="padding:32px 48px;">
              <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:18px;font-weight:700;">On-Page SEO</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.titleLength >= 30 && o.titleLength <= 60)} <span style="margin-left:8px;">Title Tag</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.titleLength} chars)</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.metaDescriptionLength >= 120 && o.metaDescriptionLength <= 160)} <span style="margin-left:8px;">Meta Description</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.metaDescriptionLength} chars)</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.h1Count === 1)} <span style="margin-left:8px;">H1 Tag</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.h1Count} found)</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.imagesMissingAlt === 0 && o.totalImages > 0)} <span style="margin-left:8px;">Image Alt Text</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.totalImages - o.imagesMissingAlt}/${o.totalImages})</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.hasSchema)} <span style="margin-left:8px;">Schema Markup</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.hasSchema ? o.schemaTypes.join(", ") : "none"})</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(!!o.ogTitle)} <span style="margin-left:8px;">Open Graph Tags</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(!!o.canonical)} <span style="margin-left:8px;">Canonical URL</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(!!o.lang)} <span style="margin-left:8px;">Language Attribute</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.hasRobotsTxt === true)} <span style="margin-left:8px;">robots.txt</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.hasSitemap)} <span style="margin-left:8px;">XML Sitemap</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.wordCount >= 300)} <span style="margin-left:8px;">Content Length</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.wordCount.toLocaleString()} words)</span></td></tr>
                <tr><td style="padding:8px 0;font-size:14px;">${checkIcon(o.internalLinks > 0)} <span style="margin-left:8px;">Internal Links</span> <span style="color:#64748b;font-size:12px;margin-left:4px;">(${o.internalLinks})</span></td></tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

          <!-- Recommendations -->
          ${result.recommendations.length > 0 ? `
          <tr>
            <td style="padding:32px 48px;">
              <h2 style="margin:0 0 4px;color:#1a1a2e;font-size:18px;font-weight:700;">Action Items</h2>
              <p style="margin:0 0 16px;color:#64748b;font-size:13px;">${highRecs.length} high priority, ${medRecs.length} medium priority</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
                ${recRows}
              </table>
            </td>
          </tr>
          ` : ""}

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

          <!-- Blog Recommendations -->
          <tr>
            <td style="padding:32px 48px;">
              <h2 style="margin:0 0 20px;color:#1a1a2e;font-size:18px;font-weight:700;">Helpful Resources</h2>

              <a href="https://rejishkhanal.com.np/blog/core-web-vitals-optimization-guide" style="display:block;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:10px;text-decoration:none;">
                <span style="color:#0f3460;font-size:14px;font-weight:600;">How to Improve Core Web Vitals</span>
                <span style="display:block;color:#64748b;font-size:12px;margin-top:4px;">Step-by-step guide to fixing LCP, CLS, and INP</span>
              </a>

              <a href="https://rejishkhanal.com.np/blog/technical-seo-audit-checklist" style="display:block;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:10px;text-decoration:none;">
                <span style="color:#0f3460;font-size:14px;font-weight:600;">Technical SEO Audit Checklist</span>
                <span style="display:block;color:#64748b;font-size:12px;margin-top:4px;">Complete checklist for auditing your website</span>
              </a>

              <a href="https://rejishkhanal.com.np/blog" style="display:block;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;text-decoration:none;">
                <span style="color:#0f3460;font-size:14px;font-weight:600;">Read More SEO Articles</span>
                <span style="display:block;color:#64748b;font-size:12px;margin-top:4px;">Technical SEO, Core Web Vitals, AEO & GEO insights</span>
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

          <!-- CTA -->
          <tr>
            <td style="padding:32px 48px;text-align:center;">
              <h2 style="margin:0 0 12px;color:#1a1a2e;font-size:20px;font-weight:700;">Need Help Fixing These Issues?</h2>
              <p style="margin:0 0 24px;color:#64748b;font-size:14px;line-height:1.6;">
                I provide technical SEO audits, Core Web Vitals optimization, and ongoing SEO strategy for businesses worldwide.
              </p>
              <a href="mailto:contact@rejishkhanal.com.np" style="display:inline-block;background-color:#0f3460;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:6px;margin-right:8px;">
                Get Professional SEO Audit
              </a>
              <a href="https://wa.me/9779862766994?text=Hi%20Rejish%2C%20I%20just%20ran%20an%20SEO%20audit%20and%20need%20help%20fixing%20the%20issues." style="display:inline-block;background-color:#25d366;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:6px;">
                Chat on WhatsApp
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1a2e;padding:32px 48px;text-align:center;">
              <p style="margin:0 0 12px;color:#94a3b8;font-size:13px;">Rejish Khanal — Technical SEO Specialist & Full Stack Developer</p>
              <p style="margin:0 0 16px;color:#64748b;font-size:12px;">Kathmandu, Nepal</p>
              <table cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="padding:0 8px;"><a href="https://rejishkhanal.com.np" style="color:#94a3b8;font-size:12px;text-decoration:none;">Website</a></td>
                  <td style="color:#334155;">·</td>
                  <td style="padding:0 8px;"><a href="https://x.com/KhanalRejish" style="color:#94a3b8;font-size:12px;text-decoration:none;">X</a></td>
                  <td style="color:#334155;">·</td>
                  <td style="padding:0 8px;"><a href="https://github.com/rejishkhanal" style="color:#94a3b8;font-size:12px;text-decoration:none;">GitHub</a></td>
                </tr>
              </table>
              <p style="margin:16px 0 0;color:#475569;font-size:11px;">© ${new Date().getFullYear()} Rejish Khanal. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
