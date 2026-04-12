"use client";

import { Dancing_Script } from "next/font/google";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const MESSAGE = "We look forward to celebrating with you in Bengaluru.";
const MS_PER_CHAR = 78;
const PAUSE_AT_END_MS = 3400;

export function FooterClosingTyper() {
  const reduced = useReducedMotion();
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (reduced) setLen(MESSAGE.length);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    if (len < MESSAGE.length) {
      const t = window.setTimeout(() => setLen((n) => n + 1), MS_PER_CHAR);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => setLen(0), PAUSE_AT_END_MS);
    return () => window.clearTimeout(t);
  }, [len, reduced]);

  const visible = MESSAGE.slice(0, len);

  if (reduced) {
    return (
      <p
        className={`${script.className} mx-auto mt-6 max-w-xl text-balance text-2xl font-bold leading-snug text-[var(--text)] sm:text-3xl md:text-[2.15rem]`}
      >
        {MESSAGE}
      </p>
    );
  }

  return (
    <p
      className={`${script.className} mx-auto mt-6 min-h-[4.5rem] max-w-xl text-balance text-2xl font-bold leading-snug text-[var(--text)] sm:min-h-[5.25rem] sm:text-3xl md:min-h-[5.5rem] md:text-[2.15rem]`}
      aria-label={MESSAGE}
    >
      <span aria-hidden="true">
        {visible}
        <span className="inline-block w-[0.08em] animate-pulse font-sans font-bold text-[var(--terracotta)]">
          |
        </span>
      </span>
    </p>
  );
}
