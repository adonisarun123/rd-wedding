"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Deepam } from "./decorative/Deepam";
import { GaneshaIcon } from "./decorative/GaneshaIcon";

type SplashScreenProps = {
  onComplete: () => void;
  /** Call synchronously on first touch — unlocks iOS Safari audio in the same gesture. */
  onInteractionUnlock?: () => void;
  isMobileSimple?: boolean;
};

export function SplashScreen({
  onComplete,
  onInteractionUnlock,
  isMobileSimple,
}: SplashScreenProps) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "exit">("intro");
  const opened = useRef(false);
  const unlockFired = useRef(false);

  const runUnlock = useCallback(() => {
    if (unlockFired.current) return;
    unlockFired.current = true;
    onInteractionUnlock?.();
  }, [onInteractionUnlock]);

  useEffect(() => {
    const t = window.setTimeout(() => setPhase("exit"), 2500);
    return () => window.clearTimeout(t);
  }, []);

  const simple = reduced || isMobileSimple;

  useEffect(() => {
    if (phase === "exit" && simple && !opened.current) {
      const t = window.setTimeout(() => {
        opened.current = true;
        onComplete();
      }, 650);
      return () => window.clearTimeout(t);
    }
  }, [phase, simple, onComplete]);

  const handleSplitDone = () => {
    if (opened.current) return;
    opened.current = true;
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-gradient-to-br from-[var(--sage-deep)] via-[var(--terracotta)] to-[var(--sage-deep)] text-white"
      initial={{ opacity: 1 }}
      animate={
        phase === "exit"
          ? simple
            ? { opacity: 0, transition: { duration: 0.6 } }
            : { opacity: 1 }
          : { opacity: 1 }
      }
      onPointerDownCapture={runUnlock}
      onTouchStartCapture={runUnlock}
    >
      {!simple && phase === "exit" ? (
        <>
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[var(--sage-deep)] shadow-2xl"
            initial={{ x: 0, rotateY: 0 }}
            animate={{ x: "-100%", rotateY: 12 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleSplitDone}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[var(--sage-deep)] shadow-2xl"
            initial={{ x: 0, rotateY: 0 }}
            animate={{ x: "100%", rotateY: -12 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      ) : null}

      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "exit" && !simple ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GaneshaIcon className="h-16 w-16 text-white/90 md:h-20 md:w-20" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="scale-75 md:scale-100"
        >
          <Deepam className="h-28 w-20 md:h-36 md:w-24" />
        </motion.div>
        <motion.p
          className="font-display text-2xl tracking-wide md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          ॐ
        </motion.p>
        <motion.p
          className="text-center text-sm text-white/80 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          Tap anywhere to enable sound
        </motion.p>
        <motion.p
          className="text-lg text-white/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Shubham
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
