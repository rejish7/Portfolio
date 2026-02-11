import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTeaser } from "@/components/sections/ExperienceTeaser";
import { Projects } from "@/components/sections/Projects";
import { CTASection } from "@/components/sections/CTASection";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Skills />
      <ExperienceTeaser />
      <Projects />
      <BlogPreview />
      <CTASection />
    </>
  );
}
