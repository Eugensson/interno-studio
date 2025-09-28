"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-100}
      className="cursor-pointer"
    >
      <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
    </ScrollLink>
  );
};
