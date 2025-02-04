"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/program-kerja/Hero";
import program1 from "@/images/program-kerja/RAKERNAS_APSI_JUNI2019_2B.jpg";
import program2 from "@/images/program-kerja/Hari_LHS.jpg";
import program3 from "@/images/program-kerja/Kerjasama_stakeholder.jpg";
import program4 from "@/images/program-kerja/Upaya_penjajakan.jpg";
import program5 from "@/images/program-kerja/DPD_JABAR.jpg";
import program6 from "@/images/program-kerja/RAKER_2022.jpg";

const programs = [
  {
    title: "RAKERNAS APSI Pertama",
    date: "28-30 Juni 2019, Kaliurang, Jogjakarta",
    desc: "Rapat kerja nasional pertama pengurus APSI dengan fokus peningkatan kapasitas dan kerjasama stakeholder",
    img: program1
  },
  {
    title: "Festival Wirausaha & Talkshow",
    date: "29 Juni 2019",
    desc: "Acara edukasi terbuka untuk UMKM dengan pembicara ahli industri daur ulang",
    img: program2
  },
  {
    title: "Kerjasama Pemkab Klungkung",
    date: "Juni 2019",
    desc: "Kolaborasi strategis untuk pengelolaan sampah berkelanjutan",
    img: program3
  },
  {
    title: "Rapat Kerja DPD Kalimantan",
    date: "30 Januari 2022",
    desc: "Penguatan jaringan UMKM menghadapi krisis sampah regional",
    img: program4
  },
  {
    title: "Rapat Kerja DPD Jawa Barat",
    date: "28 Juni 2022",
    desc: "Pembentukan koperasi untuk penguatan ekonomi anggota",
    img: program5
  },
  {
    title: "RAKERNAS APSI 2022",
    date: "23-24 September 2022, Pasuruan",
    desc: "Strategi pengembangan UMKM sampah berbasis teknologi",
    img: program6
  }
];

const ProgramKerjaPage = () => (
  <div className="bg-gray-50">
    <Hero />
    
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent mb-4">
            Agenda Strategis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Program unggulan untuk pengembangan industri daur ulang berkelanjutan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{program.date}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                #{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  </div>
);

export default ProgramKerjaPage;