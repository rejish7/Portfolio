const clientConfirmationTemplate = (name, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f8f9fa;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa;padding:40px 20px;">
    <tr>
      <td align="center">

        <!-- Main Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding:40px 48px; text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">
                Rejish Khanal
              </h1>
              <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">
                Technical SEO Specialist & Full Stack Developer
              </p>
            </td>
          </tr>

          <!-- Thank You Section -->
          <tr>
            <td style="padding:40px 48px 24px;">
              <h2 style="margin:0 0 16px;color:#1a1a2e;font-size:22px;font-weight:600;">
                Thank You, ${name}! 👋
              </h2>
              <p style="margin:0;color:#475569;font-size:15px;line-height:1.7;">
                I've received your message and truly appreciate you reaching out. I typically respond within <strong style="color:#1a1a2e;">24 hours</strong>.
              </p>
            </td>
          </tr>

          <!-- Your Message Box -->
          <tr>
            <td style="padding:0 48px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;border-radius:8px;border-left:4px solid #0f3460;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 8px;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Your Message</p>
                    <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 48px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;">
            </td>
          </tr>

          <!-- Explore Section -->
          <tr>
            <td style="padding:32px 48px;">
              <h3 style="margin:0 0 20px;color:#1a1a2e;font-size:17px;font-weight:600;">
                While You Wait, Explore
              </h3>

              <!-- Blog Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width:36px;height:36px;background-color:#0f3460;border-radius:8px;text-align:center;line-height:36px;font-size:16px;">📝</div>
                        </td>
                        <td style="padding-left:14px;">
                          <a href="https://rejishkhanal.com.np/blog" style="color:#1a1a2e;font-size:14px;font-weight:600;text-decoration:none;">Read My SEO Blog</a>
                          <p style="margin:2px 0 0;color:#64748b;font-size:12px;">Technical SEO, Core Web Vitals, AEO & GEO insights</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Services Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width:36px;height:36px;background-color:#0f3460;border-radius:8px;text-align:center;line-height:36px;font-size:16px;">🚀</div>
                        </td>
                        <td style="padding-left:14px;">
                          <a href="https://rejishkhanal.com.np/services" style="color:#1a1a2e;font-size:14px;font-weight:600;text-decoration:none;">View My Services</a>
                          <p style="margin:2px 0 0;color:#64748b;font-size:12px;">SEO Audits, Technical SEO, Web Development & More</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Case Studies Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width:36px;height:36px;background-color:#0f3460;border-radius:8px;text-align:center;line-height:36px;font-size:16px;">📊</div>
                        </td>
                        <td style="padding-left:14px;">
                          <a href="https://rejishkhanal.com.np/case-studies" style="color:#1a1a2e;font-size:14px;font-weight:600;text-decoration:none;">See Case Studies</a>
                          <p style="margin:2px 0 0;color:#64748b;font-size:12px;">Real results from SEO audits & optimizations</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- About Card -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width:36px;height:36px;background-color:#0f3460;border-radius:8px;text-align:center;line-height:36px;font-size:16px;">👤</div>
                        </td>
                        <td style="padding-left:14px;">
                          <a href="https://rejishkhanal.com.np/about" style="color:#1a1a2e;font-size:14px;font-weight:600;text-decoration:none;">About Me</a>
                          <p style="margin:2px 0 0;color:#64748b;font-size:12px;">My journey, skills & experience in SEO and development</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 48px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;">
            </td>
          </tr>

          <!-- Quick CTA -->
          <tr>
            <td style="padding:32px 48px;text-align:center;">
              <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.6;">
                Need a quick answer? Feel free to reply to this email directly.
              </p>
              <a href="https://rejishkhanal.com.np/contact" style="display:inline-block;background-color:#0f3460;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:6px;">
                Visit Contact Page →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1a2e;padding:32px 48px;text-align:center;">
              <p style="margin:0 0 12px;color:#94a3b8;font-size:13px;">
                Rejish Khanal — Technical SEO Specialist & Full Stack Developer
              </p>
              <p style="margin:0 0 16px;color:#64748b;font-size:12px;">
                Kathmandu, Nepal
              </p>
              <!-- Social Links -->
              <table cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="padding:0 6px;">
                    <a href="https://linkedin.com/in/rejishkhanal" style="color:#94a3b8;font-size:12px;text-decoration:none;">LinkedIn</a>
                  </td>
                  <td style="color:#334155;">·</td>
                  <td style="padding:0 6px;">
                    <a href="https://github.com/rejishkhanal" style="color:#94a3b8;font-size:12px;text-decoration:none;">GitHub</a>
                  </td>
                  <td style="color:#334155;">·</td>
                  <td style="padding:0 6px;">
                    <a href="https://rejishkhanal.com.np" style="color:#94a3b8;font-size:12px;text-decoration:none;">Website</a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;color:#475569;font-size:11px;">
                © ${new Date().getFullYear()} Rejish Khanal. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End Main Card -->

      </td>
    </tr>
  </table>
  <!-- End Wrapper -->

</body>
</html>
`;

const notificationTemplate = (name, email, message) => `
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
            <td style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding:24px 48px; text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">
                📬 New Contact Form Submission
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:32px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Name</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email</span>
                    <p style="margin:4px 0 0;"><a href="mailto:${email}" style="color:#0f3460;font-size:15px;text-decoration:none;font-weight:500;">${email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Message</span>
                    <div style="margin-top:8px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;">
                      <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 48px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#64748b;font-size:12px;">
                Reply directly to this email to respond to ${name}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;

export { clientConfirmationTemplate, notificationTemplate };
