"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, firestore } from "@/lib/firebase";
import logo from "@/images/logo_APSI.png";
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Program Kerja", href: "/program-kerja" },
  { name: "Koperasi APSI Jaya Mandiri", href: "/koperasi" },
  { name: "Berita & Blog", href: "/blog" },
  { name: "Pustaka", href: "/pustaka" },
  { name: "Keanggotaan", href: "/registrasi" }
];
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setOpenMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") setIsAdmin(true);
      }
    });
    return () => unsubscribe();
  }, []);
  const menuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { duration: 0.3 } }
  };
  const staggerVariants = {
    open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };
  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } },
    closed: { opacity: 0, x: 50 }
  };
  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled || openMenu
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      } transition-all duration-300 ease-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="APSI Logo" width={160} height={50} className="w-40 md:w-48 object-contain" priority />
        </Link>
        <ul className="hidden lg:flex items-center space-x-6 text-gray-800 font-medium">
          {menuItems.map((item, i) =>
            item.name === "Keanggotaan" ? (
              <li key={i} className="relative py-3">
                <button
                  onClick={() => (window.location.href = item.href)}
                  className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white transition-all hover:opacity-90"
                >
                  {item.name}
                </button>
              </li>
            ) : (
              <li key={i} className="relative py-3">
                <Link href={item.href} className="relative px-3 py-2 rounded-lg hover:bg-gray-50/80 transition-all">
                  <span className="relative before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">
                    {item.name}
                  </span>
                </Link>
              </li>
            )
          )}
          {isAdmin && (
            <li className="relative py-3">
              <Link
                href="/admin/dashboard"
                className="relative px-3 py-2 rounded-lg bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white transition-all"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
        <motion.button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpenMenu(!openMenu)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-2xl text-gray-800" />
        </motion.button>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[60] border-l border-gray-200"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-200 bg-white">
              <Image src={logo} alt="APSI Logo" width={120} height={40} className="object-contain" />
              <button onClick={() => setOpenMenu(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <FaTimes className="text-xl text-gray-800" />
              </button>
            </div>
            <motion.ul variants={staggerVariants} className="px-6 space-y-4 overflow-y-auto bg-white">
              {menuItems.map((item, i) =>
                item.name === "Keanggotaan" ? (
                  <motion.li key={i} variants={itemVariants} className="bg-white">
                    <button
                      onClick={() => {
                        setOpenMenu(false);
                        window.location.href = item.href;
                      }}
                      className="block w-full text-left py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white transition-colors hover:opacity-90"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ) : (
                  <motion.li key={i} variants={itemVariants} className="bg-white">
                    <Link
                      href={item.href}
                      onClick={() => setOpenMenu(false)}
                      className="block py-3 text-gray-800 hover:text-blue-600 border-b border-gray-200 transition-colors bg-white"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                )
              )}
              {isAdmin && (
                <motion.li variants={itemVariants} className="bg-white">
                  <Link
                    href="/admin/dashboard"
                    onClick={() => setOpenMenu(false)}
                    className="block py-3 text-white bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] rounded transition-colors"
                  >
                    Dashboard
                  </Link>
                </motion.li>
              )}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
