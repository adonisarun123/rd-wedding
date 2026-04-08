"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

export function SacredFire({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 64 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="32" cy="72" rx="20" ry="6" fill="var(--bronze)" opacity="0.5" />
      <g style={reduced ? undefined : { animation: "flame-flicker 0.5s ease-in-out infinite" }}>
        <path
          d="M32 68 Q24 48 28 32 Q32 20 32 12 Q36 24 40 32 Q44 48 32 68"
          fill="var(--vermillion)"
          opacity="0.85"
        />
        <path d="M32 60 Q28 44 32 36 Q36 44 32 60" fill="var(--turmeric-yellow)" opacity="0.9" />
      </g>
    </svg>
  );
}
