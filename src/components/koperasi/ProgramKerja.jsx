"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import limbahBotol from "@/images/koperasi/Limbah_Botol_Plastik.jpg";
import limbahPVC from "@/images/koperasi/Limbah_Plastik_PVC.jpg";
import limbahTutupBotol from "@/images/koperasi/Limbah_Tutup_Botol_Plastik.jpg";
import pet_pete from "@/images/koperasi/PET-PETE.jpg";

const images = [
  { src: limbahBotol, title: "Pengelolaan Limbah Botol", desc: "Proses daur ulang limbah botol plastik menjadi bahan baku bernilai" },
  { src: limbahPVC, title: "Plastik PVC", desc: "Transformasi limbah PVC menjadi produk bernilai ekonomi" },
  { src: limbahTutupBotol, title: "Tutup Botol Plastik", desc: "Inovasi pemanfaatan tutup botol plastik bekas" },
  { src: pet_pete, title: "Material PET-PETE", desc: "Pengolahan material PET menjadi produk ramah lingkungan" }
];

const ImageCard = ({ img, i }) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
  >
    <Image
      src={img.src}
      alt=""
      width={600}
      height={400}
      className="object-cover aspect-square group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white">{img.title}</h3>
      <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{img.desc}</p>
    </div>
  </motion.div>
);

const ProgramKerja = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        KEGIATAN KOPERASI
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <ImageCard key={i} img={img} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProgramKerja;