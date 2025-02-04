"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaPlayCircle } from "react-icons/fa";
import { colors } from "./colors";

function PustakaSection() {
  const resources = [
    { type: 'pdf', title: 'Panduan Daur Ulang Plastik', size: '2.4 MB' },
    { type: 'video', title: 'Teknik Pemilahan Sampah', duration: '15:30' },
    { type: 'gallery', title: 'Galeri Karya UMKM', items: 24 },
    { type: 'pdf', title: 'Regulasi Terbaru', size: '1.8 MB' },
    { type: 'video', title: 'Workshop 2024', duration: '45:12' },
    { type: 'gallery', title: 'Inovasi Teknologi', items: 18 }
  ];
  return (
    <section id="pustaka" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Pusat Pengetahuan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Akses materi edukasi, dokumentasi visual, dan regulasi terkini seputar industri daur ulang
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${r.type === 'pdf' ? 'bg-blue-100' : r.type === 'video' ? 'bg-red-100' : 'bg-green-100'}`}>
                {r.type === 'pdf' ? <FaDownload className="text-blue-600 text-xl" /> :
                  r.type === 'video' ? <FaPlayCircle className="text-red-600 text-xl" /> :
                    <span className="text-green-600 text-xl">📷</span>}
              </div>
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <div className="text-sm text-gray-500">
                {r.type === 'pdf' ? `PDF • ${r.size}` :
                  r.type === 'video' ? `Video • ${r.duration}` :
                    `${r.items} Foto`}
              </div>
              <motion.div
                className="mt-4 border-t pt-4 flex justify-between items-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <button className="text-primary font-medium flex items-center gap-2">
                  {r.type === 'pdf' ? 'Unduh' : 'Lihat'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </button>
                <span className="text-gray-400 text-sm">Gratis Akses</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PustakaSection;
