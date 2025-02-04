"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import koperasiHero from "@/images/koperasi-hero.jpg";

const FloatingParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => {
      const size = Math.random() * 30 + 20;
      return (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-lighten"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "radial-gradient(circle, rgba(141,196,63,0.3), transparent)"
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 0.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      );
    })}
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, 50]);
  
  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      <motion.div style={{ y: yOffset }} className="absolute inset-0">
        <Image src={koperasiHero} alt="Koperasi APSI Jaya Mandiri Hero" fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />
      <FloatingParticles />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8DC43F]/30 to-[#2EA4E0]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          RENCANA KERJA PENGURUS KOPERASI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-xl md:text-3xl font-semibold text-white"
        >
          “APSI JAYA MANDIRI (AJM) TAHUN BUKU 2023”
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col md:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg"
          >
            Bergabung Sekarang
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border-2 border-white/50 text-white font-semibold backdrop-blur-lg shadow-lg"
          >
            Pelajari Lebih
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
