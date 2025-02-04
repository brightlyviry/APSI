'use client';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export default function PublishControl({ status, setStatus, onSubmit, isEdit }) {
  const handleStatusChange = (newStatus) => {
    if (status === 'published' && newStatus === 'draft') {
      Swal.fire({
        title: 'Unpublish Post?',
        text: 'This post will no longer be visible to the public',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3b82f6',
        cancelButtonColor: '#6b7280',
      }).then((result) => {
        if (result.isConfirmed) setStatus(newStatus);
      });
    } else {
      setStatus(newStatus);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
    >
      <h3 className="text-xl font-semibold border-b pb-2">Publish Settings</h3>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleStatusChange('draft')}
              className={`px-4 py-2 rounded-lg ${
                status === 'draft' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Draft
            </button>
            <button
              type="button"
              onClick={() => handleStatusChange('published')}
              className={`px-4 py-2 rounded-lg ${
                status === 'published' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Publish
            </button>
          </div>
        </div>

        <button
          type="submit"
          onClick={onSubmit}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          {isEdit ? 'Update Post' : 'Publish Now'}
        </button>
      </div>
    </motion.div>
  );
}