import React from "react";
import { Link } from "react-router-dom";

const DataBanner = () => {
  return (
    <>
      <section className="py-10 bg-gray-50">
        <div className="lg:px-10 mx-auto">
          <div className="relative z-10 overflow-hidden rounded-md bg-[#044f7c] shadow-md shadow-[#044e7c3f] py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block mb-4 text-base font-medium text-white font-custom">
                    4th National Congress and 2nd Balkan Congress
                </span>
                <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:mb-8 lg:mb-0">
                  <span className="xs:block font-custom">October 25th and 26th, 2024</span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <Link
                    to="/register"  onClick={() =>window.scrollTo({top: 0, left: 0, })} 
                    className="inline-flex py-3 my-1 mr-4 text-base font-bold transition bg-white text-[#044f7c] rounded-md hover:bg-shadow-1 text-primary px-7 hover:bg-[#ff354c] font-custom"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="black" stop-opacity="0.07" />
                      <stop offset="1" stop-color="black" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataBanner;
