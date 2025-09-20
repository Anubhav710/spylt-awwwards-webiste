import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 md:p-9 p-3">
      <Image
        src={"/images/nav-logo.svg"}
        alt="logo"
        width={120}
        height={120}
        className="md:w-24 w-20"
      />
    </header>
  );
};

export default Header;
