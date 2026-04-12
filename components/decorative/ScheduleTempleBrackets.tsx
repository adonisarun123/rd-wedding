"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

/** Slim temple-inspired flourishes beside the itinerary — low contrast, slow opacity pulse. */
export function ScheduleTempleBrackets() {
  const reduced = useReducedMotion();

  const bracket = (
    <svg viewBox="0 0 48 200" className="h-[11rem] w-10 sm:h-[12.5rem]" aria-hidden="true">
      <path
        d="M28 8 C8 48 8 88 22 100 C8 112 8 152 28 192"
        fill="none"
        stroke="var(--sage-deep)"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.38"
      />
      <path
        d="M32 24 Q18 52 26 76 M26 124 Q18 148 32 176"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="26" cy="100" r="2.5" fill="var(--terracotta)" fillOpacity="0.28" />
    </svg>
  );

  const motionClass = reduced ? "" : "animate-temple-bracket-pulse";

  return (
    <>
      <div
        className={`pointer-events-none absolute -left-1 top-[6.5rem] hidden opacity-90 lg:block xl:left-0 ${motionClass}`}
      >
        {bracket}
      </div>
      <div
        className={`pointer-events-none absolute -right-1 top-[6.5rem] hidden scale-x-[-1] opacity-90 lg:block xl:right-0 ${motionClass}`}
      >
        {bracket}
      </div>
    </>
  );
}
