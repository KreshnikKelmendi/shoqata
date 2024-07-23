import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const { t } = useTranslation()

  const deadline = new Date("October 25, 2024").getTime();

  const getTime = () => {
    const now = new Date().getTime();
    const time = deadline - now;

    if (time >= 0) {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    } else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="flex bg-gray-50 items-center justify-center h-screen">
      <div className="flex gap-1 lg:p-8 text-white">
        <div className="flex flex-col items-center shadow-md shadow-gray-500 lg:w-20 lg:justify-center">
          <div className="lg:text-3xl font-bold text-[#fff446] lg:text-[#044f7c]">{days}</div>
          <div className="text-[10px] lg:text-sm uppercase font-custom">{t('days')}</div>
        </div>
        <div className="flex flex-col items-center shadow-md shadow-gray-500 lg:w-20 justify-center">
          <div className="lg:text-3xl font-bold text-[#fff446] lg:text-[#044f7c]">{hours}</div>
          <div className="text-[10px] lg:text-sm uppercase font-custom">{t('hours')}</div>
        </div>
        <div className="flex flex-col items-center shadow-md shadow-gray-500 lg:w-20 justify-center">
          <div className="lg:text-3xl font-bold text-[#fff446] lg:text-[#044f7c]">{minutes}</div>
          <div className="text-[10px] lg:text-sm uppercase font-custom">{t('minutes')}</div>
        </div>
        <div className="flex flex-col items-center shadow-md shadow-gray-500 lg:w-20 justify-center">
          <div className="lg:text-3xl font-bold text-[#fff446] lg:text-[#044f7c]">{seconds}</div>
          <div className="text-[10px] lg:text-sm uppercase font-custom">{t('seconds')}</div>
        </div>
      </div>
    // </div>
  );
};

export default CountdownTimer;
