"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMemo } from "react";

type PetalSpec = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  scale: number;
  hue: "blush" | "cream" | "sage" | "jasmine" | "rose" | "deepRose";
};

const hues = {
  blush: "text-[#d4a5a5]",
  cream: "text-[#e8dcc8]",
  sage: "text-[#b8c4a8]",
  jasmine: "text-[#f5edd8]",
  rose: "text-[#e8a0b0]",
  deepRose: "text-[#c45c6a]",
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

const dotFills = ["#f0e6a8", "#f5c6cf", "#e8a0b0", "#f5edd8", "#e8b4c4", "#d4a5a5"];

function ConfettiDot({ spec }: { spec: PetalSpec }) {
  const fill = dotFills[spec.id % dotFills.length];
  return (
    <div
      className="pointer-events-none fixed top-0 rounded-full shadow-sm will-change-transform"
      style={{
        backgroundColor: fill,
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
    const huesList: PetalSpec["hue"][] = [
      "rose",
      "deepRose",
      "blush",
      "cream",
      "sage",
      "jasmine",
    ];
    return Array.from({ length: 38 }, (_, i) => ({
      id: i,
      left: `${3 + ((i * 17) % 94)}%`,
      delay: (i * 0.21) % 10,
      duration: 14 + (i % 7) * 2.1,
      scale: 0.75 + (i % 6) * 0.18,
      hue: huesList[i % huesList.length],
    }));
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i + 100,
        left: `${5 + ((i * 19) % 90)}%`,
        delay: (i * 0.31) % 7,
        duration: 11 + (i % 5) * 1.9,
        scale: 0.75 + (i % 3) * 0.25,
        hue: (i % 3 === 0 ? "deepRose" : i % 3 === 1 ? "rose" : "jasmine") as PetalSpec["hue"],
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
