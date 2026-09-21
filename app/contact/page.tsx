import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Enquire about graphic design, video editing, and generative AI courses at Pixel Pro Multimedia, Beside SCO. 154, Mugal Canal Road, Karnal. Call 07404426359. Walk-ins welcome.",
  keywords: [
    "Pixel Pro Multimedia contact",
    "graphic design course enquiry Karnal",
    "video editing course admission Karnal",
    "generative AI course Karnal enrolment",
    "Pixel Pro Multimedia Mugal Canal Road",
    "SCO 154 Karnal",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Enquire | Pixel Pro Multimedia Karnal",
    description:
      "Ask about batch timings and enrollment for design, video, and AI training in Karnal.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Karnal centre</div>
        <h1>
          Get in <em>touch</em>.
        </h1>
        <p className="sub">
          Visit our head office on Mugal Canal Road or send an enquiry for batch
          timings and enrollment.
        </p>
      </section>
      <section>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Visit us</h3>
            <p>{site.location.office}</p>
            <p>{site.location.street}</p>
            <p>{site.location.label}</p>
            <p>{site.location.walkins}</p>
            <p style={{ marginTop: 20 }}>
              <a href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            {site.phone ? (
              <p>
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              </p>
            ) : null}
          </div>
          <div className="contact-card">
            <h3>Send an enquiry</h3>
            <p style={{ marginBottom: 24 }}>
              Share your number and course interest. We will get back with batch
              timings.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
