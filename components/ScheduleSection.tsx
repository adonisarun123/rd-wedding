"use client";

import { downloadIcs } from "@/lib/calendar";
import { getMapsDirectionsUrl, getVenueLine } from "@/lib/utils";

const venue = getVenueLine();

const rows = [
  {
    event: "Reception",
    date: "Sat, 6 Jun 2026",
    time: "7:00 PM onwards",
    notes: venue,
    ics: "reception" as const,
  },
  {
    event: "Kalyanam (ceremony)",
    date: "Sun, 7 Jun 2026",
    time: "Muhurtham 7:35–8:30 AM · Breakfast from 7:00 AM",
    notes: venue,
    ics: "ceremony" as const,
  },
];

export function ScheduleSection() {
  return (
    <section className="scroll-mt-4 px-0 py-10 md:py-12" aria-labelledby="schedule-heading">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="schedule-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl"
          >
            Schedule
          </h2>
          <p className="mt-1 max-w-xl text-sm text-[var(--text-muted)] md:text-base">
            Key dates and times. Add each event to your calendar or open directions in one tap.
          </p>
        </div>
        <button
          type="button"
          onClick={() => downloadIcs("both")}
          className="h-11 shrink-0 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
        >
          Download both (.ics)
        </button>
      </div>

      {/* Desktop / tablet: table */}
      <div className="r-table-wrap hidden md:block">
        <table className="r-table">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Date</th>
              <th scope="col">Time & details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.event}>
                <td className="font-semibold text-[var(--text)]">{row.event}</td>
                <td className="r-table-mono text-[var(--text-muted)]">{row.date}</td>
                <td className="max-w-md text-[var(--text-muted)]">
                  <span className="block text-[var(--text)]">{row.time}</span>
                  <span className="mt-1 block text-sm">{row.notes}</span>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => downloadIcs(row.ics)}
                      className="h-9 rounded-md bg-[var(--accent)] px-3 text-xs font-semibold text-white transition hover:bg-[var(--accent-hover)]"
                    >
                      Calendar
                    </button>
                    <a
                      href={getMapsDirectionsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-md border border-[var(--border-strong)] px-3 text-xs font-semibold text-[var(--text)] hover:bg-[var(--surface-muted)]"
                    >
                      Directions
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards (tabular data, single column) */}
      <ul className="space-y-4 md:hidden">
        {rows.map((row) => (
          <li
            key={row.event}
            className="section-panel divide-y divide-[var(--border)] overflow-hidden rounded-xl"
          >
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 px-4 py-3 text-sm">
              <span className="font-medium text-[var(--text-subtle)]">Event</span>
              <span className="font-semibold text-[var(--text)]">{row.event}</span>
              <span className="font-medium text-[var(--text-subtle)]">Date</span>
              <span className="r-table-mono text-[var(--text-muted)]">{row.date}</span>
              <span className="font-medium text-[var(--text-subtle)]">Time</span>
              <span className="text-[var(--text)]">{row.time}</span>
              <span className="font-medium text-[var(--text-subtle)]">Venue</span>
              <span className="text-[var(--text-muted)]">{row.notes}</span>
            </div>
            <div className="flex flex-wrap gap-2 bg-[var(--surface-muted)] px-4 py-3">
              <button
                type="button"
                onClick={() => downloadIcs(row.ics)}
                className="h-10 flex-1 rounded-lg bg-[var(--accent)] text-sm font-semibold text-white min-[400px]:flex-none min-[400px]:px-4"
              >
                Add to calendar
              </button>
              <a
                href={getMapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold text-[var(--text)] min-[400px]:flex-none min-[400px]:px-4"
              >
                Directions
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
