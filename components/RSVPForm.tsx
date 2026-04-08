"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

type Attending = "reception" | "wedding" | "both" | "unable";

type RSVPFormProps = {
  embedded?: boolean;
};

export function RSVPForm({ embedded }: RSVPFormProps) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<Attending>("both");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          guests: Number(guests),
          attending,
          message: message.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  const shell = (children: ReactNode) =>
    embedded ? (
      <div className="section-panel p-5 md:p-6" aria-label="RSVP">
        {children}
      </div>
    ) : (
      <section className="bg-[var(--accent-soft)] px-4 py-16" aria-label="RSVP">
        <div className="mx-auto max-w-lg">{children}</div>
      </section>
    );

  return shell(
    <>
      <h2 className="font-display text-xl font-semibold text-[var(--text)] md:text-2xl">
        RSVP
      </h2>
      <p className="mt-2 text-sm text-[var(--text-muted)] md:text-base">
        We&apos;d love to know if you can join us.
      </p>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-6 text-center"
          >
            <p className="text-lg font-semibold text-[var(--text)]">Thank you</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Your response was recorded. We cherish your blessings.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            className="mt-8 space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div>
              <label htmlFor="rsvp-name" className="block text-sm font-semibold text-[var(--text)]">
                Name
              </label>
              <input
                id="rsvp-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-modern mt-1.5"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="rsvp-guests" className="block text-sm font-semibold text-[var(--text)]">
                Number of guests
              </label>
              <select
                id="rsvp-guests"
                name="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="input-modern mt-1.5"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <fieldset>
              <legend className="text-sm font-semibold text-[var(--text)]">Attending</legend>
              <div className="mt-3 space-y-2.5">
                {(
                  [
                    ["reception", "Reception"],
                    ["wedding", "Wedding ceremony"],
                    ["both", "Both"],
                    ["unable", "Unable to attend"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="attending"
                      value={value}
                      checked={attending === value}
                      onChange={() => setAttending(value)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm text-[var(--text-muted)]">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="rsvp-msg" className="block text-sm font-semibold text-[var(--text)]">
                Message (optional)
              </label>
              <textarea
                id="rsvp-msg"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="input-modern mt-1.5 resize-y"
              />
            </div>

            {error ? (
              <p className="text-sm text-[var(--vermillion)]" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="h-12 w-full rounded-lg bg-[var(--accent)] text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Submit RSVP"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
