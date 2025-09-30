"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { statsData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="section bg-accent-secondary py-20 xl:py-37.5"
    >
      <div className="container">
        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          {statsData.map(({ id, label, value }, index) => (
            <li
              key={id}
              className={`text-center ${
                index !== statsData.length - 1
                  ? "xl:border-r xl:border-accent"
                  : ""
              }`}
            >
              {isInView ? (
                <CountUp
                  end={value}
                  duration={2.5}
                  delay={0.4 + index * 0.4}
                  className="h1 font-primary text-accent"
                />
              ) : (
                <span className="h1 font-primary text-accent">0</span>
              )}
              <p className="text-lg font-medium">{label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
