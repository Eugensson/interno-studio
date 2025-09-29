"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-100}
      className={cn("cursor-pointer", className)}
    >
      <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
    </ScrollLink>
  );
};
