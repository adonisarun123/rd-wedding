import { FloralRule } from "./decorative/FloralRule";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-12 text-center sm:px-6 md:py-14">
      <div className="mx-auto max-w-md">
        <FloralRule />
        <p className="mt-8 text-sm font-medium text-[var(--text-muted)]">With love & blessings</p>
        <p className="font-display mt-3 text-3xl font-semibold text-[var(--text)]">R & D</p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-subtle)]">
          We look forward to celebrating with you in Bengaluru.
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
          June 2026
        </p>
      </div>
    </footer>
  );
}
