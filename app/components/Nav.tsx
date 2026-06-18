"use client";

import { useEffect, useState } from "react";
import DragonMark from "./DragonMark";

const LINKS = [
  { href: "#counter", label: "The Counter" },
  { href: "#afterdark", label: "After Dark" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand" aria-label="Dragon Flame Smoke Shop">
        <DragonMark className="nav__mark" />
        <span className="nav__word">
          Dragon Flame<span className="nav__sub">Smoke Shop</span>
        </span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <a
        className="nav__cta"
        href="https://www.google.com/maps?q=7+N+Harrison+St,+East+Orange,+NJ+07017"
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>

      <button
        className="nav__burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="nav__sheet" onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href="https://www.google.com/maps?q=7+N+Harrison+St,+East+Orange,+NJ+07017"
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
        </div>
      )}
    </header>
  );
}
