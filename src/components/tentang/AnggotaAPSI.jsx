"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

// Import logo dengan ekstensi .jpg
import logoMember1 from "@/images/logo-member/logo-member-1.jpeg";
import logoMember2 from "@/images/logo-member/logo-member-2.jpg";
import logoMember3 from "@/images/logo-member/logo-member-3.jpg";
import logoMember4 from "@/images/logo-member/logo-member-4.jpeg";
import logoMember5 from "@/images/logo-member/logo-member-5.jpg";
import logoMember6 from "@/images/logo-member/logo-member-6.jpg";


const logos = [
    {
        src: logoMember1,
        alt: 'logo member 1'
    },
    {
        src: logoMember2,
        alt: 'logo member 2'
    },
    {
        src: logoMember3,
        alt: 'logo member 3'
    },
    {
        src: logoMember4,
        alt: 'logo member 4'
    },
    {
        src: logoMember5,
        alt: 'logo member 5'
    },
    {
        src: logoMember6,
        alt: 'logo member 6'
    }
]

const AnggotaAPSI = () => {
  const [memberCount, setMemberCount] = useState(0);
  
  useEffect(() => {
    const animateCount = () => {
      let start = 0;
      const end = 200;
      const duration = 3000;
      const increment = end / (duration / 10);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setMemberCount(Math.floor(start));
      }, 10);

      return () => clearInterval(timer);
    };

    animateCount();
  }, []);

  return (
    <section id="anggota" className="relative py-20 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent mb-4">
            Jejaring Anggota APSI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabung bersama {memberCount}+ anggota dari seluruh Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="group relative aspect-square bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-6  transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 16.66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white rounded-full font-semibold hover:shadow-lg transition-all">
            Lihat Semua Anggota
            <FiArrowRight className="animate-pulse" />
          </button>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default AnggotaAPSI;