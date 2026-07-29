type Variant =
  | "arquitetura"
  | "backend"
  | "frontend"
  | "ia"
  | "dados"
  | "infra"
  | "integracoes";

/**
 * Small looping CSS/SVG visual per Engenharia card — the "Cloud 7" bento
 * pattern (title + one-liner + live micro-visual) instead of a static
 * label. Pure CSS animation so it automatically respects the site-wide
 * prefers-reduced-motion rule in globals.css, no JS/rAF needed.
 */
export default function EngenhariaVisual({ variant }: { variant: Variant }) {
  switch (variant) {
    case "arquitetura":
      return (
        <svg viewBox="0 0 100 36" className="h-full w-full" aria-hidden="true">
          <line x1="10" y1="28" x2="32" y2="10" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="32" y1="10" x2="54" y2="22" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="54" y1="22" x2="76" y2="8" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="54" y1="22" x2="76" y2="30" stroke="var(--gold-dim)" strokeWidth="1" />
          {[
            { cx: 10, cy: 28, r: 3, delay: "0s" },
            { cx: 32, cy: 10, r: 3, delay: "0.3s" },
            { cx: 54, cy: 22, r: 3.5, delay: "0.6s" },
            { cx: 76, cy: 8, r: 3, delay: "0.9s" },
            { cx: 76, cy: 30, r: 3, delay: "1.2s" },
          ].map((n) => (
            <circle
              key={`${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="var(--gold-light)"
              className="eng-viz-node"
              style={{ animationDelay: n.delay }}
            />
          ))}
        </svg>
      );

    case "backend":
      return (
        <div className="flex h-full flex-col justify-center gap-2 px-1">
          <div className="h-1.5 w-3/4 rounded-full bg-gold-dim/40" />
          <div className="h-1.5 w-1/2 rounded-full bg-gold-dim/40" />
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-2/3 rounded-full bg-gold-dim/40" />
            <span className="eng-viz-cursor h-3 w-1 bg-gold-light" />
          </div>
        </div>
      );

    case "frontend":
      return (
        <div className="flex h-full flex-col overflow-hidden rounded-md border border-line">
          <div className="flex items-center gap-1 border-b border-line bg-background px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold-dim" />
          </div>
          <div className="relative flex flex-1 flex-col justify-center gap-1.5 overflow-hidden p-2">
            <div className="h-1.5 w-2/3 rounded-full bg-line" />
            <div className="h-1.5 w-1/2 rounded-full bg-line" />
            <div className="eng-viz-shimmer pointer-events-none absolute inset-0" />
          </div>
        </div>
      );

    case "ia":
      return (
        <svg viewBox="0 0 100 36" className="h-full w-full" aria-hidden="true">
          <line x1="14" y1="10" x2="50" y2="18" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="14" y1="26" x2="50" y2="18" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="50" y1="18" x2="86" y2="8" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="50" y1="18" x2="86" y2="18" stroke="var(--gold-dim)" strokeWidth="1" />
          <line x1="50" y1="18" x2="86" y2="28" stroke="var(--gold-dim)" strokeWidth="1" />
          {[
            { cx: 14, cy: 10, delay: "0s" },
            { cx: 14, cy: 26, delay: "0.2s" },
            { cx: 50, cy: 18, delay: "0.4s", r: 3.5 },
            { cx: 86, cy: 8, delay: "0.6s" },
            { cx: 86, cy: 18, delay: "0.8s" },
            { cx: 86, cy: 28, delay: "1s" },
          ].map((n) => (
            <circle
              key={`${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r ?? 2.6}
              fill="var(--gold-light)"
              className="eng-viz-node"
              style={{ animationDelay: n.delay }}
            />
          ))}
        </svg>
      );

    case "dados":
      return (
        <div className="flex h-full items-end gap-2 px-1 pb-1">
          {[
            { h: "40%", delay: "0s" },
            { h: "65%", delay: "0.2s" },
            { h: "90%", delay: "0.4s" },
            { h: "55%", delay: "0.6s" },
            { h: "75%", delay: "0.8s" },
          ].map((bar, i) => (
            <div
              key={i}
              className="eng-viz-bar w-2.5 rounded-t bg-gold-dim"
              style={{ ["--eng-bar-h" as string]: bar.h, animationDelay: bar.delay }}
            />
          ))}
        </div>
      );

    case "infra":
      return (
        <div className="flex h-full flex-col justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-sm border border-line bg-background px-2 py-1"
            >
              <span className="h-1 w-8 rounded-full bg-line" />
              <span
                className="eng-viz-led h-1.5 w-1.5 rounded-full bg-gold-light"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </div>
          ))}
        </div>
      );

    case "integracoes":
      return (
        <div className="relative flex h-full items-center justify-center">
          <span className="absolute h-2.5 w-2.5 rounded-full bg-gold" />
          <div className="eng-viz-orbit absolute h-10 w-10 rounded-full border border-dashed border-gold-dim">
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-light" />
          </div>
          <div className="eng-viz-orbit-rev absolute h-[4.5rem] w-[4.5rem] rounded-full border border-dashed border-gold-dim/60">
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-light" />
          </div>
        </div>
      );
  }
}
