import React from 'react';
import { useTranslation } from 'react-i18next';
import abstractpdf from "../img/Submission guidelines.pdf"

const ImportantDates = () => {
  const { t } = useTranslation();
  const importantDates = [
    {
      title: t("firstImportant"),
      description: t('firstImportantDescription'),
      link: "#",
      date: "",
    },
    {
      title: t("secondImportant"),
      description: t('secondImportantDescription'),
      secondDescription: "abstract.shofk@gmail.com",
      link: "#",
      date: "",
      pdf: abstractpdf
    },
    {
      title: t("thirdImportant"),
      description: t('thirdImportantDescription'),
      link: "#",
      date: "20.09.2024",
    },
    {
      title: t('fourthImportant'),
      description: t('fourthImportantDescription'),
      link: "#",
      date: "25.10.2024",
    }
  ];

  return (
    <div className='bg-gray-50 py-10 lg:py-16 px-4 lg:px-10 font-custom'>
      <p className='text-2xl uppercase font-bold text-[#044f7c]'>{t('ImportantDates')}</p>
      <div className='lg:w-3/4 2xl:w-[50%] mt-6 text-gray-700'>
        <p className='text-base'>
          {t('ImportantDatesDescription')}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8 mt-8'>
        {importantDates.map((date, indexi) => (
          <div key={indexi} className="bg-white h-60 flex flex-col justify-center rounded-lg shadow-sm shadow-[#044f7c] p-6 hover:bg-gray-100 relative">
            <div className='flex items-center font-custom mb-4 absolute top-0 right-0'>
              <span className='text-gray-500 opacity-30 text-xl font-bold mr-2'>{indexi + 1 < 10 ? `0${indexi + 1}` : indexi + 1}</span>
            </div>
            <div className='flex items-center mb-4'>
              {/* <FontAwesomeIcon icon={faCalendarDay} className='text-[#044f7c] text-lg mr-2' /> */}
              {/* <span className='text-lg font-bold'>{date.date}</span> */}
            </div>
            <h5 className="text-lg font-bold text-[#044f7c] mb-2"> {t(date.title)}</h5>
            <p className="text-gray-900 mb-4 font-extrabold"> {t(date.description)}</p>
            {date.secondDescription && (
              <p className="text-[#044f7c] font-semibold mb-4">{t('pleaseSubmit')} <span className='underline font-extrabold'>
                <a href="mailto:abstract.shofk@gmail.com" className="hover:underline text-lg text-[#ff354c]">abstract.shofk@gmail.com</a>
              </span></p>
            )}
            {date.pdf && (
              <a href={date.pdf} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {t('View Details')}
              </a>
            )}
            {/* Optional: Read more link */}
            {/* <a href={date.link} className="text-blue-500 hover:underline">Read more</a> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImportantDates;
