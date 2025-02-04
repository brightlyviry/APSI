"use client";
import { motion } from "framer-motion";
import React from "react";

const ContentSection = ({ id, title, children }) => (
  <section id={id} className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200/50"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] rounded-t-2xl" />
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring" }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {React.Children.map(children, (child, i) => (
            <motion.div
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] before:rounded-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ContentSection;