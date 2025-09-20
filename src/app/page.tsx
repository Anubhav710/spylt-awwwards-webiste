import GSAPWrapper from "@/components/GSAPWrapper";
import Flavor from "@/components/sections/Flavor";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Message from "@/components/sections/Message";

import Image from "next/image";

export default function Home() {
  return (
    <GSAPWrapper>
      <div>
        <Header />
        <Hero />
        <Message />
        <Flavor />
        <div className="h-dvh"></div>
      </div>
    </GSAPWrapper>
  );
}
