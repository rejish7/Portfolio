import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for rejishkhanal.com.np, including information about website data, communications, analytics, and visitor privacy.",
  alternates: {
    canonical: "https://rejishkhanal.com.np/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Rejish Khanal",
    description:
      "Read the privacy policy for rejishkhanal.com.np, including information about website data, communications, analytics, and visitor privacy.",
    url: "https://rejishkhanal.com.np/privacy-policy",
    siteName: "Rejish Khanal",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <h1 className="text-4xl font-bold mt-8 mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information I Collect</h2>
            <p>
              When you visit rejishkhanal.com.np, I may collect certain information automatically, including your IP address, browser type, operating system, referring URLs, pages viewed, and the time and date of your visit. This data is collected through analytics tools such as Google Analytics and Google Tag Manager.
            </p>
            <p>
              If you use the contact form, I collect your name, email address, and message content solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How I Use Your Information</h2>
            <p>I use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your contact form submissions</li>
              <li>Analyze website traffic and usage patterns through Google Analytics</li>
              <li>Improve website content and user experience</li>
              <li>Ensure website security and detect prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Cookies</h2>
            <p>
              This website uses cookies through Google Analytics and Google Tag Manager to collect anonymized usage data. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
            <p>This website uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
              <li><strong>Google Tag Manager:</strong> For managing analytics and marketing tags</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
            </ul>
            <p>
              These services may collect information about your online activity over time and across different websites. Please review their respective privacy policies for more details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Sharing</h2>
            <p>
              I do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist in operating this website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Data Security</h2>
            <p>
              I implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and I cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. To exercise these rights, please contact me at{" "}
              <a href="mailto:contact@rejishkhanal.com.np" className="text-primary hover:underline">
                contact@rejishkhanal.com.np
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact me at{" "}
              <a href="mailto:contact@rejishkhanal.com.np" className="text-primary hover:underline">
                contact@rejishkhanal.com.np
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
