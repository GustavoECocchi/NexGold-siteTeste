"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Lenis owns scroll position; a native instant hash-jump from an <a href="#..">
    // click would otherwise get immediately overridden by Lenis's own target on the
    // next frame. Route in-page anchor clicks through lenis.scrollTo instead.
    //
    // Pass an absolute number, not the element: Lenis's element-based scrollTo
    // measures via `rect.top + this.animatedScroll` (its own internally tracked
    // scroll), which desyncs from the real window.scrollY the moment anything
    // scrolls the page outside Lenis's own wheel/touch loop. Measuring with
    // window.scrollY ourselves sidesteps that class of bug entirely.
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.resize(); // resync animatedScroll to the real position before measuring
      const targetY = target.getBoundingClientRect().top + window.scrollY;
      lenis.scrollTo(targetY, { offset: -80 });
      history.pushState(null, "", href);
    };
    document.addEventListener("click", onAnchorClick);

    // Lenis/ScrollTrigger cache scrollable height. Web fonts, images and
    // client-only sections (marquee, reveal wrappers) keep changing document
    // height well after mount — a stale cached limit clamps/misplaces later
    // scrollTo() calls and ScrollTrigger pin math. Keep both resynced for the
    // life of the page, not just right after mount.
    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    const resizeObserver = new ResizeObserver(() => refresh());
    resizeObserver.observe(document.body);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", refresh);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
