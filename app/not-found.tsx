import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="not-found">
      <Link href="/" className="logo" aria-label="Pixel Pro Multimedia home">
        <Logo />
      </Link>
      <div className="eyebrow" style={{ marginTop: 36 }}>
        404
      </div>
      <h1>
        This page is off the <em>grid</em>.
      </h1>
      <p className="sub" style={{ opacity: 1, animation: "none" }}>
        The page you are looking for does not exist. Head back to courses or
        send an enquiry.
      </p>
      <div className="hero-actions" style={{ opacity: 1, animation: "none" }}>
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Enquire
        </Link>
      </div>
    </section>
  );
}
