"use client";

import { useEffect, useState } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Countdown } from "@/components/Countdown";
import { CoupleSection } from "@/components/CoupleSection";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { RSVPForm } from "@/components/RSVPForm";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SplashScreen } from "@/components/SplashScreen";
import { VenueMap } from "@/components/VenueMap";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [mobileSimple, setMobileSimple] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobileSimple(mq.matches);
    const fn = () => setMobileSimple(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <>
      {!splashDone && (
        <SplashScreen
          onComplete={() => setSplashDone(true)}
          isMobileSimple={mobileSimple}
        />
      )}

      <main
        className={
          splashDone
            ? "min-h-[100dvh] bg-[var(--bg-page)]"
            : "pointer-events-none min-h-[100dvh] opacity-0"
        }
      >
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-0 sm:px-6 lg:px-8">
          <Hero />
          <CoupleSection />
          <ScheduleSection />
          <Countdown />
          <div className="grid gap-10 border-t border-[var(--border)] py-10 lg:grid-cols-2 lg:items-start lg:gap-12 lg:py-14">
            <VenueMap embedded />
            <RSVPForm embedded />
          </div>
          <Gallery />
        </div>
        <Footer />
      </main>

      {splashDone ? <AudioPlayer /> : null}
    </>
  );
}
