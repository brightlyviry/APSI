'use client';
import { motion } from 'framer-motion';

export default function FeaturedImageUpload({ formData, handleUpload, uploadProgress, setFormData }) {
  return (
    <motion.div 
      initial={{ scale: 0.98 }}
      animate={{ scale: 1 }}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
    >
      <h3 className="text-xl font-semibold border-b pb-2">Featured Image</h3>
      
      <div className="flex flex-col items-center space-y-4">
        <label className="cursor-pointer group relative">
          {formData.featuredImage?.url ? (
            <div className="relative">
              <img
                src={formData.featuredImage.url}
                alt={formData.featuredImage.alt}
                className="w-64 h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center rounded-lg">
                <span className="text-white opacity-0 group-hover:opacity-100">Change Image</span>
              </div>
            </div>
          ) : (
            <div className="w-64 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all">
              <span className="text-gray-500 group-hover:text-blue-500">Upload Image</span>
            </div>
          )}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;
              const url = await handleUpload(file);
              setFormData({
                ...formData,
                featuredImage: {
                  url,
                  alt: formData.featuredImage?.alt || formData.title
                }
              });
            }}
          />
        </label>

        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}

        <input
          type="text"
          value={formData.featuredImage?.alt || ''}
          onChange={(e) => setFormData({
            ...formData,
            featuredImage: {
              ...formData.featuredImage,
              alt: e.target.value
            }
          })}
          placeholder="Image alt text"
          className="w-full p-2 border rounded-lg text-sm"
        />
      </div>
    </motion.div>
  );
}