"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import { diferencial } from "@/lib/content";

export default function Diferencial() {
  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <RevealText
          as="h2"
          className="mb-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {diferencial.heading}
        </RevealText>
        <p className="mb-16 max-w-xl text-lg text-foreground-muted">
          {diferencial.intro}
        </p>

        <div className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="border-b border-line bg-background p-10 md:border-b-0 md:border-r"
          >
            <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-foreground-muted">
              {diferencial.mercadoObservavel.label}
            </p>
            <p className="text-balance text-lg leading-relaxed text-foreground-muted">
              {diferencial.mercadoObservavel.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-background-elevated p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, var(--gold-dim) 0%, transparent 60%)",
              }}
            />
            <p className="relative mb-4 font-display text-xs uppercase tracking-[0.25em] text-gold">
              {diferencial.marketingNexgold.label}
            </p>
            <p className="relative text-balance text-lg leading-relaxed text-foreground">
              {diferencial.marketingNexgold.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
