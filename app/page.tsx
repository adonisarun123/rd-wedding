"use client";

import { useEffect, useState } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Countdown } from "@/components/Countdown";
import { CoupleSection } from "@/components/CoupleSection";
import { Deepam } from "@/components/decorative/Deepam";
import { SacredFire } from "@/components/decorative/SacredFire";
import { TempleSilhouette } from "@/components/decorative/TempleSilhouette";
import { EventCard } from "@/components/EventCard";
import { FloatingPetals } from "@/components/FloatingPetals";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { RSVPForm } from "@/components/RSVPForm";
import { SplashScreen } from "@/components/SplashScreen";
import { TempleScrollFx } from "@/components/TempleScrollFx";
import { VenueMap } from "@/components/VenueMap";
import { downloadIcs } from "@/lib/calendar";

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

      <main className={splashDone ? "relative" : "pointer-events-none opacity-0"}>
        <FloatingPetals />
        <Hero />
        <CoupleSection />

        <EventCard
          title="Reception"
          icon={<Deepam className="h-12 w-10" />}
          dateLine="Saturday, 6th June 2026"
          extraLines={[{ label: "Time", value: "7 PM onwards" }]}
          icsKind="reception"
          variant="rose"
        />

        <TempleScrollFx className="relative bg-[var(--temple-cream)]">
          <TempleSilhouette className="pointer-events-none absolute left-1/2 top-8 w-64 -translate-x-1/2 text-[var(--deep-red)] md:w-96" />
          <EventCard
            title="Kalyanam — Wedding Ceremony"
            icon={<SacredFire className="h-14 w-12" />}
            dateLine="Sunday, 7th June 2026"
            extraLines={[
              { label: "Muhurtham", value: "07:35 AM – 08:30 AM", highlight: true },
              { label: "Breakfast", value: "07:00 AM onwards" },
            ]}
            icsKind="ceremony"
            variant="cream"
            ornate
          />
        </TempleScrollFx>

        <div className="flex justify-center bg-[var(--temple-cream)] pb-8">
          <button
            type="button"
            onClick={() => downloadIcs("both")}
            className="min-h-11 rounded-full border border-[var(--gold-dark)] px-5 py-2 font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-widest text-[var(--deep-red)]"
          >
            Download both events (.ics)
          </button>
        </div>

        <Countdown />
        <VenueMap />
        <Gallery />
        <RSVPForm />
        <Footer />
      </main>

      {splashDone ? <AudioPlayer /> : null}
    </>
  );
}
