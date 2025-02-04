// File: src/app/koperasi/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TentangKami from "@/components/koperasi/TentangKami";
import RencanaKerja from "@/components/koperasi/RencanaKerja";
import KegiatanKoperasi from "@/components/koperasi/KegiatanKoperasi";
import headerBg from "@/images/koperasi-hero.jpg";
export default function KoperasiPage(){
  return(
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <motion.header initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src={headerBg} alt="Header Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1.2, delay:0.3 }} className="relative z-10 text-center px-4">
          <motion.h1 initial={{ y:-20 }} animate={{ y:0 }} transition={{ duration:0.8 }} className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-2xl">
            KOPERASI APSI JAYA MANDIRI
          </motion.h1>
          <motion.p initial={{ y:20 }} animate={{ y:0 }} transition={{ duration:0.8, delay:0.5 }} className="mt-4 text-lg md:text-2xl text-gray-200">
            Mewujudkan ekonomi berbasis kekeluargaan dan profesionalisme
          </motion.p>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.8 }} className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all">
              Bergabung Sekarang
            </button>
          </motion.div>
        </motion.div>
        <motion.div animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:60, ease:"linear" }} className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-radial from-transparent via-white/20 to-transparent" />
        </motion.div>
      </motion.header>
      <TentangKami/>
      <RencanaKerja/>
      <KegiatanKoperasi/>
    </div>
  )
}
