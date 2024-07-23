import React from 'react';
import shofk_logo from "../img/shofkLogo.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import trekuLogo from "../img/whiteLogoTreku.png";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="bg-gray-50 shadow-lg shadow-gray-300 pt-8 px-3 lg:px-14 dark:bg-gray-900">
                <hr className="px-10 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="mx-auto w-full p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img src={shofk_logo} className="w-32 h-auto me-3" alt="Shofk Logo" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-custom">Navigate</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium font-custom">
                                    <li className="mb-4">
                                        <Link to='/' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t("Home")}</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='/about' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t("About")}</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='/invited-speakers' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t('InvitedSpeakers')}</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='/venue' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t("Venue")}</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='/register' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t("Registration")}</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to='/contacts' onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">{t("Contacts")}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-custom">Contact</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium font-custom">
                                    <li className="mb-4">
                                        <p className="hover:underline">Email: info.shofk@gmail.com</p>
                                    </li>
                                    <li>
                                        <p className="hover:underline">+383 44 511 655</p>
                                        <p className="hover:underline">+383 44 495 072</p>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mt-6 text-base font-custom font-bold text-[#044f7c]">
                        <p>
                        We are the Kosovo Association of Ophthalmology, with Ophthalmologists, Doctors, Specialist Nurses, Clinical Support, Liaison Officers, Technicians, Optometrists, and Orthoptists.
                        </p>
                    </div>
                </div>
            </footer>
            <div className="lg:px-20 px-4 py-6 justify-between items-center flex flex-col lg:flex-row gap-y-5 bg-[#044f7c]">
                <span className="text-sm font-custom text-white text-center dark:text-gray-400">© 2024 <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="hover:underline">SHOFK</Link>. All Rights Reserved.</span>
                <span className='flex font-custom text-white text-sm'>Powered by<img className='w-7 h-7 ml-2 object-contain' src={trekuLogo} alt='' /></span>
            </div>
        </>
    );
}

export default Footer;
