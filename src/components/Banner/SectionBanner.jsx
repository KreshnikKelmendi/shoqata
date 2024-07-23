import React from 'react';
import naser_salihu from "../img/nasersalihu.jpg"
import { useTranslation } from 'react-i18next';

const SectionBanner = () => {
    const { t } = useTranslation()

  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900 font-custom">
            <div className="max-w-screen-xl w-full px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <figure className="lg:max-w-screen-md 2xl:max-w-screen-2xl mx-auto relative">
                <img className="absolute right-0 w-24 h-24 lg:w-24 lg:h-24 rounded-full" src={naser_salihu} alt="profile" />
                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote >
                        <p className="text-lg 2xl:text-2xl italic text-justify font-custom1 tracking-tighter text-gray-900 dark:text-white">
                            <b>{t('firstParagraph')}</b> <br /> <br /> {t('secondParagraph')}
                            <br /> <br />
                               {t('thirdParagraph')}
                            <br /> <br />
                               {t('4thParagraph')}
                            <br /> <br />
                               {t('5thParagraph')}
                            <br /> <br />
                            <b>{t('6thParagraph')}</b>
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-8 space-x-3">
                        <div className="flex flex-col lg:flex-row items-center lg:divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="lg:pr-3 text-lg lg:px-0 text-black w-full font-custom1 lg:w-fit"><b>Prof. Naser Salihu</b></div>
                            <div className="lg:pl-3 text-lg lg:px-0 lg:ml-0 text-gray-500 font-custom1">{t('7thParagraph')}</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    </>

  );
}

export default SectionBanner;
