/** Minimal abstract bride & groom for the “Traditional celebration” card */
export function CoupleIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="140" cy="300" rx="100" ry="12" fill="var(--kolam-brown)" opacity="0.15" />
      {/* Groom */}
      <g transform="translate(155 88)">
        <ellipse cx="0" cy="0" rx="22" ry="26" fill="var(--temple-cream)" />
        <rect x="-28" y="28" width="56" height="95" rx="4" fill="#d4b896" />
        <rect x="-32" y="115" width="64" height="85" rx="2" fill="#c9a86c" />
        <path
          d="M-32 115 L-40 200 M32 115 L40 200"
          stroke="#b8955a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="38" rx="26" ry="8" fill="var(--gold)" opacity="0.5" />
        {/* Upward curve — smiling detail */}
        <path
          d="M-20 45 Q0 34 20 45"
          stroke="var(--banana-leaf-green)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* Bride */}
      <g transform="translate(95 92)">
        <ellipse cx="0" cy="0" rx="20" ry="24" fill="var(--temple-cream)" />
        <path
          d="M-35 28 Q-45 80 -50 140 Q-30 200 0 210 Q30 200 50 140 Q45 80 35 28 Z"
          fill="var(--vermillion)"
        />
        <path
          d="M-35 28 Q0 40 35 28 L38 45 Q0 60 -38 45Z"
          fill="var(--gold)"
          opacity="0.85"
        />
        <path d="M0 -35 Q8 -20 12 0" stroke="var(--gold)" strokeWidth="5" fill="none" />
        <circle cx="8" cy="-8" r="4" fill="var(--white-silk)" opacity="0.9" />
        <circle cx="-4" cy="-4" r="3" fill="var(--white-silk)" opacity="0.85" />
      </g>
      <path
        d="M120 180 Q140 200 165 175"
        stroke="var(--gold-dark)"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
