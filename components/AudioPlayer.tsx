"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TARGET_VOLUME = 0.3;
const FADE_MS = 1600;
const FADE_STEPS = 20;

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const userTurnedOffRef = useRef(false);
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const clearFade = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const fadeVolumeTo = useCallback(
    (audio: HTMLAudioElement, target: number) => {
      clearFade();
      const from = audio.volume;
      const delta = target - from;
      if (Math.abs(delta) < 0.02) {
        audio.volume = target;
        return;
      }
      let step = 0;
      const id = setInterval(() => {
        step += 1;
        const t = Math.min(1, step / FADE_STEPS);
        audio.volume = Math.max(0, Math.min(1, from + delta * t));
        if (step >= FADE_STEPS) {
          audio.volume = target;
          clearFade();
        }
      }, FADE_MS / FADE_STEPS);
      fadeIntervalRef.current = id;
    },
    [clearFade]
  );

  const beginPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || userTurnedOffRef.current) return;

    audio.volume = 0;
    void audio.play().then(() => {
      setHasStarted(true);
      setPlaying(true);
      fadeVolumeTo(audio, TARGET_VOLUME);
    });
  }, [fadeVolumeTo]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.setAttribute("playsinline", "");
    audio.preload = "auto";
    audio.load();

    const markReady = () => setReady(true);
    const onErr = () => setReady(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("canplay", markReady);
    audio.addEventListener("canplaythrough", markReady);
    audio.addEventListener("error", onErr);
    audio.addEventListener("playing", onPlay);
    audio.addEventListener("pause", onPause);

    if (audio.readyState >= 3) setReady(true);

    return () => {
      audio.removeEventListener("canplay", markReady);
      audio.removeEventListener("canplaythrough", markReady);
      audio.removeEventListener("error", onErr);
      audio.removeEventListener("playing", onPlay);
      audio.removeEventListener("pause", onPause);
      clearFade();
    };
  }, [clearFade]);

  /* Autoplay when buffer is ready; browsers often block until a gesture */
  useEffect(() => {
    if (!ready) return;

    const tryStart = () => {
      if (userTurnedOffRef.current) return;
      const el = audioRef.current;
      if (!el || !el.paused) return;
      beginPlayback();
    };

    const t = window.setTimeout(tryStart, 100);

    const onGesture = (e: Event) => {
      const t = e.target;
      if (t instanceof Node && buttonRef.current?.contains(t)) return;
      tryStart();
    };
    /* Bubble phase so the music button’s own click runs first and isn’t overridden */
    document.addEventListener("click", onGesture, false);
    document.addEventListener("touchstart", onGesture, false);
    document.addEventListener("keydown", onGesture, false);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("click", onGesture, false);
      document.removeEventListener("touchstart", onGesture, false);
      document.removeEventListener("keydown", onGesture, false);
    };
  }, [ready, beginPlayback]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !ready) return;

    if (audio.paused) {
      userTurnedOffRef.current = false;
      audio.volume = 0;
      void audio.play().then(() => {
        setPlaying(true);
        setHasStarted(true);
        fadeVolumeTo(audio, TARGET_VOLUME);
      });
    } else {
      userTurnedOffRef.current = true;
      clearFade();
      fadeVolumeTo(audio, 0);
      window.setTimeout(() => {
        audio.pause();
        setPlaying(false);
      }, FADE_MS + 80);
    }
  }, [ready, fadeVolumeTo, clearFade]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/nadaswaram.mp3"
        loop
        preload="auto"
        className="sr-only pointer-events-none fixed h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        disabled={!ready}
        aria-label={playing ? "Turn wedding music off" : "Turn wedding music on"}
        title={playing ? "Music on — tap to stop" : "Music off — tap to play"}
        className="fixed bottom-4 right-4 z-[9991] flex h-12 min-h-12 min-w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-3 text-[var(--text)] shadow-md disabled:cursor-not-allowed disabled:opacity-50 md:bottom-6 md:right-6"
        style={
          playing
            ? { animation: "pulse-soft 2.2s ease-in-out infinite" }
            : undefined
        }
      >
        <span className="text-lg font-semibold" aria-hidden="true">
          {playing ? "♪" : "♫"}
        </span>
      </button>

      {ready && !hasStarted ? (
        <p className="pointer-events-none fixed bottom-16 right-4 z-[9990] max-w-[220px] text-right text-[10px] leading-snug text-[var(--text-subtle)] md:bottom-[4.5rem] md:right-6 md:max-w-xs md:text-xs">
          Nadaswaram will play automatically — tap anywhere if it doesn&apos;t start. Use the
          button to turn music off.
        </p>
      ) : null}
    </>
  );
}
