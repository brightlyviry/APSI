"use client";
import React from "react";
import { motion } from "framer-motion";

const ContentSection = ({ id, title, children }) => (
  <section id={id} className="py-16">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
      >
        {title}
      </motion.h2>
      <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
    </div>
  </section>
);

export default ContentSection;
