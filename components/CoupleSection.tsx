import { CoupleIllustration } from "./decorative/CoupleIllustration";

export function CoupleSection() {
  return (
    <section className="border-b border-[var(--border)] py-10 md:py-14" aria-label="The couple">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-subtle)]">
            Together with their families
          </p>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-display text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              Roopashri
            </span>
            <span className="text-lg text-[var(--text-subtle)]">&</span>
            <span className="font-display text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              Dhakshinamoorthy
            </span>
          </div>
          <div className="mt-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-2">
            <span className="text-sm font-semibold tracking-wide text-[var(--text-muted)]">Monogram</span>
            <span className="ml-3 font-display text-xl font-semibold tabular-nums text-[var(--accent)]">
              R · D
            </span>
          </div>
        </div>
        <div className="section-panel flex justify-center p-6 md:p-8">
          <CoupleIllustration className="h-auto w-full max-w-[240px] md:max-w-[280px]" />
        </div>
      </div>
    </section>
  );
}
