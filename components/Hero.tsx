import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">{site.location.label}</div>
      <h1>
        Industry-level training in <em>Design</em>, <em>Video</em> &amp;{" "}
        <em>Generative AI</em>.
      </h1>
      <p className="sub">
        Pixel Pro Multimedia builds job-ready creative skill through structured,
        project-based learning — not just software tutorials.
      </p>
      <div className="hero-actions">
        <Link href="/courses" className="btn-primary">
          Explore Courses
        </Link>
        <Link href="#journey" className="btn-ghost">
          See Learning Path
        </Link>
      </div>
      <div className="location-tag">
        {site.location.street}, {site.location.city} — {site.location.walkins}
      </div>
    </section>
  );
}
