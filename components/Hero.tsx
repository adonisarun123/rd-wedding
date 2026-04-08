"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { BananaPlant } from "./decorative/BananaPlant";
import { GaneshaIcon } from "./decorative/GaneshaIcon";
import { KolamDivider } from "./decorative/KolamDivider";
import { MangoToran } from "./decorative/MangoToran";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[var(--temple-cream)] px-4 pb-16 pt-4"
      aria-label="Welcome"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1.5' fill='%238B6914'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%238B6914'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <MangoToran className="relative z-[1] -mb-2" />

      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] opacity-70">
        <BananaPlant side="left" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-[1] opacity-70">
        <BananaPlant side="right" />
      </div>

      <motion.div
        className="relative z-[2] mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-4">
          <GaneshaIcon className="mx-auto h-12 w-12 text-[var(--gold-dark)]" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="mb-2 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]"
        >
          Cordially invited by
        </motion.p>
        <motion.h1
          variants={fadeUp}
          custom={2}
          className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-snug text-[var(--deep-red)] sm:text-3xl md:text-4xl"
        >
          V. Udaykumar <span className="text-[var(--gold-dark)]">&</span> U. Thamizharasi
        </motion.h1>
        <motion.div variants={fadeUp} custom={3} className="my-6 w-full">
          <KolamDivider />
        </motion.div>
        <motion.p
          variants={fadeUp}
          custom={4}
          className="max-w-xl font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[var(--text-muted)]"
        >
          Request the pleasure of your company at the wedding celebration of their beloved daughter
        </motion.p>
      </motion.div>
    </section>
  );
}
