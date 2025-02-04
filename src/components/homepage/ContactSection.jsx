"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Pesan berhasil dikirim!");
    setFormData({ nama: "", email: "", pesan: "" });
  };

  // Alamat baru
  const officeTitle = "Kantor Utama";
  const officeAddress = "Crown Palace Business Park # C 16 - 17, Jl. Prof. DR. Soepomo SH No.231, Jakarta 12870";
  const mapSrc = "https://maps.app.goo.gl/W3iEJVXq6Cit9Ty1A";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi tim kami untuk informasi lebih lanjut atau pertanyaan seputar program dan layanan.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 border-b-2 focus:border-primary outline-none transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="nama"
                  className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm"
                >
                  Nama Lengkap
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-b-2 focus:border-primary outline-none transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm"
                >
                  Alamat Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className="w-full px-4 py-3 border-b-2 focus:border-primary outline-none transition-colors h-32 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="pesan"
                  className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm"
                >
                  Pesan Anda
                </label>
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow relative overflow-hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="absolute inset-0 bg-white/30 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                ) : null}
                <span className="relative z-10">
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </span>
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {officeTitle}
                </h3>
                <p className="text-gray-600 mb-4">{officeAddress}</p>
              </div>
              <motion.iframe
                className="w-full h-80"
                src={mapSrc}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-cross-origin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
