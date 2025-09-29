import Link from "next/link";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-25 xl:mb-37.5">
          <div className="w-full max-w-100 mx-auto mb-8 text-center xl:text-left">
            <Logo className="mb-8 flex justify-center xl:justify-start" />
            <p className="mb-8 text-xl">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <Socials />
          </div>
          <ul className="flex-1 flex flex-col xl:flex-row xl:justify-end gap-12 xl:gap-25 text-center xl:text-left">
            <li>
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Our Work</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>
              <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>Kitchen</li>
                <li>Living Area</li>
                <li>Bathroom</li>
                <li>Bedroom</li>
              </ul>
            </li>
            <li className="max-w-65 mx-auto xl:mx-0">
              <h3 className="h3 mb-3">Contact</h3>
              <ul className="flex flex-col gap-6">
                <li>
                  <address className="not-italic">
                    <p>Almstadtstrasse 7, 10119,</p>
                    <p>Berlin, Germany</p>
                  </address>
                </li>
                <li>
                  <Link
                    href="mailto:contact@interno.com"
                    className="text-primary hover:text-accent-hover transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Send email"
                  >
                    contact@interno.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+491234567890"
                    className="text-primary hover:text-accent-hover transition-colors duration-300"
                    rel="noreferrer noopener"
                    aria-label="Call to phone"
                  >
                    +49 123 456 7890
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-10 text-center text-lg bg-white xl:border-t border-primary/20">
        Copyright &copy; Interno 2025. All rights reserved.
      </p>
    </footer>
  );
};
