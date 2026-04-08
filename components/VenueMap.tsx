"use client";

import {
  getMapsDirectionsUrl,
  getMapsEmbedUrl,
  getMapsPlaceUrl,
  getVenueAddressLines,
} from "@/lib/utils";
import { FloralRule } from "./decorative/FloralRule";

type VenueMapProps = {
  embedded?: boolean;
};

export function VenueMap({ embedded }: VenueMapProps) {
  const embed = getMapsEmbedUrl();

  const inner = (
    <>
      <div className="text-center sm:text-left">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--sage-deep)]">
          Where to find us
        </p>
        <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          Venue
        </h2>
        <div className="mt-4 flex justify-center sm:justify-start">
          <FloralRule className="w-full justify-center sm:justify-start" />
        </div>
      </div>
      <address className="mt-6 text-sm not-italic leading-relaxed text-[var(--text-muted)] sm:text-base">
        {getVenueAddressLines().map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-inner">
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

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={getMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg bg-[var(--text)] px-5 text-sm font-semibold text-[var(--surface)] transition hover:bg-[var(--sage-deep)]"
        >
          Get directions
        </a>
        <a
          href={getMapsPlaceUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--sage-soft)]"
        >
          Open in Google Maps
        </a>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className="invite-card p-6 md:p-8" aria-label="Venue and map">
        {inner}
      </div>
    );
  }

  return (
    <section className="invite-card mx-auto max-w-4xl p-6 sm:p-8 md:p-10" aria-label="Venue and map">
      {inner}
    </section>
  );
}
