"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import Marquee from "@/components/motion/Marquee";
import AmbientGlow from "@/components/layout/AmbientGlow";
import { capacidades, techMarquee } from "@/lib/content";

export default function Capacidades() {
  return (
    <section id="capacidades" className="relative py-32">
      <AmbientGlow from="bottom-left" />
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <RevealText
          as="h2"
          className="mb-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {capacidades.heading}
        </RevealText>
        <p className="mb-16 max-w-xl text-lg text-foreground-muted">
          {capacidades.intro}
        </p>
      </div>

      <Marquee items={techMarquee} className="mb-16" />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="border-t border-line">
          {capacidades.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="group flex flex-col gap-2 border-b border-line py-8 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-gold-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-md text-foreground-muted md:text-right">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
