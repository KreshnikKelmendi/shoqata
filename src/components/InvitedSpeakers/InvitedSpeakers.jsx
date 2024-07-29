import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const InvitedSpeakers = () => {
    const { t } = useTranslation();

    const cardsData = [
        {
            id: 1,
            icon: faPeopleGroup,
            title: "25th & 26th October",
            description: "This is the list of our invited speakers for the 4th National Congress and 2nd Balkan Congress of Ophthalmology.",
            officialLanguage: "Official languages: Albanian and English, with simultaneous translations available.",
            speakers: [
                "Prof. Gabor Scharioth - Germany",
                "Dr. Minir Asani - Germany",
                // "Andreas Berlin - Germany",
                "Prof. Daniel Meller - Germany",
                "Prim. Dr. Vladimir Pfeifer - Slovenia",
                "Prof. Xhevat Lumi - Slovenia",
                "Prof. Tomislav Jukic - Croatia",
                "Prof. Nenad Vukojevic - Croatia",
                "Prof. Borna Saric - Croatia",
                "Prof. Vlatka Saric - Croatia",
                "Prof. Vesna Dimovska - North Macedonia",
                "Prof. Athanasios Nikolakopulos - Greece",
                "Prof. Yehia Salah Mostafa - Egypt",
                "Prof. Pajtim Lutaj - Albania",
                "Prof. Ilir Arapi - Albania",
                // "Arjeta Grezda - Albania",
                // "Emina Begovic - Bosna and Hercegovina",
                // "Thomas Fenech - Malta",
                "Prof. Angelina Meireles - Portugal",
                "Prof. Brigita Drnovsek-Olup - Slovenia"
            ].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        },
    ];

    return (
        <>
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
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 font-custom">{t('InvitedSpeakers')}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <section className="bg-gray-50">
                <div className="mx-auto px-4 lg:px-16">
                    <div className="">
                        <h2 className="mb-2 text-2xl font-semibold text-[#044f7c] font-custom uppercase">
                            {t('OurInvitedSpeakersTitle')}
                        </h2>
                        <p className="text-sm font-medium">
                            <p className="text-sm 2xl:text-base font-medium lg:w-[68%] 2xl:w-[55%] font-custom">
                                {t('OurInvitedSpeakersDescription')}
                            </p>
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50">
                <div className="grid lg:grid-cols-1 px-4 lg:px-16 lg:pt-8 pt-6">
                    {cardsData.map((card) => (
                        <div key={card.id} className="grid relative lg:h-full">
                            <p className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-gray-200 rounded-md py-6 pr-6 pl-9">
                                <div className="flex items-center">
                                    <div className="bg-[#ff354c] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                                        <FontAwesomeIcon icon={card.icon} />
                                    </div>
                                    <p className="ml-3 text-2xl font-bold text-[#044f7c]">{card.title} </p>
                                </div>
                                <p className="text-sm font-semibold group-hover:text-gray-700 mt-2 leading-6">{card.description}</p>
                                <p className="text-sm font-bold font-custom">{card.officialLanguage}</p>
                                <div className="bg-[#ff354c] group-hover:bg-blue-600 h-full w-3 absolute top-0 left-0"></div>
                                <OrderedList speakers={card.speakers} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const OrderedList = ({ speakers }) => {
    return (
        <div className="mt-4">
            <ol className="">
                {speakers.map((speaker, indexe) => (
                    <ListItem key={indexe} count={indexe + 1} text={speaker} />
                ))}
            </ol>
        </div>
    );
};

const ListItem = ({ count, text }) => {
    return (
        <li className="text-body-color dark:text-dark-6 flex text-base items-center py-1">
            <span className="p-4 mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#ff354c] text-base text-white font-custom">
                {count}
            </span>
                <span className="font-custom font-semibold text-[#044f7c]">{text}</span>
        </li>
    );
};

export default InvitedSpeakers;
