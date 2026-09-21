"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav>
      <Link href="/" className="logo" onClick={close} aria-label="Pixel Pro Multimedia home">
        <Logo priority />
      </Link>
      <ul className={`nav-links${open ? " is-open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={close}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="nav-cta" onClick={close}>
            Enquire
          </Link>
        </li>
      </ul>
      <Link href="/contact" className="nav-cta desktop-only">
        Enquire
      </Link>
      <button
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
