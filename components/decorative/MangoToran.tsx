"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

export function MangoToran({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={className}
      style={
        reduced
          ? undefined
          : {
              animation: "toran-sway 6s ease-in-out infinite",
              transformOrigin: "top center",
            }
      }
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 48" className="w-full h-12 md:h-16" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leafG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--banana-leaf-green)" />
            <stop offset="100%" stopColor="#3d7a36" />
          </linearGradient>
        </defs>
        {Array.from({ length: 24 }).map((_, i) => {
          const x = i * 16.5 + 4;
          return (
            <g key={i} transform={`translate(${x} 8) rotate(${i % 2 === 0 ? -18 : 18})`}>
              <ellipse cx="6" cy="14" rx="5" ry="12" fill="url(#leafG)" opacity="0.92" />
              <ellipse cx="6" cy="14" rx="2" ry="10" fill="#1a3d16" opacity="0.25" />
            </g>
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={`f-${i}`}
            cx={20 + i * 32}
            cy="6"
            r="5"
            fill="var(--turmeric-yellow)"
            opacity="0.85"
          />
        ))}
        {/* Kanakambaram (crossandra) dots — classic orange with jasmine green */}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle
            key={`k-${i}`}
            cx={12 + i * 32}
            cy="11"
            r="2.8"
            fill="#d8562a"
            fillOpacity="0.78"
          />
        ))}
      </svg>
    </div>
  );
}
