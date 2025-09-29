"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { stepList } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Steps = () => {
  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {stepList.map(({ id, icon: Icon, title, description, href }) => (
            <motion.li
              variants={fadeIn("up", 0.2 + Number(id) * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              key={id}
              className="text-center"
            >
              <Icon size={48} className="mb-4 text-accent mx-auto" />
              <h3 className="h3 mb-5">{title}</h3>
              <p className="mb-5 max-w-md mx-auto">{description}</p>
              <Link
                href={href}
                className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
                Read More
                <ArrowRight size={22} className="text-accent" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
