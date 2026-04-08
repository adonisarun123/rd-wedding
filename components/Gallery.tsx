const items = [
  { title: "Thali", id: "thali" },
  { title: "Maalai", id: "maalai" },
  { title: "Kalasam", id: "kalasam" },
  { title: "Sadya", id: "sadya" },
  { title: "Kolam", id: "kolam" },
] as const;

function Thumb({ id }: { id: (typeof items)[number]["id"] }) {
  switch (id) {
    case "thali":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--wheat)]" aria-hidden="true">
          <circle cx="40" cy="42" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="38" r="6" fill="var(--terracotta)" opacity="0.45" />
        </svg>
      );
    case "maalai":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14" aria-hidden="true">
          <path
            d="M10 50 Q40 20 70 50"
            fill="none"
            stroke="var(--sage-deep)"
            strokeWidth="3"
          />
          <circle cx="22" cy="44" r="4" fill="var(--wheat-light)" />
          <circle cx="40" cy="36" r="4" fill="#e8d4a8" />
          <circle cx="58" cy="44" r="4" fill="var(--wheat-light)" />
        </svg>
      );
    case "kalasam":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--bronze)]" aria-hidden="true">
          <path d="M28 25 H52 L48 65 H32 Z" fill="currentColor" opacity="0.25" stroke="currentColor" />
          <ellipse cx="40" cy="25" rx="14" ry="4" fill="var(--wheat)" opacity="0.5" />
        </svg>
      );
    case "sadya":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--sage)]" aria-hidden="true">
          <path d="M8 40 Q40 8 72 40 Q40 72 8 40" fill="currentColor" opacity="0.3" />
          <circle cx="40" cy="40" r="5" fill="var(--wheat)" opacity="0.85" />
        </svg>
      );
    case "kolam":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--kolam-brown)]" aria-hidden="true">
          <circle cx="40" cy="40" r="2.5" fill="currentColor" />
          <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="40" cy="25" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="40" cy="55" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Gallery() {
  return (
    <section
      className="border-t border-[var(--border)] py-12 md:py-16"
      aria-labelledby="gallery-heading"
    >
      <h2
        id="gallery-heading"
        className="font-display text-center text-2xl font-semibold text-[var(--text)] sm:text-3xl"
      >
        Traditions we cherish
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-[var(--text-muted)]">
        Little symbols of the celebration — from thali to kolam.
      </p>
      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {items.map((item) => (
          <li
            key={item.id}
            className="invite-card flex flex-col items-center justify-center px-3 py-6 text-center transition hover:shadow-md"
          >
            <Thumb id={item.id} />
            <p className="mt-3 text-xs font-medium text-[var(--text-muted)] sm:text-sm">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
