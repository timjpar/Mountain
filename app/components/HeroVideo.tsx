"use client";

import { useEffect, useRef } from "react";

// The source clip has a branded intro (~0-12s) and an iMovie-style credits
// outro (~58s+). Loop only the moving footage in between — no player controls.
const LOOP_START = 14;
const LOOP_END = 46;

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const toStart = () => {
      try {
        v.currentTime = LOOP_START;
      } catch {
        /* ignore */
      }
    };
    const onTime = () => {
      if (
        v.currentTime >= LOOP_END ||
        (v.duration && v.currentTime >= v.duration - 0.3)
      ) {
        toStart();
      }
    };

    v.addEventListener("loadedmetadata", toStart);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", toStart);
    if (v.readyState >= 1) toStart();

    return () => {
      v.removeEventListener("loadedmetadata", toStart);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", toStart);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      playsInline
      poster="/photos/hero-cliff-sunset.jpg"
      aria-hidden="true"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
