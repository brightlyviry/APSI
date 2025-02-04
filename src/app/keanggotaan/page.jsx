"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function KeanggotanPage(){
  return(
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-[#1a3b5d] to-[#2d704f] text-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
      >
        <motion.h1
          initial={{opacity:0,y:-10}}
          animate={{opacity:1,y:0}}
          className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent"
        >
          Daftar Keanggotaan APSI
        </motion.h1>
        <p className="text-sm text-center text-white/80 mb-6">
          Sudah jadi anggota?{" "}
          <Link href="#" className="text-[#8DC43F] underline">
            Login
          </Link>
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-white/80 mb-1">Username</label>
            <input type="text" className="w-full rounded-lg p-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8DC43F]" />
          </div>
          <div>
            <label className="block text-white/80 mb-1">Email</label>
            <input type="email" className="w-full rounded-lg p-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8DC43F]" />
          </div>
          <div>
            <label className="block text-white/80 mb-1">Password</label>
            <input type="password" className="w-full rounded-lg p-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8DC43F]" />
          </div>
          <div>
            <label className="block text-white/80 mb-1">Re-enter Password</label>
            <input type="password" className="w-full rounded-lg p-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8DC43F]" />
          </div>
          <motion.button
            whileHover={{scale:1.02}}
            whileTap={{scale:0.98}}
            type="submit"
            className="w-full py-3 rounded-full mt-6 font-semibold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white shadow-md hover:shadow-xl transition-all"
          >
            Daftar
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
