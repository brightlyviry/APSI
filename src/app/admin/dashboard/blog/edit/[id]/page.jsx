"use client";
import React, { useState, useEffect, useRef, use } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app, firestore, storage, model } from "@/lib/firebase";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import slugify from "slugify";
import LoadingSpinner from "@/components/LoadingSpinner";
import SEOFields from "@/components/admin/SEOFields";
import FeaturedImageUpload from "@/components/admin/FeaturedImageUpload";
import CategoryTagSelect from "@/components/admin/CategoryTagSelect";
import PublishControl from "@/components/admin/PublishControl";
import TitleInput from "@/components/admin/TitleInput";
import RichTextEditor from "@/components/admin/RichTextEditor";
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse rounded-lg" />
});
export default function EditBlogPost({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const quillRef = useRef(null);
  const [loading, setLoading] = useState({ auth: true, post: true });
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    metaTitle: "",
    metaDesc: "",
    keywords: [],
    categories: [],
    tags: [],
    canonicalUrl: "",
    featuredImage: null,
    content: "",
    status: "draft"
  });
  const [uploadStates, setUploadStates] = useState({ "blog-content": 0, "blog-thumbnails": 0 });
  const [options, setOptions] = useState({ categories: [], tags: [] });
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return router.push("/admin/login");
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists() && userDoc.data().role === "admin") {
        setLoading((prev) => ({ ...prev, auth: false }));
        loadOptions();
        fetchPost();
      } else router.push("/admin/login");
    });
    return () => unsubscribe();
  }, [router]);
  const loadOptions = async () => {
    const [catsSnapshot, tagsSnapshot] = await Promise.all([
      getDocs(collection(firestore, "categories")),
      getDocs(collection(firestore, "tags"))
    ]);
    setOptions({
      categories: catsSnapshot.docs.map((d) => ({ label: d.data().name, value: d.id })),
      tags: tagsSnapshot.docs.map((d) => ({ label: d.data().name, value: d.id }))
    });
  };
  const fetchPost = async () => {
    try {
      const docRef = doc(firestore, "posts", id);
      const postSnap = await getDoc(docRef);
      if (postSnap.exists()) {
        const data = postSnap.data();
        setFormData({ ...data, status: data.status || "draft" });
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading((prev) => ({ ...prev, post: false }));
    }
  };
  const handleUpload = async (file, path) => {
    const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadStates((prev) => ({ ...prev, [path]: progress }));
        },
        (error) => reject(error),
        async () => resolve(await getDownloadURL(uploadTask.snapshot.ref))
      );
    });
  };
  const generateSlug = (title) => slugify(title, { lower: true, strict: true });
  const handleAIOptimize = async (type) => {
    const prompts = {
      metaTitle: `Generate SEO-friendly meta title for: ${formData.title}`,
      metaDesc: `Write compelling meta description under 160 characters for: ${formData.content.substring(0, 200)}`,
      excerpt: `Create engaging excerpt from: ${formData.content.substring(0, 500)}`
    };
    try {
      const response = await model.generate({ prompt: prompts[type] });
      setFormData((prev) => ({ ...prev, [type]: response.text }));
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(firestore, "posts", id);
      await updateDoc(docRef, {
        ...formData,
        updatedAt: serverTimestamp(),
        structuredData: {
          "@type": "Article",
          headline: formData.title,
          datePublished: new Date().toISOString()
        }
      });
      await Swal.fire("Success", "Post updated!", "success");
      router.push("/admin/dashboard/blog");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  if (loading.auth || loading.post) return <LoadingSpinner />;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <motion.h1 initial={{ x: -20 }} animate={{ x: 0 }} className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Edit Post
          </motion.h1>
          <button onClick={() => router.push("/admin/dashboard/blog")} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all">
            ← Back
          </button>
        </header>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <TitleInput
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
              />
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-gray-500">Slug:</span>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  className="flex-1 p-2 border rounded-lg"
                />
              </div>
            </div>
            <SEOFields formData={formData} handleAIOptimize={handleAIOptimize} setFormData={setFormData} />
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <RichTextEditor
                quillRef={quillRef}
                content={formData.content}
                setContent={(content) => setFormData({ ...formData, content })}
                handleImageUpload={(file) => handleUpload(file, "blog-content")}
                uploadProgress={uploadStates["blog-content"]}
              />
            </div>
          </div>
          <div className="space-y-6">
            <PublishControl status={formData.status} setStatus={(status) => setFormData({ ...formData, status })} onSubmit={handleSubmit} isEdit />
            <CategoryTagSelect categories={options.categories} tags={options.tags} formData={formData} setFormData={setFormData} />
            <FeaturedImageUpload
              formData={formData}
              handleUpload={(file) => handleUpload(file, "blog-thumbnails")}
              uploadProgress={uploadStates["blog-thumbnails"]}
              setFormData={setFormData}
            />
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <h3 className="text-xl font-semibold">Advanced SEO</h3>
              <input
                type="url"
                value={formData.canonicalUrl}
                onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                placeholder="Canonical URL"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-2">
                <button type="button" onClick={() => handleAIOptimize('metaTitle')} className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg">
                  Optimize Title
                </button>
                <button type="button" onClick={() => handleAIOptimize('metaDesc')} className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg">
                  Optimize Description
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
