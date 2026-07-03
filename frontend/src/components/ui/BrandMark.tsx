export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-violet)" />
          <stop offset="1" stopColor="var(--color-cyan)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="var(--color-surface-2)" />
      <circle cx="32" cy="32" r="19" stroke="url(#brandGradient)" strokeWidth="3" />
      <circle cx="32" cy="32" r="5.5" fill="url(#brandGradient)" />
      <circle cx="32" cy="15" r="3" fill="url(#brandGradient)" />
      <circle cx="46" cy="24" r="3" fill="url(#brandGradient)" />
      <circle cx="46" cy="40" r="3" fill="url(#brandGradient)" />
      <circle cx="32" cy="49" r="3" fill="url(#brandGradient)" />
      <circle cx="18" cy="40" r="3" fill="url(#brandGradient)" />
      <circle cx="18" cy="24" r="3" fill="url(#brandGradient)" />
    </svg>
  );
}
