import Link from "next/link";
import { pillars } from "@/lib/site";

export default function CourseIntro() {
  return (
    <section id="overview" className="intro-section">
      <span className="label">Get to know the course</span>
      <h2 className="title center-title">
        Not just an editing class. A path into creative work.
      </h2>
      <p className="intro-copy">
        Pixel Pro Multimedia trains graphic design, video editing, and
        generative AI in one Karnal studio. You learn the tools, then you work
        briefs the way studios actually work — messy, revision-heavy, and built
        for a portfolio.
      </p>
      <div className="hero-actions intro-actions">
        <Link href="#curriculum" className="btn-primary">
          See the curriculum
        </Link>
        <Link href="/courses" className="btn-ghost">
          Explore tracks
        </Link>
      </div>
      <div className="pillars landing-tracks">
        {pillars.map((pillar) => (
          <Link
            key={pillar.slug}
            href={`/courses#${pillar.slug}`}
            className="pillar"
          >
            <span className="index">{pillar.index}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
