// File: src/app/admin/login/page.jsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/firebase";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/images/tentang-kami-hero-image.jpg"

export default function AdminLogin() {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src={heroImg}
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20"
      >
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          Admin Login
        </h1>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full p-3 rounded-lg bg-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full p-3 rounded-lg bg-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 mt-4 bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
