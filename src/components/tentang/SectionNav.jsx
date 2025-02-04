"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const navItems = [
  { label: "TENTANG KAMI", id: "tentang" },
  { label: "MAKSUD DAN TUJUAN", id: "maksud" },
  { label: "YANG KAMI LAKUKAN", id: "aksi" },
  { label: "LOKASI SEBARAN", id: "lokasi" },
  { label: "DEWAN PENGURUS", id: "dewan" },
  { label: "ANGGOTA APSI", id: "anggota" },
  { label: "PROGRAM KERJA", id: "program" }
];

const SectionNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-[64px] z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <motion.ul
          layout
          className="flex flex-wrap justify-center gap-6 py-2"
        >
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              layout
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative cursor-pointer flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={`#${item.id}`} className="text-sm md:text-base font-semibold text-gray-800 transition-colors hover:text-primary flex items-center gap-1">
                {item.label}
                <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              {activeIndex === i && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default SectionNav;
