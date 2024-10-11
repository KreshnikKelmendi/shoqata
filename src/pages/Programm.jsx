// import React from 'react';

// const Programm = () => {
//   return (
//     <div className='bg-gray-50 px-4 lg:px-16  py-5'>
//     <section className="bg-gray-50">
//                 <div className="mx-auto py-5">
//                     <div className="">
//                         <h2 className="mb-2 text-2xl font-semibold text-[#044f7c] font-custom uppercase">
//                             Agenda of Programe
//                         </h2>
//                         <p className="text-sm font-medium">
//                             <p className="text-sm 2xl:text-base font-medium lg:w-[68%] 2xl:w-[55%] font-custom">

//                             </p>
//                         </p>
//                     </div>
//                 </div>
//             </section>

//       <div className='overflow-x-auto'>
//         <table className='min-w-full bg-white overflow-hidden'>
//           <tbody className='text-[#044f7c] font-custom font-extrabold'>
//             {/* Day 1 */}
//             <tr>
//               <td colSpan='3' className='px-6 py-4 bg-[#044f7c] text-white text-lg font-semibold border-b border-gray-200'>
//                 Day 1 - 25 October 2024
//               </td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>08:00 - 18:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-extrabold'>Registration</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>All day</td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>09:00 - 10:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>YO Session</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>10:30 - 10:45</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Coffee Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>10:45 - 11:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Opening Ceremony</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Huban Atilla & Naser Salihu<br />Short artistic program</td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>11:30 - 12:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Innovations in Cornea and Ocular Surface</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>12:30 - 13:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Lunch Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>13:30 - 14:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Cataract and refractive Surgery – I</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>14:30 - 15:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Glaucoma – Recent advances in glaucoma diagnosis and treatment</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>15:30 - 16:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Coffee Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>16:00 - 17:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Retina - Imaging</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>17:00 - 18:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Vitreoretinal Surgery - 1</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>

//             {/* Day 2 */}
//             <tr>
//               <td colSpan='3' className='px-6 py-4 bg-[#044f7c] text-white text-lg font-semibold border-t border-gray-200'>
//                 Day 2 - 26 October 2024
//               </td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>08:00 - All Day</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Registration</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>09:00 - 10:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Uveitis</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>10:00 - 11:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Vitreoretinal Surgery-2</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>11:00 - 11:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Coffee Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>11:30 - 12:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>SATELLITE SYMPOSIUM</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>12:30 - 13:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Lunch Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>13:30 - 14:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Strabismus, Ambliyopia</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>14:30 - 15:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Refractive Surgery - II</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>15:30 - 16:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Coffee Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>16:00 - 17:00</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Oculoplastics</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>17:00 - 17:20</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Coffee Break</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>17:20 - 18:20</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Future Developments in Ophthalmology</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-slate-50'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'>18:20 - 18:30</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Closing Ceremony</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//             <tr className='bg-yellow-400 text-white'>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200 font-bold'></td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>Gala Dinner</td>
//               <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Programm;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Secondprogram from './Secondprogram';

