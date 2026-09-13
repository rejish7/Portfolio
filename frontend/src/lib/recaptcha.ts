const RECAPTCHA_API_KEY = process.env.RECAPTCHA_SECRET_KEY!;
const RECAPTCHA_PROJECT_ID = "project-96edfb9d-ad67-4923-ab6";
const RECAPTCHA_VERIFY_URL = `https://recaptchaenterprise.googleapis.com/v1/projects/${RECAPTCHA_PROJECT_ID}/assessments`;
const MIN_SCORE = 0.5;

export interface RecaptchaResult {
  success: boolean;
  score: number;
  action?: string;
  error?: string;
}

export async function verifyRecaptcha(
  token: string,
  expectedAction = "audit"
): Promise<RecaptchaResult> {
  if (!RECAPTCHA_API_KEY) {
    return {
      success: false,
      score: 0,
      error: "reCAPTCHA Enterprise API key not configured",
    };
  }

  try {
    const response = await fetch(`${RECAPTCHA_VERIFY_URL}?key=${RECAPTCHA_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: {
          token,
          expectedAction,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    });

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        score: 0,
        error: data.tokenProperties?.invalidReason ?? "reCAPTCHA verification failed",
      };
    }

    if (data.riskAnalysis?.score < MIN_SCORE) {
      return {
        success: false,
        score: data.riskAnalysis.score,
        error: "reCAPTCHA score too low",
      };
    }

    return {
      success: true,
      score: data.riskAnalysis?.score ?? 1,
      action: data.eventProperties?.action,
    };
  } catch {
    return {
      success: false,
      score: 0,
      error: "reCAPTCHA verification request failed",
    };
  }
}
