"use client";

import { motion } from "framer-motion";

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
        <svg viewBox="0 0 80 80" className="h-20 w-20 text-[var(--gold-dark)]" aria-hidden="true">
          <circle cx="40" cy="42" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="40" cy="38" r="6" fill="var(--vermillion)" opacity="0.7" />
        </svg>
      );
    case "maalai":
      return (
        <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden="true">
          <path
            d="M10 50 Q40 20 70 50"
            fill="none"
            stroke="var(--banana-leaf-green)"
            strokeWidth="4"
          />
          <circle cx="22" cy="44" r="5" fill="var(--turmeric-yellow)" />
          <circle cx="40" cy="36" r="5" fill="#f4e04d" />
          <circle cx="58" cy="44" r="5" fill="var(--turmeric-yellow)" />
        </svg>
      );
    case "kalasam":
      return (
        <svg viewBox="0 0 80 80" className="h-20 w-20 text-[var(--bronze)]" aria-hidden="true">
          <path d="M28 25 H52 L48 65 H32 Z" fill="currentColor" opacity="0.35" stroke="currentColor" />
          <ellipse cx="40" cy="25" rx="14" ry="4" fill="var(--gold)" opacity="0.6" />
        </svg>
      );
    case "sadya":
      return (
        <svg viewBox="0 0 80 80" className="h-20 w-20 text-[var(--banana-leaf-green)]" aria-hidden="true">
          <path
            d="M8 40 Q40 8 72 40 Q40 72 8 40"
            fill="currentColor"
            opacity="0.4"
          />
          <circle cx="40" cy="40" r="6" fill="var(--turmeric-yellow)" opacity="0.8" />
        </svg>
      );
    case "kolam":
      return (
        <svg viewBox="0 0 80 80" className="h-20 w-20 text-[var(--kolam-brown)]" aria-hidden="true">
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="25" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="55" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}

export function Gallery() {
  return (
    <section className="bg-[var(--temple-cream)] py-14" aria-label="Traditional motifs">
      <h2 className="mb-6 text-center font-[family-name:var(--font-yatra)] text-2xl text-[var(--deep-red)]">
        Traditions
      </h2>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 pt-2 md:justify-center md:overflow-visible">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex min-w-[140px] flex-shrink-0 flex-col items-center rounded-xl border border-[var(--gold)] bg-[var(--white-silk)] p-4 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Thumb id={item.id} />
            <p className="mt-2 font-[family-name:var(--font-cormorant)] text-sm text-[var(--text-muted)]">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
