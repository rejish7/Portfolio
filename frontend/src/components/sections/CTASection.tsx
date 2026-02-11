import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to collaborate?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          I&apos;m open to exciting opportunities in web development, backend, SEO, or QA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">Explore my projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}