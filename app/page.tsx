import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CourseIntro from "@/components/CourseIntro";
import LearningPath from "@/components/LearningPath";
import Curriculum from "@/components/Curriculum";
import LearnGrid from "@/components/LearnGrid";
import Features from "@/components/Features";
import WhoFor from "@/components/WhoFor";
import Enrollment from "@/components/Enrollment";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CourseIntro />
      <LearningPath />
      <Curriculum />
      <LearnGrid />
      <Features />
      <WhoFor />
      <Enrollment />
      <FAQ />
      <CTA />
    </>
  );
}
