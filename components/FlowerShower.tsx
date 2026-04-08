"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMemo } from "react";

type PetalSpec = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  scale: number;
  hue: "blush" | "cream" | "sage" | "jasmine";
};

const hues = {
  blush: "text-[#d4a5a5]",
  cream: "text-[#e8dcc8]",
  sage: "text-[#b8c4a8]",
  jasmine: "text-[#f5edd8]",
};

function Petal({ spec }: { spec: PetalSpec }) {
  const color = hues[spec.hue];
  const swayDur = 4 + (spec.id % 4);
  return (
    <div
      className="pointer-events-none fixed top-0 z-[1] opacity-0"
      style={{
        left: spec.left,
        animation: `petal-fall-y ${spec.duration}s linear infinite`,
        animationDelay: `${spec.delay}s`,
      }}
      aria-hidden="true"
    >
      <div
        className={color}
        style={{
          animation: `petal-sway-inner ${swayDur}s ease-in-out infinite`,
          animationDelay: `${spec.delay * 0.3}s`,
        }}
      >
        <svg
          width={14 * spec.scale}
          height={18 * spec.scale}
          viewBox="0 0 14 18"
          fill="currentColor"
          className="drop-shadow-sm"
        >
          <path d="M7 0C4 4 1 8 1 12c0 3 2.5 6 6 6s6-3 6-6c0-4-3-8-6-12z" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}

/** Tiny jasmine / marigold dots */
function ConfettiDot({ spec }: { spec: PetalSpec }) {
  return (
    <div
      className="pointer-events-none fixed top-0 z-[1] rounded-full bg-[#f0e6a8] opacity-0 shadow-sm"
      style={{
        left: spec.left,
        width: 5 * spec.scale,
        height: 5 * spec.scale,
        animation: `petal-fall-y ${spec.duration * 0.85}s linear infinite`,
        animationDelay: `${spec.delay}s`,
      }}
      aria-hidden="true"
    />
  );
}

export function FlowerShower() {
  const reduced = useReducedMotion();

  const petals = useMemo((): PetalSpec[] => {
    const huesList: PetalSpec["hue"][] = ["blush", "cream", "sage", "jasmine"];
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: `${5 + ((i * 17) % 90)}%`,
      delay: (i * 0.35) % 8,
      duration: 18 + (i % 5) * 2.2,
      scale: 0.75 + (i % 4) * 0.15,
      hue: huesList[i % 4],
    }));
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i + 100,
        left: `${8 + ((i * 23) % 84)}%`,
        delay: (i * 0.5) % 6,
        duration: 14 + (i % 4) * 2,
        scale: 0.8,
        hue: "jasmine" as const,
      })),
    []
  );

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <Petal key={p.id} spec={p} />
      ))}
      {dots.map((d) => (
        <ConfettiDot key={d.id} spec={d} />
      ))}
    </div>
  );
}
