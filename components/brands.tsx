"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { brandList } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Brands = () => {
  return (
    <section className="section">
      <ul className="container flex flex-col xl:flex-row items-center justify-between gap-12">
        {brandList.map(({ id, label, image }) => (
          <motion.li
            variants={fadeIn("up", 0.2 + Number(id) * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            key={id}
          >
            <Image src={image} alt={label} width={150} height={40} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
