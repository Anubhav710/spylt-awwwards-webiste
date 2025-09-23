"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cards } from "@/constants";

// ✅ If your cards array looks like [{ src: string, translation: string, rotation: string }, ...]
type Card = {
  src: string;
  translation: string;
  rotation: string;
};

const TestimonialSection = () => {
  // Array of video element refs
  const vdRef = useRef<HTMLVideoElement[]>([]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:992px)", () => {
      gsap.set(".testimonials-section", {
        marginTop: "-150vh",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(".testimonials-section .sec-title", { xPercent: 25 }, "<")
      .to(".testimonials-section .third-title", { xPercent: -50 }, "<");

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  // ✅ Type-safe handlers
  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    video?.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    video?.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card: any, index: number) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => {
                if (el) vdRef.current[index] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
