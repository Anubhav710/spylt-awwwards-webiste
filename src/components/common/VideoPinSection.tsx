import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <section className="">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(100% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/videos/pin-video.mp4"
          muted
          autoPlay
          loop
          playsInline
        ></video>

        <div className="abs-center md:scale-100 scale-200">
          <Image
            src="/images/circle-text.svg"
            width={120}
            height={120}
            alt=""
            className="spin-circle"
          />
          <div className="play-btn">
            <Image
              src="/images/play.svg"
              width={120}
              height={120}
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
