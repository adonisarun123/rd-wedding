import { KolamDivider } from "./decorative/KolamDivider";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-red)] px-4 py-12 text-[var(--gold-light)]">
      <div className="mx-auto max-w-xl text-center">
        <KolamDivider variant="simple" className="text-[var(--gold-light)] opacity-80" />
        <p className="mt-6 font-[family-name:var(--font-cormorant)] text-lg">
          With love & blessings
        </p>
        <p
          className="mt-4 text-3xl font-semibold tracking-wide text-[var(--gold)]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          R & D
        </p>
        <p className="mt-6 text-sm text-[var(--gold-light)]/90">
          We look forward to celebrating with you
        </p>
        <p className="mt-4 text-xs opacity-80">Made with ❤️</p>
      </div>
    </footer>
  );
}
