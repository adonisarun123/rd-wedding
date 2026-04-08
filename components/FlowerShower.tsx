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
      className="pointer-events-none fixed top-0 will-change-transform"
      style={{
        left: spec.left,
        zIndex: 12,
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        animation: `petal-fall-y ${spec.duration}s linear infinite`,
        animationDelay: `${spec.delay}s`,
        WebkitAnimation: `petal-fall-y ${spec.duration}s linear infinite`,
        WebkitAnimationDelay: `${spec.delay}s`,
      }}
      aria-hidden="true"
    >
      <div
        className={color}
        style={{
          opacity: 0.9,
          animation: `petal-sway-inner ${swayDur}s ease-in-out infinite`,
          animationDelay: `${spec.delay * 0.3}s`,
          WebkitAnimation: `petal-sway-inner ${swayDur}s ease-in-out infinite`,
          WebkitAnimationDelay: `${spec.delay * 0.3}s`,
        }}
      >
        <svg
          width={16 * spec.scale}
          height={20 * spec.scale}
          viewBox="0 0 14 18"
          fill="currentColor"
          className="drop-shadow-sm"
        >
          <path d="M7 0C4 4 1 8 1 12c0 3 2.5 6 6 6s6-3 6-6c0-4-3-8-6-12z" opacity="0.85" />
        </svg>
      </div>
    </div>
  );
}

function ConfettiDot({ spec }: { spec: PetalSpec }) {
  return (
    <div
      className="pointer-events-none fixed top-0 rounded-full bg-[#f0e6a8] shadow-sm will-change-transform"
      style={{
        left: spec.left,
        zIndex: 12,
        width: 6 * spec.scale,
        height: 6 * spec.scale,
        opacity: 0.85,
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        animation: `petal-fall-y ${spec.duration * 0.85}s linear infinite`,
        animationDelay: `${spec.delay}s`,
        WebkitAnimation: `petal-fall-y ${spec.duration * 0.85}s linear infinite`,
        WebkitAnimationDelay: `${spec.delay}s`,
      }}
      aria-hidden="true"
    />
  );
}

export function FlowerShower() {
  const reduced = useReducedMotion();

  const petals = useMemo((): PetalSpec[] => {
    const huesList: PetalSpec["hue"][] = ["blush", "cream", "sage", "jasmine"];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${4 + ((i * 19) % 92)}%`,
      delay: (i * 0.32) % 8,
      duration: 16 + (i % 5) * 2.4,
      scale: 0.85 + (i % 4) * 0.2,
      hue: huesList[i % 4],
    }));
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i + 100,
        left: `${6 + ((i * 21) % 88)}%`,
        delay: (i * 0.45) % 6,
        duration: 13 + (i % 4) * 2,
        scale: 0.9,
        hue: "jasmine" as const,
      })),
    []
  );

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 12 }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <Petal key={p.id} spec={p} />
      ))}
      {dots.map((d) => (
        <ConfettiDot key={d.id} spec={d} />
      ))}
    </div>
  );
}
