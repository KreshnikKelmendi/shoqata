import React from 'react';
import abstract1 from "../components/img/Congenital-Trochlear-nerve-(IV)-palsy-and-a-few-dilemmas-in-the-treatment.pdf";
import abstract2 from "../components/img/V-Pattern-horisontal-strabismus,-with-inferior-oblique-overaction.pdf";
import abstract3 from "../components/img/Duane-syndrome-treatment.pdf";
import abstract4 from "../components/img/Presentation-of-results-after-implantation-of-multifocal-lenses-for-refractive-and-cataract-surgery.pdf";
import abstract5 from "../components/img/Abstrakti Manaxhimi i integruar i pacientit me retinopati diabetike.pdf"
import abstract6 from "../components/img/Abstrakt Qasja klinike ne diagnozen e vaskulitit te retines.pdf"
import abstract7 from "../components/img/Trabeculectomy - Pr.pdf"
import abstract8 from "../components/img/AC.pdf"
import abstract9 from "../components/img/XT sensore KONF Prishtine 2024.pdf"
import abstract10 from "../components/img/Abstract_Ben_Asani.pdf"
import abstract11 from "../components/img/ICL abstract (2).pdf"
import abstract12 from "../components/img/Blef.SY Priština 2024.pdf"
import abstract13 from "../components/img/Abstract Submission Endrit Sheremeti.pdf"
import abstract14 from "../components/img/NON-ARTERITIC ANTERIOR ISCHEMIC OPTIC NEUROPATHY (NA-AION) AND PSEUDO-FOSTER KENNEDY SYNDROME - CASE REPORT (2).pdf"
import abstract15 from "../components/img/ABSTRACT PRISTINA 2024.pdf"
import abstract16 from "../components/img/Subretinal injection of rTPA to treat submacular hemorrhage secondary to age.pdf"
import abstract17 from "../components/img/yllkaSalihu.pdf"
import abstract18 from "../components/img/Management of combined traumatic dislocated crystalline lens and traumatic mydriasis.pdf"
import abstract19 from "../components/img/Surgical outcomes of new peeling technique for macular pucker.pdf"

