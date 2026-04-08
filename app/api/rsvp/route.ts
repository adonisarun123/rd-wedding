import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendRsvpEmail, type RsvpEntry } from "@/lib/rsvp-email";

export const runtime = "nodejs";

type Body = {
  name: string;
  guests: number;
  attending: string;
  message?: string;
};

const isVercel = process.env.VERCEL === "1";

function hasEmailConfig(): boolean {
  return Boolean(
    process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.RSVP_NOTIFY_EMAIL?.trim()
  );
}

async function saveLocalJson(entry: RsvpEntry): Promise<void> {
  const file = path.join(process.cwd(), "data", "rsvp.json");
  await fs.mkdir(path.dirname(file), { recursive: true });
  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(file, "utf-8");
    existing = JSON.parse(raw) as unknown[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(entry);
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const entry: RsvpEntry = {
    name: body.name.trim(),
    guests: Number(body.guests) || 1,
    attending: body.attending || "both",
    message: body.message,
    at: new Date().toISOString(),
  };

  if (hasEmailConfig()) {
    try {
      await sendRsvpEmail(entry);
    } catch (e) {
      console.error("[api/rsvp] email failed", e);
      return NextResponse.json(
        {
          error:
            "We could not send your RSVP by email. Please try again in a moment or contact the hosts directly.",
        },
        { status: 502 }
      );
    }
  } else if (isVercel) {
    return NextResponse.json(
      {
        error:
          "RSVP is not configured yet. The hosts should set SMTP_USER, SMTP_PASS, and RSVP_NOTIFY_EMAIL on Vercel.",
      },
      { status: 503 }
    );
  } else {
    try {
      await saveLocalJson(entry);
    } catch (e) {
      console.error("[api/rsvp] local save failed", e);
      return NextResponse.json(
        { error: "Could not save RSVP locally." },
        { status: 503 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
