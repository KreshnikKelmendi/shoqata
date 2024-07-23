import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import eye from "../img/eye-care2.jpg";

const Mission = () => {
  return (
    <section className="bg-[#ff354c] py-16 px-4 lg:px-16 font-custom">
      <h2 className="text-3xl font-semibold text-white mb-8">Our Mission & Vision</h2>

      <div className="">
        <div className="lg:w-full mb-10 lg:mb-0">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission */}
            <MissionVisionBlock
              icon={faUserMd}
              iconColor="blue-500"
              title="Patient First"
              description="We prioritize patient care and well-being, ensuring compassionate treatment."
            />
            {/* Vision */}
            <MissionVisionBlock
              icon={faHandshake}
              iconColor="green-500"
              title="Respect"
              description="We uphold respect in all interactions, fostering trust and integrity."
            />
            {/* Innovation */}
            <MissionVisionBlock
              icon={faLightbulb}
              iconColor="yellow-500"
              title="Innovation"
              description="We innovate continuously to enhance healthcare delivery and outcomes."
            />
            {/* Ophthalmology Mission */}
            <MissionVisionBlock
              icon={faUserMd}
              iconColor="blue-500"
              title="Ophthalmologist Care"
              description="We specialize in comprehensive eye care, from diagnostics to treatment."
            />
            {/* Ophthalmology Vision */}
            <MissionVisionBlock
              icon={faHandshake}
              iconColor="green-500"
              title="Precision and Expertise"
              description="We provide precise and expert care, ensuring optimal eye health."
            />
            {/* Ophthalmology Innovation */}
            <MissionVisionBlock
              icon={faLightbulb}
              iconColor="yellow-500"
              title="Advanced Technologies"
              description="We integrate advanced technologies to improve vision outcomes and patient satisfaction."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionBlock = ({ icon, iconColor, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mr-4">
      <FontAwesomeIcon icon={icon} className={`text-${iconColor} text-4xl`} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default Mission;
