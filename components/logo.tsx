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
      className="flex items-center gap-x-2 text-2xl text-primary font-primary cursor-pointer"
    >
      <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
      IntDesign
    </ScrollLink>
  );
};
