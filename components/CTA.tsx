import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact">
      <div className="cta">
        <h2>Ready to start training?</h2>
        <p>
          Visit our head office at Beside SCO. 154, Mugal Canal Road, Karnal, or
          reach out for batch timings and enrollment.
        </p>
        <div
          className="hero-actions"
          style={{ opacity: 1, animation: "none", justifyContent: "center" }}
        >
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
