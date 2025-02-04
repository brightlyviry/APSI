// File: src/app/admin/dashboard/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, firestore } from "@/lib/firebase";
import Sidebar from "@/components/admin/Sidebar";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [blogData, setBlogData] = useState([
    { id: 1, title: "Blog Post 1", content: "Content of blog post 1", createdAt: new Date().toISOString() }
  ]);
  const [pustakaData, setPustakaData] = useState([
    { id: 1, title: "Pustaka Item 1", description: "Description of pustaka item 1", createdAt: new Date().toISOString() }
  ]);
  const [messageData, setMessageData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", message: "Hello, I have a question.", createdAt: new Date().toISOString() }
  ]);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/admin/login");
        return;
      }
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (!userDoc.exists() || userDoc.data().role !== "admin") {
        router.push("/admin/login");
      } else {
        setLoadingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const logout = async () => {
    await signOut(getAuth(app));
    router.push("/admin/login");
  };

  const renderMessagesTable = () => (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Message</th>
          <th className="border px-4 py-2">Created At</th>
        </tr>
      </thead>
      <tbody>
        {messageData.map((item) => (
          <motion.tr
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            className="hover:bg-gray-50"
          >
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.email}</td>
            <td className="border px-4 py-2">{item.message}</td>
            <td className="border px-4 py-2">{new Date(item.createdAt).toLocaleString()}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar logout={logout} />
      <main className="flex-1 p-8 overflow-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#2EA4E0] mb-8"
        >
          Dashboard Overview
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center">
            <p className="text-gray-500">Total Posts</p>
            <h2 className="text-3xl font-bold text-[#2EA4E0]">{blogData.length}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center">
            <p className="text-gray-500">Total Pustaka</p>
            <h2 className="text-3xl font-bold text-[#2EA4E0]">{pustakaData.length}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center">
            <p className="text-gray-500">Total Messages</p>
            <h2 className="text-3xl font-bold text-[#2EA4E0]">{messageData.length}</h2>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-[#2EA4E0] mb-4">Recent Messages</h2>
          {renderMessagesTable()}
        </motion.div>
      </main>
    </div>
  );
}
