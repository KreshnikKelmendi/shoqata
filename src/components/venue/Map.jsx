import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Map = () => {
    const { t } = useTranslation()

  return (
    <div className='bg-gray-50 px-4 lg:px-16 py-6 lg:py-16'>
        <section className="bg-gray-50 py-10 dark:bg-dark">
        <div className="mx-auto">
            <div className="border-l-[5px] border-blue-500 pl-5">
            <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            <h2 className="mb-2 text-2xl font-semibold text-dark font-custom">
                {t('ExactLocation')}
            </h2>   
            </h2>
            <p className="text-sm font-medium font-custom">
                <FontAwesomeIcon color='green' icon={faLocationPin} /><span className='ml-2'>Magjistralja Prishtinë - Ferizaj, km. i 5-të, Prishtinë 10000 Kosovë</span>
            </p>
            </div>
        </div>
        </section>
        <iframe 
             className='w-full h-[50vh] lg:h-[70vh] rounded-md shadow-2xl shadow-gray-300'
             title='Location of Place'
             src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.6935343483256!2d21.128166976639882!3d42.60424531963889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549daf98db6df7%3A0xa4fc5cc429e7a3a7!2sEmerald%20Hotel!5e0!3m2!1sen!2s!4v1716435929753!5m2!1sen!2s`}
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
         </iframe>
    </div>
  )
}

export default Map