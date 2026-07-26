interface AmbientGlowProps {
  /** which corner the blue blob sits in; gold sits in the opposite corner */
  from?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const corners: Record<string, string> = {
  "top-left": "-top-1/4 -left-1/4",
  "top-right": "-top-1/4 -right-1/4",
  "bottom-left": "-bottom-1/4 -left-1/4",
  "bottom-right": "-bottom-1/4 -right-1/4",
};

const opposite: Record<string, string> = {
  "top-left": "bottom-right",
  "top-right": "bottom-left",
  "bottom-left": "top-right",
  "bottom-right": "top-left",
};

/**
 * Two soft blue/gold blobs echoing the logo's own gradient — used to give
 * dark sections depth without resorting to a photographic background,
 * which would clash with the mark's flat vector identity.
 */
export default function AmbientGlow({ from = "top-left" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`absolute h-[45vw] w-[45vw] max-h-[520px] max-w-[520px] rounded-full opacity-[0.14] blur-[110px] ${corners[from]}`}
        style={{ background: "radial-gradient(circle, var(--blue) 0%, transparent 70%)" }}
      />
      <div
        className={`absolute h-[40vw] w-[40vw] max-h-[460px] max-w-[460px] rounded-full opacity-[0.12] blur-[110px] ${corners[opposite[from]]}`}
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
    </div>
  );
}
