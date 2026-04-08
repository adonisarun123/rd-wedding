"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { KolamDivider } from "./decorative/KolamDivider";

const TARGET = new Date("2026-06-07T07:35:00+05:30");

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const reduced = useReducedMotion();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET.getTime() - now);
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[var(--temple-cream)] px-4 py-16"
      aria-label="Countdown to muhurtham"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-yatra)] text-2xl text-[var(--deep-red)] md:text-3xl">
          Counting down to the auspicious moment…
        </h2>
        <KolamDivider />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {units.map((u) => (
            <div
              key={u.label}
              className="rounded-lg border-2 border-[var(--gold-dark)] bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold)]/40 px-3 py-5 shadow-inner"
            >
              {u.label === "Seconds" && !reduced ? (
                <motion.div
                  key={u.value}
                  initial={{ rotateX: -85, opacity: 0.6 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--deep-red)] md:text-4xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {u.value > 99 ? u.value : pad(u.value)}
                </motion.div>
              ) : (
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--deep-red)] md:text-4xl">
                  {u.value > 99 ? u.value : pad(u.value)}
                </p>
              )}
              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-sm uppercase tracking-widest text-[var(--text-muted)]">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
