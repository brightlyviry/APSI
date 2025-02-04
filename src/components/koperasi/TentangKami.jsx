// File: src/components/koperasi/TentangKami.jsx
"use client";
import { motion } from "framer-motion";
export default function TentangKami(){
  return(
    <section id="tentang-kami" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="text-4xl font-bold text-center mb-8 text-[#2EA4E0]">
          TENTANG KAMI
        </motion.h2>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:1 }} className="text-lg leading-relaxed text-gray-700">
          Koperasi sebagai lembaga ekonomi dan keuangan yang disusun bersama berdasarkan asas kekeluargaan, bukan berarti lembaga yang mengikuti begitu saja kehendak atau keinginan-keinginan dari para anggotanya, melainkan tetap mempunyai aturan – aturan yang disepakati bersama yang disusun dalam Anggaran dasar dan Anggaran Rumah Tangga. Kesepakatan itu terjadi pada saat RAT. Oleh karena itu Pengurus sangat mengharapkan kehadiran seratus persen dari seluruh anggota saat RAT dilaksanakan, sehingga dapat memberikan saran atau masukan-masukan yang positif untuk meningkatkan dan memajukan usaha koperasi.
        </motion.p>
      </div>
    </section>
  )
}
