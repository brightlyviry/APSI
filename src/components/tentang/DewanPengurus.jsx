"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ohan from "@/images/profil-dewan/ohan-s-maksudi.jpg";
import saut from "@/images/profil-dewan/saut-marpaung.jpg";
import marlon from "@/images/profil-dewan/marlon-kamagi.jpg";
import iwan from "@/images/profil-dewan/iwan-chandra-budiman.jpg";
import edy from "@/images/profil-dewan/edy-supriyanto.jpg";
import umi from "@/images/profil-dewan/umi-haniek-mayningrum.jpg";
import gindo from "@/images/profil-dewan/gindo-pangaribuan.jpg";
import idham from "@/images/profil-dewan/idham-arsyad.jpg";

const dewanData = [
  { name: "OHAN S MAKSUDI", role: "PENGAWAS", image: ohan },
  { name: "SAUT MARPAUNG, SE", role: "KETUA UMUM", image: saut },
  { name: "MARLON KAMAGI, SE MS", role: "SEKRETARIS UMUM", image: marlon },
  { name: "IWAN CHANDRA BUDIMAN SP", role: "BENDAHARA UMUM", image: iwan },
  { name: "EDY SUPRIYANTO", role: "KETUA SEKRETARIAT", image: edy },
  { name: "UMI HANIEK MAYNINGRUM", role: "KETUA I – BIDANG ORGANISASI KEANGGOTAAN", image: umi },
  { name: "GINDO PANGARIBUAN", role: "KETUA II – BIDANG DIKLAT & SERTIFIKASI", image: gindo },
  { name: "IDHAM ARSYAD", role: "KETUA IV – BIDANG KERJASAMA & KELEMBAGAAN", image: idham }
];

const DewanPengurus = () => (
  <section id="dewan" className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Dewan Pengurus Pusat
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dewanData.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 flex flex-col items-center transform transition-transform hover:scale-105"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src={person.image} alt={person.name} fill className="object-cover" priority />
            </div>
            <h3 className="text-xl font-bold text-primary text-center">{person.name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{person.role}</p>
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "linear-gradient(45deg, rgba(141,196,63,0.2), rgba(46,164,224,0.2))"
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DewanPengurus;
