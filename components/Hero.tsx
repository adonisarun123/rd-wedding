"use client";

import { motion } from "framer-motion";
import { FloralRule } from "./decorative/FloralRule";
import { GaneshaIcon } from "./decorative/GaneshaIcon";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <header
      className="relative overflow-hidden border-b border-[var(--border)]"
      aria-label="Welcome"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--sage-soft)]/80 via-[var(--surface)] to-[var(--bg-page)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--wheat-light)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[var(--sage-mist)]/30 blur-3xl" />

      <div className="relative z-[2] mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="invite-card mx-auto px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="flex justify-center">
            <GaneshaIcon className="h-11 w-11 text-[var(--sage-deep)] opacity-90 sm:h-12 sm:w-12" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-subtle)] sm:text-xs"
          >
            Cordially invited by
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: easeOut }}
            className="font-invite mt-4 text-[1.65rem] font-semibold leading-snug tracking-tight text-[var(--text)] sm:text-3xl md:text-[2.125rem] md:leading-tight"
          >
            V. Udaykumar{" "}
            <span className="mx-1 inline-block font-display text-[var(--wheat)]">&</span>{" "}
            U. Thamizharasi
          </motion.h1>

          <div className="mt-8">
            <FloralRule />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mx-auto mt-8 max-w-md text-[0.95rem] leading-[1.7] text-[var(--text-muted)] sm:text-base"
          >
            Request the pleasure of your company at the wedding celebration of their beloved
            daughter.
          </motion.p>

          <p className="mt-6 font-display text-sm italic text-[var(--sage-deep)] opacity-90">
            With blessings · Shubham
          </p>
        </motion.div>
      </div>
    </header>
  );
}
