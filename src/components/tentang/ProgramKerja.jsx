"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import rakernasJuni2019 from "@/images/program-kerja/RAKERNAS_APSI_JUNI2019_2B.jpg";
import hariLHS from "@/images/program-kerja/Hari_LHS.jpg";
import kerjasamaStakeholder from "@/images/program-kerja/Kerjasama_stakeholder.jpg";
import upayaPenjajakan from "@/images/program-kerja/Upaya_penjajakan.jpg";
import dpdJabar from "@/images/program-kerja/DPD_JABAR.jpg";
import raker2022 from "@/images/program-kerja/RAKER_2022.jpg";

const programs = [
  {
    title: "RAKERNAS APSI PERTAMA JUNI 2019",
    date: "28-30 Juni 2019, Kaliurang, Jogjakarta",
    description:
      "Rapat kerja pertama pengurus APSI diadakan sebagai momentum peningkatan kapasitas dan kerjasama antar stakeholder, dihadiri oleh pengurus pusat, dewan pembina, dewan pengawas, dan anggota dari seluruh Indonesia.",
    image: rakernasJuni2019
  },
  {
    title: "Event Festival Wirausaha & Talkshow",
    date: "29 Juni 2019",
    description:
      "Acara festival wirausaha dan talkshow UKM Sampah terbuka untuk umum dengan pembicara ahli, memberikan wawasan dan inspirasi.",
    image: hariLHS
  },
  {
    title: "Kerjasama dengan Pemkab Klungkung",
    date: "Juni 2019",
    description:
      "Penandatanganan kerjasama antara Pemerintah Kabupaten Klungkung dengan APSI sebagai dukungan terhadap pengelolaan sampah nasional melalui bantuan sarana dan edukasi.",
    image: kerjasamaStakeholder
  },
  {
    title: "Rapat Kerja APSI DPD Kalimantan",
    date: "30 Januari 2022",
    description:
      "Rapat kerja didukung oleh koperasi bentukan APSI DPD Kalimantan untuk mendukung usaha UMKM anggota dalam menghadapi krisis sampah.",
    image: upayaPenjajakan
  },
  {
    title: "Rapat Kerja APSI DPD Jawa Barat",
    date: "28 Juni 2022",
    description:
      "Pembentukan Koperasi APSI Jaya Mandiri untuk menghimpun ekonomi kerakyatan bersama di kalangan internal APSI.",
    image: dpdJabar
  },
  {
    title: "RAKERNAS APSI 2022",
    date: "23-24 September 2022, Inna Tretes Hotel – Pasuruan, Jawa Timur",
    description:
      "Rapat kerja pertama pengurus APSI 2022 dengan tema 'Sampah Adalah Sumber Daya Baru. UMKM Sampah Maju, Indonesia Bersih.' Disertai webinar hybrid dengan pembicara dari kementerian, akademisi, dan praktisi.",
    image: raker2022
  }
];

const ProgramKerja = () => (
  <section id="program" className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        PROGRAM KERJA
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="relative h-56 md:h-64">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{program.date}</p>
              <p className="text-gray-700 text-base">{program.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramKerja;
