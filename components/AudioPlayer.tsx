"use client";

import { Howl } from "howler";
import { useCallback, useEffect, useRef, useState } from "react";

const VOLUME = 0.3;

export function AudioPlayer() {
  const howlRef = useRef<Howl | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const h = new Howl({
      src: ["/audio/nadaswaram.mp3"],
      loop: true,
      volume: 0,
      html5: true,
      onload: () => setReady(true),
      onloaderror: () => setReady(false),
    });
    howlRef.current = h;
    return () => {
      h.unload();
      howlRef.current = null;
    };
  }, []);

  const fadeIn = useCallback(() => {
    const h = howlRef.current;
    if (!h) return;
    h.volume(0);
    h.play();
    let v = 0;
    const id = window.setInterval(() => {
      v += 0.02;
      if (v >= VOLUME) {
        h.volume(VOLUME);
        window.clearInterval(id);
      } else {
        h.volume(v);
      }
    }, 40);
    setPlaying(true);
    setShowHint(false);
  }, []);

  const toggle = useCallback(() => {
    const h = howlRef.current;
    if (!h || !ready) return;
    if (h.playing()) {
      h.fade(VOLUME, 0, 400);
      window.setTimeout(() => h.pause(), 450);
      setPlaying(false);
    } else {
      h.volume(0);
      h.play();
      h.fade(0, VOLUME, 2000);
      setPlaying(true);
    }
  }, [ready]);

  return (
    <>
      {showHint && ready && (
        <button
          type="button"
          onClick={fadeIn}
          className="fixed bottom-24 right-4 z-[9990] max-w-[min(90vw,280px)] rounded-full border-2 border-[var(--gold)] bg-[var(--white-silk)] px-4 py-3 text-left text-[var(--text-dark)] shadow-lg md:bottom-8 md:right-8"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-base font-semibold">
            Tap to experience with music
          </span>
          <span className="ml-2" aria-hidden="true">
            🎵
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={toggle}
        disabled={!ready}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-4 right-4 z-[9991] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--gold-dark)] bg-[var(--gold-light)] text-[var(--deep-red)] shadow-md disabled:opacity-40 md:bottom-6 md:right-6"
        style={
          playing
            ? { animation: "pulse-soft 2s ease-in-out infinite" }
            : undefined
        }
      >
        <span className="text-xl" aria-hidden="true">
          {playing ? "🔔" : "🔕"}
        </span>
      </button>
    </>
  );
}
