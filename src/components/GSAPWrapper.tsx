"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

const GSAPWrapper = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default GSAPWrapper;
