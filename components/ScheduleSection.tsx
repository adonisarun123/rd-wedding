"use client";

import { motion } from "framer-motion";
import { downloadIcs } from "@/lib/calendar";
import { getMapsDirectionsUrl, getVenueLine } from "@/lib/utils";
import { FloralRule } from "./decorative/FloralRule";

const venue = getVenueLine();

const events = [
  {
    key: "reception",
    title: "Reception",
    subtitle: "Welcome gathering",
    dateDisplay: "6",
    monthYear: "June 2026",
    weekday: "Saturday",
    time: "7:00 PM onwards",
    notes: venue,
    ics: "reception" as const,
    accent: "from-[var(--sage)] to-[var(--sage-deep)]",
    icon: "evening",
  },
  {
    key: "kalyanam",
    title: "Kalyanam",
    subtitle: "Sacred ceremony",
    dateDisplay: "7",
    monthYear: "June 2026",
    weekday: "Sunday",
    time: "Muhurtham 7:35 – 8:30 AM",
    extra: "Breakfast from 7:00 AM",
    notes: venue,
    ics: "ceremony" as const,
    accent: "from-[var(--terracotta)] to-[#7a3a32]",
    highlight: true,
    icon: "sun",
  },
];

function EventIcon({ type }: { type: string }) {
  if (type === "sun") {
    return (
      <svg className="h-8 w-8 text-[var(--wheat)]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 4v2M16 26v2M4 16h2M26 16h2M7 7l1.5 1.5M23.5 23.5L25 25M25 7l-1.5 1.5M8.5 23.5L7 25"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  /* Evening reception — crescent moon & stars (no face / “sad smiley” read) */
  return (
    <svg className="h-8 w-8 text-[var(--wheat-light)]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5 5.1 8.4l2 .15L5.5 9.9l.65 1.95L4 10.7l-1.15.7.65-1.95-1.6-1.35 2-.15.65-1.9Z"
        fill="currentColor"
        fillOpacity="0.55"
      />
      <path
        d="M10.5 17.2l.35 1 1.05.1-.8.6.3 1-.95-.55-.95.55.3-1-.8-.6 1.05-.1.35-1Z"
        fill="currentColor"
        fillOpacity="0.42"
      />
      <circle cx="18.5" cy="16.5" r="0.85" fill="currentColor" fillOpacity="0.48" />
    </svg>
  );
}

export function ScheduleSection() {
  return (
    <section
      className="relative scroll-mt-4 py-14 sm:py-16 md:py-20"
      aria-labelledby="schedule-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--sage-deep)]">
          Save the dates
        </p>
        <h2
          id="schedule-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl"
        >
          Celebrations
        </h2>
        <div className="mt-6 flex justify-center">
          <FloralRule />
        </div>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          Two moments we hope you&apos;ll share with us — reception festivities and the morning
          muhurtham.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
        {events.map((ev, i) => (
          <motion.article
            key={ev.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="invite-card relative flex flex-col overflow-hidden text-left"
          >
            <div
              className={`h-1.5 w-full bg-gradient-to-r ${ev.accent}`}
              aria-hidden="true"
            />
            {ev.highlight ? (
              <div className="absolute right-4 top-5 rounded-full bg-[var(--terracotta-soft)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent)]">
                Muhurtham
              </div>
            ) : null}

            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-[1.65rem]">
                    {ev.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-[var(--sage-deep)]">{ev.subtitle}</p>
                </div>
                <EventIcon type={ev.icon} />
              </div>

              <div className="mt-8 flex flex-wrap items-end gap-2 border-b border-[var(--border)] pb-8">
                <span className="font-display text-5xl font-semibold leading-none tabular-nums text-[var(--text)] sm:text-6xl">
                  {ev.dateDisplay}
                </span>
                <div className="mb-1.5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {ev.monthYear}
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">{ev.weekday}</p>
                </div>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
                    Time
                  </dt>
                  <dd className="mt-1 text-base text-[var(--text)]">{ev.time}</dd>
                  {"extra" in ev && ev.extra ? (
                    <dd className="mt-1 text-sm text-[var(--text-muted)]">{ev.extra}</dd>
                  ) : null}
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
                    Venue
                  </dt>
                  <dd className="mt-1 leading-relaxed text-[var(--text-muted)]">{ev.notes}</dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <button
                  type="button"
                  onClick={() => downloadIcs(ev.ics)}
                  className="h-11 flex-1 rounded-lg bg-[var(--text)] px-4 text-sm font-semibold text-[var(--surface)] transition hover:bg-[var(--sage-deep)] min-[420px]:flex-none"
                >
                  Add to calendar
                </button>
                <a
                  href={getMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-transparent px-4 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--sage-soft)] min-[420px]:flex-none"
                >
                  Directions
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <button
          type="button"
          onClick={() => downloadIcs("both")}
          className="h-12 rounded-full border-2 border-[var(--sage-mist)] bg-[var(--surface-elevated)] px-8 text-sm font-semibold text-[var(--sage-deep)] shadow-sm transition hover:border-[var(--sage)] hover:bg-[var(--sage-soft)]"
        >
          Download both events (.ics)
        </button>
      </motion.div>

      {/* Refined detail table — desktop supplement */}
      <div className="r-table-wrap mx-auto mt-14 hidden max-w-4xl lg:block">
        <table className="r-table">
          <thead>
            <tr>
              <th scope="col">Occasion</th>
              <th scope="col">When</th>
              <th scope="col">Where</th>
              <th scope="col" className="text-right">
                Quick links
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={`row-${ev.key}`}>
                <td className="font-semibold text-[var(--text)]">{ev.title}</td>
                <td className="text-[var(--text-muted)]">
                  <span className="r-table-mono block">{ev.weekday.slice(0, 3)},</span>
                  <span className="r-table-mono">
                    {ev.dateDisplay} {ev.monthYear.split(" ")[0]} {ev.monthYear.split(" ")[1]}
                  </span>
                  <span className="mt-1 block text-sm">{ev.time}</span>
                </td>
                <td className="max-w-xs text-sm text-[var(--text-muted)]">{venue}</td>
                <td className="text-right">
                  <button
                    type="button"
                    onClick={() => downloadIcs(ev.ics)}
                    className="text-sm font-semibold text-[var(--terracotta)] underline decoration-[var(--sage-mist)] underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Calendar file
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
