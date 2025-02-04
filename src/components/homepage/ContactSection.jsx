"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaPlayCircle } from "react-icons/fa";

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

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi tim kami untuk informasi lebih lanjut atau pertanyaan seputar program dan layanan.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
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
                <label htmlFor="nama" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm">
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
                <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm">
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
                <label htmlFor="pesan" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm">
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
                  <motion.div className="absolute inset-0 bg-white/30 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                ) : null}
                <span className="relative z-10">
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </span>
              </motion.button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-primary">Kantor Sekretariat 1</h3>
                <p className="text-gray-600 mb-4">
                  RUKO GREEN GARDEN BLOK A14 NO.36, Kel. Kedoya Utara, Kec. Kebon Jeruk, Kota Adm. Jakarta Barat, Prov. DKI Jakarta.
                </p>
              </div>
              <motion.iframe
                className="w-full h-80"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d507743.19087339746!2d106.762698!3d-6.165071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b10eed09a9%3A0xad75fd8aa842bd6d!2sGaruda%20perkasa%20putra%20angkasa%2C%20PT!5e0!3m2!1sen!2sus!4v1738379949509!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-cross-origin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-secondary">Kantor Sekretariat 2</h3>
                <p className="text-gray-600 mb-4">
                  RT.06/RW.IV Dsn Tambakrejo, Ds. Tambakrejo, Kec. Kraton, Kabupaten Pasuruan, Prov. Jawa Timur.
                </p>
              </div>
              <motion.iframe
                className="w-full h-80"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506191.0367035643!2d112.875168!3d-7.616535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c5ad9bafaea5%3A0xfe94afc04e88b88f!2sTambakrejo%2C%20Kraton%2C%20Pasuruan%20Regency%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1738380103740!5m2!1sen!2sus"
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
