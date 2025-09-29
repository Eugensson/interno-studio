"use client";

import { motion } from "framer-motion";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { fadeIn } from "@/lib/variants";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container py-10 lg:py-20 bg-accent-secondary sm:rounded-[70px]">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 h2 text-center text-primary"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 md:text-lg text-center max-w-200 mx-auto"
        >
          Discover genuine feedback from our clients who trusted us with their
          interior design projects. Their stories highlight our dedication to
          creating stylish, functional, and comfortable spaces tailored to
          individual lifestyles.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};
