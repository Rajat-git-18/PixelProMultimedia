import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero hero-landing">
      <div className="eyebrow">{site.location.label}</div>
      <h1>
        Design, video &amp; AI — from basics to <em>job-ready</em>.
      </h1>
      <p className="sub">
        Structured, project-based training at Pixel Pro Multimedia, Karnal.
        Build a career skill — not just a software playlist.
      </p>
      <div className="hero-actions">
        <Link href="/contact" className="btn-primary">
          Join now
        </Link>
        <a href={`tel:${site.phoneTel}`} className="btn-ghost">
          Call {site.phone}
        </a>
      </div>
      <div className="location-tag">
        {site.location.street}, {site.location.city} — {site.location.walkins}
      </div>
    </section>
  );
}
