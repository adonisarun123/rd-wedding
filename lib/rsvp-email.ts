import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const attendingLabels: Record<string, string> = {
  reception: "Reception only",
  wedding: "Wedding ceremony only",
  both: "Both reception and wedding",
  unable: "Unable to attend",
};

export type RsvpEntry = {
  name: string;
  guests: number;
  attending: string;
  message?: string;
  at: string;
};

function normalizeAppPassword(pass: string): string {
  return pass.replace(/\s+/g, "");
}

export async function sendRsvpEmail(entry: RsvpEntry): Promise<void> {
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER?.trim();
  const passRaw = process.env.SMTP_PASS?.trim();
  const toRaw = process.env.RSVP_NOTIFY_EMAIL;

  if (!user || !passRaw || !toRaw?.trim()) {
    throw new Error("Missing SMTP_USER, SMTP_PASS, or RSVP_NOTIFY_EMAIL");
  }

  const pass = normalizeAppPassword(passRaw);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const to = toRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const from =
    process.env.RSVP_FROM_EMAIL?.trim() ||
    `Wedding RSVP <${user}>`;

  const attendingLabel = attendingLabels[entry.attending] ?? entry.attending;

  const html = `
<!DOCTYPE html><html><body style="font-family:Georgia,serif;line-height:1.5;color:#2c1810">
  <h2 style="color:#8b1a1a">New wedding RSVP</h2>
  <p><strong>Name:</strong> ${escapeHtml(entry.name)}</p>
  <p><strong>Number of guests:</strong> ${entry.guests}</p>
  <p><strong>Attending:</strong> ${escapeHtml(attendingLabel)}</p>
  ${
    entry.message
      ? `<p><strong>Message:</strong><br>${escapeHtml(entry.message).replace(/\n/g, "<br>")}</p>`
      : ""
  }
  <p style="color:#5c4033;font-size:13px">Received (UTC): ${escapeHtml(entry.at)}</p>
</body></html>`;

  await transporter.sendMail({
    from,
    to,
    subject: `Wedding RSVP — ${entry.name}`,
    html,
  });
}
