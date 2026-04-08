"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloralRule } from "./decorative/FloralRule";

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

  const cells = [
    { label: "Days", value: days, short: "D" },
    { label: "Hours", value: hours, short: "H" },
    { label: "Minutes", value: minutes, short: "M" },
    { label: "Seconds", value: seconds, short: "S" },
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-[var(--border)] py-14 sm:py-16 md:py-20"
      aria-labelledby="countdown-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--terracotta-soft)]/40 via-transparent to-[var(--sage-soft)]/30"
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--terracotta)]">
          Until the auspicious hour
        </p>
        <h2
          id="countdown-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl"
        >
          Countdown to muhurtham
        </h2>
        <div className="mt-6 flex justify-center">
          <FloralRule />
        </div>
        <p className="mx-auto mt-5 max-w-md text-sm text-[var(--text-muted)] sm:text-base">
          Sunday, 7 June 2026 · <span className="r-table-mono font-medium">07:35</span> IST
        </p>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 md:gap-6">
          {cells.map((c) => (
            <div
              key={c.label}
              className="relative flex min-h-[7.5rem] min-w-[5.75rem] flex-1 flex-col items-center justify-center rounded-2xl border-2 border-[var(--sage-mist)] bg-[var(--surface-elevated)] px-4 py-5 shadow-[0_12px_40px_-12px_rgba(42,38,34,0.12)] sm:min-h-[8.5rem] sm:min-w-[6.5rem] sm:flex-none sm:px-5"
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-[var(--sage-soft)] px-2 py-0.5 text-[0.6rem] font-bold text-[var(--sage-deep)] sm:text-[0.65rem]">
                {c.short}
              </span>
              {c.label === "Seconds" && !reduced ? (
                <motion.span
                  key={c.value}
                  initial={{ scale: 0.92, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="font-display text-4xl font-semibold tabular-nums text-[var(--text)] sm:text-5xl"
                >
                  {pad(c.value)}
                </motion.span>
              ) : (
                <span className="font-display text-4xl font-semibold tabular-nums text-[var(--text)] sm:text-5xl">
                  {c.label === "Days" ? String(c.value) : pad(c.value)}
                </span>
              )}
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-xs">
                {c.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-lg text-xs leading-relaxed text-[var(--text-subtle)] sm:text-sm">
          Times shown for Bengaluru (IST). We can&apos;t wait to celebrate with you.
        </p>
      </div>
    </section>
  );
}
