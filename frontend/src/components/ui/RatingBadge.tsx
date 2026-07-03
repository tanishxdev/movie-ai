export function RatingBadge({ rating }: { rating: number }) {
  return (
    <div
      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-strong bg-bg-soft font-mono text-sm font-semibold text-gold"
      role="img"
      aria-label={`IMDb-style rating ${rating.toFixed(1)} out of 10`}
    >
      {/* Sprocket holes — film reel signature */}
      <span className="absolute -top-1 h-1.5 w-1.5 rounded-full bg-surface-2 ring-1 ring-border-strong" />
      <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-surface-2 ring-1 ring-border-strong" />
      <span className="absolute -left-1 h-1.5 w-1.5 rounded-full bg-surface-2 ring-1 ring-border-strong" />
      <span className="absolute -right-1 h-1.5 w-1.5 rounded-full bg-surface-2 ring-1 ring-border-strong" />
      {rating.toFixed(1)}
    </div>
  );
}
