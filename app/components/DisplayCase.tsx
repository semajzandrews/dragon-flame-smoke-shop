"use client";

import { useEffect, useRef, useState } from "react";

export type CaseItem = { img: string; aisle: string; name: string; note: string };

/* The signature: a cinematic product "case" you browse like a dispensary
   counter. Mouse drag-to-scroll with inertia on desktop; native swipe on
   touch. Honors reduced-motion (drag still works, no inertia). A thin progress
   rail tracks how far through the case you are. */
export default function DisplayCase({ items }: { items: CaseItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let down = false;
    let startX = 0;
    let startLeft = 0;
    let lastX = 0;
    let v = 0;
    let momentum = 0;

    const updateProgress = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // touch uses native scroll
      down = true;
      setDragging(true);
      startX = e.clientX;
      lastX = e.clientX;
      startLeft = el.scrollLeft;
      v = 0;
      cancelAnimationFrame(momentum);
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startLeft - dx;
      v = e.clientX - lastX;
      lastX = e.clientX;
    };
    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      setDragging(false);
      try { el.releasePointerCapture(e.pointerId); } catch {}
      if (reduce || Math.abs(v) < 2) return;
      const decay = () => {
        el.scrollLeft -= v;
        v *= 0.93;
        if (Math.abs(v) > 0.4) momentum = requestAnimationFrame(decay);
      };
      momentum = requestAnimationFrame(decay);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      cancelAnimationFrame(momentum);
    };
  }, []);

  return (
    <div className="case">
      <div
        ref={trackRef}
        className={`case__track ${dragging ? "case__track--drag" : ""}`}
      >
        {items.map((it, i) => (
          <article className="case__frame" key={it.img}>
            <img src={`/images/${it.img}`} alt={it.name} draggable={false} />
            <div className="case__cap">
              <span className="case__aisle">{it.aisle}</span>
              <h3 className="case__name">{it.name}</h3>
              <p className="case__note">{it.note}</p>
            </div>
            <span className="case__num">{String(i + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>

      <div className="case__foot">
        <span className="case__hint">Drag to browse the case</span>
        <div className="case__rail">
          <span style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
        </div>
      </div>
    </div>
  );
}
