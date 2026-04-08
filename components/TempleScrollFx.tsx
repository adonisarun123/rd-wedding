"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export function TempleScrollFx({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const temple = el.querySelector("[data-temple-silhouette]");
    if (!temple) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        temple,
        { opacity: 0.06, y: 28 },
        {
          opacity: 0.16,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "center 55%",
            scrub: 1.2,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
