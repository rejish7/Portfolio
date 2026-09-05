"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Search,
  MapPin,
  TrendingDown,
  Users,
  Eye,
  FileSearch,
  BarChart3,
  Lightbulb,
  ChevronDown,
  Send,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FAQ {
  question: string;
  answer: string;
}

interface FreeSEOReviewPageProps {
  faqs: FAQ[];
}

function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const content = params.get("utm_content");
  if (source) result.utm_source = source;
  if (medium) result.utm_medium = medium;
  if (campaign) result.utm_campaign = campaign;
  if (content) result.utm_content = content;
  return result;
}

function trackEvent(eventName: string, data?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...data,
  });
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border bg-card hover:bg-accent/50 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="font-semibold text-lg text-foreground pr-4">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FreeSEOReviewPage({ faqs }: FreeSEOReviewPageProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formStarted, setFormStarted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    setUtmParams(getUTMParams());
    trackEvent("seo_review_page_view");
  }, []);

  const scrollToForm = useCallback(() => {
    document
      .getElementById("seo-review-form")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const handleFormStart = useCallback(() => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("seo_review_form_start");
    }
  }, [formStarted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;

    handleFormStart();
    setFormStatus("submitting");
    trackEvent("seo_review_cta_click");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      businessName: formData.get("businessName"),
      businessEmail: formData.get("businessEmail"),
      websiteUrl: formData.get("websiteUrl"),
      businessType: formData.get("businessType"),
      cityServiceArea: formData.get("cityServiceArea"),
      mainService: formData.get("mainService"),
      targetSearch: formData.get("targetSearch"),
      currentChallenge: formData.get("currentChallenge"),
      consent: formData.get("consent"),
      ...utmParams,
    };

    try {
      const res = await fetch("/api/seo-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus("success");
        trackEvent("seo_review_form_submit");
        trackEvent("seo_review_lead_qualified");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const businessTypes = [
    "Mortgage Broker",
    "Cleaning Company",
    "Plumber",
    "Electrician",
    "Builder or Renovation Company",
    "Accountant or Bookkeeper",
    "Real Estate or Property Management",
    "Removalist",
    "Landscaping Company",
    "Pest Control Company",
    "Solar or Air-Conditioning Company",
    "Other Service Business",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground bg-background/70 backdrop-blur"
              >
                Free SEO Review for Service Businesses
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Losing Local Customers to Competitors on Google?
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground font-light max-w-2xl">
                  Find out what may be holding your website back. Request a free
                  SEO review covering your website, local visibility and one
                  important competitor.
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3"
              >
                {[
                  "Identify important website SEO issues",
                  "Check your visibility for a valuable local search",
                  "See how one local competitor is performing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3"
              >
                <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  Claim My Free SEO Review
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free initial review. No purchase required.
                </p>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-xl border bg-card shadow-lg overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-background rounded-md px-3 py-1.5 border border-border ml-2">
                    <svg className="h-3.5 w-3.5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span className="text-xs text-muted-foreground truncate">
                      google.com/search?q=plumber+Brisbane
                    </span>
                  </div>
                </div>

                {/* Search Results */}
                <div className="p-4 space-y-3">
                  {/* Local Pack Header */}
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Local Services
                    </span>
                  </div>

                  {/* Competitor Results */}
                  {[
                    {
                      rank: 1,
                      name: "Brisbane Plumbing Co.",
                      rating: "4.9",
                      reviews: "287",
                      tag: "Top result",
                      color: "text-green-600 dark:text-green-500",
                      bg: "bg-green-500/10",
                    },
                    {
                      rank: 2,
                      name: "Qld Pipe & Drain",
                      rating: "4.7",
                      reviews: "194",
                      tag: "Prominent",
                      color: "text-green-600 dark:text-green-500",
                      bg: "bg-green-500/10",
                    },
                    {
                      rank: 3,
                      name: "Metro Plumbing Services",
                      rating: "4.8",
                      reviews: "156",
                      tag: "Visible",
                      color: "text-primary",
                      bg: "bg-primary/10",
                    },
                  ].map((item) => (
                    <div
                      key={item.rank}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary shrink-0">
                        {item.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-3 w-3 ${i < Math.floor(parseFloat(item.rating)) ? "text-yellow-400" : "text-muted-foreground/30"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {item.rating} ({item.reviews})
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.bg} ${item.color} shrink-0`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}

                  {/* Divider */}
                  <div className="border-t border-border my-1" />

                  {/* Your Business - Missing */}
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-dashed border-yellow-500/30 bg-yellow-500/5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-500/10 text-xs font-bold text-yellow-600 dark:text-yellow-500 shrink-0">
                      ?
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-500">
                        Your Business
                      </p>
                      <p className="text-xs text-yellow-500/80 mt-0.5">
                        Not appearing in local results
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 shrink-0">
                      Missing
                    </span>
                  </div>

                  {/* Insight Bar */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
                    <AlertCircle className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Potential issue:</span>{" "}
                      Competitors may be outranking you for valuable local searches.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="seo-review-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Request Your Free SEO Review
            </h2>
            <p className="text-muted-foreground">
              Tell me about your business and the search visibility you want to
              improve.
            </p>
          </motion.div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border bg-card shadow-sm p-8 sm:p-12 text-center"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Thank you. Your SEO review request has been received.
              </h3>
              <p className="text-muted-foreground mb-6">
                Your website details will be checked, and you will be contacted
                if your request is accepted for review.
              </p>
              <Link
                href="/"
                className="text-primary hover:underline font-medium text-sm"
              >
                Return to homepage
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="rounded-xl border bg-card shadow-sm p-6 sm:p-10"
                onFocus={handleFormStart}
              >
                {/* Honeypot */}
                <div
                  className="absolute opacity-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <label htmlFor="website_confirm">
                    Do not fill this
                  </label>
                  <input
                    type="text"
                    id="website_confirm"
                    name="website_confirm"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="businessName"
                      className="text-sm font-medium text-foreground"
                    >
                      Business Name{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      placeholder="Enter your business name"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="businessEmail"
                      className="text-sm font-medium text-foreground"
                    >
                      Business Email{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      required
                      placeholder="Enter your business email"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Website URL */}
                  <div className="space-y-2">
                    <label
                      htmlFor="websiteUrl"
                      className="text-sm font-medium text-foreground"
                    >
                      Website URL{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      required
                      placeholder="https://yourbusiness.com.au"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Business Type */}
                  <div className="sm:col-span-2 space-y-2">
                    <label
                      htmlFor="businessType"
                      className="text-sm font-medium text-foreground"
                    >
                      Business Type{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City or Service Area */}
                  <div className="space-y-2">
                    <label
                      htmlFor="cityServiceArea"
                      className="text-sm font-medium text-foreground"
                    >
                      City or Service Area{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="cityServiceArea"
                      name="cityServiceArea"
                      required
                      placeholder="Example: Brisbane, Gold Coast or Sunshine Coast"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Main Service */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mainService"
                      className="text-sm font-medium text-foreground"
                    >
                      Main Service{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="mainService"
                      name="mainService"
                      required
                      placeholder="Which service would you like to promote?"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Target Search */}
                  <div className="sm:col-span-2 space-y-2">
                    <label
                      htmlFor="targetSearch"
                      className="text-sm font-medium text-foreground"
                    >
                      Target Search{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="targetSearch"
                      name="targetSearch"
                      required
                      placeholder="Example: mortgage broker Brisbane"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Current Marketing Challenge */}
                  <div className="sm:col-span-2 space-y-2">
                    <label
                      htmlFor="currentChallenge"
                      className="text-sm font-medium text-foreground"
                    >
                      Current Marketing Challenge{" "}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="currentChallenge"
                      name="currentChallenge"
                      rows={4}
                      placeholder="Tell me what you would like to improve about your Google visibility or enquiries."
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    />
                  </div>
                </div>

                {/* Consent */}
                <div className="mt-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      I agree to be contacted about my SEO review and understand
                      that submitting this form does not guarantee rankings,
                      leads or sales.
                    </span>
                  </label>
                </div>

                {/* Error Message */}
                {formStatus === "error" && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Your request could not be submitted. Please check the
                    required fields and try again.
                  </div>
                )}

                {/* Submit */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    size="lg"
                    className="w-full group"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Review My Website
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your information will only be used to assess your website and
                  respond to your request.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Potential Customers Are Searching. Can They Find Your Business?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                When a potential customer searches for a service in your area,
                prominent businesses may receive the first opportunity to earn
                the enquiry.
              </p>
              <p className="leading-relaxed">
                If your website is difficult to understand, poorly targeted,
                technically limited or missing important local signals, potential
                customers may find a competitor first.
              </p>
              <p className="leading-relaxed">
                The free SEO review helps identify where your current visibility
                may be limited and which improvements deserve attention first.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Low Local Visibility",
                text: "Your website may not appear prominently for searches connected to your services and location.",
              },
              {
                icon: TrendingDown,
                title: "Competitors Appearing First",
                text: "Competing businesses may have stronger pages, local relevance or search visibility.",
              },
              {
                icon: Users,
                title: "Traffic Without Enquiries",
                text: "Visitors may be reaching your website without finding a clear reason or easy way to enquire.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{card.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12"
          >
            What Is Included in Your Free SEO Review?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                num: 1,
                icon: FileSearch,
                title: "Website SEO Check",
                text: "A practical review of one important issue that may be affecting how search engines understand or evaluate your website.",
              },
              {
                num: 2,
                icon: MapPin,
                title: "Local Visibility Check",
                text: "An initial check of how your business appears for one relevant service and location-based search.",
              },
              {
                num: 3,
                icon: BarChart3,
                title: "Competitor Comparison",
                text: "A comparison with one visible competitor to identify an important difference or opportunity.",
              },
              {
                num: 4,
                icon: Search,
                title: "Page and Content Observation",
                text: "A review of whether an important page clearly matches what potential customers are searching for.",
              },
              {
                num: 5,
                icon: Lightbulb,
                title: "Recommended First Action",
                text: "One prioritized recommendation to help you understand what may be worth improving first.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                        {card.num}
                      </span>
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{card.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center max-w-2xl mx-auto"
          >
            This is an initial visibility review, not a complete technical SEO
            audit, ranking guarantee or substitute for a full SEO strategy.
          </motion.p>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Is This SEO Review Right for Your Business?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This review is intended for established service businesses that
              want to understand why their website may not be attracting enough
              visibility or qualified enquiries from Google.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    This Review May Be Suitable If:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You operate a local or service-area business",
                      "You have an active business website",
                      "You want more visibility for commercially valuable searches",
                      "You are competing with other businesses in your location",
                      "You are prepared to improve your website if useful opportunities are identified",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    This Review May Not Be Suitable If:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You do not currently have a business website",
                      "You are looking for guaranteed first-position rankings",
                      "You want instant results without making website improvements",
                      "You are requesting free work unrelated to the initial review",
                      "Your website promotes prohibited, misleading or unlawful services",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12"
          >
            How the Free SEO Review Works
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {[
              {
                step: 1,
                title: "Submit Your Details",
                text: "Provide your website, business type, service area and the service you want to promote.",
              },
              {
                step: 2,
                title: "Your Website Is Reviewed",
                text: "Your website, one target search and one relevant competitor are checked for useful opportunities.",
              },
              {
                step: 3,
                title: "Receive Practical Findings",
                text: "You receive concise observations showing what may be limiting visibility and what to consider doing next.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group"
            >
              Request My Free Review
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Limited Availability Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Limited SEO Reviews Available This Month
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Each review requires individual website and competitor research.
              Availability is limited so that every accepted request can receive
              focused attention.
            </p>
            <p className="text-primary-foreground/60 leading-relaxed mb-8">
              Submitting the form does not guarantee acceptance. Priority may be
              given to active service businesses with complete websites and clear
              target locations.
            </p>
            <Button
              onClick={scrollToForm}
              variant="secondary"
              size="lg"
              className="group"
            >
              Claim My Review
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Practical SEO Insights Without Inflated Promises
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The purpose of the review is to help you understand your current
              search visibility, not to sell unrealistic promises.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You will receive focused observations connected to your website,
              target service and competitive search environment. Any recommended
              service will be explained separately, and you can decide whether it
              is appropriate for your business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "No guaranteed ranking claims",
              "No long-term contract required to request the review",
              "Recommendations based on the website information available",
              "Clear distinction between the free review and paid SEO work",
              "No obligation to purchase SEO services",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-accent/50"
              >
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Who Will Review Your Website?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I&apos;m Rejish Khanal, an SEO and digital marketing
              professional helping service businesses improve their websites,
              search visibility and ability to generate qualified enquiries
              online.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My approach focuses on understanding what potential customers are
              searching for, whether the website answers that need clearly, and
              which practical improvements may support stronger visibility and
              conversions.
            </p>
            <Link
              href="/about/"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Learn More About Rejish Khanal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Find Out What May Be Holding Your Website Back
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Request your free SEO review and receive practical observations
              about your website, local visibility and one important competitor.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group"
            >
              Get My Free SEO Review
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Limited availability. Complete the form to request a review.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur-lg border-t border-border p-3">
        <Button
          onClick={scrollToForm}
          className="w-full group"
          size="lg"
        >
          Get Free SEO Review
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
