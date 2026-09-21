import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pixel Pro Multimedia is a Karnal-based creative training institute for graphic design, video editing, and generative AI — built around project-based, job-ready learning.",
  keywords: [
    "about Pixel Pro Multimedia",
    "multimedia institute Karnal",
    "design school Haryana",
    "creative training Karnal",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pixel Pro Multimedia | Karnal",
    description:
      "Project-based creative training in Design, Video, and Generative AI.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">{site.location.label}</div>
        <h1>
          Training that holds up on the <em>job</em>.
        </h1>
        <p className="sub">
          Pixel Pro Multimedia is a creative training studio in Karnal. We teach
          the craft, then put it under client-style pressure.
        </p>
      </section>
      <section>
        <div className="prose-block">
          <p>
            Most courses stop at the tool. We start there, then move into briefs
            that are ambiguous, revision-heavy, and closer to how studios
            actually work.
          </p>
          <p>
            Learners specialise in graphic design, video editing, or generative
            AI, and finish with a portfolio that reads clearly to employers and
            clients — not a folder of disconnected files.
          </p>
          <p>
            Walk-ins are welcome at our head office — Beside SCO. 154, Mugal
            Canal Road, Karnal. Come see a class, ask about batch timings, or
            start with an enquiry.
          </p>
          <div className="hero-actions" style={{ opacity: 1, animation: "none" }}>
            <Link href="/courses" className="btn-primary">
              See courses
            </Link>
            <Link href="/contact" className="btn-ghost">
              Visit or enquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
