"use client";
import React,{Suspense,useState,useEffect}from"react";
import {useRouter,useSearchParams}from"next/navigation";
import {getAuth,onAuthStateChanged}from"firebase/auth";
import {doc,getDoc}from"firebase/firestore";
import {app,firestore}from"@/lib/firebase";
import {motion}from"framer-motion";
import Swal from"sweetalert2";
import LoadingSpinner from"@/components/LoadingSpinner";
import Image from"next/image";
function ViewBlogPostContent(){
  const router=useRouter();
  const searchParams=useSearchParams();
  const postId=searchParams.get("view");
  const[loadingAuth,setLoadingAuth]=useState(true);
  const[loadingPost,setLoadingPost]=useState(true);
  const[post,setPost]=useState(null);
  useEffect(()=>{
    const auth=getAuth(app);
    const unsubscribe=onAuthStateChanged(auth,async user=>{
      if(!user){router.push("/admin/login");return;}
      const userDoc=await getDoc(doc(firestore,"users",user.uid));
      if(!userDoc.exists()||userDoc.data().role!=="admin"){
        router.push("/admin/login");
      }else setLoadingAuth(false);
    });
    return()=>unsubscribe();
  },[router]);
  useEffect(()=>{
    const fetchPost=async()=>{
      if(!postId){
        Swal.fire("Error","Post ID is missing","error");
        router.push("/admin/dashboard/blog");
        return;
      }
      try{
        const docSnap=await getDoc(doc(firestore,"posts",postId));
        if(docSnap.exists()){
          setPost({id:docSnap.id,...docSnap.data()});
        }else{
          Swal.fire("Error","Post not found","error");
          router.push("/admin/dashboard/blog");
        }
      }catch(error){
        Swal.fire("Error",error.message,"error");
      }finally{
        setLoadingPost(false);
      }
    };
    fetchPost();
  },[postId,router]);
  if(loadingAuth||loadingPost){
    return(
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner/>
      </div>
    );
  }
  return(
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <motion.h1 className="text-5xl font-bold text-center text-[#2EA4E0] mb-8">View Blog Post</motion.h1>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">{post.title}</h2>
          {post.keywords&&(<p className="text-sm text-gray-500 mt-1">Keywords: {post.keywords}</p>)}
          {post.kategori&&(<p className="text-sm text-gray-500 mt-1">Category: {post.kategori}</p>)}
          {post.thumbnail&&(
            <div className="mt-4 flex justify-center">
              <div className="relative w-64 h-64">
                <Image src={post.thumbnail} alt="Thumbnail" fill className="object-cover rounded-md"/>
              </div>
            </div>
          )}
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{__html:post.content}}/>
        <p className="text-right text-gray-500">Published: {new Date(post.createdAt?.seconds*1000||post.createdAt).toLocaleString()}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={()=>router.push(`/admin/dashboard/blog/edit/${post.id}`)}
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all"
          >
            Edit Post
          </button>
          <button
            onClick={()=>router.push("/admin/dashboard/blog")}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition-all"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default function ViewBlogPost(){
  return(
    <Suspense fallback={<LoadingSpinner/>}>
      <ViewBlogPostContent/>
    </Suspense>
  );
}
