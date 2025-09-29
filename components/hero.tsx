"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-160 xl:h-210 bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
    >
      <div className="container h-full flex items-center justify-center xl:justify-start">
        <div className="w-144 flex flex-col items-center lg:items-start text-center xl:text-left">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="h1 mb-8 text-primary"
          >
            Interior Design That Reflects Your Lifestyle
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-8 md:text-lg"
          >
            Elevate your home with personalized interior design solutions that
            combine creativity, functionality, and timeless style. Our expert
            team transforms ordinary spaces into inspiring environments tailored
            just for you.
          </motion.p>
          <motion.button
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            type="button"
            className="mx-auto xl:mx-0 btn btn-primary"
          >
            Request a Free Quote
            <ArrowRight className="text-accent" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
