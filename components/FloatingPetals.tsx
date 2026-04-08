"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import { useEffect, useState } from "react";

const Petal = ({ delay, left, duration, small }: { delay: number; left: string; duration: number; small: boolean }) => (
  <div
    className="pointer-events-none fixed z-[5] text-[var(--lotus-pink)] opacity-40"
    style={{
      left,
      top: "-5vh",
      animation: `float-petal ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
      width: small ? 14 : 20,
      height: small ? 14 : 20,
    }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <path
        d="M12 2 C8 8 4 12 12 22 C20 12 16 8 12 2"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  </div>
);

export function FloatingPetals() {
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const fn = () => setMobile(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  if (reduced) return null;

  const count = mobile ? 2 : 4;

  return (
    <>
      {count >= 1 && <Petal delay={0} left="8%" duration={22} small={mobile} />}
      {count >= 2 && <Petal delay={6} left="78%" duration={28} small={mobile} />}
      {count >= 3 && <Petal delay={3} left="45%" duration={25} small={false} />}
      {count >= 4 && <Petal delay={12} left="92%" duration={30} small={false} />}
    </>
  );
}
