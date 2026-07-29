"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * PROTOTYPE — not wired into the real site or real content. Placeholder
 * services/copy stand in until the client's docs arrive. Purpose: test the
 * portal interaction/motion language in isolation before touching the
 * actual Serviços section.
 *
 * Instead of a card expanding into a rectangle (the common pattern), the
 * click opens a circular iris centered on the click point, with radiating
 * gold streaks selling a "pulled through" motion, and small keyword
 * fragments converging into the click point just before the iris opens.
 */

type Service = {
  slug: string;
  title: string;
  accent: "gold" | "blue";
  fragments: string[];
  blurb: string;
};

const SERVICES: Service[] = [
  {
    slug: "desenvolvimento",
    title: "Desenvolvimento",
    accent: "blue",
    fragments: ["React", "API", "{ }", "Node.js", "CI/CD", "SQL"],
    blurb:
      "Placeholder — aqui entraria o conteúdo real da sessão de fechamento para Desenvolvimento.",
  },
  {
    slug: "marketing",
    title: "Marketing",
    accent: "gold",
    fragments: ["Funil", "CTR", "ROI", "Copy", "Ads", "Leads"],
    blurb:
      "Placeholder — aqui entraria o conteúdo real da sessão de fechamento para Marketing.",
  },
  {
    slug: "ia",
    title: "Inteligência Artificial",
    accent: "blue",
    fragments: ["LLM", "Dados", "Modelo", "Prompt", "Automação"],
    blurb:
      "Placeholder — aqui entraria o conteúdo real da sessão de fechamento para IA.",
  },
  {
    slug: "dados",
    title: "Dados",
    accent: "gold",
    fragments: ["ETL", "Schema", "Dashboard", "SQL", "Métricas"],
    blurb:
      "Placeholder — aqui entraria o conteúdo real da sessão de fechamento para Dados.",
  },
];

const EASE = [0.76, 0, 0.24, 1] as const;

function PortalStreaks({ accent }: { accent: "gold" | "blue" }) {
  const color = accent === "gold" ? "var(--gold)" : "var(--blue)";
  const streaks = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {streaks.map((i) => {
        const angle = (360 / streaks.length) * i;
        return (
          <motion.div
            key={i}
            className="absolute h-px w-1/2 origin-left"
            style={{
              background: `linear-gradient(90deg, ${color}, transparent)`,
              rotate: `${angle}deg`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1.4, 1.1], opacity: [0, 0.9, 0] }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.015 }}
          />
        );
      })}
    </div>
  );
}

function FragmentBurst({
  fragments,
  origin,
}: {
  fragments: string[];
  origin: { x: number; y: number };
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {fragments.map((word, i) => {
        const angle = (360 / fragments.length) * i + Math.random() * 20;
        const dist = 120 + Math.random() * 100;
        const startX = origin.x + Math.cos((angle * Math.PI) / 180) * dist;
        const startY = origin.y + Math.sin((angle * Math.PI) / 180) * dist;
        return (
          <motion.span
            key={word}
            className="absolute font-display text-xs uppercase tracking-[0.15em] text-gold-light"
            style={{ left: 0, top: 0 }}
            initial={{ x: startX, y: startY, opacity: 0, scale: 0.8 }}
            animate={{ x: origin.x, y: origin.y, opacity: [0, 1, 0], scale: 0.9 }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.03 }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function ServicosPortal() {
  const [active, setActive] = useState<Service | null>(null);
  const [pending, setPending] = useState<Service | null>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const open = (service: Service, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const point = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    setOrigin(point);
    setPending(service);
    window.setTimeout(() => setActive(service), 220);
    window.setTimeout(() => setPending(null), 700);
  };

  const close = () => setActive(null);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-gold-dim">
          Protótipo — conteúdo fictício
        </p>
        <h1 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
          Escolha um serviço
        </h1>
        <p className="mb-16 text-foreground-muted">
          Clique num card. Ele não "abre uma página" — a tela rasga a partir
          do ponto onde você clicou.
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SERVICES.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={(e) => open(service, e)}
              data-cursor="link"
              className={`group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-background-elevated p-4 transition-all duration-300 ${
                service.accent === "gold"
                  ? "hover:border-gold hover:shadow-[0_0_30px_-8px_var(--gold)]"
                  : "hover:border-blue hover:shadow-[0_0_30px_-8px_var(--blue)]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${
                  service.accent === "gold" ? "bg-gold" : "bg-blue"
                }`}
              />
              <span className="font-display text-sm text-foreground">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {origin && pending && (
        <FragmentBurst key={pending.slug} fragments={pending.fragments} origin={origin} />
      )}

      <AnimatePresence>
        {active && origin && (
          <motion.div
            key="portal"
            className="fixed inset-0 z-50 bg-background"
            initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
            animate={{ clipPath: `circle(150% at ${origin.x}px ${origin.y}px)` }}
            exit={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <PortalStreaks accent={active.accent} />

            {/* The destination is glimpsed blurred/dim from the first frame
                and sharpens in step with the iris opening — sells "seeing
                through" the portal rather than content just appearing once
                the wipe finishes. */}
            <motion.div
              className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center"
              initial={{ filter: "blur(24px) brightness(0.45)" }}
              animate={{ filter: "blur(0px) brightness(1)" }}
              exit={{ filter: "blur(24px) brightness(0.45)" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-dim">
                Sessão secreta — {active.title}
              </p>
              <h2 className="font-display text-4xl text-foreground sm:text-5xl">
                {active.title}
              </h2>
              <p className="max-w-md text-foreground-muted">{active.blurb}</p>

              <button
                type="button"
                onClick={close}
                data-cursor="link"
                className="mt-8 rounded-full border border-gold-dim px-6 py-2 text-sm uppercase tracking-[0.15em] text-gold-light transition-colors hover:border-gold hover:bg-gold hover:text-background"
              >
                Voltar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
