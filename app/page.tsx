"use client";

import { useEffect, useRef, useState } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Countdown } from "@/components/Countdown";
import { CoupleSection } from "@/components/CoupleSection";
import { CelebrationEffects } from "@/components/CelebrationEffects";
import { FlowerShower } from "@/components/FlowerShower";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SplashScreen } from "@/components/SplashScreen";
import { VenueMap } from "@/components/VenueMap";
import { MangoToran } from "@/components/decorative/MangoToran";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [mobileSimple, setMobileSimple] = useState(false);
  const unlockAudioRef = useRef<(() => void) | null>(null);
  const playMusicRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobileSimple(mq.matches);
    const fn = () => setMobileSimple(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <>
      {/* Mount during splash so audio can load; splash tap unlocks iOS playback */}
      <AudioPlayer
        unlockRef={unlockAudioRef}
        playRef={playMusicRef}
        splashComplete={splashDone}
      />

      {!splashDone && (
        <SplashScreen
          onComplete={() => setSplashDone(true)}
          isMobileSimple={mobileSimple}
          onInteractionUnlock={() => unlockAudioRef.current?.()}
        />
      )}

      <main
        className={
          splashDone
            ? "relative min-h-[100dvh] bg-[var(--bg-page)]"
            : "pointer-events-none relative min-h-[100dvh] opacity-0"
        }
      >
        {splashDone ? (
          <>
            <CelebrationEffects />
            <FlowerShower />
          </>
        ) : null}

        <div className="relative z-[14]">
          <div className="mx-auto max-w-5xl px-4 pb-16 pt-1 sm:px-6 lg:px-8">
            <MangoToran className="mb-1 w-full max-w-3xl sm:mx-auto" />
            <Hero />
            <CoupleSection onPlayMusic={() => playMusicRef.current?.()} />
            <ScheduleSection />
            <Countdown />
            <div className="border-t border-[var(--border)] py-12 md:py-16">
              <VenueMap />
            </div>
            <Gallery />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
