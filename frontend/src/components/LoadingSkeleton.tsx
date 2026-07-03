function SkeletonCard() {
  return (
    <div className="glass-panel flex flex-col gap-4 rounded-card p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="animate-shimmer h-5 w-3/4 rounded-md" />
          <div className="animate-shimmer h-3 w-16 rounded-md" />
        </div>
        <div className="animate-shimmer h-12 w-12 shrink-0 rounded-full" />
      </div>
      <div className="flex gap-1.5">
        <div className="animate-shimmer h-6 w-16 rounded-full" />
        <div className="animate-shimmer h-6 w-20 rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="animate-shimmer h-3 w-full rounded-md" />
        <div className="animate-shimmer h-3 w-5/6 rounded-md" />
      </div>
      <div className="animate-shimmer h-3 w-2/3 rounded-md" />
    </div>
  );
}

export function LoadingSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      role="status"
      aria-live="polite"
      aria-label="Loading movie recommendations"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
