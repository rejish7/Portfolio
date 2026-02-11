import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Rejish Khanal - Full-Stack Developer and SEO Specialist with expertise in modern web technologies.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
