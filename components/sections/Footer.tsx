import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/nexgold-icon.png"
            alt="NexGold"
            width={448}
            height={205}
            className="h-6 w-auto opacity-90"
          />
          <span className="text-xs uppercase tracking-[0.15em] text-foreground-muted">
            © {year}
          </span>
        </div>
        <span className="text-xs uppercase tracking-[0.15em] text-foreground-muted">
          A engenharia por trás do crescimento
        </span>
      </div>
    </footer>
  );
}
