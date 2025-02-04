'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse rounded-lg" />
});
export default function RichTextEditor({ content, setContent, quillRef, handleImageUpload }) {
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: { 
        image: () => document.getElementById('editor-image-upload').click(),
        video: () => document.getElementById('editor-video-upload').click()
      }
    }
  }), []);
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'indent',
    'link', 'image', 'video'
  ];
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="border rounded-xl overflow-hidden shadow-sm">
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        theme="snow"
        className="min-h-[400px] bg-white"
      />
      <input
        type="file"
        id="editor-image-upload"
        hidden
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (file) {
            const url = await handleImageUpload(file);
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection();
            quill.insertEmbed(range ? range.index : 0, 'image', url);
          }
        }}
      />
      <input
        type="file"
        id="editor-video-upload"
        hidden
        accept="video/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (file) {
            const url = await handleImageUpload(file);
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection();
            quill.insertEmbed(range ? range.index : 0, 'video', url);
          }
        }}
      />
    </motion.div>
  );
}
