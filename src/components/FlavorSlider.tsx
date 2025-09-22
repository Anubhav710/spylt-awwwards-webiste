// "use client";
// import { flavorlists } from "@/constants";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

// const FlavorSlider = () => {
//   const sliderRef = useRef<null | HTMLDivElement>(null);

//   useGSAP(() => {
//     const scrollAmount = sliderRef.current?.scrollWidth! - window.innerWidth;

//     let mm = gsap.matchMedia();

//     mm.add("(min-width:1024px)", () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".flavor-section",
//           start: "2% top",
//           end: `"+=${scrollAmount}px"`,
//           scrub: 2,
//           pin: true,
//         },
//       });

//       tl.to(".flavor-section", {
//         x: `-${scrollAmount}px`,
//         ease: "power1.inOut",
//       });

//       const titleTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".flavor-section",
//           start: "top top",
//           end: "bottom 80%",
//           scrub: 2,
//         },
//       });
//       titleTl
//         .to(".first-text-split", {
//           xPercent: -30,
//           ease: "power1.inOut",
//         })
//         .to(
//           ".flavor-text-scroll",
//           {
//             xPercent: -22,
//             ease: "power1.inOut",
//           },
//           "<"
//         )
//         .to(
//           ".secound-text-split",
//           {
//             xPercent: -10,
//             ease: "power1.inOut",
//           },
//           "<"
//         );
//     });
//   });
//   return (
//     <div className="slider-wrapper  bg-purple-700">
//       <div className="flavors ">
//         {flavorlists.map((flavor) => (
//           <div
//             key={flavor.name}
//             className={`relative z-30 size-52 ${flavor.rotation}`}
//           >
//             <img
//               src={`/images/${flavor.color}-bg.svg`}
//               alt=""
//               className="absolute bottom-0"
//             />

//             <img
//               src={`/images/${flavor.color}-drink.webp`}
//               alt=""
//               className="drinks"
//             />

//             <img
//               src={`/images/${flavor.color}-elements.webp`}
//               alt=""
//               className="elements"
//             />

//             <h1>{flavor.name}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlavorSlider;
