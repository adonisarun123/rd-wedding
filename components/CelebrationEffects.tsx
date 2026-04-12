"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMemo } from "react";

const SPARK_COLORS = [
  "#f6d365",
  "#ff9a9e",
  "#a8e6cf",
  "#c471f5",
  "#fa709a",
  "#fee140",
  "#fda085",
  "#84fab0",
];

type CrackerSpec = {
  id: number;
  leftPct: number;
  bottomPct: number;
  delay: number;
  duration: number;
};

function CrackerBurst({ spec }: { spec: CrackerSpec }) {
  return (
    <div
      className="pointer-events-none fixed will-change-transform"
      style={{
        left: `${spec.leftPct}%`,
        bottom: `${spec.bottomPct}%`,
        zIndex: 11,
        animation: `cracker-burst ${spec.duration}s ease-out infinite`,
        animationDelay: `${spec.delay}s`,
        transformOrigin: "center center",
      }}
      aria-hidden="true"
    >
      <div className="relative h-14 w-14">
        {Array.from({ length: 10 }).map((_, i) => {
          const deg = (i * 360) / 10;
          const c = SPARK_COLORS[(i + 3) % SPARK_COLORS.length];
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-1 w-3 rounded-full"
              style={{
                marginLeft: -6,
                marginTop: -2,
                transform: `rotate(${deg}deg) translateY(0)`,
                background: `linear-gradient(90deg, transparent, ${c}, transparent)`,
                opacity: 0.85,
              }}
            />
          );
        })}
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8e7] shadow-[0_0_12px_#fda085]" />
      </div>
    </div>
  );
}

export function CelebrationEffects() {
  const reduced = useReducedMotion();

  const crackers = useMemo((): CrackerSpec[] => {
    return [
      { id: 1, leftPct: 12, bottomPct: 6, delay: 0, duration: 5.5 },
      { id: 2, leftPct: 55, bottomPct: 4, delay: 1.8, duration: 6.2 },
      { id: 3, leftPct: 82, bottomPct: 8, delay: 3.1, duration: 5.8 },
      { id: 4, leftPct: 32, bottomPct: 3, delay: 4.4, duration: 6.5 },
    ];
  }, []);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 11 }}
      aria-hidden="true"
    >
      {crackers.map((c) => (
        <CrackerBurst key={c.id} spec={c} />
      ))}
    </div>
  );
}
