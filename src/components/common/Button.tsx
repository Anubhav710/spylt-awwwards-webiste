"use client";
import React, { ReactNode, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import ani from "@/assets/lotties/splt_bttn_hover.json";
import Link from "next/link";

export default function LiquidButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
    lottieRef.current?.goToAndStop(0, true);
  };

  return (
    <div
      className={`${className} liquid-button-wrapper relative inline-block `}
    >
      {/* Lottie Animation */}
      <div
        className="lottie-animation-2 absolute -bottom-[62px] left-1/2 -translate-x-1/2 w-40 h-40 pointer-events-none  "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={ani}
          loop={false}
          autoplay={false}
          className="w-full h-full"
        />
      </div>

      {/* Button */}
      <Link
        href="/"
        className="liquid-button relative z-10  bg-light-brown rounded-full px-9 py-3 text-dark-brown font-bold text-lg flex items-center justify-center tracking-tight overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="button-text">Chug a Spylt</div>
      </Link>
    </div>
  );
}
