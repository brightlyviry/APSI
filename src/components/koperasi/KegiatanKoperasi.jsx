// File: src/components/koperasi/KegiatanKoperasi.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pet_pete from "@/images/koperasi/PET-PETE.jpg";
import limbahBotol from "@/images/koperasi/Limbah_Botol_Plastik.jpg";
import limbahPVC from "@/images/koperasi/Limbah_Plastik_PVC.jpg";
import limbahTutupBotol from "@/images/koperasi/Limbah_Tutup_Botol_Plastik.jpg";
export default function KegiatanKoperasi(){
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };
  return(
    <section id="kegiatan-koperasi" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/luxury-pattern.png')] opacity-10" />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold text-center mb-8 text-[#2EA4E0] drop-shadow-md">
          KEGIATAN KOPERASI
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Tahun 2023: Kami tidak hanya fokus pada bahan daur ulang HD, namun juga merambah ke berbagai jenis bahan daur ulang dengan inovasi tiada henti.
        </motion.p>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariant} whileHover={{ scale: 1.03 }} className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <Image src={pet_pete} alt="Material PET-PETE" className="object-cover transition-transform duration-300" placeholder="blur" sizes="(max-width:768px) 100vw, 50vw" />
            <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.span className="text-white text-2xl font-bold">PET-PETE</motion.span>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariant} className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image src={limbahBotol} alt="Limbah Botol Plastik" className="object-cover transition-transform duration-300" placeholder="blur" sizes="(max-width:768px) 100vw, 50vw" />
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <motion.span className="text-white text-xl font-semibold">Botol Plastik</motion.span>
              </motion.div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image src={limbahPVC} alt="Plastik PVC" className="object-cover transition-transform duration-300" placeholder="blur" sizes="(max-width:768px) 100vw, 50vw" />
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <motion.span className="text-white text-xl font-semibold">Plastik PVC</motion.span>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariant} whileHover={{ scale: 1.03 }} className="relative group col-span-2 rounded-3xl overflow-hidden shadow-2xl">
              <Image src={limbahTutupBotol} alt="Tutup Botol Plastik" className="object-cover transition-transform duration-300" placeholder="blur" sizes="100vw" />
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <motion.span className="text-white text-2xl font-bold">Tutup Botol Plastik</motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
