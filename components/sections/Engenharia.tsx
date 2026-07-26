"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import AmbientGlow from "@/components/layout/AmbientGlow";
import { engenharia } from "@/lib/content";

export default function Engenharia() {
  return (
    <section className="relative px-6 py-32 md:px-12">
      <AmbientGlow from="bottom-right" />
      <div className="mx-auto max-w-6xl">
        <RevealText
          as="h2"
          className="mb-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {engenharia.heading}
        </RevealText>
        <p className="mb-16 max-w-xl text-lg text-foreground-muted">
          {engenharia.intro}
        </p>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {engenharia.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex min-h-[140px] flex-col justify-between bg-background-elevated p-6"
            >
              <span className="font-display text-xs text-gold-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg text-foreground">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
