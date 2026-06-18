"use client";

import { useEffect } from "react";

/* Visibility-gated reveal. Content is visible BY DEFAULT. We only arm the
   hide-then-rise behaviour when the tab is actually visible and motion is
   allowed, so a hidden/preview tab or reduced-motion user always sees content.
   An IntersectionObserver then adds `.in` as each `.rise` enters the viewport. */
export default function RevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let io: IntersectionObserver | null = null;
    let failSafe = 0;
    const arm = () => {
      if (document.visibilityState !== "visible") return;
      document.documentElement.classList.add("reveal-armed");
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io!.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      const els = document.querySelectorAll(".rise");
      els.forEach((el) => {
        // anything already on-screen at arm time reveals immediately
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
        else io!.observe(el);
      });
      // guarantee nothing ever stays hidden if IO never delivers a callback
      failSafe = window.setTimeout(() => {
        document.querySelectorAll(".rise:not(.in)").forEach((el) => el.classList.add("in"));
      }, 1500);
    };

    if (document.visibilityState === "visible") arm();
    else document.addEventListener("visibilitychange", arm, { once: true });

    return () => {
      io?.disconnect();
      clearTimeout(failSafe);
      document.removeEventListener("visibilitychange", arm);
    };
  }, []);

  return null;
}
