import nodemailer from "nodemailer";

function seoReviewNotificationTemplate(data) {
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
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding:24px 48px; text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">
                New Free SEO Review Request
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Full Name</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Business Name</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.businessName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Business Email</span>
                    <p style="margin:4px 0 0;"><a href="mailto:${data.businessEmail}" style="color:#0f3460;font-size:15px;text-decoration:none;font-weight:500;">${data.businessEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Website URL</span>
                    <p style="margin:4px 0 0;"><a href="${data.websiteUrl}" style="color:#0f3460;font-size:15px;text-decoration:none;font-weight:500;">${data.websiteUrl}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Business Type</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.businessType}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">City / Service Area</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.cityServiceArea}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Main Service</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.mainService}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Target Search</span>
                    <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:500;">${data.targetSearch}</p>
                  </td>
                </tr>
                ${
                  data.currentChallenge
                    ? `<tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                    <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Current Challenge</span>
                    <div style="margin-top:8px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;">
                      <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${data.currentChallenge}</p>
                    </div>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;padding:20px 48px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#64748b;font-size:12px;">
                UTM Source: ${data.utm_source || "N/A"} | Medium: ${data.utm_medium || "N/A"} | Campaign: ${data.utm_campaign || "N/A"} | Content: ${data.utm_content || "N/A"}
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;padding:12px 48px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#64748b;font-size:12px;">
                Reply directly to this email to respond to ${data.fullName}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function seoReviewConfirmationTemplate(name) {
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
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding:40px 48px; text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">
                Rejish Khanal
              </h1>
              <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">
                SEO and Digital Marketing
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 48px 24px;">
              <h2 style="margin:0 0 16px;color:#1a1a2e;font-size:22px;font-weight:600;">
                Thank You, ${name}!
              </h2>
              <p style="margin:0;color:#475569;font-size:15px;line-height:1.7;">
                I have received your free SEO review request. Your website details will be checked, and you will be contacted if your request is accepted for review.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 48px 32px;">
              <div style="background-color:#f1f5f9;border-radius:8px;border-left:4px solid #0f3460;padding:20px 24px;">
                <p style="margin:0;color:#475569;font-size:14px;line-height:1.6;">
                  Each review requires individual website and competitor research. Availability is limited so that every accepted request can receive focused attention.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 48px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;">
            </td>
          </tr>
          <tr>
            <td style="padding:32px 48px;text-align:center;">
              <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.6;">
                While you wait, you can learn more about SEO best practices.
              </p>
              <a href="https://rejishkhanal.com.np/" style="display:inline-block;background-color:#0f3460;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:6px;">
                Visit Website
              </a>
            </td>
          </tr>
          <tr>
            <td style="background-color:#1a1a2e;padding:32px 48px;text-align:center;">
              <p style="margin:0;color:#64748b;font-size:12px;">
                &copy; ${new Date().getFullYear()} Rejish Khanal. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req) {
  console.log("[SEO-REVIEW] Hit /api/seo-review", { method: req.method, url: req.url });
  try {
    const data = await req.json();
    console.log("[SEO-REVIEW] Received:", { fullName: data.fullName, businessName: data.businessName });

    // Honeypot check
    if (data.website_confirm) {
      return Response.json({ success: true });
    }

    // Validate required fields
    const requiredFields = [
      "fullName",
      "businessName",
      "businessEmail",
      "websiteUrl",
      "businessType",
      "cityServiceArea",
      "mainService",
      "targetSearch",
    ];

    for (const field of requiredFields) {
      if (!data[field] || typeof data[field] !== "string" || !data[field].trim()) {
        return Response.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!data.consent) {
      return Response.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.businessEmail)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Notify website owner
    await transporter.sendMail({
      from: '"Free SEO Review Request" <noreply@rejishkhanal.com.np>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.businessEmail,
      subject: `New SEO Review Request from ${data.businessName} - ${data.fullName}`,
      html: seoReviewNotificationTemplate(data),
    });

    // 2. Confirmation to the requester
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.businessEmail,
      replyTo: process.env.CONTACT_TO_EMAIL,
      subject: "Your Free SEO Review Request Has Been Received",
      html: seoReviewConfirmationTemplate(data.fullName),
    });

    return Response.json({
      success: true,
      message: "Your SEO review request has been received.",
    });
  } catch (err) {
    console.error("[SEO-REVIEW] Error:", err.message, err.stack);
    return Response.json(
      { error: "Failed to submit request" },
      { status: 500 }
    );
  }
}
