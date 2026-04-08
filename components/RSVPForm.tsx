"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Attending = "reception" | "wedding" | "both" | "unable";

export function RSVPForm() {
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

  return (
    <section
      className="bg-[var(--rose-tint)] px-4 py-16"
      aria-label="RSVP"
    >
      <div className="mx-auto max-w-lg">
        <h2 className="text-center font-[family-name:var(--font-yatra)] text-2xl text-[var(--deep-red)] md:text-3xl">
          We&apos;d love to have you bless the couple
        </h2>
        <p className="mt-3 text-center font-[family-name:var(--font-cormorant)] text-[var(--text-muted)]">
          Kindly let us know if you can join us.
        </p>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 flex flex-col items-center text-center"
            >
              <motion.svg
                viewBox="0 0 120 120"
                className="h-32 w-32 text-[var(--lotus-pink)]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                aria-hidden="true"
              >
                <motion.path
                  d="M60 20 C40 50 30 70 60 100 C90 70 80 50 60 20"
                  fill="currentColor"
                  opacity="0.85"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.path
                  d="M60 35 C48 55 45 72 60 88 C75 72 72 55 60 35"
                  fill="var(--gold-light)"
                  opacity="0.9"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ transformOrigin: "60px 60px" }}
                />
              </motion.svg>
              <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-[var(--deep-red)]">
                Thank you — we cherish your blessings.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              className="mt-10 space-y-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <label htmlFor="rsvp-name" className="block font-[family-name:var(--font-cormorant)] text-sm font-semibold text-[var(--text-dark)]">
                  Name
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-kolam-underline mt-1"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="rsvp-guests" className="block font-[family-name:var(--font-cormorant)] text-sm font-semibold text-[var(--text-dark)]">
                  Number of guests
                </label>
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="input-kolam-underline mt-1 bg-transparent"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="font-[family-name:var(--font-cormorant)] text-sm font-semibold text-[var(--text-dark)]">
                  Attending
                </legend>
                <div className="mt-3 space-y-3">
                  {(
                    [
                      ["reception", "Reception"],
                      ["wedding", "Wedding"],
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
                        className="h-5 w-5 accent-[var(--deep-red)]"
                      />
                      <span className="font-[family-name:var(--font-cormorant)] text-[var(--text-muted)]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="rsvp-msg" className="block font-[family-name:var(--font-cormorant)] text-sm font-semibold text-[var(--text-dark)]">
                  Message for the couple (optional)
                </label>
                <textarea
                  id="rsvp-msg"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="input-kolam-underline mt-1 resize-y"
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
                className="w-full min-h-12 rounded-full bg-[var(--gold)] px-6 py-3 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--deep-red)] shadow disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Submit RSVP"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
