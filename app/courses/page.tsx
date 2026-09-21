import type { Metadata } from "next";
import Link from "next/link";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Graphic design, video editing, and generative AI courses in Karnal. Learn Photoshop, Illustrator, Premiere Pro, After Effects, and AI tools with project-based training.",
  keywords: [
    "graphic design course Karnal",
    "video editing course Karnal",
    "generative AI course Karnal",
    "Photoshop Illustrator training",
    "Premiere Pro After Effects course Haryana",
  ],
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Courses | Pixel Pro Multimedia Karnal",
    description:
      "Industry-level training in Graphic Design, Video Editing, and Generative AI.",
    url: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">What we teach</div>
        <h1>
          Three disciplines. <em>One skillset.</em>
        </h1>
        <p className="sub">
          Structured, project-based programmes built for real client work — not
          isolated software tutorials.
        </p>
      </section>
      <section className="course-detail">
        {pillars.map((pillar) => (
          <article className="course-block" id={pillar.slug} key={pillar.slug}>
            <span className="index">{pillar.index}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.summary}</p>
            <div className="chip-row">
              {pillar.tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
            <ul className="check-list">
              {pillar.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
        <div style={{ marginTop: 8 }}>
          <Link href="/contact" className="btn-primary">
            Enquire about batches
          </Link>
        </div>
      </section>
    </>
  );
}
