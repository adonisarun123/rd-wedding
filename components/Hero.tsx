"use client";

import { motion } from "framer-motion";
import { FloralRule } from "./decorative/FloralRule";
import { BrideGroomIcon } from "./decorative/BrideGroomIcon";
import { HeroLotus } from "./decorative/HeroLotus";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroCornerFrame() {
  const corner =
    "pointer-events-none absolute h-9 w-9 border-[var(--gold)] opacity-[0.42]";
  return (
    <div className="pointer-events-none absolute inset-[11px] rounded-xl sm:inset-[13px]" aria-hidden="true">
      <span className={`${corner} left-0 top-0 rounded-tl-xl border-l-2 border-t-2`} />
      <span className={`${corner} right-0 top-0 rounded-tr-xl border-r-2 border-t-2`} />
      <span className={`${corner} bottom-0 left-0 rounded-bl-xl border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 rounded-br-xl border-b-2 border-r-2`} />
    </div>
  );
}

export function Hero() {
  return (
    <header
      className="relative overflow-x-hidden border-b border-[var(--border-strong)]/80"
      aria-label="Welcome"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#ebe4d8] via-[var(--surface)] to-[var(--bg-page)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-8%,rgba(196,165,116,0.22),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(156,77,62,0.06),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 48px,
            rgba(184, 149, 76, 0.04) 48px,
            rgba(184, 149, 76, 0.04) 49px
          )`,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[var(--wheat)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-24 h-64 w-64 rounded-full bg-[var(--terracotta-soft)]/50 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,42rem)] -translate-x-1/2 bg-gradient-to-b from-[var(--gold-light)]/25 to-transparent blur-2xl" />

      <HeroLotus />

      <div className="relative z-[2] mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16 md:py-[4.5rem]">
        <div className="hero-invite-perspective mx-auto w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut }}
            className="hero-invite-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-[0.12]"
              style={{
                background:
                  "radial-gradient(ellipse 120% 80% at 50% 0%, var(--terracotta-soft), transparent 55%)",
              }}
              aria-hidden="true"
            />
            <HeroCornerFrame />

            <div className="relative flex justify-center">
              <div
                className="flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full bg-gradient-to-b from-white via-[var(--surface)] to-[var(--sage-soft)]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_16px_rgba(42,38,34,0.08),0_14px_32px_rgba(156,77,62,0.1)] ring-2 ring-[var(--gold)]/30 ring-offset-[3px] ring-offset-[#fdfbf7] sm:h-[5.75rem] sm:w-[5.75rem]"
                aria-hidden="true"
              >
                <BrideGroomIcon className="h-[2.85rem] w-[3.35rem] text-[var(--sage-deep)] opacity-[0.92] sm:h-[3.1rem] sm:w-[3.65rem]" />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="relative mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-subtle)] sm:text-xs"
            >
              Cordially invited by
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.68, ease: easeOut }}
              className="font-invite relative mt-4 text-[1.65rem] font-semibold leading-snug tracking-tight text-[var(--text)] [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_2px_24px_rgba(42,38,34,0.07)] sm:text-3xl md:text-[2.125rem] md:leading-tight"
            >
              V. Udaykumar{" "}
              <span className="mx-1 inline-block font-display text-[var(--wheat)] drop-shadow-sm">
                &
              </span>{" "}
              U. Thamizharasi
            </motion.h1>

            <div className="relative mt-8">
              <FloralRule />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.55 }}
              className="relative mx-auto mt-8 max-w-md text-[0.95rem] leading-[1.75] text-[var(--text-muted)] sm:text-base"
            >
              Request the pleasure of your company at the wedding celebration of their beloved
              daughter.
            </motion.p>

            <p className="relative mt-6 font-display text-sm italic text-[var(--sage-deep)] [text-shadow:0_1px_0_rgba(255,255,255,0.6)] opacity-95">
              With blessings · Shubham
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
