import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Secondprogram = () => {
    const [activeDate, setActiveDate] = useState(null);
    const [activeHall, setActiveHall] = useState('Hall A'); // Default active hall

    const toggleDate = (date) => {
        setActiveDate(activeDate === date ? null : date); // Toggle the active date
    };

    const handleHallChange = (hall) => {
        setActiveHall(hall); // Set the active hall
    };

    return (
        <div className='bg-gray-50 px-4 lg:px-16 py-5'>
            <div className='mt-4'>
                {/* Date Buttons */}
                <button
                    className='w-full text-center bg-[#044f7c] text-white text-lg lg:text-2xl p-6 rounded mb-2 font-custom uppercase hover:bg-gray-500 hover:duration-500 hover:ease-linear'
                    onClick={() => toggleDate('26 October 2024')}
                >
                    26 October 2024, Saturday <FontAwesomeIcon icon={faArrowCircleDown} className='mr-2' />
                </button>
                {activeDate === '26 October 2024' && (
                    <div className='bg-white p-4 border border-gray-300 rounded mb-2'>
                        {/* Hall Tabs */}
                        <div className='flex mb-2 font-custom'>
                            <button
                                className={`flex-1 p-2 text-center rounded ${activeHall === 'Hall A' ? 'bg-[#ff354c] text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleHallChange('Hall A')}
                            >
                                Beethoven Hall (A)
                            </button>
                            <button
                                className={`flex-1 p-2 text-center rounded ${activeHall === 'Hall B' ? 'bg-[#ff354c] text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleHallChange('Hall B')}
                            >
                                Strauss Hall (B)
                            </button>
                        </div>

                        {/* Hall A Content */}
                        {activeHall === 'Hall A' && (
                            <div className='p-4 border border-gray-300 rounded'>
                                <h3 className='font-semibold text-lg mb-2'>Agenda for Hall A</h3>
                                <table className='w-full border-collapse'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-300 p-2 text-left'>Time</th>
                                            <th className='border border-gray-300 p-2 text-left'>Session Title</th>
                                            <th className='border border-gray-300 p-2 text-left'>Speaker</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-[13px] font-custom'>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>09:00 - 10:15</strong></td>
                                            <td className='border border-gray-300 p-2 font-bold'>Cornea and Ocular Surface</td>
                                            <td className='border border-gray-300 p-2 font-bold'>Moderators: Dr. Dilek Dursun Altınörs, Dr. Daniel Meller, Dr. Yehia S. Mostafa</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>09:00 - 09:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Simple Limbal Epithelial Transplantation for Ocular Surface Reconstruction</td>
                                            <td className='border border-gray-300 p-2'>Dr. Daniel Meller</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>09:15 – 09:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Current dry eye treatment</td>
                                            <td className='border border-gray-300 p-2'>Dr. Sait Eğrilmez</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>09:30 - 09:45</strong></td>

                                            <td className='border border-gray-300 p-2'>Keratoconus and Crosslinking Treatment</td>
                                            <td className='border border-gray-300 p-2'>Dr. Dilek Dursun Altınörs</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>09:45 - 10:00</strong></td>

                                            <td className='border border-gray-300 p-2'>Hot keratoplasty for corneal infections</td>
                                            <td className='border border-gray-300 p-2'>Dr. Yehia S. Mostafa</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>10:00 - 10:15</strong></td>

                                            <td className='border border-gray-300 p-2'>Keratopigmentation: Evolution of Techniques and Future Horizons</td>
                                            <td className='border border-gray-300 p-2'>Dr. Mahmut Kaşkaloğlu</td>
                                        </tr>
                                        <tr className='font-bold'>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>10:15 - 11:15</strong></td>

                                            <td className='border border-gray-300 p-2'>Cataract and Refractive Surgery</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Vladimir Pfeifer, Dr. Christian Grupcheva, Dr. Kıvanç Güngör</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>10:15 - 10:30</strong></td>

                                            <td className='border border-gray-300 p-2'>Iridoplasty a useful tool for the anterior segment surgeon</td>
                                            <td className='border border-gray-300 p-2'>Dr. Yehia S. Mostafa</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>10:30 - 10:45</strong></td>

                                            <td className='border border-gray-300 p-2'>Secondary IOL implantation</td>
                                            <td className='border border-gray-300 p-2'>Dr. Vladimir Pfeifer</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>10:45 – 11:00</strong></td>
                                            <td className='border border-gray-300 p-2'>Refractive intraocular lens exchange</td>
                                            <td className='border border-gray-300 p-2'>Dr. Alina Gheorghe</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>11:00 – 11:15</strong></td>
                                            <td className='border border-gray-300 p-2'>3D Surgery in Ophthalmology</td>
                                            <td className='border border-gray-300 p-2'>Dr. Christina Grupcheva</td>
                                        </tr>
                                        <tr className='bg-[#044f7c] text-white'>
                                            <td className='border-l border-b border-t border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>11:15 - 11:45</strong></td>
                                            <td className='border-b border-t border-gray-300 p-2 font-bold'>
                                                <FontAwesomeIcon icon={faCoffee} className='mr-2' />
                                                COFFEE BREAK
                                            </td>
                                            <td className='border-r border-b border-t border-gray-300 p-2'></td>
                                        </tr>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>11:45 - 12:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Uveitis</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Nilüfer Yalcindağ, Dr. Vlatka Saric</td>
                                        </tr>
                                        {/* <tr>
                                            <td className='border border-gray-300 p-2'><strong>11:45 – 12:00</strong></td>
                                            <td className='border border-gray-300 p-2'>Uveitis Masquerade Syndrome</td>
                                            <td className='border border-gray-300 p-2'>Dr. Nenad Vukojevic</td>
                                        </tr> */}
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>11:45 – 12:00</strong></td>
                                            <td className='border border-gray-300 p-2'>Diagnosis and management of non-infectious uveitis</td>
                                            <td className='border border-gray-300 p-2'>Dr. Suzan Güven</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>12:00 – 12:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Pediatric Non-infectious Uveitis</td>
                                            <td className='border border-gray-300 p-2'>Dr. Nilüfer Yalçındağ</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>12:15 – 12:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Viral Retinis</td>
                                            <td className='border border-gray-300 p-2'>Dr. Vlatka Saric</td>
                                        </tr>
                                        <tr className='bg-[#044f7c] text-white'>
                                            <td className='border-l border-t border-b border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>12:30 - 13:45</strong></td>
                                            <td className='border-b border-t border-gray-300 p-2 font-bold'>
                                                <FontAwesomeIcon icon={faUtensils} className='mr-2' />
                                                LUNCH BREAK
                                            </td>
                                            <td className='border-r border-b border-t border-gray-300 p-2'></td>
                                        </tr>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>13:45 - 15:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Vitreoretinal Surgery - II</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Hakan Durukan, Dr. Angelina Miereles, Dr. Xhevat Lumi</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>13:45 - 14:00</strong></td>

                                            <td className='border border-gray-300 p-2'>Myopic Tractional Maculopathy</td>
                                            <td className='border border-gray-300 p-2'>Dr. Angelina Miereles</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>14:00 – 14:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Outcomes of New Peeling Techniques for macular pucker</td>
                                            <td className='border border-gray-300 p-2'>Dr. Xhevat Lumi</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>14:15 – 14:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Ocular Trauma Affecting the Posterior Segment</td>
                                            <td className='border border-gray-300 p-2'>Dr. Hakan Durukan</td>
                                          
                                            
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>14:30 - 14:45</strong></td>

                                            <td className='border border-gray-300 p-2'>Prophylactic chorioretinotomy in high risk of ocular traumas</td>
                                            <td className='border border-gray-300 p-2'>Dr. Angelina Miereles</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>14:45 - 15:00</strong></td>

                                            <td className='border border-gray-300 p-2'>Management of combined traumatic dislocation crystalline lens and traumatic mydriasis</td>
                                            <td className='border border-gray-300 p-2'>Dr. Xhevat Lumi</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>15:00 – 15:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Management of ocular trauma asociated with cataracts and IOFB</td>
                                            <td className='border border-gray-300 p-2'>Dr. Naser Salihu</td>
                                        </tr>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>15:15 - 16:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Oculoplastics</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Brigita Drnovsek-Olup, Dr. Şeyda Karadeniz Uğurlu, Dr. Kelmend Spahiu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>15:15 – 15:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Complex surgical treatment of Blepharophymosis syndrome (BPES)</td>
                                            <td className='border border-gray-300 p-2'>Dr. Brigita Dernovsek</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>15:30 - 15:45</strong></td>
                                            <td className='border border-gray-300 p-2'>Ptosis Surgery</td>
                                            <td className='border border-gray-300 p-2'>Dr. Suat Hayri Uğurbaş</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>15:45 - 16:00</strong></td>

                                            <td className='border border-gray-300 p-2'>Esthetic and Functional Eyelid Surgery</td>
                                            <td className='border border-gray-300 p-2'>Dr. Onur Konuk</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>16:00 – 16:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Management of Lower Eyelid Malposition</td>
                                            <td className='border border-gray-300 p-2'>Dr. Şeyda Karadeniz Uğurlu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>16:15 – 16:30</strong></td>
                                            <td className='border border-gray-300 p-2'>Etiological classification of ptosis</td>
                                            <td className='border border-gray-300 p-2'>Dr. Kelmend Spahiu</td>
                                        </tr>
                                        <tr className='bg-[#044f7c] text-white'>
                                            <td className='border-l border-b border-t border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>16:30 - 17:00</strong></td>
                                            <td className='border-b border-t border-gray-300 p-2 font-bold'>
                                                <FontAwesomeIcon icon={faCoffee} className='mr-2' />
                                                COFFEE BREAK
                                            </td>
                                            <td className='border-r border-b border-t border-gray-300 p-2'></td>
                                        </tr>
                                        <tr className=''>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center '><strong>17:00 - 17:25</strong></td>
                                            <td className='border border-gray-300 p-2 font-bold'>SATELLITE SYMPOSIUM ALCON <br />
                                            <b>Moderator: </b><span>Ariana Kelmendi</span></td>
                                            <td className='border border-gray-300 p-2'></td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>17:00 - 17:15</strong></td>
                                            <td className='border border-gray-300 p-2'>Different IOL solutions for Presbyopia connections</td>
                                            <td className='border border-gray-300 p-2'>Dr. Andrzej Dmitriew</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>17:15 - 17:25</strong></td>
                                            <td className='border border-gray-300 p-2'>Argos CAS - more than optical biometer</td>
                                            <td className='border border-gray-300 p-2'>Iva Kumpar Plese</td>
                                        </tr>
                                     
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center py-4'><strong>17:25 - 18:40</strong></td>
                                            <td className='border border-gray-300 p-2'>Pediatric Ophthalmology and Strabismus</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Huban Atillla, Dr. Nikolas Kozeis, Dr. Tundjai Jozturk</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>17:25 – 17:40</strong></td>
                                            <td className='border border-gray-300 p-2'>The effect of Visual Screens on Vision of adolescents</td>
                                            <td className='border border-gray-300 p-2'>Dr. Tundjai Jozturk</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>17:40 – 17:55</strong></td>
                                            <td className='border border-gray-300 p-2'>Children with Visual Impairment</td>
                                            <td className='border border-gray-300 p-2'>Dr. Nikolas Kozeis</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>17:55 - 18:10</strong></td>
                                            <td className='border border-gray-300 p-2'>Electrophysiology for Children with Visual Impairment</td>
                                            <td className='border border-gray-300 p-2'>Dr. Ayşe Öner</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>18:10 - 18:25</strong></td>
                                            <td className='border border-gray-300 p-2'>Visual Complications of ROP</td>
                                            <td className='border border-gray-300 p-2'>Dr. Tuba Atalay</td>
                                        </tr>
                                        <tr>
                                        <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>18:25 - 18:40</strong></td>

                                            <td className='border border-gray-300 p-2'>Post traumatic isolated extraocular muscle lacerations</td>
                                            <td className='border border-gray-300 p-2'>	Dr. Yaşar Duranoğlu</td>
                                        </tr>
                                        <tr>
                                            <td className='border-l border-t border-b border-gray-300 p-2'><strong></strong></td>
                                            <td className='border-t border-b border-gray-300 p-2 font-bold'>CLOSING CEREMONY</td>
                                            <td className='border-r border-t border-b border-gray-300 p-2'></td>
                                        </tr>
                                        <tr className='bg-[#044f7c] text-white'>
                                            <td className='border-l border-b border-t border-gray-300 p-2'><strong></strong></td>
                                            <td className='border-b border-t border-gray-300 p-2 font-bold'>
                                                <FontAwesomeIcon icon={faCoffee} className='mr-2' />
                                                GALA DINNER (EMERALD HOTEL)
                                            </td>
                                            <td className='border-r border-b border-t border-gray-300 p-2'></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Hall B Content */}
                        {activeHall === 'Hall B' && (
                            <div className='p-4 border border-gray-300 rounded'>
                                <h3 className='font-semibold text-lg mb-2'>Agenda for Hall B</h3>
                                <table className='w-full border-collapse'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-300 p-2 text-left'>Time</th>
                                            <th className='border border-gray-300 p-2 text-left'>Session Title</th>
                                            <th className='border border-gray-300 p-2 text-left'>Speaker</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-[13px] font-custom'>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 text-[10px] lg:text-sm w-[120px] text-center'><strong>08:30 – 10:00</strong></td>
                                            <td className='border border-gray-300 p-2 font-bold'>FREE PAPERS – II</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Sibel Kadayıfcılar, Dr. Vigan Roka</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-26</strong></td>
                                            <td className='border border-gray-300 p-2'>Examination of Retinal and Optic Disc Structures in Patients with Bipolar Disorder</td>
                                            <td className='border border-gray-300 p-2'>Birumut Gedik</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-27</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Choroidal Vascularity Index, Retinal and Optic Nerve Changes in Erectile Dysfunction</td>
                                            <td className='border border-gray-300 p-2'>Pelin Kıyat</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-28</strong></td>
                                            <td className='border border-gray-300 p-2'>Comparison of Structural And Vascular Characteristics of The Macula In Dominant And Non-Dominant Eyesn</td>
                                            <td className='border border-gray-300 p-2'>Abdullah Erdem</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-29</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Choroidal Thickness and Choroidal Vascular Index by Optical Coherence Tomography in Patients With Morbid Obesity and Comparison with Healthy Controls</td>
                                            <td className='border border-gray-300 p-2'>Burcu Işık</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-30</strong></td>
                                            <td className='border border-gray-300 p-2'>Does Mild Autonomous Cortisol-Secreting Adrenal Adenoma Have an Effect on the Retinal Microvascular Network and Choroid? A Cross Sectional Study</td>
                                            <td className='border border-gray-300 p-2'>Yusuf Ziya Güven</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-31</strong></td>
                                            <td className='border border-gray-300 p-2'>Comparison of Choroidal and Retinal Microvascular Changes During Pregnancy and Postpartum Period With Optical Coherence Tomography Angiography</td>
                                            <td className='border border-gray-300 p-2'>Berkay Öner Karaca</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-32</strong></td>
                                            <td className='border border-gray-300 p-2'>Suprachorioidal Implantation of Slow-Release Corticosteroid Implants for the Treatment of Cystoid Macular Edema</td>

                                            <td className='border border-gray-300 p-2'>Ben Asani</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-33</strong></td>
                                            <td className='border border-gray-300 p-2'>Anti VEGF Revolution, Progress and Challenges -Our Experience</td>
                                            <td className='border border-gray-300 p-2'>Belinda Pustina</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-34</strong></td>
                                            <td className='border border-gray-300 p-2'>Subretinal Injection of rTPA to Treat Submacular Hemorrhage Secondary To Age-Related Macular Degeneration</td>
                                            <td className='border border-gray-300 p-2'>Vigan Roka</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-35</strong></td>
                                            <td className='border border-gray-300 p-2'>Intravitreal Dexemetasone Implant for the Treatment of Diabetic Macular Edema in Eyes with Intraocular Silicone Tamponade</td>
                                            <td className='border border-gray-300 p-2'>Büşra Kaya Adaş</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-36</strong></td>
                                            <td className='border border-gray-300 p-2'>Clinical Features of Children with Optic Disc Swelling</td>
                                            <td className='border border-gray-300 p-2'>Pınar Bingöl Kızıltunç</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-37</strong></td>
                                            <td className='border border-gray-300 p-2'>Assesment of the Effects of Two Commonly Used Mydriatics on the Macular and Peripapillary Microvascular Systems of Healthy Children: An Optical Coherence Tomography Angiography Study</td>
                                            <td className='border border-gray-300 p-2'>Yara Chiekhismailzadeh</td>
                                        </tr>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 p-2'><strong>10:00 – 11:30</strong></td>
                                            <td className='border border-gray-300 p-2 font-bold'>FREE PAPERS – III</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Tülay Şimşek, Dr. Orhan Kubati</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-38</strong></td>
                                            <td className='border border-gray-300 p-2'>Comparison of Macular Ganglion Cell-Inner Plexiform Layer Thickness and Sectoral Ratio Asymmetry with Different Glaucoma Types and Early Detection of Early Glaucomatous Defects in Healthy Eyes</td>
                                            <td className='border border-gray-300 p-2'>Merve Çetin</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-39</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Optic Nerve Head Morphology of Small Optic Discs in Healthy eyes Using Different Optical Coherence Tomography Parameters</td>
                                            <td className='border border-gray-300 p-2'>Kübra Çağlar</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-40</strong></td>
                                            <td className='border border-gray-300 p-2'>Lamina Cribrosa Thickness and Ocular Biometric Parameters Affecting Lamina Cribrosa Thickness in Different Glaucoma Stages</td>
                                            <td className='border border-gray-300 p-2'>Hilal Toprak Tellioğlu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-41</strong></td>
                                            <td className='border border-gray-300 p-2'>Trabeculectomy as the Gold Standard in the Surgical Treatment of Glaucoma</td>
                                            <td className='border border-gray-300 p-2'>Muhamedin Rushiti</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-42</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Long-Term Results of Transscleral Diode Laser Cyclophotocoagulation in End-Stage Glaucoma Cases with Poor Visual Potential</td>
                                            <td className='border border-gray-300 p-2'>Arta Shukriu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-43</strong></td>
                                            <td className='border border-gray-300 p-2'>Cyclocyotherapy as Emergency Therapeutic Response in to the Patient With NV Glaucoma Caused By CRVO-Case Report</td>
                                            <td className='border border-gray-300 p-2'>Irina Bogdanova</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-44</strong></td>
                                            <td className='border border-gray-300 p-2'>Duane Syndrome Treatment</td>
                                            <td className='border border-gray-300 p-2'>Mentor Ilazi</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-45</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of the Validity and Reliability of the Turkish Version of the Adult Strabismus Quality of Life Questionnaire (AS-20)</td>
                                            <td className='border border-gray-300 p-2'>Eylem Gökalp</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-46</strong></td>
                                            <td className='border border-gray-300 p-2'>V Patern Horizontal Strabismus with Inferior Oblique Overaction</td>
                                            <td className='border border-gray-300 p-2'>Mirlinda Kubati</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-47</strong></td>
                                            <td className='border border-gray-300 p-2'>Sensorial Exotropia</td>
                                            <td className='border border-gray-300 p-2'>Alkeda Tandili</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-48</strong></td>
                                            <td className='border border-gray-300 p-2'>Optical Filters Preferences in Low Vision Rehabilitation</td>
                                            <td className='border border-gray-300 p-2'>Esra Şahlı</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-49</strong></td>
                                            <td className='border border-gray-300 p-2'>Congenital Palsy of Trochlear Nerve in Our Practice and Some Dilemmas in Treatment</td>
                                            <td className='border border-gray-300 p-2'>Orhan Kubati</td>
                                        </tr>
                                        <tr className='font-bold'>
                                            <td className='border border-gray-300 p-2'><strong>13.30 - 15.00</strong></td>
                                            <td className='border border-gray-300 p-2 font-bold'>FREE PAPERS – IV</td>
                                            <td className='border border-gray-300 p-2'>Moderators: Dr. Yaşar Duranoğlu, Dr. Gazmend Kacaniku</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-50</strong></td>
                                            <td className='border border-gray-300 p-2'>To Evaluate the Visual Results of Scleral Lenses in Keratoconus</td>
                                            <td className='border border-gray-300 p-2'>Sinem Kaya</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-51</strong></td>
                                            <td className='border border-gray-300 p-2'>The Effect of Selective Suture Removal on Post-Penetrating Keratoplasty Astigmatism in Keratoconus Patients</td>
                                            <td className='border border-gray-300 p-2'>Zeynep Soysaraç Nergizal</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-52</strong></td>
                                            <td className='border border-gray-300 p-2'>Conjunctival Neoplasia</td>
                                            <td className='border border-gray-300 p-2'>Yllke Salihu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-53</strong></td>
                                            <td className='border border-gray-300 p-2'>Tear Film Stability and Blink Behavior Interact with Each Othe</td>
                                            <td className='border border-gray-300 p-2'>Yakup Acet</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-54</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Vogt Palisades and Conjunctiva Epithelia With Optical Coherence Tomography (OCT) and In-Vivo Confocal Microscopy (IVCM) in The Postoperative Period in Patients Who Have Had Pterygium Surgery</td>
                                            <td className='border border-gray-300 p-2'>Damla Nur Dinç</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-55</strong></td>
                                            <td className='border border-gray-300 p-2'>Tectonic and Therapeutic Penetrating Keratoplasty: Causes, Outcomes and Complications</td>
                                            <td className='border border-gray-300 p-2'>Gizem Taşkın</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-56</strong></td>
                                            <td className='border border-gray-300 p-2'>Cross-Linking Results According to Age in Pediatric Patients Undergoing Cross-Linking for Keratoconus</td>
                                            <td className='border border-gray-300 p-2'>Sibel Zirtiloğlu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-57</strong></td>
                                            <td className='border border-gray-300 p-2'>Choroidal Changes in Keratoconus and Effects of Corneal Collagen Crosslinking Treatment</td>
                                            <td className='border border-gray-300 p-2'>Miray Karataş</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-58</strong></td>
                                            <td className='border border-gray-300 p-2'>Prognosis of Infectious Corneal Ulcers Treated with Antibiotics Empirically Without Culture Results</td>
                                            <td className='border border-gray-300 p-2'>Sevim Kuyumcu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-59</strong></td>
                                            <td className='border border-gray-300 p-2'>Evaluation of Glaucoma Outcomes After Penetrating and Lamellar Keratoplasty</td>
                                            <td className='border border-gray-300 p-2'>Merve Ersoy</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-60</strong></td>
                                            <td className='border border-gray-300 p-2'>Analysis of Corneal Mapping and Ocular Surface Parameters with Anterior Segment Optical Coherence Tomography in Newly Diagnosed Severe Obstructive Sleep Apnea Syndrome Patients</td>
                                            <td className='border border-gray-300 p-2'>Halil İbrahim Sönmezoğlu</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'><strong>OP-61</strong></td>
                                            <td className='border border-gray-300 p-2'>Importance of Clinical and AS-OCT Features of Descemet Membrane Detachment After Cataract Surgery</td>
                                            <td className='border border-gray-300 p-2'>Diba Bulluti</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Secondprogram;