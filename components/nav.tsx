"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <button
        type="button"
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RiCloseFill size={36} className="text-primary" />
        ) : (
          <RiMenu4Line size={36} className="text-primary" />
        )}
      </button>
      <ul
        className={cn(
          "fixed top-22.5 left-0 right-0 lg:relative w-full lg:p-0 lg:top-0 lg:border-none lg:h-full flex flex-col lg:flex-row gap-4 border-t bg-white overflow-hidden transition-all duration-300",
          isOpen
            ? "h-auto p-4 lg:p-0 lg:h-full lg:border-none lg:top-22.5"
            : "h-0 p-0"
        )}
      >
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <ScrollLink
              spy
              smooth
              to={path}
              duration={500}
              delay={50}
              offset={-100}
              activeClass="text-accent"
              className="text-primary text-lg hover:text-accent cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
