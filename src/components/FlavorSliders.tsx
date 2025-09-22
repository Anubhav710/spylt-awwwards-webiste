"use client";
import { flavorlists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const FlavorSliders = () => {
  const fRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const scrollAmount = fRef.current?.scrollWidth! - window.innerWidth;

    let mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor",
          start: "2% top",
          end: `"+=${scrollAmount + 1500}px"`,
          scrub: 2,
          pin: true,
        },
      });

      tl.to(".flavor", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor",
          start: "top top",
          end: "bottom 80%",
          scrub: 2,
        },
      });
      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".secound-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    });
  });
  return (
    <div ref={fRef}>
      <div className="flex  max-lg:flex-col gap-32 sm:gap-42 lg:gap-32 lg:pl-5">
        {flavorlists.map((flavor, idx) => (
          <div
            key={idx}
            className="w-full relative 
            rounded-2xl shrink-0 h-max even:rotate-8 odd:-rotate-8"
          >
            <Image
              width={210}
              height={210}
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="w-full object-cover rounded-2xl"
            />

            <Image
              width={1200}
              height={1200}
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="absolute top-0"
            />
            <Image
              width={1200}
              height={1200}
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="absolute w-[60%] left-1/2 -translate-x-1/2 bottom-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSliders;
