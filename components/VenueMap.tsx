"use client";

import {
  getMapsDirectionsUrl,
  getMapsEmbedUrl,
  getMapsPlaceUrl,
  getVenueAddressLines,
} from "@/lib/utils";

type VenueMapProps = {
  /** When true, omits outer section padding (for use inside a parent grid). */
  embedded?: boolean;
};

export function VenueMap({ embedded }: VenueMapProps) {
  const embed = getMapsEmbedUrl();

  const inner = (
    <>
      <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--text)] md:text-2xl">
        Venue
      </h2>
      <address className="mt-3 text-sm not-italic leading-relaxed text-[var(--text-muted)] md:text-base">
        {getVenueAddressLines().map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="mt-5 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-muted)]">
        <div className="aspect-video w-full">
          <iframe
            title="KNT Kalyana Mantapa map"
            src={embed}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={getMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          Get directions
        </a>
        <a
          href={getMapsPlaceUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-muted)]"
        >
          Open in Google Maps
        </a>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className="section-panel p-5 md:p-6" aria-label="Venue and map">
        {inner}
      </div>
    );
  }

  return (
    <section
      className="bg-[var(--surface)] px-4 py-16"
      aria-label="Venue and map"
    >
      <div className="mx-auto max-w-3xl">{inner}</div>
    </section>
  );
}
