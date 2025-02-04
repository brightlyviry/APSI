"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import tentangHero from "@/images/tentang-kami-hero-image.jpg";

const FloatingDebris = () => (
  <>
    {[...Array(20)].map((_,i) => (
      <motion.div
        key={i}
        className="absolute mix-blend-lighten"
        style={{
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `radial-gradient(circle, rgba(${Math.random()>0.5?141:46},${Math.random()>0.5?196:164},${Math.random()>0.5?63:224},0.3), transparent)`
        }}
        animate={{
          y: [0, -200, 0],
          x: [0, Math.random()*100-50, 0],
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={tentangHero}
          alt="Tentang Kami Hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f]/90 via-[#1a3b5d]/70 to-[#2d704f]/90" />
      <FloatingDebris />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8DC43F]/20 to-[#2EA4E0]/20"
        animate={{
          background: [
            'linear-gradient(45deg, #8DC43F20, #2EA4E020)',
            'linear-gradient(135deg, #2EA4E020, #8DC43F20)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div 
          className="text-center max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {[..."TENTANG-KAMI"].map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.div
            className="relative before:absolute before:-bottom-4 before:left-1/2 before:w-24 before:h-1 before:bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] before:-translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Didirikan pada 14 Juni 2019 sebagai jawaban atas tantangan sampah di Indonesia,{' '}
              <span className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent font-semibold">
                APSI
              </span>{' '}
              bergerak di sektor UMKM Persampahan.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white font-semibold"
            >
              Bergabung Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-white/20 hover:border-white/40 text-white backdrop-blur-lg"
            >
              Pelajari Lebih
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;