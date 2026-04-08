"use client";

import { useCallback, useEffect, useRef, useState, type MutableRefObject } from "react";

const TARGET_VOLUME = 0.3;
const FADE_MS = 1600;
const FADE_STEPS = 20;

type AudioPlayerProps = {
  /** Parent assigns synchronous unlock for iOS (e.g. splash tap). */
  unlockRef?: MutableRefObject<(() => void) | null>;
};

export function AudioPlayer({ unlockRef }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const userTurnedOffRef = useRef(false);
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const beginPlaybackRef = useRef<() => void>(() => {});

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

    const start = () => {
      audio.volume = 0;
      void audio.play().then(() => {
        setHasStarted(true);
        setPlaying(true);
        fadeVolumeTo(audio, TARGET_VOLUME);
      });
    };

    if (audio.readyState < 2) {
      const onReady = () => {
        audio.removeEventListener("canplay", onReady);
        start();
      };
      audio.addEventListener("canplay", onReady, { once: true });
      audio.load();
      return;
    }
    start();
  }, [fadeVolumeTo]);

  beginPlaybackRef.current = beginPlayback;

  useEffect(() => {
    if (!unlockRef) return;
    unlockRef.current = () => {
      userTurnedOffRef.current = false;
      beginPlaybackRef.current();
    };
    return () => {
      unlockRef.current = null;
    };
  }, [unlockRef, beginPlayback]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audio.preload = "auto";

    const markReady = () => setReady(true);
    const onErr = () => setReady(true);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", markReady);
    audio.addEventListener("canplay", markReady);
    audio.addEventListener("canplaythrough", markReady);
    audio.addEventListener("error", onErr);
    audio.addEventListener("playing", onPlay);
    audio.addEventListener("pause", onPause);

    audio.load();

    const fallback = window.setTimeout(() => setReady(true), 2500);

    if (audio.readyState >= 1) setReady(true);

    return () => {
      window.clearTimeout(fallback);
      audio.removeEventListener("loadedmetadata", markReady);
      audio.removeEventListener("canplay", markReady);
      audio.removeEventListener("canplaythrough", markReady);
      audio.removeEventListener("error", onErr);
      audio.removeEventListener("playing", onPlay);
      audio.removeEventListener("pause", onPause);
      clearFade();
    };
  }, [clearFade]);

  useEffect(() => {
    if (!ready) return;

    const tryStart = () => {
      if (userTurnedOffRef.current) return;
      const el = audioRef.current;
      if (!el || !el.paused) return;
      beginPlaybackRef.current();
    };

    const t = window.setTimeout(tryStart, 150);

    const onGesture = (e: Event) => {
      const tgt = e.target;
      if (tgt instanceof Node && buttonRef.current?.contains(tgt)) return;
      tryStart();
    };

    document.addEventListener("click", onGesture, false);
    document.addEventListener("touchend", onGesture, false);
    document.addEventListener("keydown", onGesture, false);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("click", onGesture, false);
      document.removeEventListener("touchend", onGesture, false);
      document.removeEventListener("keydown", onGesture, false);
    };
  }, [ready]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

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
  }, [fadeVolumeTo, clearFade]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="pointer-events-none fixed bottom-0 left-0 h-px w-px opacity-0"
        aria-hidden="true"
        playsInline
      >
        <source src="/audio/nadaswaram.mp3" type="audio/mpeg" />
      </audio>

      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={playing ? "Turn wedding music off" : "Turn wedding music on"}
        title={playing ? "Music on — tap to stop" : "Music off — tap to play"}
        className="fixed bottom-4 right-4 z-[10001] flex h-12 min-h-12 min-w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-3 text-[var(--text)] shadow-md md:bottom-6 md:right-6"
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
        <p className="pointer-events-none fixed bottom-16 right-4 z-[10000] max-w-[220px] text-right text-[10px] leading-snug text-[var(--text-subtle)] md:bottom-[4.5rem] md:right-6 md:max-w-xs md:text-xs">
          Tap the splash or anywhere on the page to start nadaswaram. Use the button to turn music
          off.
        </p>
      ) : null}
    </>
  );
}
