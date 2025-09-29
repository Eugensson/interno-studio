"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

import { fadeIn } from "@/lib/variants";
import { projectList } from "@/lib/data";

export const OurWork = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 h2 text-center text-primary"
        >
          Follow Our Projects
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 md:text-lg text-center max-w-200 mx-auto"
        >
          Discover our interior design projects where style meets comfort. Each
          space is thoughtfully planned to reflect modern trends, enhance
          functionality, and create inspiring, practical living environments
          that feel stylish and welcoming.
        </motion.p>

        <motion.ul
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-26 gap-y-14"
        >
          {projectList.map(({ id, title, category, image }) => (
            <li key={id} className="w-full h-full max-w-137 mx-auto">
              <Image
                src={image}
                alt={title}
                width={548}
                height={525}
                className="mb-6"
              />
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="h3">{title}</h3>
                  <p>{category}</p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center size-17.5 bg-accent-secondary rounded-full cursor-pointer hover:bg-accent/20 transition-colors duration-300"
                >
                  <RiArrowRightSLine size={30} className="text-primary pl-1" />
                </button>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
