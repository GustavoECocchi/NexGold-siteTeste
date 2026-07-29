"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** stagger delay between lines, in seconds */
  stagger?: number;
  /** split by "word" (default) or "line" (whole string as one block) */
  splitBy?: "word" | "none";
  /**
   * Words to render in the serif accent style (italic, gold) — matched
   * ignoring surrounding punctuation and case, e.g. "crescimento" also
   * matches "crescimento." in the source string.
   */
  accentWords?: string[];
}

const normalizeWord = (word: string) =>
  word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "").toLowerCase();

/**
 * Scroll-triggered text reveal: words rise from a clipped mask as the
 * element enters the viewport. Purpose: draw attention to key statements
 * (manifesto, section intros) — not decoration.
 */
export default function RevealText({
  children,
  as = "p",
  className = "",
  stagger = 0.04,
  splitBy = "word",
  accentWords = [],
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll("[data-reveal-word]");
    const targets = words.length ? words : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 110, opacity: 0 });
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  const Tag = as as React.ElementType;
  const words = children.split(" ");
  const accentSet = new Set(accentWords.map(normalizeWord));

  return (
    <Tag ref={ref} className={className}>
      {splitBy === "word"
        ? words.map((word, i) => {
            const isAccent = accentSet.has(normalizeWord(word));
            return (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom"
              >
                <span
                  data-reveal-word
                  className={`inline-block will-change-transform ${
                    isAccent ? "font-accent italic text-gold-light" : ""
                  }`}
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </span>
              </span>
            );
          })
        : children}
    </Tag>
  );
}
