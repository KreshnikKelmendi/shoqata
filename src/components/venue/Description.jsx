import React from 'react';

const Description = () => {
  return (
    <div className="flex justify-between items-center lg:absolute bottom-1 lg:bottom-[-140px] 2xl:bottom-[-120px] w-full text-black bg-gray-50 lg:bg-opacity-50 font-custom p-4">
      <div className="text-left">
        <div className="text-[11px] lg:text-lg font-extrabold">
          KAO - Kosovo Association of Ophthalmologists
        </div>
        <a href="https://shofk.org" target="_blank" rel="noopener noreferrer" className="text-[10px] lg:text-sm font-bold text-[#ff354c] hover:underline">
          www.shofk.org
        </a>
      </div>
      <div className="text-right">
        <div className="text-[11px] lg:text-lg font-extrabold">
          TOA - Turkish Ophthalmological Association
        </div>
        <a href="https://todnet.org" target="_blank" rel="noopener noreferrer" className="text-[10px] lg:text-sm font-bold text-[#ff354c] hover:underline">
          www.todnet.org
        </a>
      </div>
    </div>
  );
}

export default Description;
