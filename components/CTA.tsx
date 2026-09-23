import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="band-wrap">
      <div className="band-cta">
        <h2>Start training at the Karnal centre.</h2>
        <p>
          Visit the head office at Beside SCO. 154, Mugal Canal Road, Karnal, or
          call {site.phone} for batch timings.
        </p>
        <div className="hero-actions intro-actions">
          <Link href="/contact" className="btn-dark">
            Enquire now
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost-dark">
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
