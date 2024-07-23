import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Date from "../venue/Date.jsx";
import { useTranslation } from 'react-i18next';

const CongressDate = () => {
    const { t } = useTranslation()

  return (
    <div className="flex flex-col font-custom items-center justify-center bg-gray-50 pt-10 lg:pt-none lg:min-h-screen p-6 lg:p-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 lg:p-16 max-w-4xl w-full text-center">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-5xl text-[#044f7c] mb-4" />
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[#044f7c] mb-6 lg:mb-10 leading-snug">
            {t('1stDate')}
          <span className="block text-[#0a7eb5] py-3">4th KAO National Congress</span> 
          &
          <span className="block text-[#0a7eb5] py-3">2nd TOA Balkan Congress</span> 
            {t('2ndDate')}
          <span className="block text-[#ff354c] mt-4">{t('exactDate')}</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-br from-blue-100 to-[#ff354c] rounded-xl p-6 lg:p-10 shadow-inner space-y-6 lg:space-y-0 lg:space-x-6">
          <p className="text-lg lg:text-xl font-semibold text-white">
            {t('countdownTo')}
          </p>
          <Date />
        </div>
      </div>
    </div>
  );
};

export default CongressDate;
