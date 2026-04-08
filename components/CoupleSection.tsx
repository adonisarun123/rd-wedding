"use client";

import { motion } from "framer-motion";
import { CoupleIllustration } from "./decorative/CoupleIllustration";
import { KolamDivider } from "./decorative/KolamDivider";
import { Parrot } from "./decorative/Parrot";

export function CoupleSection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--white-silk)] px-4 py-20"
      aria-label="The couple"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="rounded-sm border-2 border-[var(--kolam-brown)] bg-[var(--temple-cream)]/80 p-8 shadow-lg md:p-12"
          style={{
            boxShadow: "0 8px 32px rgba(44,24,16,0.08), inset 0 0 0 1px var(--gold-light)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-6">
            <motion.span
              className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[var(--deep-red)] md:text-5xl text-shimmer-gold"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.05 }}
            >
              Roopashri
            </motion.span>
            <span
              className="font-[family-name:var(--font-yatra)] text-3xl text-[var(--lotus-pink)] md:text-4xl"
              aria-hidden="true"
            >
              ✿
            </span>
            <motion.span
              className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[var(--deep-red)] md:text-5xl text-shimmer-gold"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.1 }}
            >
              Dhakshinamoorthy
            </motion.span>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-4">
            <Parrot className="h-10 w-10 md:h-12 md:w-12 opacity-90" />
            <motion.div
              className="rounded-full border-4 border-double border-[var(--gold)] bg-[var(--deep-red)] px-8 py-4 text-3xl font-semibold text-[var(--gold-light)] shadow-md md:text-4xl"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 12 }}
            >
              R & D
            </motion.div>
            <Parrot className="h-10 w-10 md:h-12 md:w-12 scale-x-[-1] opacity-90" />
          </div>

          <KolamDivider variant="simple" />

          <motion.div
            className="mx-auto max-w-xs md:max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CoupleIllustration className="h-auto w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
