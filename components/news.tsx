"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

import { newsData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const News = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 h2 text-center text-primary"
        >
          Articles & News
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 md:text-lg text-center max-w-200 mx-auto"
        >
          Stay updated with the latest trends in interior design, architecture,
          and home improvement. Our articles provide expert tips, innovative
          ideas, and inspiring project showcases to help you create stylish and
          functional spaces tailored to your lifestyle.
        </motion.p>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {newsData.map(({ id, image, title, date, href }) => (
            <motion.li
              variants={fadeIn("up", 0.6 + Number(id) * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              key={id}
              className="p-5 mx-auto xl:mx-0 w-full max-w-95.5 h-130 border border-primary/20 rounded-[62px] hover:bg-accent-secondary transition-colors duration-300 group cursor-pointer"
            >
              <Image
                src={image}
                alt="News image"
                width={340}
                height={290}
                className="mb-5"
              />
              <div className="flex flex-col gap-7.5">
                <h3 className="h3">{title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-base xl:text-lg">{date}</p>
                  <Link
                    href={href}
                    className="flex items-center justify-center size-13 bg-accent-secondary rounded-full cursor-pointer group-hover:bg-white transition-colors duration-300"
                  >
                    <RiArrowRightSLine
                      size={30}
                      className="text-primary pl-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
