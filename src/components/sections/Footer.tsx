"use client";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useGSAP(() => {
    const firstHeading = SplitText.create("#f-cnt .first-txt", {
      type: "chars, lines",
      mask: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-cnt",
        start: "top 30%",
      },
    });

    tl.from(firstHeading.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power2.out",
    }).to(".clip-cnt", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
  });
  return (
    <footer id="footer-cnt" className=" bg-[#222123] min-h-screen">
      <Image
        src={"/images/footer-dip.png"}
        alt="footer-dip"
        width={1920}
        height={1200}
        className="w-full h-auto"
      />
      <div
        id="f-cnt"
        className="mt-10 lg:h-[70dvh] md:h-[60vh] h-[40dvh] max-sm:bg-[-100px_0px] bg-cover bg-no-repeat px-3 md:px-9  flex flex-col justify-center"
        style={{ backgroundImage: "url('/images/footer.svg')" }}
      >
        <div id="h-cnt">
          <h1 className="text-[clamp(20px,9vw,154px)] tracking-[-.55vw] text-milk uppercase first-txt">
            Right Around
          </h1>
          <div
            className="bg-custom-brown rotate-3 -mt-4.5 w-fit flex-center clip-cnt"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%);" }}
          >
            <h2 className="text-[clamp(20px,9vw,154px)] leading-[9vw] tracking-[-.55vw] px-3 pb-2 text-dark-brown uppercase leading">
              The Corner
            </h2>
          </div>
          <p className="mt-5 mb-7 text-milk font-semibold sm:w-[25%] leading-5 text-balance">
            Buy our drinks at your local store or get them delivered (to your
            door).
          </p>
          <button className="bg-[#222123] rounded-full text-lg text-milk uppercase px-7 py-3">
            Find the store
          </button>
        </div>
      </div>

      {/* bootom info  */}
      <div className="md:pt-12 pt-10  px-3 md:px-9  lg:pt-24 relative h-screen overflow-hidden flex flex-col">
        <h1 className="text-[7vw] font-bold text-milk text-center ">
          #chugresponsibly
        </h1>
        <div className="flex-center gap-5 relative z-10 md:mt-10 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>
        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            playsInline
            autoPlay
            muted
            className="mix-blend-lighten absolute w-[100%]   lg:-top-[14%] -top-5  left-1/2 -translate-x-1/2"
          ></video>
        )}
        {/* mid-content  */}
        <div className="mt-40 md:px-10 relative z-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk  md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="border-b border-milk border-m mt-10 h-16 pt-3 flex">
              <input
                placeholder="Enter Your Email"
                type="text"
                className="h-full pl-1 placeholder:text-[clamp(16px,2vw,39px)] flex-1 focus:outline-none text-[clamp(16px,2vw,39px)]"
              />
              <img
                src="/images/arrow.svg"
                alt="arrow"
                className="max-sm:size-12"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between pb-5 text-[#756E6C]">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="space-x-3">
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//   <section className="footer-section">
//       <img
//         src="/images/footer-dip.png"
//         alt=""
//         className="w-full object-cover -translate-y-1"
//       />

//       <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
//         <div className="overflow-hidden z-10">
//           <h1 className="general-title text-center text-milk py-5">
//             #CHUGRESPONSIBLY
//           </h1>
//         </div>

//         <img
//           src="/images/footer-drink.png"
//           className="absolute sm:hidden top-0 object-contain"
//         />

//         <video
//           src="/videos/splash.mp4"
//           autoPlay
//           playsInline
//           muted
//           className="absolute max-sm:hidden  top-0 object-contain mix-blend-lighten"
//         />

//         <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
//           <div className="social-btn">
//             <img src="./images/yt.svg" alt="" />
//           </div>
//           <div className="social-btn">
//             <img src="./images/insta.svg" alt="" />
//           </div>
//           <div className="social-btn">
//             <img src="./images/tiktok.svg" alt="" />
//           </div>
//         </div>

//         <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
//           <div className="flex items-center md:gap-16 gap-5">
//             <div>
//               <p>SPYLT Flavors</p>
//             </div>
//             <div>
//               <p>Chug Club</p>
//               <p>Student Marketing</p>
//               <p>Dairy Dealers</p>
//             </div>
//             <div>
//               <p>Company</p>
//               <p>Contacts</p>
//               <p>Tasty Talk</p>
//             </div>
//           </div>

//           <div className="md:max-w-lg">
//             <p>
//               Get Exclusive Early Access and Stay Informed About Product
//               Updates, Events, and More!
//             </p>
//             <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
//               {/* The input field and arrow icon for newsletter signup. */}{" "}
//               {/* A
//           border at the bottom for a clean, modern look. */}
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full placeholder:font-sans placeholder:text-[#999999]"
//               />
//               <img src="/images/arrow.svg" alt="arrow" />
//             </div>
//           </div>
//         </div>

//         <div className="copyright-box">
//           {/* The final row with copyright and legal links. */}
//           <p>Copyright © 2025 Spylt - All Rights Reserved</p>
//           <div className="flex items-center gap-7">
//             <p>Privacy Policy</p>
//             <p>Terms of Sеrvice</p>
//           </div>
//         </div>
//       </div>
//     </section>

//  <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
//           <div className="flex items-center md:gap-16 gap-5">
//             <div>
//               <p>SPYLT Flavors</p>
//             </div>
//             <div>
//               <p>Chug Club</p>
//               <p>Student Marketing</p>
//               <p>Dairy Dealers</p>
//             </div>
//             <div>
//               <p>Company</p>
//               <p>Contacts</p>
//               <p>Tasty Talk</p>
//             </div>
//           </div>

//           <div className="md:max-w-lg">
//             <p>
//               Get Exclusive Early Access and Stay Informed About Product
//               Updates, Events, and More!
//             </p>

//           </div>
//         </div>

//         <div className="copyright-box text-milk">
//           {/* The final row with copyright and legal links. */}
//           <p>Copyright © 2025 Spylt - All Rights Reserved</p>
//           <div className="flex items-center gap-7">
//             <p>Privacy Policy</p>
//             <p>Terms of Sеrvice</p>
//           </div>
//         </div>
