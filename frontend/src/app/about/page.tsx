import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "About Rejish Khanal | SEO & Full Stack Developer",
  description:
    "SEO specialist and full stack developer in Kathmandu, Nepal. 40-60% proven organic traffic increases through technical SEO and web development.",
  alternates: {
    canonical: "https://rejishkhanal.com.np/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </div>
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
