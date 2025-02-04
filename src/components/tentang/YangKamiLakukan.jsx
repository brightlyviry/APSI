"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const YangKamiLakukan = () => (
  <section id="aksi" className="relative py-16 bg-white overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-30 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        YANG KAMI LAKUKAN
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
        className="list-none space-y-4 max-w-xl mx-auto text-gray-700 text-lg"
      >
        {[
          "Melayani dan melindungi kepentingan anggota serta memperjuangkan aspirasi mereka.",
          "Memberikan bimbingan dan arahan untuk mengembangkan kapasitas dan kemampuan anggota.",
          "Memberikan masukan kepada pemerintah dan pemangku kepentingan untuk kebijakan persampahan nasional.",
          "Mendukung pemberdayaan dan pengembangan profesionalisme anggota.",
          "Melakukan pembinaan dan pengawasan kegiatan usaha anggota secara profesional.",
          "Menjadi mediator dalam membangun kerjasama sinergis di tingkat lokal, nasional, dan global."
        ].map((text, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-2"
          >
            <FaCheckCircle className="text-primary" />
            <span>{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default YangKamiLakukan;
