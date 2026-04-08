"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { downloadIcs } from "@/lib/calendar";
import { getMapsDirectionsUrl, getVenueLine } from "@/lib/utils";
import { KolamDivider } from "./decorative/KolamDivider";

type EventCardProps = {
  title: string;
  icon: ReactNode;
  dateLine: string;
  extraLines: { label: string; value: string; highlight?: boolean }[];
  icsKind: "reception" | "ceremony";
  variant?: "rose" | "cream";
  ornate?: boolean;
};

export function EventCard({
  title,
  icon,
  dateLine,
  extraLines,
  icsKind,
  variant = "cream",
  ornate = false,
}: EventCardProps) {
  const bg =
    variant === "rose" ? "bg-[var(--rose-tint)]" : "bg-[var(--temple-cream)]";

  return (
    <motion.article
      className={`relative mx-auto max-w-xl px-4 py-12 ${bg}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
    >
      <div className="mb-6 flex items-center justify-center gap-3">
        <span className="text-[var(--gold-dark)]" aria-hidden="true">
          {icon}
        </span>
        <h2 className="font-[family-name:var(--font-yatra)] text-2xl text-[var(--deep-red)] md:text-3xl">
          {title}
        </h2>
      </div>

      <KolamDivider variant="simple" />

      <div
        className={`mx-auto mt-8 max-w-md rounded-lg p-6 shadow-md md:p-8 ${
          ornate ? "border-4 border-double border-[var(--gold)]" : "border-2 border-[var(--gold)]"
        } bg-[var(--white-silk)]`}
        style={{ boxShadow: "0 12px 40px rgba(139,26,26,0.08)" }}
      >
        <p className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[var(--text-dark)] md:text-2xl">
          {dateLine}
        </p>
        <ul className="mt-4 space-y-3 font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-muted)]">
          {extraLines.map((line) => (
            <li key={line.label}>
              <span className="font-semibold text-[var(--text-dark)]">{line.label}: </span>
              <span
                className={
                  line.highlight
                    ? "text-[var(--vermillion)] font-semibold md:text-xl text-shimmer-gold"
                    : ""
                }
              >
                {line.value}
              </span>
            </li>
          ))}
          <li>
            <span className="font-semibold text-[var(--text-dark)]">Venue: </span>
            {getVenueLine()}
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <button
            type="button"
            onClick={() => downloadIcs(icsKind)}
            className="min-h-11 rounded-full border-2 border-[var(--gold-dark)] bg-[var(--gold-light)] px-6 py-2 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--deep-red)]"
          >
            Add to Calendar
          </button>
          <a
            href={getMapsDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--deep-red)] bg-[var(--deep-red)] px-6 py-2 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--gold-light)]"
          >
            Get Directions
          </a>
        </div>
      </div>

      <KolamDivider variant="simple" />
    </motion.article>
  );
}
