import React from 'react';
import member1 from "../img/nasersalihu.jpg"
import member2 from "../img/burimZhuri.jpg"
import member3 from "../img/mentorgorani.jpg"
import member4 from "../img/belinda.jpg"
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    name: "Naser Salihu",
    role: "President of Kosovo Association of Ophthalmologists",
    imgSrc: member1,
    altText: "Naser Salihu"
  },
  {
    name: "Burim Zhuri",
    role: "Vice President of Kosovo Association of Ophthalmologists",
    imgSrc: member2,
    altText: "Burim Zhuri"
  },
  {
    name: "Mentor Gorani",
    role: "Secretar of Kosovo Association of Ophthalmologists",
    imgSrc: member3,
    altText: "Mentor Gorani"
  },
  {
    name: "Belinda Pustina",
    role: "Cashier of Kosovo Association of Ophthalmologists",
    imgSrc: member4,
    altText: "Belinda Pustina"
  },
];

const Team = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-[#044f7c] py-16 lg:px-12 2xl:px-10 font-custom">
      <div className="mx-auto px-4 font-custom">
        <div className="mb-16">
          <h2 className="mb-4 text-2xl text-white font-bold uppercase font-custom">
            {t('OurTeam')}
          </h2>
         
        </div>
        <div className="grid gap-12 items-center grid-cols-2 lg:grid-cols-4">
          {teamMembers?.map((member, index) => (
            <div key={index} className="space-y-4">
              <img
                className="w-64 h-48 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-[300px] lg:h-[300px] 2xl:w-[400px] 2xl:h-[470px]"
                src={member.imgSrc}
                alt={member.altText}
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-lg text-white font-bold">{member.name}</h4>
                <span className="block text-sm text-gray-300">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
