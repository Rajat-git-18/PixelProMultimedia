import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="eyebrow">404</div>
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
