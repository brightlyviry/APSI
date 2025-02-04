"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { motion } from "framer-motion";
import Image from "next/image";
import Swal from "sweetalert2";
import LoadingSpinner from "@/components/LoadingSpinner";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function SingleBlogPost({ params }) {
  const router = useRouter();
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(firestore, "posts"), where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const postData = snapshot.docs[0].data();
          setPost({
            ...postData,
            createdAt: postData.createdAt?.toDate(),
            updatedAt: postData.updatedAt?.toDate()
          });
        } else {
          Swal.fire("Error", "Post tidak ditemukan", "error");
          router.push("/blog");
        }
      } catch (error) {
        Swal.fire("Error", error.message, "error");
        router.push("/blog");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, router]);

  if (loading) return <LoadingSpinner fullscreen />;
  if (!post) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <motion.header 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <motion.span 
            className="text-sm font-medium text-blue-600 mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {format(post.createdAt, "d MMMM yyyy", { locale: id })}
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          {post.featuredImage?.url && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-12"
            >
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>
          )}
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg md:prose-xl mx-auto text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.footer 
          className="mt-16 border-t pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm text-gray-500">
            Terakhir diperbarui: {format(post.updatedAt, "d MMMM yyyy HH:mm", { locale: id })}
          </div>
        </motion.footer>
      </article>

      <style jsx global>{`
        .prose {
          max-width: 760px !important;
        }
        .prose h1, .prose h2, .prose h3 {
          color: #1f2937;
          margin-top: 2.5em;
          margin-bottom: 1em;
          text-align: center;
        }
        .prose p {
          line-height: 1.75;
          margin-bottom: 1.5em;
          text-align: justify;
          text-justify: inter-word;
        }
        .prose img {
          margin: 2em auto;
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .prose a {
          color: #3b82f6;
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        .prose blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5em;
          margin: 2em 0;
          font-style: italic;
          color: #4b5563;
        }
      `}</style>
    </motion.div>
  );
}