"use client";

import { motion } from "framer-motion";
import {
  getMapsDirectionsUrl,
  getMapsEmbedUrl,
  getMapsPlaceUrl,
  getVenueAddressLines,
} from "@/lib/utils";

export function VenueMap() {
  const embed = getMapsEmbedUrl();

  return (
    <section
      className="bg-[var(--white-silk)] px-4 py-16"
      aria-label="Venue and map"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="text-center font-[family-name:var(--font-yatra)] text-2xl text-[var(--deep-red)] md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Venue
        </motion.h2>
        <address className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-lg not-italic leading-relaxed text-[var(--text-muted)]">
          {getVenueAddressLines().map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <motion.div
          className="relative mt-8 overflow-hidden rounded-xl border-4 border-[var(--banana-leaf-green)] shadow-lg"
          style={{
            boxShadow: "0 0 0 3px var(--gold), 0 12px 40px rgba(0,0,0,0.12)",
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          <div className="aspect-video w-full bg-[var(--temple-cream)]">
            <iframe
              title="KNT Kalyana Mantapa map"
              src={embed}
              className="h-full w-full border-0 grayscale-[20%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={getMapsDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-[200px] items-center justify-center rounded-full bg-[var(--gold)] px-8 py-3 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--deep-red)] shadow-md"
          >
            Get Directions
          </a>
          <a
            href={getMapsPlaceUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-[200px] items-center justify-center rounded-full border-2 border-[var(--deep-red)] px-8 py-3 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--deep-red)]"
          >
            View on Maps
          </a>
        </div>
      </div>
    </section>
  );
}
