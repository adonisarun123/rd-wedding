export function BananaPlant({ side = "left" }: { side?: "left" | "right" }) {
  const flip = side === "right" ? "scale(-1,1)" : undefined;
  return (
    <svg
      className="pointer-events-none text-[var(--banana-leaf-green)] opacity-80"
      style={{ transform: flip, transformOrigin: "center" }}
      viewBox="0 0 80 200"
      width="72"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M40 200 L36 140 Q34 100 38 60 Q42 30 48 8" stroke="currentColor" strokeWidth="3" fill="none" />
      <ellipse cx="28" cy="50" rx="22" ry="48" fill="currentColor" opacity="0.35" transform="rotate(-25 28 50)" />
      <ellipse cx="52" cy="70" rx="20" ry="52" fill="currentColor" opacity="0.4" transform="rotate(20 52 70)" />
      <ellipse cx="34" cy="110" rx="18" ry="44" fill="currentColor" opacity="0.3" transform="rotate(-15 34 110)" />
    </svg>
  );
}
