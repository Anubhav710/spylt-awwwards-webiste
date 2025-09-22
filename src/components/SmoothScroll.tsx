"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";

export default function LenisProvider() {
  const lenisRef = useRef<Lenis | any>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.05,
        duration: 2,
      }}
    />
  );
}
