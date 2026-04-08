export function GaneshaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path
        d="M32 12c-4 0-7 2.5-8 6 1.5-1 3.5-1.5 5.5-1.2 2.8.4 5 2.5 6 5.2.8-2.2 2.5-4 5-5.2 2-.3 4 .2 5.5 1.2-1-3.5-4-6-8-6z"
        fill="currentColor"
        opacity="0.9"
      />
      <ellipse cx="32" cy="38" rx="14" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M24 34c2 2 4 3 8 3s6-1 8-3M28 42h8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M20 22 L16 18 M44 22 L48 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
