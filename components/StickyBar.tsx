import Link from "next/link";
import { site } from "@/lib/site";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <p>Ready to start training in Karnal?</p>
      <div className="sticky-actions">
        <a href={`tel:${site.phoneTel}`} className="btn-ghost">
          Call {site.phone}
        </a>
        <Link href="/contact" className="btn-primary">
          Join now
        </Link>
      </div>
    </div>
  );
}
