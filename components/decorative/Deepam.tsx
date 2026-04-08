"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

export function Deepam({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M40 95 L28 108 H52 L40 95Z"
        fill="var(--bronze)"
        stroke="var(--gold-dark)"
        strokeWidth="0.8"
      />
      <ellipse cx="40" cy="92" rx="18" ry="6" fill="var(--gold-dark)" opacity="0.6" />
      <path
        d="M22 92 Q40 78 58 92 L54 96 Q40 84 26 96Z"
        fill="var(--gold)"
        stroke="var(--gold-dark)"
        strokeWidth="0.5"
      />
      <g style={reduced ? undefined : { animation: "flame-flicker 0.45s ease-in-out infinite" }}>
        <path
          d="M40 78 Q36 68 40 58 Q44 68 40 78"
          fill="var(--turmeric-yellow)"
          opacity="0.95"
        />
        <path d="M40 72 Q38 64 40 60 Q42 64 40 72" fill="#fff5cc" opacity="0.9" />
      </g>
    </svg>
  );
}
