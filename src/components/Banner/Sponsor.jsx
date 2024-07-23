import React from 'react';
import sponsor1 from '../img/logo2.png';
import sponsor2 from '../img/FedEx-Logo-PNG-Transparent.png';
import sponsor3 from '../img/logo2.png';

const sponsors = [
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor2, alt: 'Sponsor 2' },
];

const Sponsor = () => {
  return (
    <section className="bg-gray-50 lg:py-6 dark:bg-gray-900">
      <div className="py-16 lg:pt-16 w-full lg:px-10 px-4">
      <h2 className="mb-8 lg:mb-16 text-2xl font-custom uppercase tracking-tight leading-tight text-center">
          Thank You for Your Trust and Support
      </h2>
        {/* <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {sponsors?.map((sponsor, index) => (
            <img
              key={index}
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto"
              src={sponsor.src}
              alt={sponsor.alt}
            />
          ))}
        </div> */}
        <p className='text-center text-2xl'>UNDER CONSTRUCTION</p>
      </div>
    </section>
  );
};

export default Sponsor;
