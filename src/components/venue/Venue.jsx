import React from "react";
import hotelEmerald from "../img/hotelEmerald.jpg"
import emerald1 from "../img/emerald2.jpg"
import emerald2 from "../img/emerald22.jpg"
import emerald3 from "../img/HI126897420.jpg"
import emerald4 from "../img/8.jpg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Venue = () => {
    const { t } = useTranslation()

  return (
  <>
    <nav className="flex px-4 lg:px-16 py-5 bg-gray-50 text-gray-700" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center font-custom">
            <Link to="/" onClick={() =>window.scrollTo({top: 0, left: 0, })} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                {t('Home')}
            </Link>
            </li>
        
            <li aria-current="page">
            <div className="flex items-center">
                <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 font-custom">{t('Venue')}</span>
            </div>
            </li>
        </ol>
    </nav>

    <section className="bg-gray-50">
      <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row justify-center 2xl:items-center">
        <div className="lg:w-1/2 lg:pr-10">
            <h2 className="mb-2 text-2xl border-b border-strokeborder-b border-stroke font-semibold text-dark dark:text-white font-custom">
                {t('VenueTitle')}
            </h2>
         
          <p className="mb-6 text-sm 2xl:text-base font-medium text-body-color dark:text-dark-6 font-custom">
                 {t('VenueDescription')}
          </p>
          <div className="mt-6 bg-[#FFF6E7] p-4 rounded-md">
            <p><b className="border-b border-green-600">Emerald Hotel *****</b></p>
            <p className="mb-6 text-sm 2xl:text-base font-medium font-custom mt-2 ">
                {t('1stEmeraldHotel')}
                <br /> <br />
                {t('2ndEmeraldHotel')}
            </p>
          </div>
          </div>
        

<div class="grid gap-4 lg:w-1/2 mt-6 lg:mt-0">
    <div className="w-full">
        <img class="h-auto w-full rounded-lg" src={hotelEmerald} alt="" />
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <div>
            <img class="object-cover h-32 w-full rounded-lg" src={emerald1} alt="" />
        </div>
        <div>
            <img class="object-cover h-32 w-full rounded-lg" src={emerald2} alt="" />
        </div>
        <div>
            <img class="object-cover h-32 w-full rounded-lg" src={emerald3} alt="" />
        </div>
        <div>
            <img class="object-cover h-32 w-full rounded-lg" src={emerald4} alt="" />
        </div>
    </div>
</div>

      </div>
   
    </section>
    </>
  );
};

export default Venue;
