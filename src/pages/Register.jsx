import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faIdCard, faEnvelope, faMapMarkerAlt, faCity, faGlobe, faPhoneAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Popup = ({ name, onClose, timeout }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, timeout);
        return () => clearTimeout(timer);
    }, [onClose, timeout]);

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <h2 className="text-2xl mb-4 font-custom">
                    <FontAwesomeIcon color='green' icon={faCheckCircle} /> Thank you, {name.Title}. {name.firstName} {name.lastName}!
                </h2>
                <p className="mb-4 font-custom">
                    We are pleased to inform you that your registration will be successfully processed once we receive your payment.
                    <p>
                        Please proceed with your payment:
                        ProCredit Bank <span className='font-extrabold text-blue-500'>1181001152000154</span></p>
                </p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Register = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const { t } = useTranslation();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [userName, setUserName] = useState({ Title: '', firstName: '', lastName: '' });

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);

        try {
            const result = await emailjs.sendForm(
                'service_bmq7f9c',
                'template_km3cd3k',
                form.current,
                'V4geO-WkIpOdztcKS'
            );

            console.log(result.text);
            setUserName({
                Title: e.target.Title.value,
                firstName: e.target.FirstName.value,
                lastName: e.target.LastName.value
            });
            setIsPopupVisible(true);
        } catch (error) {
            console.log(error.text);
        } finally {
            setIsSending(false);
        }
        e.target.reset();
    };

    return (
        <>
            {isPopupVisible && <Popup name={userName} onClose={() => setIsPopupVisible(false)} timeout={70000} />}
            <nav className="flex px-4 lg:px-16 py-5 bg-gray-50 text-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center font-custom">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, })} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            {t('Home')}
                        </Link>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 font-custom">{t('Registration')}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className='bg-gray-50'>
                <div className="text-gray-800 bg-gray-50 lg:px-16 2xl:pt-6 flex items-center mx-auto p-4">
                    <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,37,0.3)] rounded-md overflow-hidden">
                        <div className="max-md:order-1 bg-[#044f7c] flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full lg:px-8 px-4 py-4 font-custom">
                            <div>
                                <h4 className="text-white text-lg font-semibold">{t('Register')}</h4>
                                <p className="text-[13px] text-white mt-2">{t('registerDescription')}</p>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-semibold">{t('simpleRegistration')}</h4>
                                <p className="text-[13px] text-white mt-2">{t('simpleDescriptionRegister')}</p>
                            </div>
                            <div>
                                <p className="mb-4 text-sm font-custom text-white">
                                    We are pleased to inform you that your registration will be successfully processed once we receive your payment.
                                    <p><br />
                                        Please after fill the form proceed with your payment, <br /><br />
                                        ProCredit Bank <span className='font-extrabold text-red-500 underline'>1181001152000154</span></p>
                                </p>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                            <div className="mb-6">
                                <h3 className="text-xl text-[#044f7c] font-semibold font-custom">{t("Please fill out the form below")}</h3>
                            </div>
                            <div className="space-y-5 font-custom">
                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t("InstitutionTitle")}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="institutionTitle"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t("InstitutionTitle")}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faBuilding} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('Title')}</label>
                                    <div className="relative flex items-center">
                                        <select
                                            name="Title"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                        >
                                            <option value="" disabled selected hidden>Dr, Professor, Mr, Ms, Mrs</option>
                                            <option value="Dr">Dr</option>
                                            <option value="Professor">Professor</option>
                                            <option value="Mr">Mr</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Mrs">Mrs</option>
                                        </select>
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faIdCard} />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('FirstName')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="FirstName"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('FirstName')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('LastName')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="LastName"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('LastName')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="EmailAddress"
                                            type="email"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder="Email"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('Address')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="Address"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('Address')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('City')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="City"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('City')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faCity} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold">{t('Country')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="Country"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('Country')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm mb-2 block font-bold font-custom">{t('PhoneNumber')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="PhoneNumber"
                                            type="text"
                                            required
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 pl-10"
                                            placeholder={t('PhoneNumber')}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-[#044f7c] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                        disabled={isSending}
                                    >
                                        {isSending ? 'Sending...' : t('Register')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
