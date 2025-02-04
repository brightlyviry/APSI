"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRecycle, FaLightbulb } from "react-icons/fa";
import FloatingParticles from "./FloatingParticles";

const DesktopHero = () => (
  <section className="hidden md:flex relative w-full min-h-[120vh] items-center justify-center bg-gradient-to-br from-[#0a1a2f] via-[#1a3b5d] to-[#2d704f] overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-soft-light" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#2EA4E0]/10 to-[#8DC43F]/10" />
    <FloatingParticles />
    <motion.div
      className="absolute w-[200%] h-[200%] bg-conic-gradient from-transparent via-white/15 to-transparent opacity-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    />
    <div className="z-10 container mx-auto px-6 py-12 text-center flex flex-col items-center">
      <motion.div className="relative mb-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120 }}>
        <div className="absolute -inset-8 bg-gradient-to-r from-[#8dc43f] to-[#2EA4E0] rounded-full blur-3xl opacity-40 animate-pulse" />
        <motion.div
          className="relative text-9xl md:text-[12rem]"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          🌍
          <div className="absolute -inset-4 border-4 border-white/20 rounded-full animate-spin-slow" />
        </motion.div>
      </motion.div>
      <motion.div className="overflow-hidden mb-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent leading-tight tracking-tight"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <span className="block">Transformasi Ekosistem</span>
          <span className="block mt-2">Pengelolaan Sampah</span>
        </motion.h1>
      </motion.div>
      <motion.p
        className="text-3xl md:text-4xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent">Bersama APSI</span> wujudkan bisnis daur ulang berkelanjutan melalui inovasi dan kolaborasi
      </motion.p>
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[
          { icon: <FaRecycle className="text-3xl" />, text: "Mulai Sekarang", color: "#8DC43F" },
          { icon: <FaLightbulb className="text-3xl" />, text: "Eksplorasi Inovasi", color: "#2EA4E0" }
        ].map((btn, i) => (
          <motion.a
            key={i}
            href={i === 0 ? "#contact" : "/program-kerja"}
            className="flex items-center gap-4 px-12 py-6 rounded-3xl backdrop-blur-lg border-2 border-white/30 hover:border-white/50 transition-all duration-500 group relative overflow-hidden"
            whileHover={{ y: -5, scale: 1.05 }}
            style={{
              background: `radial-gradient(200% circle at 100% 50%, ${btn.color}40 0%, transparent 200%)`,
              boxShadow: `0 12px 48px ${btn.color}30`
            }}
          >
            <span className="relative z-10 text-white/90 transition-colors">{btn.icon}</span>
            <span className="relative z-10 text-2xl font-bold text-white/90 transition-colors">{btn.text}</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-60" />
          </motion.a>
        ))}
      </motion.div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#2d704f]/30 to-transparent pointer-events-none" />
  </section>
);
const MobileHero = () => (
  <section className="md:hidden relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1a2f] via-[#1a3b5d] to-[#2d704f] overflow-hidden px-4 py-8">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-soft-light scale-125" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#2EA4E0]/10 to-[#8DC43F]/10" />
    <FloatingParticles mobile />
    <div className="z-10 flex flex-col items-center space-y-4">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] rounded-full blur-xl opacity-40 animate-pulse" />
          <motion.div
            className="relative text-7xl"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            🌍
            <div className="absolute -inset-2 border-2 border-white/20 rounded-full animate-spin-slow" />
          </motion.div>
        </div>
      </motion.div>
      <motion.h1
        className="text-5xl font-bold bg-gradient-to-b from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent mb-4 leading-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pb-2">Transformasi</div>
        <div>Ekosistem Sampah</div>
      </motion.h1>
      <motion.p
        className="text-2xl text-white/90 text-center max-w-md leading-snug font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent">
          Bersama APSI
        </span>{" "}
        wujudkan bisnis daur ulang berkelanjutan
      </motion.p>
      <motion.div className="flex flex-col gap-3 w-full max-w-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        {[
          { icon: <FaRecycle className="text-3xl" />, text: "Mulai Sekarang", color: "#8DC43F" },
          { icon: <FaLightbulb className="text-3xl" />, text: "Eksplorasi Inovasi", color: "#2EA4E0" }
        ].map((btn, i) => (
          <motion.a
            key={i}
            href={i === 0 ? "#contact" : "/program-kerja"}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            style={{
              background: `radial-gradient(150% circle at 100% 50%, ${btn.color}40 0%, transparent 200%)`,
              boxShadow: `0 8px 32px ${btn.color}20`
            }}
          >
            <span className="text-white/90 transition-colors">{btn.icon}</span>
            <span className="text-xl font-semibold text-white/90 transition-colors">{btn.text}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
  </section>
);
export default function HeroSection(){
  return (
    <>
      <DesktopHero/>
      <MobileHero/>
    </>
  );
}
