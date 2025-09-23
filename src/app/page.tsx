import GSAPWrapper from "@/components/GSAPWrapper";
import Benefit from "@/components/sections/Benefit";

import Flavor from "@/components/sections/Flavor";
import Footer from "@/components/sections/Footer";

import Header from "@/components/sections/Header";

import Message from "@/components/sections/Message";
import dynamic from "next/dynamic";
import Nutrition from "@/components/sections/Nutrition";
import TestimonialSection from "@/components/sections/Testimonial";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <Message />
      {/* <Flavor /> */}

      <Nutrition />
      <div>
        <Benefit />
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
}
