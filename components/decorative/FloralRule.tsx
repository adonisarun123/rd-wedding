/** Minimal floral divider — traditional motif, modern execution */
export function FloralRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="h-px w-12 max-w-[20vw] bg-gradient-to-r from-transparent to-[var(--sage-mist)] sm:w-20" />
      <svg width="28" height="12" viewBox="0 0 28 12" className="shrink-0 text-[var(--wheat)]">
        <path
          fill="currentColor"
          d="M14 0c-1.5 2-3 4-3 6s1.5 4 3 6c1.5-2 3-4 3-6s-1.5-4-3-6z"
          opacity="0.85"
        />
        <circle cx="14" cy="6" r="1.5" fill="var(--terracotta)" opacity="0.5" />
      </svg>
      <span className="h-px w-12 max-w-[20vw] bg-gradient-to-l from-transparent to-[var(--sage-mist)] sm:w-20" />
    </div>
  );
}
