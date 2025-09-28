import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RiPhoneFill } from "react-icons/ri";

import aboutImg from "@/public/assets/about/img.png";

export const About = () => {
  return (
    <section id="about" className="mt-20 xl:mt-50 relative z-20">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-18.5 text-center xl:text-left">
          <div className="flex-1 flex flex-col items-center xl:items-start gap-8 order-2 xl:order-none max-w-xl xl:max-w-102.5">
            <h2 className="h2">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p className="md:text-lg">
              Transform your home with our professional interior design
              services. Our studio creates stylish, modern, and functional
              living spaces tailored to your taste and lifestyle.
            </p>
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className="size-23 flex items-center justify-center bg-accent/15 rounded-full">
                <RiPhoneFill size={36} className="text-accent" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">+49 123 456 7890</p>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <button type="button" className="mx-auto xl:mx-0 btn btn-primary">
              Request a Free Quote
              <ArrowRight className="text-accent" />
            </button>
          </div>
          <div className="order-1 xl:order-none max-w-113.25 xl:max-w-none mx-auto xl:mx-0">
            <Image src={aboutImg} alt="Interior design image" />
          </div>
        </div>
      </div>
    </section>
  );
};
