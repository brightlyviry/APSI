"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRecycle, FaLightbulb, FaChartLine } from "react-icons/fa";
import { colors } from "./colors";

function ValueCards() {
  const values = [
    { icon: <FaRecycle className="text-4xl" />, title: "Ekonomi Sirkular", desc: "Mendorong model bisnis berkelanjutan dalam pengelolaan sampah", color: colors.primary },
    { icon: <FaChartLine className="text-4xl" />, title: "Pengembangan UMKM", desc: "Pelatihan dan pendampingan bisnis daur ulang terintegrasi", color: colors.secondary },
    { icon: <FaLightbulb className="text-4xl" />, title: "Inovasi Teknologi", desc: "Implementasi teknologi modern dalam pengelolaan sampah", color: colors.accent }
  ];
  return (
    <section className="py-16 bg-white -mt-20 z-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: v.color + '20' }}>
                <div style={{ color: v.color }}>{v.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueCards;
