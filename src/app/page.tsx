import GSAPWrapper from "@/components/GSAPWrapper";
import Benefit from "@/components/sections/Benefit";

import Flavor from "@/components/sections/Flavor";
import Footer from "@/components/sections/Footer";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Message from "@/components/sections/Message";
import Nutrition from "@/components/sections/Nutrition";
import TestimonialSection from "@/components/sections/Testimonial";

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
          <TestimonialSection />
        </div>
        <Footer />
      </div>
    </GSAPWrapper>
  );
}
