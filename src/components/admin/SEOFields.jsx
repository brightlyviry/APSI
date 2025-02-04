"use client";
import { motion } from "framer-motion";
export default function SEOFields({ formData, handleAIOptimize, setFormData }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <h3 className="text-xl font-semibold border-b pb-2">SEO Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium">Meta Title</label>
          <button type="button" onClick={() => handleAIOptimize("metaTitle")} className="px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-md">
            AI Optimize
          </button>
        </div>
        <input
          value={formData?.metaTitle || ""}
          onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Meta title (50-60 characters)"
          maxLength="60"
        />
        <div className="text-xs text-gray-500 text-right">
          {(formData?.metaTitle || "").length}/60
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium">Meta Description</label>
          <button type="button" onClick={() => handleAIOptimize("metaDesc")} className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-600 rounded-md">
            AI Optimize
          </button>
        </div>
        <textarea
          value={formData?.metaDesc || ""}
          onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
          placeholder="Meta description (150-160 characters)"
          maxLength="160"
        />
        <div className="text-xs text-gray-500 text-right">
          {(formData?.metaDesc || "").length}/160
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Focus Keywords</label>
        <input
          value={Array.isArray(formData?.keywords) ? formData.keywords.join(", ") : ""}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value.split(/,\s?/) })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Comma separated keywords"
        />
      </div>
    </motion.div>
  );
}
