"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaPlayCircle } from "react-icons/fa";
import { colors } from "./colors";

function BlogSection() {
  const articles = [
    {
      title: "Revolusi Industri 4.0 di Bidang Daur Ulang",
      date: "30 Jan 2025",
      tag: "Teknologi",
      image: "/blog-1.jpg"
    },
    {
      title: "Strategi Pemasaran Produk Daur Ulang Digital",
      date: "28 Jan 2025",
      tag: "Bisnis",
      image: "/blog-2.jpg"
    },
    {
      title: "Pelatihan UMKM Daur Ulang Modern",
      date: "25 Jan 2025",
      tag: "Edukasi",
      image: "/blog-3.jpg"
    }
  ];
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Wawasan Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan artikel eksklusif dan perkembangan terbaru seputar industri daur ulang
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-60">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {a.tag}
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="text-sm text-gray-500 mb-2">{a.date}</div>
                <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  Baca Selengkapnya
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
