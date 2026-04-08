export function Parrot({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="22" cy="26" rx="14" ry="12" fill="#2d8a3e" />
      <circle cx="30" cy="22" r="8" fill="#3cb371" />
      <path d="M34 20 L42 16 L38 24 Z" fill="#f4a020" />
      <circle cx="32" cy="20" r="2" fill="#1a1a1a" />
      <path d="M12 28 Q6 34 8 42 Q14 38 16 32" fill="#228b22" opacity="0.9" />
    </svg>
  );
}
