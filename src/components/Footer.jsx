"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/images/logo_APSI.png";

// Menggunakan alamat baru sebagai satu-satunya office
const office = {
  title: "Kantor Utama",
  address: "Crown Palace Business Park # C 16 - 17, Jl. Prof. DR. Soepomo SH No.231, Jakarta 12870",
  map: "https://maps.app.goo.gl/W3iEJVXq6Cit9Ty1A"
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a1a2f] to-[#1a3b5d] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="space-y-4">
            <Image 
              src={logo} 
              alt="APSI Logo" 
              width={200} 
              height={80} 
              className="filter brightness-0 invert"
            />
            <div className="h-px bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] w-1/2"/>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4 md:col-span-2"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent">
              {office.title}
            </h3>
            <p className="text-sm leading-relaxed">{office.address}</p>
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <iframe 
                src={office.map}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <div className="flex justify-center space-x-6 mb-4">
            {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:text-[#8DC43F] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} APSI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
