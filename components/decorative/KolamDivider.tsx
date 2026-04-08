"use client";

import { motion, useReducedMotion } from "framer-motion";

export function KolamDivider({
  variant = "medium",
  className = "",
}: {
  variant?: "simple" | "medium";
  className?: string;
}) {
  const reduced = useReducedMotion();

  const d =
    variant === "simple"
      ? "M4 12 L20 12 M12 4 L12 20 M8 8 L16 16 M16 8 L8 16"
      : "M2 14 Q30 2 58 14 T114 14 M10 22 Q40 10 70 22 T130 22 M6 30 Q36 18 66 30 T126 30";

  return (
    <motion.svg
      viewBox={variant === "simple" ? "0 0 24 24" : "0 0 132 36"}
      className={`${variant === "simple" ? "mx-auto h-6 w-24 text-[var(--kolam-brown)]" : "mx-auto h-8 w-full max-w-md text-[var(--kolam-brown)]"} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={variant === "simple" ? 1.2 : 1}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        initial={reduced ? false : { pathLength: 0, opacity: 0.4 }}
        whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
