import { BrideGroomIcon } from "./decorative/BrideGroomIcon";

const traditions = [
  {
    id: "thali" as const,
    title: "Thali",
    description:
      "In Tamil Nadu Hindu weddings, the thali (mangalyam) is a sacred yellow thread or pendant chain the groom ties around the bride’s neck at the muhurtham. It is the enduring symbol of marriage, worn as a blessing and a bond between the couple.",
  },
  {
    id: "maalai" as const,
    title: "Maalai",
    description:
      "Maalai are fragrant flower garlands—often malli (jasmine) and roses—exchanged by the bride and groom during maalai maatral. In Tamil tradition this joyful act honors the couple, spreads fragrance, and marks auspicious new beginnings.",
  },
  {
    id: "kalasam" as const,
    title: "Kalasam",
    description:
      "The kalasam is a decorated brass or copper pot, usually filled with water and topped with mango leaves and a coconut. It stands for abundance and purity and is central to Tamil rituals, inviting divine presence and blessings on the home and the wedding.",
  },
  {
    id: "sadya" as const,
    title: "Sadya",
    description:
      "Sadya is the classic Tamil vegetarian feast served on a vazhai ilai (banana leaf)—rice, sambar, kootu, poriyal, pickles, appalam, payasam, and more. At weddings it is hospitality at its fullest: guests eat seated on the floor, in traditional order, with the hands.",
  },
  {
    id: "kolam" as const,
    title: "Kolam",
    description:
      "Kolam is rice-flour or chalk patterns drawn at the threshold each morning. In Tamil Nadu it welcomes Lakshmi, honors guests, and brings beauty and order to the home—wedding venues often feature elaborate kolam to mark an auspicious welcome.",
  },
] as const;

function Thumb({ id }: { id: (typeof traditions)[number]["id"] }) {
  switch (id) {
    case "thali":
      return (
        <div
          className="mx-auto flex h-14 w-[4.25rem] items-center justify-center text-[var(--sage-deep)]"
          aria-hidden="true"
        >
          <BrideGroomIcon className="h-[2.65rem] w-[3.25rem] opacity-90" />
        </div>
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
        <svg viewBox="0 0 80 80" className="mx-auto h-14 w-14 text-[var(--sage-deep)]" aria-hidden="true">
          <circle cx="28" cy="34" r="3.5" fill="currentColor" opacity="0.35" />
          <circle cx="52" cy="34" r="3.5" fill="currentColor" opacity="0.35" />
          <path
            d="M22 46 Q40 58 58 46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
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
        Little symbols of the celebration — from thali to kolam.{" "}
        <span className="hidden md:inline">Hover a card to read more.</span>
        <span className="md:hidden">Tap through each card for a short note.</span>
      </p>
      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {traditions.map((item) => (
          <li
            key={item.id}
            tabIndex={0}
            className="invite-card group relative flex min-h-0 flex-col overflow-hidden outline-none transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 md:min-h-[200px] md:shadow-sm md:hover:shadow-md"
          >
            <div className="flex flex-col items-center px-2 pb-3 pt-5 transition-opacity duration-200 md:flex-1 md:justify-center md:pb-5 md:group-hover:opacity-0 md:group-hover:pointer-events-none md:group-focus-within:opacity-0 md:group-focus-within:pointer-events-none">
              <Thumb id={item.id} />
              <p className="mt-3 text-xs font-medium text-[var(--text-muted)] sm:text-sm">{item.title}</p>
            </div>

            <p className="border-t border-[var(--border)] px-2.5 py-2.5 text-left text-[0.7rem] leading-relaxed text-[var(--text-muted)] md:hidden">
              {item.description}
            </p>

            <div
              className="pointer-events-none invisible absolute inset-0 z-10 hidden flex-col justify-center overflow-y-auto rounded-[1.25rem] bg-[var(--surface-elevated)] p-3 opacity-0 shadow-inner transition-opacity duration-200 md:flex md:group-hover:visible md:group-hover:pointer-events-auto md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:pointer-events-auto md:group-focus-within:opacity-100"
            >
              <p className="text-left text-[0.68rem] leading-relaxed text-[var(--text-muted)] sm:text-[0.72rem]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
