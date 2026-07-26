"use client";

import RevealText from "@/components/motion/RevealText";
import Magnetic from "@/components/motion/Magnetic";
import AmbientGlow from "@/components/layout/AmbientGlow";
import { encerramento } from "@/lib/content";
import {
  CONTACT_EMAIL_DEFINED,
  CONTACT_WHATSAPP_DEFINED,
  CONTACT_WHATSAPP_DISPLAY,
  mailtoHref,
  whatsappHref,
} from "@/lib/config";

export default function Contato() {
  return (
    <section id="contato" className="relative px-6 py-40 md:px-12">
      <AmbientGlow from="top-left" />
      <div className="mx-auto max-w-3xl text-center">
        <RevealText
          as="h2"
          className="text-balance font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl"
        >
          {encerramento.heading}
        </RevealText>

        <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-foreground-muted">
          {encerramento.principle}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {CONTACT_EMAIL_DEFINED ? (
            <Magnetic>
              <a
                href={mailtoHref}
                data-cursor="link"
                className="rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-[0.15em] text-background transition-transform hover:scale-[1.03]"
              >
                Enviar e-mail
              </a>
            </Magnetic>
          ) : (
            <span
              className="cursor-not-allowed rounded-full border border-line px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground-muted/60"
              title="E-mail de contato ainda não definido"
            >
              [E-mail a definir]
            </span>
          )}

          {CONTACT_WHATSAPP_DEFINED ? (
            <Magnetic>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="rounded-full border border-gold-dim px-8 py-4 text-sm uppercase tracking-[0.15em] text-gold-light transition-colors hover:border-gold hover:bg-gold hover:text-background"
              >
                Chamar no WhatsApp
              </a>
            </Magnetic>
          ) : (
            <span
              className="cursor-not-allowed rounded-full border border-line px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground-muted/60"
              title="WhatsApp de contato ainda não definido"
            >
              {CONTACT_WHATSAPP_DISPLAY}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
