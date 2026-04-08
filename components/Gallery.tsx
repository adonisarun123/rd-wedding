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
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--gold-dark)]" aria-hidden="true">
          <circle cx="40" cy="42" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="40" cy="38" r="6" fill="var(--vermillion)" opacity="0.65" />
        </svg>
      );
    case "maalai":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14" aria-hidden="true">
          <path
            d="M10 50 Q40 20 70 50"
            fill="none"
            stroke="var(--banana-leaf-green)"
            strokeWidth="3"
          />
          <circle cx="22" cy="44" r="4" fill="var(--turmeric-yellow)" />
          <circle cx="40" cy="36" r="4" fill="#e8c840" />
          <circle cx="58" cy="44" r="4" fill="var(--turmeric-yellow)" />
        </svg>
      );
    case "kalasam":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--bronze)]" aria-hidden="true">
          <path d="M28 25 H52 L48 65 H32 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="40" cy="25" rx="14" ry="4" fill="var(--gold)" opacity="0.5" />
        </svg>
      );
    case "sadya":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--banana-leaf-green)]" aria-hidden="true">
          <path d="M8 40 Q40 8 72 40 Q40 72 8 40" fill="currentColor" opacity="0.35" />
          <circle cx="40" cy="40" r="5" fill="var(--turmeric-yellow)" opacity="0.85" />
        </svg>
      );
    case "kolam":
      return (
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--kolam-brown)]" aria-hidden="true">
          <circle cx="40" cy="40" r="2.5" fill="currentColor" />
          <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.55" />
          <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.55" />
          <circle cx="40" cy="25" r="2" fill="currentColor" opacity="0.55" />
          <circle cx="40" cy="55" r="2" fill="currentColor" opacity="0.55" />
        </svg>
      );
    default:
      return null;
  }
}

export function Gallery() {
  return (
    <section
      className="border-t border-[var(--border)] py-10 md:py-12"
      aria-labelledby="gallery-heading"
    >
      <h2
        id="gallery-heading"
        className="font-display text-center text-xl font-semibold text-[var(--text)] md:text-2xl"
      >
        Traditions
      </h2>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="section-panel flex flex-col items-center justify-center px-3 py-5 text-center"
          >
            <Thumb id={item.id} />
            <p className="mt-3 text-xs font-medium text-[var(--text-muted)] sm:text-sm">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
