import GSAPWrapper from "@/components/GSAPWrapper";
import Benefit from "@/components/sections/Benefit";
import Flavor from "@/components/sections/Flavor";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Message from "@/components/sections/Message";
import Nutrition from "@/components/sections/Nutrition";
import Testimonial from "@/components/sections/Testimonial";
import GsapScrollProvider from "@/components/SmoothScroll";

import Image from "next/image";

export default function Home() {
  return (
    <GSAPWrapper>
      <div>
        <Header />
        <Hero />
        <Message />
        <Flavor />
        <Nutrition />
        <div>
          <Benefit />
          <Testimonial />
        </div>
        <Footer />
      </div>
    </GSAPWrapper>
  );
}
