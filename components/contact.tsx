"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeIn } from "@/lib/variants";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container py-20 bg-primary sm:rounded-[70px]">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 h2 text-center text-white"
        >
          Do you want to join Interno?
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 md:text-lg text-center max-w-200 mx-auto text-white"
        >
          It is a long established fact will be distracted.
        </motion.p>
        <motion.button
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          type="button"
          className="btn btn-accent mx-auto"
        >
          Connect with us
          <ArrowRight className="text-primary" />
        </motion.button>
      </div>
    </section>
  );
};
