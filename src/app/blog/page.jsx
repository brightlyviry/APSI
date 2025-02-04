"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(firestore, "posts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const postsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate()
        }));
        setPosts(postsData);
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <LoadingSpinner fullscreen />;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel Terkini</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Temukan wawasan dan panduan terbaru seputar pengembangan bisnis dan keberlanjutan lingkungan
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="relative aspect-video">
                  <Image
                    src={post.featuredImage?.url || "/images/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt || post.metaDesc}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 font-medium">
                      {new Date(post.createdAt).toLocaleDateString('id-ID')}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                      {post.status}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}