import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import LearningPath from "@/components/LearningPath";
import ModuleCards from "@/components/ModuleCards";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <LearningPath />
      <ModuleCards />
      <FAQ />
      <CTA />
    </>
  );
}
