import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      // Force set the initial state to ensure GSAP knows the starting point
      gsap.set(".video-box", {
        clipPath: "circle(6% at 50% 50%)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    });
  });

  return (
    <section className="vd-pin-section">
      <div
        className="size-full video-box"
        style={{
          clipPath: "circle(100% at 50% 50%)", // Fallback for mobile
        }}
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src="/images/play.svg"
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
