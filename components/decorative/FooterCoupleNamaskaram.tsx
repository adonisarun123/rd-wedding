"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

const sw = 2.6;
const stroke = "currentColor";

/**
 * Minimal sage line-art couple — arms fold to anjali (namaskaram), gentle bow, warm glow pulse.
 */
export function FooterCoupleNamaskaram({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  const bow = reduced ? "" : "animate-namaskaram-bow";
  const groomArm = reduced ? "namaskaram-arm-groom-static" : "animate-namaskaram-groom-arm";
  const brideArm = reduced ? "namaskaram-arm-bride-static" : "animate-namaskaram-bride-arm";
  const glow = reduced ? "namaskaram-glow-static" : "animate-namaskaram-glow";

  return (
    <div
      className={`mx-auto mt-10 flex justify-center text-[var(--sage-deep)] ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 124"
        className="h-[7.25rem] w-[min(100%,15.5rem)] drop-shadow-[0_2px_14px_rgba(107,117,98,0.18)] sm:h-[8.25rem] sm:w-[min(100%,17.5rem)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={bow} style={{ transformOrigin: "100px 72px" }}>
          {/* Groom */}
          <circle cx="40" cy="28" r="12" stroke={stroke} strokeWidth={sw} />
          <path
            d="M 26 42 L 26 102 Q 40 36 54 42 L 54 102"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 30 48 Q 38 62 32 78"
            stroke={stroke}
            strokeWidth={sw * 0.85}
            strokeLinecap="round"
            opacity="0.92"
          />

          {/* Bride */}
          <path
            d="M 148 18 Q 148 14 152 14 Q 156 14 156 18"
            stroke={stroke}
            strokeWidth={sw * 0.75}
            strokeLinecap="round"
          />
          <circle cx="148" cy="30" r="12" stroke={stroke} strokeWidth={sw} />
          <rect x="134" y="44" width="28" height="24" rx="1" stroke={stroke} strokeWidth={sw} />
          <path
            d="M 128 68 L 168 68 L 160 104 L 136 104 Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />

          <ellipse
            cx="100"
            cy="50"
            rx="11"
            ry="13"
            className={glow}
            fill="var(--terracotta-soft)"
            stroke="none"
          />

          <g className={groomArm}>
            <line x1="52" y1="46" x2="94" y2="52" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          </g>
          <g className={brideArm}>
            <line x1="136" y1="46" x2="94" y2="52" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
