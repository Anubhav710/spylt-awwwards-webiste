"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const sndTextSplit = SplitText.create(".secound-text-split h1", {
      type: "chars",
    });
    const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: ".flavor",
      start: "top 70%",
      animation: tl,
    });

    tl.from(firstTextSplit.chars, {
      yPercent: 120,
      stagger: 0.02,
      ease: "power2.out",
    })
      .to(".flavor-text-scroll", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .from(sndTextSplit.chars, {
        yPercent: 120,
        stagger: 0.02,
        ease: "power2.out",
      });
  });

  return (
    <div className="general-title col-center">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1 className="text-[clamp(42px,9vw,154px)] leading-[clamp(46px,10vw,170px)] tracking-[-0.45vw] px-2">
          We have 6
        </h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll -rotate-4 -mt-4 border-4 border-milk z-10"
      >
        <div className="bg-mid-brown p-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk text-[clamp(42px,9vw,154px)] leading-[clamp(46px,10vw,170px)] tracking-[-0.45vw] px-2">
            freaking
          </h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 secound-text-split -mt-8">
        <h1 className="xl:text-[clamp(42px,9vw,154px)] text-[clamp(42px,9vw,80px)]  leading-[clamp(46px,10vw,170px)] tracking-[-0.45vw] px-2">
          delicious flavors
        </h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
