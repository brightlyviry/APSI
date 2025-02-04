"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy, getDoc, doc } from "firebase/firestore";
import { app, firestore } from "@/lib/firebase";
import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import Swal from "sweetalert2";

export default function BlogDashboard() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(firestore, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
        setLoadingPosts(false);
      } catch (error) {
        Swal.fire("Error", error.message, "error");
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, []);

  const logoutHandler = async () => {
    await signOut(getAuth(app));
    router.push("/admin/login");
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2EA4E0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
    if (result.isConfirmed) {
      setPosts((prev) => prev.filter((item) => item.id !== id));
      Swal.fire("Deleted!", "Your post has been deleted.", "success");
    }
  };

  const renderTable = () => (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Keywords</th>
          <th className="border px-4 py-2">Content Snippet</th>
          <th className="border px-4 py-2">Created At</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <motion.tr
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            className="hover:bg-gray-50"
          >
            <td className="border px-4 py-2">{post.title}</td>
            <td className="border px-4 py-2">{post.keywords || "-"}</td>
            <td className="border px-4 py-2">
              {post.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
            </td>
            <td className="border px-4 py-2">
              {new Date(post.createdAt?.seconds * 1000 || post.createdAt).toLocaleString()}
            </td>
            <td className="border px-4 py-2 flex space-x-2">
              <Link
                href={`/admin/dashboard/blog/view?view=${post.id}`}
                className="flex items-center text-green-500 hover:text-green-700 transition-colors"
              >
                <FiEye size={18} />
                <span className="ml-1">View</span>
              </Link>
              <Link
                href={`/admin/dashboard/blog/edit/${post.id}`}
                className="flex items-center text-blue-300 hover:text-blue-500 transition-colors"
              >
                <FiEdit size={18} />
                <span className="ml-1">Edit</span>
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="flex items-center text-red-400 hover:text-red-600 transition-colors"
              >
                <FiTrash size={18} />
                <span className="ml-1">Delete</span>
              </button>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );

  if (loadingAuth || loadingPosts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar logout={logoutHandler} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-[#2EA4E0]"
          >
            Blog Posts
          </motion.h1>
          <Link
            href="/admin/dashboard/blog/new"
            className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
          >
            Create New
          </Link>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-6">{renderTable()}</div>
      </main>
    </div>
  );
}
