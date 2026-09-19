import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Hire a Technical SEO Specialist in Nepal?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          I am available for technical SEO audits, Core Web Vitals optimization, AEO/GEO readiness, and SEO-friendly web development. Based in Kathmandu, serving clients worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Hire Rejish Khanal</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/seo-audit-nepal">Request an SEO Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}