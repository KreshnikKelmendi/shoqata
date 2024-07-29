import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PricingBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="py-4 bg-gray-50 font-custom">
      <div className="mx-auto px-0 lg:px-10">
        <div className="relative">
          <div className="bg-[#ff354c] py-4 rounded-lg shadow-xl overflow-hidden">
            <div className="p-4 text-white">
              <h2 className="text-2xl font-bold text-white mb-4">{t('registrationPricing')}</h2>
              <div className="border-b border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-[#044f7c] font-bold text-left">{t('registrationType')}</th>
                      <th className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-[#044f7c] font-bold text-center">{t('memberPrice')}</th>
                      <th className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-[#044f7c] font-bold text-center">{t('nonmemberPrice')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200">
                        {t('earlyRegistration')}
                        <p className="text-gray-300 font-bold text-[11px] mt-2">{t('kaoMember')}</p>
                      </td>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-center">50 EUR</td>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-center">80 EUR</td>
                    </tr>
                    <tr>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200">
                        {t('lateRegistration')}
                        <p className="text-gray-300 font-bold text-[11px] mt-2">{t('notKaoMember')}</p>
                      </td>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-center">80 EUR</td>
                      <td className="lg:py-4 text-sm lg:text-base px-4 border-b border-gray-200 text-center">120 EUR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4">
                <p className="text-gray-300 font-bold text-sm lg:w-1/2 lg:mb-0">
                  <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-600 mr-2" />
                  After filling out the registration form, you will be informed in detail via email about the payment method and everything else.
                </p>
                <Link
                    to="/register"  onClick={() =>window.scrollTo({top: 0, left: 0, })} 
                    className=" py-3 my-1 mt-4 lg:mt-0 text-base text-center font-bold transition bg-white text-[#044f7c] rounded-md hover:bg-shadow-1 text-primary lg:px-7 hover:bg-[#ff354c] font-custom"
                  >
                    <p>Register Now</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
