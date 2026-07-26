"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import { hero } from "@/lib/content";

export default function Hero() {
  const { scrollY } = useScroll();
  // Fixed to the viewport (not the section) so it reacts to scroll position
  // directly — fades out as soon as scrolling starts, fades back in when
  // scrolling back to the top, instead of just scrolling off with the page.
  const hintOpacity = useTransform(scrollY, [0, 240], [1, 0]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/3 right-[-10%] h-[60vh] w-[60vh] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/4 left-[-10%] h-[50vh] w-[50vh] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--blue) 0%, transparent 70%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 font-display text-sm uppercase tracking-[0.3em] text-gold"
      >
        {hero.eyebrow}
      </motion.p>

      <RevealText
        as="h1"
        className="max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
      >
        {hero.title}
      </RevealText>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 max-w-xl text-balance text-lg italic text-foreground-muted"
      >
        “{hero.subtitle}”
      </motion.p>

      <motion.div
        style={{ opacity: hintOpacity }}
        className="fixed bottom-10 left-6 z-30 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground-muted md:left-12"
      >
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        Role para explorar
      </motion.div>
    </section>
  );
}
