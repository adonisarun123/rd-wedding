"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

/** Soft padma motif behind the welcome card — slow “breathing” scale (skipped when reduced motion). */
export function HeroLotus() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[min(38%,12rem)] z-[1] w-[min(92vw,22rem)] -translate-x-1/2 sm:top-[min(36%,13rem)] sm:w-[min(88vw,24rem)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 200"
        className={`h-auto w-full text-[var(--lotus-pink)] ${reduced ? "opacity-[0.1]" : "animate-lotus-breathe"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroLotusPetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#b86a82" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="heroLotusHeart" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="var(--turmeric-yellow)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--wheat)" stopOpacity="0.12" />
          </radialGradient>
        </defs>
        <g transform="translate(120 108)">
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-52"
              rx="14"
              ry="48"
              fill="url(#heroLotusPetal)"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle cx="0" cy="0" r="22" fill="url(#heroLotusHeart)" />
          <circle cx="0" cy="0" r="8" fill="var(--terracotta-soft)" fillOpacity="0.35" />
        </g>
      </svg>
    </div>
  );
}