const Programm = () => {
  const [activeDate, setActiveDate] = useState(null);
  const [activeHall, setActiveHall] = useState('Hall A'); // Default active hall

  const toggleDate = (date) => {
    setActiveDate(activeDate === date ? null : date); // Toggle the active date
  };

  const handleHallChange = (hall) => {
    setActiveHall(hall); // Set the active hall
  };

  return (
    <>
      <div className='bg-gray-50 px-4 lg:px-16 py-8'>
        <h2 className='text-3xl lg:text-4xl text-center font-semibold font-custom uppercase pb-4'>Scientific Programm</h2>
        <div className='mt-4'>
          {/* Date Buttons */}
          <button
            className='w-full text-center bg-[#044f7c] text-white text-lg lg:text-2xl p-6 rounded mb-2 font-custom uppercase hover:bg-gray-500 hover:duration-500 hover:ease-linear'
            onClick={() => toggleDate('25 October 2024')}
          >
            25 October 2024, Friday <FontAwesomeIcon icon={faArrowCircleDown} className='mr-2' />
          </button>
          {activeDate === '25 October 2024' && (
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
                        <td className='border border-gray-300 p-2'><strong>09:00 – 09:45</strong></td>
                        <td className='border border-gray-300 p-2'>YOUNG OPHTHALMOLOGIST SESSION</td>
                        <td className='border border-gray-300 p-2 font-bold'>Moderators: Dr. Banu Turgut Öztürk, Dr. Belinda Pustina</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>09:00 – 09:15</strong></td>
                        <td className='border border-gray-300 p-2'>If I am born again, I will be an ophthalmologist again. Why I chose ophthalmology?</td>
                        <td className='border border-gray-300 p-2'>Dr. Baran Özdemir</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>09:15 – 09:30</strong></td>
                        <td className='border border-gray-300 p-2'>Navigating ophthalmology through VUCA with peripheral vision</td>
                        <td className='border border-gray-300 p-2'>Driton Selimi</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>09:30 - 09:45</strong></td>
                        <td className='border border-gray-300 p-2'>AI in Ophthalmology</td>
                        <td className='border border-gray-300 p-2'>Dr. Hakan Özdemir</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>09:50 - 10:30</strong></td>
                        <td className=' border-gray-300 p-2'>
                          <b>OPENING CEREMONY</b><br />
                          <span>Dr. Huban Atilla - President of Turkish Ophthalmological Association (5 min.)</span><br />
                          <span>Dr. Naser Salihu - President of KAO (5 min.)</span><br />
                          <span>Music Performance (30 min):</span>
                          <ul className='list-disc list-inside'>
                            <li>Dr. Elçin Sürer</li>
                            <li>Dr. Sait Eğrilmez</li>
                            <li>Dr. Gürkan Erdoğan</li>
                            <li>Dr. Gafurr Murati</li>
                            <li>Dr. Valbon Ajazi</li>
                          </ul>
                        </td>
                      </tr>

                      <tr className='bg-[#044f7c] text-white'>
                        <td className='border border-gray-300 p-2'><strong>10:30 - 11:00</strong></td>
                        <td className='border border-gray-300 p-2 font-bold'>
                          <FontAwesomeIcon icon={faCoffee} className='mr-2' />
                          COFFEE BREAK
                        </td>
                        <td className='border border-gray-300 p-2'></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:00 - 12:15</strong></td>
                        <td className='border border-gray-300 p-2'>Cataract session I</td>
                        <td className='border border-gray-300 p-2'>Dr. Gabor Scharioth, Dr. Banu Coșar, Dr. Athanasios Nikolakopoulos</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:00 – 11:15</strong></td>
                        <td className='border border-gray-300 p-2'>Low intraocular pressure, microincisional cataract surgery</td>
                        <td className='border border-gray-300 p-2'>Dr. Gabor Scharioth</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:15 – 11:30</strong></td>
                        <td className='border border-gray-300 p-2'>Treatment of residual refraction after trifocal lens implantation (Acibadem sponsorship)</td>
                        <td className='border border-gray-300 p-2'>Dr. Banu Coșar</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:30 – 11:45</strong></td>
                        <td className='border border-gray-300 p-2'>Suggestions in treating cataract complications on the table, for cataract surgeon</td>
                        <td className='border border-gray-300 p-2'>Dr. Athanasios Nikolakopoulos</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:45 – 12:00</strong></td>
                        <td className='border border-gray-300 p-2'>OSD, Cataract and Refractive surgery</td>
                        <td className='border border-gray-300 p-2'>Dr. Minir Asani</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>12:00 - 12:15</strong></td>
                        <td className='border border-gray-300 p-2'>Intrascleral haptic fixation</td>
                        <td className='border border-gray-300 p-2'>Dr. Gabor Scharioth</td>
                      </tr>
                      <tr className='font-bold'>
                        <td className='border border-gray-300 p-2'><strong>12:15 - 12:30</strong></td>
                        <td className=' border-gray-300 p-2'>DISCUSSION</td>
                        <td className='border-r border-gray-300 p-2'></td>
                      </tr>
                      <tr className='bg-[#044f7c] text-white'>
                        <td className='border-l border-t border-b border-gray-300 p-2'><strong>12:30 - 13:30</strong></td>
                        <td className='border-b border-t border-gray-300 p-2 font-bold'>
                          <FontAwesomeIcon icon={faUtensils} className='mr-2' />
                          LUNCH BREAK
                        </td>
                        <td className='border-r border-b border-t border-gray-300 p-2'></td>
                      </tr>
                      <tr className='font-bold'>
                        <td className='border border-gray-300 p-2'><strong>13:30 - 14:45</strong></td>
                        <td className='border border-gray-300 p-2'>Recent advances in glaucoma diagnosis and treatment<br />
                          Moderators: Dr. Tekin Yaşar, Dr. Pajtim Lutaj</td>
                        <td className='border border-gray-300 p-2'></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>13:30 – 13:45</strong></td>
                        <td className='border border-gray-300 p-2'>Gonioscopy in MIGS Era</td>
                        <td className='border border-gray-300 p-2'>Dr. Tülay Şimşek</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>13:45 – 14:00</strong></td>
                        <td className='border border-gray-300 p-2'>How do I monitor my glaucoma patient with OCT</td>
                        <td className='border border-gray-300 p-2'>Dr. Atilla Bayer</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>14:00 – 14:15</strong></td>
                        <td className='border border-gray-300 p-2'>Microinvasive Glaucoma Surgery</td>
                        <td className='border border-gray-300 p-2'>Dr. Pajtim Lutaj</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>14:15 – 14:30</strong></td>
                        <td className='border border-gray-300 p-2'>Neovascular Glaucoma</td>
                        <td className='border border-gray-300 p-2'>Dr. Ümit Ekşioğlu</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>14:30- 14:45</strong></td>
                        <td className='border border-gray-300 p-2'>Personalized glaucoma treatment</td>
                        <td className='border border-gray-300 p-2'>Dr. Kıvanç Güngör</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>14:45 - 15:35</strong></td>
                        <td className=' border-gray-300 p-2 font-bold border-b border-t border-l'>SATELLITE SYMPOSIUM ROCHE<br />
                        Moderator: Dr. Naser Salihu</td>
                        <td className='border-r border-t border-b border-gray-300 p-2'></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>14:45 – 15:15</strong></td>
                        <td className='border border-gray-300 p-2'>Bridging Research with Reality: The overall impact of Faricimab</td>
                        <td className='border border-gray-300 p-2'>Dr. Nenad Vukojevic</td>
                      </tr>

                      <tr>
                        <td className='border border-gray-300 p-2'><strong>15:15 – 15:30</strong></td>
                        <td className='border border-gray-300 p-2'>The power of dual mechanism of action</td>
                        <td className='border border-gray-300 p-2'>Dr. Afrim Shabani</td>
                      </tr>

                      <tr>
                        <td className='border border-gray-300 p-2'><strong>15:30 – 15:35</strong></td>
                        <td className='border border-gray-300 p-2'>Discussion</td>
                        <td className='border border-gray-300 p-2'></td>
                      </tr>

                      <tr>
                        <td className='border border-gray-300 p-2'><strong>15:35 - 16:50</strong></td>
                        <td className=' border-gray-300 p-2 font-bold border-b border-t border-l'>Medical Retina <br />
                          Moderators: Dr. Nurten Ünlü, Dr. Emina Kujundzic, Dr. Vesna Dimovska</td>
                        <td className='border-r border-t border-b border-gray-300 p-2'></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>15:35 – 15:50</strong></td>
                        <td className='border border-gray-300 p-2'>OCT Biomarkers in Retinal Diseases</td>
                        <td className='border border-gray-300 p-2'>Dr. Sibel Kadayıfçılar</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>15:50– 16:05</strong></td>
                        <td className='border border-gray-300 p-2'>Follow-up of Diabetic Retinopathy Progression with Retinal Nerve Fiber Layer Thickness</td>
                        <td className='border border-gray-300 p-2'>Dr. Emina Kujundzic</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>16:05 – 16:20</strong></td>
                        <td className='border border-gray-300 p-2'>New Terminology in Age-related Macular Degeneration</td>
                        <td className='border border-gray-300 p-2'>Dr. Nurten Ünlü</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>16:20 - 16:35</strong></td>
                        <td className='border border-gray-300 p-2'>VEGF Treatment Modalities - Current and Future Perspectives</td>
                        <td className='border border-gray-300 p-2'>Dr. Vesna Dimovska</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>16:35 – 16:50</strong></td>
                        <td className='border border-gray-300 p-2'>Novel Drug Delivery Systems in Retinal Diseases</td>
                        <td className='border border-gray-300 p-2'>Dr. Gamze Uçan Gündüz</td>
                      </tr>
                      <tr className='bg-[#044f7c] text-white'>
                        <td className='border border-gray-300 p-2'><strong>16:50 - 17:15</strong></td>
                        <td className='border border-gray-300 p-2 font-bold'>
                          <FontAwesomeIcon icon={faCoffee} className='mr-2' />
                          COFFEE BREAK
                        </td>
                        <td className='border border-gray-300 p-2'></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>17:15 - 18:30</strong></td>
                        <td className='border border-gray-300 p-2'>Vitreoretinal Surgery - I</td>
                        <td className='border border-gray-300 p-2'>Moderators: Dr. Borna Saric, Dr. Süleyman Kaynak, Dr. Tomislav Jukic</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>17:15 – 17:30</strong></td>
                        <td className='border border-gray-300 p-2'>Classic technique in Retinal Detachment cases: Medical and Economic Points</td>
                        <td className='border border-gray-300 p-2'>Dr. Süleyman Kaynak</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>17:30 – 17:45</strong></td>
                        <td className='border border-gray-300 p-2'>Surgery for congenital vascular malformations of the retina and choroid</td>
                        <td className='border border-gray-300 p-2'>Dr. Borna Saric</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>17:45 – 18:00</strong></td>
                        <td className='border border-gray-300 p-2'>Leucocoria and Differential Diagnosis</td>
                        <td className='border border-gray-300 p-2'>Dr. Şengül Özdek</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>18:00 - 18:15</strong></td>
                        <td className='border border-gray-300 p-2'>Scleral buckling surgery-is it outdated?</td>
                        <td className='border border-gray-300 p-2'>Dr. Tomislav Jukic</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>18:15 – 18:30</strong></td>
                        <td className='border border-gray-300 p-2'>Nucleus and Intraocular Lens Dislocations</td>
                        <td className='border border-gray-300 p-2'>Dr. Gürkan Erdoğan</td>
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
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>11:00 - 12:15</strong></td>
                        <td className='border border-gray-300 p-2 font-bold'>YO session, (7 minutes/speaker)</td>
                        <td className='border border-gray-300 p-2'>Moderators: Dr. Ben Asani, Dr. Yllke Salihu, Dr. Onur Konuk</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-01</strong></td>
                        <td className='border border-gray-300 p-2'>Suprachorioidal Implantation of Slow-Release Corticosteroid Implants for the Treatment of Cystoid Macular Edema</td>
                        <td className='border border-gray-300 p-2'>Ben Asani</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-02</strong></td>
                        <td className='border border-gray-300 p-2'>Crystalline Keratopathy</td>
                        <td className='border border-gray-300 p-2'>Yllke Salihu</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-03</strong></td>
                        <td className='border border-gray-300 p-2'>Is a Suitable and Economical Approach Possible for In-vitro Studies of Corneal Epithelium?</td>
                        <td className='border border-gray-300 p-2'>Ayse Bozkurt Oflaz</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-04</strong></td>
                        <td className='border border-gray-300 p-2'>Long-term Clinical and Visual Outcomes in Ocular Rosacea</td>
                        <td className='border border-gray-300 p-2'>Gülce Kayıkçı</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-05</strong></td>
                        <td className='border border-gray-300 p-2'>How Does the Presence of Pterygium Affect the Ocular Surface and Dry Eye Symptoms in Patients with Dry Eye Disease?</td>
                        <td className='border border-gray-300 p-2'>Bilge Tarım</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-06</strong></td>
                        <td className='border border-gray-300 p-2'>Central Retinal Vein Occlusion Accompanied by Cilioretinal Occlusion</td>
                        <td className='border border-gray-300 p-2'>Endrit Sheremeti</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-07</strong></td>
                        <td className='border border-gray-300 p-2'>Our First Experience in Treatment of Macular Hole</td>
                        <td className='border border-gray-300 p-2'>Ardian Shabani</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-08</strong></td>
                        <td className='border border-gray-300 p-2'>Clinical Features and Outcomes of Pars Plana Vitrectomy for Retained Lens Fragments after Phacoemulsification</td>
                        <td className='border border-gray-300 p-2'>Sule Acar Duyan</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-09</strong></td>
                        <td className='border border-gray-300 p-2'>Refractive Surgery: A New Perspective on Vision Correction</td>
                        <td className='border border-gray-300 p-2'>Kreshnik Pollozhani</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-10</strong></td>
                        <td className='border border-gray-300 p-2'>Could Intraoperative Floppy Iris Syndrome (IFIS) Be Predicted by Pupillometry?</td>
                        <td className='border border-gray-300 p-2'>Dilara Özkoyuncu Kocabaş</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-11</strong></td>
                        <td className='border border-gray-300 p-2'>NAION and Pseudo Foster Kennedy Syndrome - Case Report</td>
                        <td className='border border-gray-300 p-2'>Fahrudin Ilazi</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-12</strong></td>
                        <td className='border border-gray-300 p-2'>Papiledema in Idiopathic Intracranial Hypertension</td>
                        <td className='border border-gray-300 p-2'>Dardan Sheremeti</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-13</strong></td>
                        <td className='border border-gray-300 p-2'>The Importance of Topography for Medical Board Examination and Detection of Corneal Refractive Surgery</td>
                        <td className='border border-gray-300 p-2'>Yusuf İkbal Erdoğdu</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>13:30 - 15:00</strong></td>
                        <td className='border border-gray-300 p-2 font-bold'>FREE PAPERS – I</td>
                        <td className='border border-gray-300 p-2'>Moderators: Dr. Sait Eğrilmez, Dr. Burim Zuri</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-14</strong></td>
                        <td className='border border-gray-300 p-2'>Our Experience in Multifocal Implantation After Cataract Surgery and Clear Lens Extraction</td>
                        <td className='border border-gray-300 p-2'>Burim Zhuri</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-15</strong></td>
                        <td className='border border-gray-300 p-2'>Phakic Lenses (ICL/PCL) in Correction of Refractive Anomalies</td>
                        <td className='border border-gray-300 p-2'>Stela Ceca</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-16</strong></td>
                        <td className='border border-gray-300 p-2'>Clinical Outcomes of a New Monofocal Intraocular Lens in Patients Undergoing Phakovitrectomy for Idiopathic Epiretinal Membrane</td>
                        <td className='border border-gray-300 p-2'>Gentian Bajraktari</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-17</strong></td>
                        <td className='border border-gray-300 p-2'>A Modification of the Intraocular Lens Blocking Technique Without Posterior Capsulorhexis for Intraocular Foreign Body Removal</td>
                        <td className='border border-gray-300 p-2'>Sevim Ayça Seyyar</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-18</strong></td>
                        <td className='border border-gray-300 p-2'>Macular Hole Surgery Without Postoperative Head Positioning: A Technique of Viscoelastic Device Injection Covering the Temporal Internal Limiting Membrane Flap</td>
                        <td className='border border-gray-300 p-2'>Oğuzhan Saygılı</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-19</strong></td>
                        <td className='border border-gray-300 p-2'>Effect of Intravitreal Sulfur Hexafloride (SF6) Injection in The Management of Vitreomacular Traction</td>
                        <td className='border border-gray-300 p-2'>Oğuzhan Özçelik</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-20</strong></td>
                        <td className='border border-gray-300 p-2'>Temporal Inverted Internal Limiting Membrane Flap Technique versus Conventional Internal Limiting Membrane Peeling Technique for Large Macular Holes</td>
                        <td className='border border-gray-300 p-2'>Gülay Güler Canözer</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-21</strong></td>
                        <td className='border border-gray-300 p-2'>Outcomes of Vitrectomy in Macular Hole Surgery</td>
                        <td className='border border-gray-300 p-2'>Ilir Osmani</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-22</strong></td>
                        <td className='border border-gray-300 p-2'>Comparison of Clinical Outcomes of Three Different Suture Techniques in Upper Eyelid Blepharoplasty</td>
                        <td className='border border-gray-300 p-2'>Ali Karnaz</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-23</strong></td>
                        <td className='border border-gray-300 p-2'>Evaluation of Botulinum Toxin A injection Complications in Cosmetic Application</td>
                        <td className='border border-gray-300 p-2'>Erol Dülger</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-24</strong></td>
                        <td className='border border-gray-300 p-2'>Evaluation of the Change in the Epiphora After Blepharoplasty in Patients With Dermatoschalasis in the Long Term</td>
                        <td className='border border-gray-300 p-2'>Demet İyidoğan</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'><strong>OP-25</strong></td>
                        <td className='border border-gray-300 p-2'>Compression Dressing Versus Non-compression Eye Pad after Blepharoplasty</td>
                        <td className='border border-gray-300 p-2'>Fatma Poslu Karademir</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Secondprogram />
    </>
  );
};

export default Programm;




