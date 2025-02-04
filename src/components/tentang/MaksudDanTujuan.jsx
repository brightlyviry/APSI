"use client";
import React from "react";
import { motion } from "framer-motion";

const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 8, repeat: Infinity, ease: "linear" }
  }
};

const MaksudDanTujuan = () => (
  <section id="maksud" className="relative py-16 overflow-hidden">
    <motion.div
      variants={gradientVariants}
      animate="animate"
      className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white bg-[length:200%_200%] -z-10"
    />
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        MAKSUD DAN TUJUAN
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
      >
        Didirikan pada tanggal 14 Juni 2019 sebagai jawaban atas tantangan permasalahan sampah di Indonesia, APSI bertujuan untuk meningkatkan peran anggota sebagai pelaku utama pengelolaan sampah nasional, meningkatkan pendapatan dan kapasitas usaha UMKM, serta mengembangkan standar internasional dalam industri daur ulang sampah.
      </motion.p>
    </div>
  </section>
);

export default MaksudDanTujuan;
