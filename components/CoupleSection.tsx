"use client";

import { motion } from "framer-motion";
import { CoupleIllustration } from "./decorative/CoupleIllustration";
import { FloralRule } from "./decorative/FloralRule";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CoupleSectionProps = {
  /** Starts wedding music immediately (same user gesture — works on mobile). */
  onPlayMusic?: () => void;
};

export function CoupleSection({ onPlayMusic }: CoupleSectionProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] py-14 sm:py-16 md:py-20"
      aria-label="The couple"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, var(--sage-soft) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-subtle)] sm:text-xs"
        >
          Together with their families
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ delay: 0.08, duration: 0.6, ease: easeOut }}
          className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-1"
        >
          <span className="font-invite text-[2rem] font-semibold text-[var(--text)] sm:text-4xl md:text-[2.5rem]">
            Roopashri{" "}
            <span className="font-display text-[0.85em] font-semibold text-[var(--text-muted)]">U</span>
          </span>
          <span className="font-display text-xl text-[var(--wheat)] sm:text-2xl" aria-hidden="true">
            ✦
          </span>
          <span className="font-invite text-[2rem] font-semibold text-[var(--text)] sm:text-4xl md:text-[2.5rem]">
            Dhakshinamoorthy{" "}
            <span className="font-display text-[0.85em] font-semibold text-[var(--text-muted)]">A</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6"
        >
          <FloralRule />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
          className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-2.5 shadow-sm"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-subtle)]">
            Monogram
          </span>
          <span className="font-display text-lg font-semibold tabular-nums text-[var(--terracotta)] sm:text-xl">
            R · D
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.65, ease: easeOut }}
          className="mx-auto mt-10 max-w-xs sm:max-w-sm"
        >
          <motion.button
            type="button"
            onClick={() => onPlayMusic?.()}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
            className="invite-card w-full px-8 py-8 text-center transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 sm:px-10 sm:py-10"
            aria-label="Play wedding music — nadaswaram"
          >
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--sage-deep)]">
              Traditional celebration
            </p>
            <p className="mt-2 text-center text-[0.65rem] text-[var(--text-subtle)]">
              Tap the card to play music
            </p>
            <div className="mt-5 flex justify-center">
              <CoupleIllustration className="h-auto w-full max-w-[200px] sm:max-w-[220px]" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
