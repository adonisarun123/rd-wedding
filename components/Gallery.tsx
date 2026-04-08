import { BrideGroomIcon } from "./decorative/BrideGroomIcon";

const traditions = [
  {
    id: "thali" as const,
    title: "Thali",
    description:
      "The sacred mangalyam tied at the muhurtham—a Tamil wedding's enduring symbol of marriage and blessing.",
    iconWrap: "text-[var(--sage-deep)]",
  },
  {
    id: "maalai" as const,
    title: "Maalai",
    description:
      "Fragrant jasmine and rose garlands exchanged by the couple—a joyful ritual of honour and new beginnings.",
    iconWrap: "text-[var(--sage-deep)]",
  },
  {
    id: "kalasam" as const,
    title: "Kalasam",
    description:
      "A decorated pot with water, coconut, and mango leaves—auspicious abundance for ceremony and home.",
    iconWrap: "text-[var(--bronze)]",
  },
  {
    id: "sadya" as const,
    title: "Sadya",
    description:
      "Banana-leaf feast with rice, sambar, kootu, and payasam—hospitality shared seated, in traditional order.",
    iconWrap: "text-[var(--sage-deep)]",
  },
  {
    id: "kolam" as const,
    title: "Kolam",
    description:
      "Rice-flour patterns at the threshold—welcoming Lakshmi, guests, and auspicious beauty.",
    iconWrap: "text-[var(--kolam-brown)]",
  },
] as const;

function Thumb({ id }: { id: (typeof traditions)[number]["id"] }) {
  switch (id) {
    case "thali":
      return (
        <div className="flex h-14 w-[4.25rem] items-center justify-center" aria-hidden="true">
          <BrideGroomIcon className="h-[2.65rem] w-[3.25rem] opacity-95" />
        </div>
      );
    case "maalai":
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14" aria-hidden="true">
          <path
            d="M10 50 Q40 20 70 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="22" cy="44" r="4" fill="currentColor" fillOpacity="0.35" />
          <circle cx="40" cy="36" r="4" fill="currentColor" fillOpacity="0.45" />
          <circle cx="58" cy="44" r="4" fill="currentColor" fillOpacity="0.35" />
        </svg>
      );
    case "kalasam":
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14" aria-hidden="true">
          <path
            d="M28 25 H52 L48 65 H32 Z"
            fill="currentColor"
            fillOpacity="0.22"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <ellipse cx="40" cy="25" rx="14" ry="4" fill="currentColor" fillOpacity="0.4" />
        </svg>
      );
    case "sadya":
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14" aria-hidden="true">
          <circle cx="28" cy="34" r="3.5" fill="currentColor" fillOpacity="0.32" />
          <circle cx="52" cy="34" r="3.5" fill="currentColor" fillOpacity="0.32" />
          <path
            d="M22 46 Q40 58 58 46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      );
    case "kolam":
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14" aria-hidden="true">
          <circle cx="40" cy="40" r="2.5" fill="currentColor" />
          <circle cx="25" cy="40" r="2" fill="currentColor" fillOpacity="0.45" />
          <circle cx="55" cy="40" r="2" fill="currentColor" fillOpacity="0.45" />
          <circle cx="40" cy="25" r="2" fill="currentColor" fillOpacity="0.45" />
          <circle cx="40" cy="55" r="2" fill="currentColor" fillOpacity="0.45" />
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
        <span className="hidden md:inline">Hover a card for a warm highlight.</span>
      </p>
      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {traditions.map((item) => (
          <li
            key={item.id}
            tabIndex={0}
            className="invite-card group flex flex-col outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 md:min-h-[11.5rem] md:hover:border-[#4f4036] md:hover:bg-[#3a2e26] md:hover:shadow-lg md:hover:shadow-[rgba(30,22,18,0.28)] md:focus-within:border-[#4f4036] md:focus-within:bg-[#3a2e26] md:focus-within:shadow-lg md:focus-within:shadow-[rgba(30,22,18,0.28)]"
          >
            <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-3.5 sm:pb-3.5 sm:pt-5 md:px-3.5 md:pb-3 md:pt-5">
              <div
                className={`flex justify-center transition-colors duration-300 ${item.iconWrap} md:group-hover:text-[#faf6f0] md:group-focus-within:text-[#faf6f0]`}
              >
                <Thumb id={item.id} />
              </div>
              <p className="mt-3 text-center text-xs font-semibold tracking-wide text-[var(--text-muted)] transition-colors duration-300 sm:text-sm md:group-hover:text-white md:group-focus-within:text-white">
                {item.title}
              </p>
              <p className="mx-auto mt-2 max-w-[14rem] text-balance text-center text-[0.7rem] leading-snug text-[var(--text-muted)] transition-colors duration-300 sm:text-[0.72rem] sm:leading-snug md:max-w-none md:group-hover:text-white/88 md:group-focus-within:text-white/88">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
