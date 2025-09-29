"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { statsData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Stats = () => {
  return (
    <section className="section bg-accent-secondary py-20 xl:py-37.5">
      <div className="container">
        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          {statsData.map((stat, index) => (
            <li
              key={stat.id}
              className={`text-center ${
                index !== statsData.length - 1
                  ? "xl:border-r xl:border-accent"
                  : ""
              }`}
            >
              <CountUp
                end={stat.value}
                delay={0.4 + index * 0.4}
                duration={2.5}
                className="h1 font-primary text-accent"
              />
              <p>{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