const abstracts = [
  {
    titles: ['- Congenital Trochlear nerve (IV) palsy and a few dilemmas in the treatment'],
    doctor: 'Orhan Kubati, Mirlinda Kubati-Ajeti, Shend Ajeti',
    pdfLinks: [abstract1]
  },
  {
    titles: ['- V Pattern horizontal strabismus, with inferior oblique muscle overaction'],
    doctor: 'Mirlinda Kubati Ajeti, Mentor Ilazi, Shend Ajeti',
    pdfLinks: [abstract2]
  },
  {
    titles: ['- Duane syndrome treatment'],
    doctor: 'Mentor Ilazi, Shend Ajeti',
    pdfLinks: [abstract3]
  },
  {
    titles: ['- Presentation of results after implantation of multifocal lenses for refractive and cataract surgery'],
    doctor: 'Burim Zhuri, Endrit Sheremeti, Shend Ajeti, Dardan Sheremeti',
    pdfLinks: [abstract4]
  },
  {
    titles: ['- Manaxhimi I integruar I pacientit me retinopati diabetike',
        "- Qasja klinike ne diagnozen e vaskulitit te retines"
    ],
    doctor: 'Ilir Arapi',
    pdfLinks: [abstract5, abstract6]
  },
  {
    titles: ['- Trabeculectomy as the gold standard in the surgical treatment of glaucoma',
        "- Cyclocryotherapy as emergency therapeutic response in to the patient with neovascular glaucoma caused by central vein occlusion- A case report"
    ],
    doctor: 'Irina Bogdanova, Emilija Gosevska Dashtevska, Muhammedin Rushiti',
    pdfLinks: [abstract7, abstract8]
  },
  {
    titles: ['- Exotropia sensore'],
    doctor: 'Alketa Tandili',
    pdfLinks: [abstract9]
  },
  {
    titles: ['- Suprachoroidal implantation of corticosteroid slow release implants for the treatment of cystoid macular edema'],
    doctor: 'Ben Asani',
    pdfLinks: [abstract10]
  },
  {
    titles: ['- Lentet fakike (ICL/IPCL) ne korrigjimin e difekteve te ndryshme te refraksionit (Eksperienca 10 vjecare ne Kliniken Gjermane te Syrit ne Tirane)'],
    doctor: 'Stela Ceca, MD, Minir Asani , MD',
    pdfLinks: [abstract11]
  },
  {
    titles: ['- Complex surgical treatment of Blepharophymosis syndrome (BPES)'],
    doctor: 'Brigita Drnovšek Olup',
    pdfLinks: [abstract12]
  },
  {
    titles: ['- Central Retinal Vein Occlusion (CRVO) accompanied by cilioretinal artery occlusion (CLRAO) in a young patient, following COVID-19 infection and Anti-COVID vaccination'],
    doctor: 'Dr. Endrit Sheremeti, Dr. Burim Zhuri, Dr. Egzona Kollqaku Agusholli, Dr. Mirlinda Kubati Ajeti, Dr. Dardan Sheremeti',
    pdfLinks: [abstract13]
  },
  {
    titles: ['- NON-ARTERITIC ANTERIOR ISCHEMIC OPTIC NEUROPATHY (NA-AION) AND PSEUDO-FOSTER KENNEDY SYNDROME - CASE REPORT'],
    doctor: 'Dr. Fahrudin Iljazi, University Clinical Center of Kosovo, Eye Clinic, Ophthalmology resident',
    pdfLinks: [abstract14]
  },
  {
    titles: ['- ANTI-VEGF TREATMENT MODALITIES - CURRENT AND FUTURE PERSPECTIVES'],
    doctor: 'Vesna Dimovska',
    pdfLinks: [abstract15]
  },
  {
    titles: ['- Subretinal injection of rTPA to treat submacular hemorrhage secondary to age-related macular degeneration  and a case series'],
    doctor: 'Vigan Roka',
    pdfLinks: [abstract16]
  },
  {
    titles: ['- Conjunctival Neoplasia', 'Crystalline Keratopathy'],
    doctor: 'Yllke Salihu',
    pdfLinks: [abstract17]
  },
  {
    titles: ['- Management of combined traumatic dislocated crystalline lens and traumatic mydriasis', 'Outcomes of new peeling technique for macular pucker'],
    doctor: 'Xhevat Lumi',
    pdfLinks: [abstract18, abstract19]
  },
];

const Abstract = () => {
  return (
    <div className='px-6 lg:px-16 py-8 bg-gray-50 text-gray-900 font-custom'>
      <h2 className='text-3xl font-extrabold mb-6 text-left'>
        View the Abstracts
      </h2>
      <p className='text-left text-lg mb-10'>
        Here are all the abstracts for the 4th KAO National Congress in conjunction with the TOA Balkan Meeting, 
        taking place on October 25–26, 2024.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {abstracts.map((abstract, index) => (
          <div 
            key={index} 
            className='bg-[#ff354c] rounded-lg shadow-md overflow-hidden flex flex-col h-full'
          >
            <div className='flex flex-col p-6 lg:p-8 xl:p-6 2xl:p-12 flex-grow'>
              {abstract.titles.map((title, titleIndex) => (
                <h3 key={titleIndex} className='text-xl lg:text-xl font-semibold mb-2 text-white'>
                  {title}
                </h3>
              ))}
              <p className='text-base text-[#044f7c] mb-4'>
                <span className='font-bold'>{abstract.doctor}</span>
              </p>
              {/* Extra space for flex-grow to push buttons down */}
              <div className='flex-grow'></div>
              <div className='grid grid-cols-2 gap-2'> {/* Grid for buttons */}
                {abstract.pdfLinks.map((pdfLink, pdfIndex) => (
                  <a 
                    key={pdfIndex}
                    href={pdfLink} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-block mb-2 px-8 py-3 w-full text-white text-sm font-medium rounded-md bg-[#044f7c] transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center'
                  >
                    View More
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abstract;
