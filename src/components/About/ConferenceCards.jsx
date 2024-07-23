import React, { useState } from 'react';
import { conferences } from './conference';

const ConferenceCards = () => {
  const initialImageCount = 8;
  const loadMoreCount = 8;
  const [visibleImages, setVisibleImages] = useState(initialImageCount);

  const handleShowMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + loadMoreCount);
  };

  const handleShowLess = () => {
    setVisibleImages(initialImageCount);
  };

  return (
    <div className='bg-gray-50 px-4 lg:px-16 py-16 font-custom'>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Conferences</h1>
      </div>
      <div className="w-full">
        {conferences?.map((conference) => (
          <div key={conference.id} className="rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {conference.gallery.slice(0, visibleImages).map((image, keyindex) => (
                <img key={keyindex} className="rounded-lg h-60 lg:h-96 w-full object-cover" src={image} alt={`${conference.title} gallery ${keyindex + 1}`} />
              ))}
            </div>
            <div className="text-center mt-8">
              {visibleImages < conference.gallery.length ? (
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-4"
                  onClick={handleShowMore}
                >
                  Show More
                </button>
              ) : (
                <button 
                  className="px-7 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  onClick={handleShowLess}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConferenceCards;
