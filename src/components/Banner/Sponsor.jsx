import React from 'react';
import sponsor1 from '../img/sponsor1.png';
import sponsor2 from '../img/sponsor2.png';
import sponsor3 from '../img/sponsor3.png';
import sponsor4 from "../img/sponsor4.png";
import sponsor5 from "../img/sponsor5.png";
import sponsor6 from "../img/sponsor6.png";
import sponsor7 from "../img/sponsor7.png";
import sponsor8 from "../img/sponsor8.png";
import sponsor9 from "../img/sponsor9.png";
import sponsor10 from "../img/sponsor10.png";
import sponsor11 from "../img/sponsor11.png";
import sponsor12 from "../img/sponsor12.png";
import sponsor13 from "../img/sponsor13.png";
import sponsor14 from "../img/sponsor14.png";
import sponsor15 from "../img/sponsor15.png";
import sponsor16 from "../img/sponsor16.png";
import sponsor17 from "../img/sponsor17.png";
import sponsor18 from "../img/sponsor18.png";
import sponsor19 from "../img/sponsor19.png";
import sponsor20 from "../img/omesis.png"

const sponsors = [
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor4, alt: 'Sponsor 4' },
  { src: sponsor5, alt: 'Sponsor 5' },
  { src: sponsor20, alt: 'Sponsor 20' },
  { src: sponsor6, alt: 'Sponsor 6' },
  { src: sponsor7, alt: 'Sponsor 7' },
  { src: sponsor8, alt: 'Sponsor 8' },
  { src: sponsor9, alt: 'Sponsor 9' },
  { src: sponsor10, alt: 'Sponsor 10' },
  { src: sponsor11, alt: 'Sponsor 11' },
  { src: sponsor12, alt: 'Sponsor 12' },
  { src: sponsor13, alt: 'Sponsor 13' },
  { src: sponsor14, alt: 'Sponsor 14' },
  { src: sponsor15, alt: 'Sponsor 15' },
  { src: sponsor16, alt: 'Sponsor 16' },
  { src: sponsor17, alt: 'Sponsor 17' },
  { src: sponsor18, alt: 'Sponsor 18' },
  { src: sponsor19, alt: 'Sponsor 19' },
 

];

const Sponsor = () => {
  return (
    <section className="bg-gray-50 lg:py-6 dark:bg-gray-900">
      <div className="py-16 lg:pt-16 w-full lg:px-10 px-4">
        <h2 className="mb-8 lg:mb-16 text-2xl font-custom uppercase tracking-tight leading-tight text-center">
          Thank You for Your Trust and Support
        </h2>
        {/* Grid for the first 3 sponsors */}
        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-0 lg:grid-cols-3 dark:text-gray-400">
          {sponsors.slice(0, 3).map((sponsor, index) => (
            <img
              key={index}
              className="w-32 h-32 lg:w-60 lg:h-60 object-contain mx-auto"
              src={sponsor.src}
              alt={sponsor.alt}
            />
          ))}
        </div>
        {/* Grid for the remaining sponsors */}
        <div className="grid grid-cols-2 gap-8 mt-8 text-gray-500 sm:gap-0 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          {sponsors.slice(3).map((sponsor, index) => (
            <img
              key={index}
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto"
              src={sponsor.src}
              alt={sponsor.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
