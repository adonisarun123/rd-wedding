export function TempleSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      data-temple-silhouette
      className={className}
      viewBox="0 0 200 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        opacity="0.12"
        d="M100 4 L88 18 H72 L64 28 H48 L40 38 H24 L16 52 V116 H184 V52 L176 38 H160 L152 28 H136 L128 18 H112 Z"
      />
      <path
        opacity="0.08"
        d="M100 20 L94 28 H86 L82 34 H74 L70 40 H62 L58 48 H50 L46 56 H38 V108 H162 V56 L154 48 L150 40 H142 L138 34 H130 L126 28 H118 L112 20 Z"
      />
      <rect x="88" y="72" width="24" height="44" opacity="0.1" />
    </svg>
  );
}
