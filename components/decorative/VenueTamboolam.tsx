"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

/** Vethalai & pakku — small hospitality motif for the venue block. */
export function VenueTamboolam({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <span
      className={`inline-flex shrink-0 text-[var(--banana-leaf-green)] ${reduced ? "" : "animate-tamboolam-float"} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 56 40" className="h-9 w-[3.25rem] opacity-[0.88]" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 22 C6 10 18 6 26 12 C22 4 34 4 38 14 C46 8 52 18 48 28 C44 36 32 38 26 32 C18 40 6 34 6 22Z"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M10 26 C14 14 28 12 36 20 C40 12 50 20 46 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <ellipse cx="38" cy="24" rx="5" ry="3.2" fill="var(--bronze)" fillOpacity="0.45" />
        <ellipse cx="38" cy="24" rx="2.2" ry="1.4" fill="var(--wheat-light)" fillOpacity="0.5" />
      </svg>
    </span>
  );
}
