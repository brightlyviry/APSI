"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "@/images/tentang-kami-hero-image.jpg";
const Hero = () => (
  <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
    <div className="absolute inset-0">
      <Image src={heroBg} alt="Program Kerja Hero" fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f]/90 via-[#1a3b5d]/70 to-[#2d704f]/90" />
    </div>
    <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl space-y-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
          <span className="text-lg text-white/80">#GerakanBersama</span>
        </motion.div>
        <motion.h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#8DC43F] via-[#2EA4E0] to-[#8DC43F] bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Transformasi melalui <br className="hidden md:block" />Aksi Nyata
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Program strategis untuk penguatan ekosistem daur ulang Indonesia
        </motion.p>
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, repeat: Infinity, repeatType: "mirror" }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <div className="animate-bounce w-8 h-8 border-4 border-white/50 rounded-full" />
    </motion.div>
  </section>
);
export default Hero;
