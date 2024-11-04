import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galeryData } from './galery';

const Galery2024 = () => {
  const [visibleCount, setVisibleCount] = useState(10); // Start with 10 images
  const [loading, setLoading] = useState(false); // Loading state

  const loadMoreImages = () => {
    if (visibleCount < galeryData.length) {
      setLoading(true);
      setTimeout(() => {
        setVisibleCount(prevCount => Math.min(prevCount + 6, galeryData.length)); // Load 6 more images
        setLoading(false);
      }, 1000); // 1000ms delay
    }
  };

  return (
    <div 
      className="px-4 lg:px-16 py-8 bg-gray-50 text-gray-700" 
      aria-label="Breadcrumb"
    >
      <p className='mb-2 text-2xl font-semibold text-[#044f7c] font-custom uppercase'>Congress Gallery</p>
      <p className="text-lg 2xl:text-lg font-medium font-custom py-4">
        We are excited to present our image gallery from the 4th National Congress of 
        Ophthalmology and the 2nd Balkan Congress, held in Prishtina on October 25th 
        and 26th, 2024. This event gathered leading professionals in the field to 
        share insights, discuss advancements, and foster collaboration. A heartfelt 
        thank you to all who participated and made this event a success!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {galeryData?.slice(0, visibleCount).map((item, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg"

          >
            <img 
              src={item.image} 
              alt=""
              className="w-full h-[35vh] lg:h-[60vh] object-cover"
            />
            <motion.a 
              href={item.image} 
              whileHover={{ scale: 1.1 }}
              download 
              className="absolute bottom-2 right-2 flex items-center justify-center font-custom bg-black bg-opacity-75 text-white text-[11px] font-semibold py-1 px-3 rounded transition duration-300"
            >
              Download
            </motion.a>
          </motion.div>
        ))}
      </div>

      {visibleCount < galeryData.length && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={loadMoreImages} 
            className="bg-[#044f7c] text-white font-custom font-semibold py-2 px-4 rounded hover:bg-[#033d5b] transition duration-300"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More...'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Galery2024;
