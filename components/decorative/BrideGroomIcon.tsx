/** Outline bride & groom for hero / headers */
export function BrideGroomIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 52 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 38V28c0-5 3-9 7-10.5M19 38V28c0-5-3-9-7-10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 20c2-3.5 5-5 6-5s4 1.5 6 5v18H6V20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 18c4-2.5 8-2.5 12 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="36" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M31 6.5c3-2 7-2 10 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M29 17h14v10H29V17Zm1.5 11L28 38h16l-2.5-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
