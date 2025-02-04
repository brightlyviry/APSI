'use client';
import { MultiSelect } from 'react-multi-select-component';
import { motion } from 'framer-motion';
export default function CategoryTagSelect({ categories, tags, formData, setFormData }) {
  return (
    <motion.div 
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-3">
        <h4 className="font-medium">Categories</h4>
        <MultiSelect
          options={categories}
          value={Array.isArray(formData.categories) ? formData.categories : []}
          onChange={(selected) => setFormData({ ...formData, categories: selected })}
          labelledBy="Select categories"
          hasSelectAll={false}
          className="multi-select"
        />
      </div>
      <div className="space-y-3">
        <h4 className="font-medium">Tags</h4>
        <MultiSelect
          options={tags}
          value={Array.isArray(formData.tags) ? formData.tags : []}
          onChange={(selected) => setFormData({ ...formData, tags: selected })}
          labelledBy="Select tags"
          hasSelectAll={false}
          className="multi-select"
        />
      </div>
      <style jsx global>{`
        .multi-select {
          --rmsc-primary: #3b82f6;
          --rmsc-border: #e5e7eb;
          --rmsc-radius: 8px;
          --rmsc-h: 40px;
        }
        .multi-select .dropdown-content {
          z-index: 20;
        }
      `}</style>
    </motion.div>
  );
}
