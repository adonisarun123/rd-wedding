function formatIcsDate(d: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

function istToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): Date {
  const str = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
  return new Date(str + "+05:30");
}

import { VENUE_FULL_ADDRESS } from "@/lib/utils";

const LOCATION = VENUE_FULL_ADDRESS;

export function buildIcs(which: "reception" | "ceremony" | "both"): string {
  const uidBase = "rd-wedding-2026";
  const events: string[] = [];

  if (which === "reception" || which === "both") {
    const start = istToUtc(2026, 6, 6, 19, 0);
    const end = istToUtc(2026, 6, 6, 23, 0);
    events.push(`BEGIN:VEVENT
UID:${uidBase}-reception@wedding
DTSTAMP:${formatIcsDate(new Date())}
DTSTART:${formatIcsDate(start)}
DTEND:${formatIcsDate(end)}
SUMMARY:Reception — Roopashri & Dhakshinamoorthy
DESCRIPTION:Cordially invited. Reception at KNT Kalyana Mantapa.
LOCATION:${LOCATION}
END:VEVENT`);
  }

  if (which === "ceremony" || which === "both") {
    const start = istToUtc(2026, 6, 7, 7, 35);
    const end = istToUtc(2026, 6, 7, 8, 30);
    events.push(`BEGIN:VEVENT
UID:${uidBase}-kalyanam@wedding
DTSTAMP:${formatIcsDate(new Date())}
DTSTART:${formatIcsDate(start)}
DTEND:${formatIcsDate(end)}
SUMMARY:Kalyanam — Roopashri & Dhakshinamoorthy
DESCRIPTION:Muhurtham. Wedding ceremony at KNT Kalyana Mantapa.
LOCATION:${LOCATION}
END:VEVENT`);
  }

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//R&D Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Roopashri & Dhakshinamoorthy
${events.join("\n")}
END:VCALENDAR
`.replace(/\n/g, "\r\n");
}

export function downloadIcs(which: "reception" | "ceremony" | "both"): void {
  const ics = buildIcs(which);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = which === "both" ? "wedding-events.ics" : `${which}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
