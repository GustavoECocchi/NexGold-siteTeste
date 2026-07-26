"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import AmbientGlow from "@/components/layout/AmbientGlow";
import { manifesto, missaoVisao } from "@/lib/content";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative px-6 py-32 md:px-12">
      <AmbientGlow from="top-right" />
      <div className="mx-auto max-w-4xl">
        <RevealText
          as="h2"
          className="mb-12 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {manifesto.heading}
        </RevealText>

        <div className="space-y-6">
          {manifesto.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-balance text-lg leading-relaxed text-foreground-muted sm:text-xl"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {[missaoVisao.missao, missaoVisao.visao].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background-elevated p-8"
            >
              <p className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-gold">
                {item.label}
              </p>
              <p className="text-balance leading-relaxed text-foreground-muted">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
