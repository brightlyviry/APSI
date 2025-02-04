"use client";
import React from "react";
import { motion } from "framer-motion";
import { colors } from "./colors";

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              className="w-full h-96 object-cover "
              src="https://www.youtube.com/embed/8VWSK5r9Z_w"
              title="Rakernas Pertama APSI"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute bottom-0 right-0 p-6 bg-black/50 rounded-tl-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Rakernas Pertama APSI</h3>
              <p className="text-base md:text-lg text-white mt-1">Rapat kerja nasional asosiasi pengusaha sampah indonesia</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Membangun Masa Depan Berkelanjutan
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              APSI menghubungkan pelaku industri daur ulang dengan teknologi terkini dan pasar global.
              Dengan jaringan lebih dari 500 UMKM terafiliasi, kami menjadi garda terdepan dalam
              transformasi ekonomi sirkular Indonesia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[500, 85].map((num, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-primary">{num}+</div>
                  <div className="text-gray-600 mt-1">
                    {i === 0 ? "UMKM Terafiliasi" : "Kota Terjangkau"}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
