import React from 'react';
import certificate1 from '../assets/Images/certificateOne.jpg'
import certificate2 from '../assets/Images/Certificate1.jpg'
import ISO from '../assets/Images/iso.jpg'
import HL3 from '../assets/Images/HL3.jpg'
import FMPCCI from '../assets/Images/FMPCCI.jpg'
import Health_Sefety from '../assets/Images/Health_Sefety.jpg'
import LaghuUdyog from '../assets/Images/LaghuUdyog.jpg'

function MyCertificate() {
  return (
    <>
      <div className="w-full h-full bg-gray-100 dark:bg-[#1b1b1b] py-16">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          {/* Title */}
          <div className="text-center pb-12">
            <span className="text-3xl text-center font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Certification We Have
            </span>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {/* Card 1 */}
            <div className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                className="w-full h-auto max-h-[30rem] object-cover"
                src={ISO}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                  ISO:9001:2015 Certification
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Certified for International Quality Standards </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                className="w-full h-auto max-h-[30rem] object-cover"

                src={certificate1}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                  Certificate of Import Sustitute
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Certified for IMPORT SUBSTITUTE</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                className="w-full h-auto max-h-[30rem] object-cover"
                src={HL3}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                  HL3 Standard Certified –
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4"> Railway Fire-Protection Assurance</p>
              </div>
            </div>
            {/* Card 4 */}

            <div className="group w-[22rem] sm:w-[26rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                // className="w-full h-auto@ max-h-[18rem] object-cover"
                className="max-h-full max-w-full object-contain"
                src={FMPCCI}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                  FMCCI Award for Innovation
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4"> Recipient of FMCCI Award by the Hon’ble Chief Minister of Madhya Pradesh</p>
              </div>
            </div>
            {/* Card 5 */}

            <div className="group w-[22rem] sm:w-[26rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                // className="w-full h-auto@ max-h-[18rem] object-cover"
                className="max-h-full max-w-full object-contain"
                src={Health_Sefety}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                 FMCCI Award for Health & Safety
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4"> Recipient of FMCCI Award by the Hon’ble Chief Minister of Madhya Pradesh</p>
              </div>
            </div>


             <div className="group w-[22rem] sm:w-[26rem] bg-white dark:bg-[#262525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                // className="w-full h-auto@ max-h-[18rem] object-cover"
                className="max-h-full max-w-full object-contain"
                src={LaghuUdyog}
                alt="Certificate 1"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">
                 FMCCI Award for Health & Safety
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4"> Recipient of FMCCI Award by the Hon’ble Chief Minister of Madhya Pradesh</p>
              </div>
            </div>



          </div>

        </div>
      </div>
    </>
  );
}

export default MyCertificate;
