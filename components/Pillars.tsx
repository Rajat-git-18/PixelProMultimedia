import Link from "next/link";
import { pillars } from "@/lib/site";

export default function Pillars() {
  return (
    <section id="courses">
      <span className="label">What We Teach</span>
      <h2 className="title">Three disciplines. One industry-ready skillset.</h2>
      <div className="pillars">
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
