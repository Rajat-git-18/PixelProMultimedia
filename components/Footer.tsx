import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="fcol">
        <Link href="/" className="logo footer-logo" aria-label="Pixel Pro Multimedia home">
          <Logo variant="footer" />
        </Link>
        <p>{site.location.office}</p>
        <p>{site.location.street}</p>
        <p>{site.location.label}</p>
        <p>{site.location.walkins}</p>
      </div>
      <div className="fcol">
        <h5>Courses</h5>
        <Link href="/courses#graphic-design">Graphic Design</Link>
        <Link href="/courses#video-editing">Video Editing</Link>
        <Link href="/courses#generative-ai">Generative AI</Link>
      </div>
      <div className="fcol">
        <h5>Explore</h5>
        <Link href="/about">About</Link>
        <Link href="/#journey">Learning Path</Link>
        <Link href="/contact">Enquire</Link>
      </div>
      <div className="fcol">
        <h5>Contact</h5>
        {site.phone ? <a href={`tel:${site.phoneTel}`}>{site.phone}</a> : <p>Walk-ins welcome</p>}
        <a href={`mailto:${site.email}`}>Email</a>
        {site.instagram ? (
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        ) : (
          <Link href="/contact">Get in touch</Link>
        )}
      </div>
    </footer>
  );
}
