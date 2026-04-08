"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-07T07:35:00+05:30");

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
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
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section
      className="border-t border-[var(--border)] py-10 md:py-12"
      aria-labelledby="countdown-heading"
    >
      <h2
        id="countdown-heading"
        className="font-display text-center text-xl font-semibold text-[var(--text)] md:text-2xl"
      >
        Countdown to muhurtham
      </h2>
      <p className="mt-1 text-center text-sm text-[var(--text-muted)]">
        Sunday 7 June 2026 · 7:35 AM IST
      </p>

      <div className="r-table-wrap mx-auto mt-8 max-w-3xl">
        <table className="r-table text-center">
          <thead>
            <tr>
              {cells.map((c) => (
                <th key={c.label} scope="col" className="!text-center">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {cells.map((c) => (
                <td
                  key={c.label}
                  className="r-table-mono !align-middle text-2xl font-semibold text-[var(--text)] sm:text-3xl md:text-4xl"
                >
                  {c.label === "Days" ? String(c.value) : pad(c.value)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
