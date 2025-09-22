"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import FlavorTitle from "../FlavorTitle";

import FlavorSliders from "../FlavorSliders";

const Flavor = () => {
  return (
    <section className="flavor">
      <div className="flex flavor-cnt  max-lg:flex-col sm:py-20 lg:py-20 py-10 px-3 sm:px-9  ">
        <div className="lg:w-[52%] lg:mt-30">
          <FlavorTitle />
        </div>
        <div className="lg:w-[43%] mt-26 sm:mt-38 lg:mt-30">
          <FlavorSliders />
        </div>
      </div>
    </section>
  );
};

export default Flavor;

/* <div>
        <div className="lg:w-[57%] ">
          <FlavorTitle />
        </div>
        <div className="h-full lg:w-[40%]">
          <FlavorSliders />
        </div>
      </div> */
