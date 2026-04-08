export function Hero() {
  return (
    <header
      className="border-b border-[var(--border)] bg-[var(--surface)] py-10 sm:py-12 md:py-14"
      aria-label="Welcome"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-subtle)]">
          Cordially invited by
        </p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.75rem] md:leading-tight">
          V. Udaykumar <span className="text-[var(--gold-accent)]">&</span> U. Thamizharasi
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          Request the pleasure of your company at the wedding celebration of their beloved daughter.
        </p>
      </div>
    </header>
  );
}
