import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "About Rejish Khanal — Technical SEO Specialist in Kathmandu",
  description:
    "SEO Specialist at Gripas Marketing with a background in full-stack web development. Helping international clients with Technical SEO and web development from Kathmandu, Nepal.",
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
