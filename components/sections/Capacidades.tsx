"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/motion/RevealText";
import Marquee from "@/components/motion/Marquee";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Tilt3D from "@/components/motion/Tilt3D";
import { capacidades, techMarquee } from "@/lib/content";

const branchAccent = ["blue", "gold"] as const;

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

      <Marquee items={techMarquee} className="mb-20" />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Hub — the two branches below both originate from NexGold, never split off on their own */}
        <div className="relative mx-auto mb-4 hidden h-24 max-w-3xl md:block">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M50,2 C50,18 26,18 26,38"
              fill="none"
              stroke="var(--blue-dim)"
              strokeWidth="0.6"
            />
            <path
              d="M50,2 C50,18 74,18 74,38"
              fill="none"
              stroke="var(--gold-dim)"
              strokeWidth="0.6"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto mb-16 flex w-fit items-center gap-2 rounded-full border border-line bg-background-elevated px-5 py-2 md:mb-0"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-gradient-to-r from-blue to-gold"
          />
          <span className="font-display text-sm uppercase tracking-[0.2em] text-foreground">
            {capacidades.hub}
          </span>
        </motion.div>

        <div className="mt-10 grid gap-16 md:mt-0 md:grid-cols-2 md:gap-12">
          {capacidades.branches.map((branch, bi) => {
            const accent = branchAccent[bi];
            return (
              <div key={branch.label}>
                <h3
                  className={`mb-8 text-center font-display text-xl uppercase tracking-[0.15em] md:text-left ${
                    accent === "blue" ? "text-blue-light" : "text-gold-light"
                  }`}
                >
                  {branch.label}
                </h3>

                <div className="relative pl-8">
                  <div
                    aria-hidden="true"
                    className={`absolute left-[7px] top-2 bottom-2 w-px ${
                      accent === "blue" ? "bg-blue-dim" : "bg-gold-dim"
                    }`}
                  />

                  <div className="space-y-8">
                    {branch.items.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="relative"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 bg-background ${
                            accent === "blue" ? "border-blue" : "border-gold"
                          }`}
                        />
                        <Tilt3D maxTilt={4} glare={false}>
                          <div
                            className={`rounded-xl border border-line p-5 transition-all duration-300 ${
                              accent === "blue"
                                ? "hover:border-blue hover:shadow-[0_0_24px_-6px_var(--blue)]"
                                : "hover:border-gold hover:shadow-[0_0_24px_-6px_var(--gold)]"
                            }`}
                          >
                            <h4 className="mb-1 font-display text-lg text-foreground">
                              {item.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-foreground-muted">
                              {item.text}
                            </p>
                          </div>
                        </Tilt3D>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
