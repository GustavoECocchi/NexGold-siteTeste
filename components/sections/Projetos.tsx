"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import Tilt3D from "@/components/motion/Tilt3D";
import { projeto } from "@/lib/content";

export default function Projetos() {
  return (
    <section id="projetos" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl">
        <RevealText
          as="h2"
          className="mb-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {projeto.heading}
        </RevealText>
        <p className="mb-16 max-w-xl text-lg text-foreground-muted">
          {projeto.intro}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
        >
          <Tilt3D
            maxTilt={4}
            className="overflow-hidden rounded-2xl border border-line bg-background-elevated"
          >
            <div className="flex items-center gap-2 border-b border-line px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-dim" />
              <span className="ml-4 font-display text-xs uppercase tracking-[0.2em] text-foreground-muted">
                {projeto.name}
              </span>
              {projeto.isPlaceholder && (
                <span className="ml-auto rounded-full border border-gold-dim px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gold">
                  Projeto ilustrativo
                </span>
              )}
            </div>

            <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-10 p-10 sm:min-h-[420px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, var(--gold-dim) 0%, transparent 60%)",
                }}
              />
              <p className="relative max-w-md text-balance text-center text-foreground-muted">
                {projeto.description}
              </p>

              <div className="relative flex flex-wrap items-center justify-center gap-3">
                {projeto.layers.map((layer, i) => (
                  <motion.span
                    key={layer}
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                    className="rounded-full border border-gold-dim bg-background px-4 py-2 text-sm text-gold-light"
                  >
                    {layer}
                  </motion.span>
                ))}
              </div>
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}
