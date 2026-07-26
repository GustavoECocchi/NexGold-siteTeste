"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import Tilt3D from "@/components/motion/Tilt3D";
import { valores } from "@/lib/content";

export default function Valores() {
  return (
    <section id="valores" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <RevealText
          as="h2"
          className="mb-16 font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          Valores
        </RevealText>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((valor, i) => (
            <motion.div
              key={valor.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Tilt3D
                maxTilt={6}
                className="group rounded-2xl border border-line bg-background-elevated p-8 transition-colors hover:border-gold-dim"
              >
                <span className="mb-6 block font-display text-4xl text-gold-dim transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-display text-xl text-foreground">
                  {valor.title}
                </h3>
                <p className="leading-relaxed text-foreground-muted">
                  {valor.text}
                </p>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
