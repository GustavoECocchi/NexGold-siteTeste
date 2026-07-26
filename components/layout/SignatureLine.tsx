"use client";

import { useEffect, useRef } from "react";

/**
 * Thin thread that runs down the edge of the viewport and fills with scroll
 * progress — the site's one recurring visual signature. The blue-to-gold
 * gradient mirrors the NexGold "NG" mark itself, not an arbitrary color
 * choice.
 */
export default function SignatureLine() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`;
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-4 top-0 bottom-0 z-50 hidden w-px md:block"
    >
      <div className="absolute inset-0 bg-line" />
      <div
        ref={fillRef}
        className="absolute inset-0 origin-top bg-gradient-to-b from-blue-light via-blue to-gold"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
