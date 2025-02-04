"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import peta from "@/images/Sebaran_Anggota_APSI_7.jpg";

const LokasiSebaran = () => (
  <section id="lokasi" className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
      >
        LOKASI SEBARAN ANGGOTA APSI
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden"
      >
        <Image src={peta} alt="Lokasi Sebaran Anggota APSI" className="w-full h-auto object-cover" priority sizes="(max-width: 768px) 100vw, 100vw" />
      </motion.div>
    </div>
  </section>
);

export default LokasiSebaran;
