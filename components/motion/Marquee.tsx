interface MarqueeProps {
  items: string[];
  className?: string;
  /** how many times to duplicate the item set along the track */
  repeat?: number;
}

/**
 * Infinite horizontal ticker. The loop itself is seamless (the animation
 * shifts by exactly one copy's width), but with only a handful of unique
 * items that copy is short — on a wide screen the repeat becomes visible
 * within a couple of seconds. Repeating the set several times keeps the
 * same seamless technique while making the cycle much longer and less
 * obviously looping.
 */
export default function Marquee({ items, className = "", repeat = 6 }: MarqueeProps) {
  const track = Array.from({ length: repeat }, () => items).flat();
  const travel = 100 / repeat;

  return (
    <div
      className={`relative overflow-hidden border-y border-line py-4 ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex w-max animate-marquee flex-nowrap gap-10 whitespace-nowrap"
        style={{ "--marquee-travel": `-${travel}%` } as React.CSSProperties}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="shrink-0 font-display text-sm uppercase tracking-[0.2em] text-foreground-muted"
          >
            {item} <span className="text-gold-dim">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
