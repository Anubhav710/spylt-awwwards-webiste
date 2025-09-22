"use client";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cards } from "@/constants";

// Type definition for card object
interface Card {
  src: string;
  translation: string;
  rotation: string;
}

const TestimonialSection: React.FC = () => {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
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
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

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

  const handlePlay = (index: number): void => {
    const video = vdRef.current[index];
    if (video) {
      video.play();
    }
  };

  const handlePause = (index: number): void => {
    const video = vdRef.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title text-[clamp(10px,14vw,268px)]">
          What&pos;s
        </h1>
        <h1 className="text-light-brown sec-title text-[clamp(10px,14vw,268px)]">
          Everyone
        </h1>
        <h1 className="text-black third-title text-[clamp(10px,14vw,268px)]">
          Talking
        </h1>
      </div>

      <div className="pin-box">
        {(cards as Card[]).map((card: Card, index: number) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el: HTMLVideoElement | null) => {
                vdRef.current[index] = el;
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
