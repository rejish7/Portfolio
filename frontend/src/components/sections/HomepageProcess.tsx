"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your business goals, current SEO challenges, and website issues.",
  },
  {
    number: "02",
    title: "Technical SEO Audit",
    description:
      "I perform a comprehensive audit of your website covering crawlability, Core Web Vitals, structured data, and JavaScript SEO.",
  },
  {
    number: "03",
    title: "Strategy & Prioritization",
    description:
      "I create a prioritized action plan based on impact and effort, with clear timelines.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "I implement fixes directly on your website, no PDF-only reports. Code changes, schema markup, speed fixes.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "I verify every fix with Google Search Console, PageSpeed Insights, and real-world testing.",
  },
  {
    number: "06",
    title: "Reporting & Monitoring",
    description:
      "You receive a detailed report of all changes, results, and ongoing recommendations.",
  },
];

export function HomepageProcess() {
  return (
    <section
      className="py-20 md:py-24 bg-accent/20"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 inline-block">
            HOW I WORK
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            My Technical SEO Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every engagement follows a proven process. Rejish Khanal delivers
            measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <span className="text-4xl font-bold text-primary block mb-3">
                {step.number}
              </span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
