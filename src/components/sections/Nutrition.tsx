"use client";
import { nutrientLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Nutrition = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars, lines",
      mask: "lines",
    });
    const paragraph = SplitText.create(".milk-txt", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const paragraphSplit = SplitText.create("#nuti-info p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    const contentTl = gsap.timeline();

    ScrollTrigger.create({
      trigger: "#nutrition-section",
      start: "top 60%",
      animation: contentTl,
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 120,
        stagger: 0.02,
        ease: "power2.out",
      })
      .to(
        ".nutrition-text-scroll",
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power1.inOut",
        },
        "<0.3"
      )
      .from(
        paragraph.words,
        {
          yPercent: 120,
          rotate: 3,
          ease: "power1.inOut",
          duration: 1,
          stagger: 0.01,
        },
        "<0.5"
      );

    gsap.from(paragraphSplit.words, {
      yPercent: 120,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: "#nuti-info",
        start: "top 92%",
      },
    });
  });
  // bg-[#E6D9C5]
  return (
    <section
      id="nutrition-section"
      className=" relative h-screen   bg-[#E2D4BD] smd:h-[120vh]"
    >
      <Image
        width={1200}
        height={1200}
        src="/images/slider-dip.png"
        alt="style"
        className="w-full object-cover"
      />

      <div className="z-20 flex flex-col justify-center items-center self-center absolute inset-[20vw_auto_auto_2vw]"></div>

      <Image
        width={1200}
        height={1200}
        src="/images/big-img.webp"
        alt="style"
        className="absolute w-full object-cover max-smd:h-[60%] inset-[auto_0%_0%]"
      />
      {/* mid section  */}
      <div className="relative padding-x flex flex-col smd:flex-row smd:justify-between  max-smd:pt-24">
        <div>
          <h1 className="nutrition-title font-bold text-[clamp(79px,9vw,154px)] leading-[clamp(79px,10vw,170px)] tracking-[-0.45vw] px-2  uppercase">
            It still does
          </h1>

          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
            className="nutrition-text-scroll -rotate-3 bg-mid-brown inline-block outline-4 outline-milk p-5 2xl:pt-0 pt-3 2xl:px-5 px-3"
          >
            <h2 className="text-milk text-[clamp(70px,9vw,154px)] leading-[clamp(46px,10vw,170px)] tracking-[-0.45vw] px-2 uppercase font-bold">
              body good
            </h2>
          </div>
        </div>

        <p className="milk-txt md:max-w-xs smd:pt-10 pt-7 smd:text-right  max-w-sm text-lg  text-pretty font-medium">
          Milk contains a wide array of nutrients, including vitamins, minerals,
          and protein, and this is lactose free
        </p>
      </div>

      {/* bottom section  */}
      <div id="nuti-info" className="nutrition-box  px-5">
        <div className="list-wrapper">
          {nutrientLists.map((nutrient, index) => (
            <div
              key={index}
              className="relative max-md:even:hidden flex-1 col-center"
            >
              <div>
                <p className="md:text-sm">{nutrient.label}</p>
                <p className="font-paragraph text-sm mt-2">up to</p>
                <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                  {nutrient.amount}
                </p>
              </div>

              {index !== nutrientLists.length - 1 && (
                <div className="spacer-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
