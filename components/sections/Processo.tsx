import RevealText from "@/components/motion/RevealText";
import { processo } from "@/lib/content";

export default function Processo() {
  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 font-display text-xs uppercase tracking-[0.25em] text-gold">
          {processo.heading}
        </p>
        <RevealText
          as="h2"
          className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl"
          accentWords={["produto"]}
        >
          {processo.text}
        </RevealText>
      </div>
    </section>
  );
}
