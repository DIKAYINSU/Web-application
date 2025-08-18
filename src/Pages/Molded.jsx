import React from "react";
import PageBanner from "../components/PageBanner";
import MoldedImage from "../assets/Images/Molding_image.jpg";
import MoldedBanner from "../assets/Images/Banner_7.jpg";

function Molded() {
  return (
    <>
      {/* <PageBanner Heading="Molded Components" SubHeading="this is Sub heading"/> */}

      {/* banner start */}
      <div
        className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${MoldedBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-red bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Molded Components
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
            Delivering Reliable FRP & Insulation Solutions for India’s Core
            Industries.
          </p>
        </div>
      </div>
      {/* banner end */}
      <div className="md:h-[80vh">
        <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] ">
          <div className="p-7 md:p-2 order-2 md:order-1">
            <h1 className="text-left font-bold text-3xl md:text-center pt-5 font-Roboto">
              Molded Components
            </h1>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className="font-Roboto text-lg pt-7">
                At <span className="font-semibold">
                  Di Kay Insulation Industries Pvt. Ltd.
                </span>
                , we design and manufacture
                <span className="font-semibold">
                  {" "}
                  high-quality Molding Components
                </span>{" "}
                that play a vital role in
                <span className="font-semibold">
                  {" "}
                  power, heavy industrial, and energy applications
                </span>
                . Our{" "}
                <span className="font-semibold">
                  {" "}
                  decades of experience
                </span>{" "}
                allow us to combine
                <span className="font-semibold">
                  {" "}
                  technical expertise with innovation
                </span>
                , ensuring every component delivers{" "}
                <span className="font-semibold">
                  {" "}
                  strength, accuracy, and long-term reliability
                </span>
                .
              </p>
            </div>
            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">

              <p className="font-Roboto text-lg pt-4">
                The range includes
                <span className="font-semibold">
                  {" "}
                  Air Guide Assemblies, Air Baffle Guide Deflectors, Suction
                  Nozzles, Air Ducts, Air Inlets, and Oil Vapour Seals (Top &
                  Bottom)
                </span>
                . Each product is manufactured with
                <span className="font-semibold">
                  {" "}
                  advanced molding processes
                </span>{" "}
                to achieve
                <span className="font-semibold">
                  {" "}
                  durability, performance, and consistent quality
                </span>
                . By focusing on{" "}
                <span className="font-semibold">
                  {" "}
                  reliability and innovation
                </span>
                , we deliver
                <span className="font-semibold"> efficient solutions</span> that
                support the success of our clients across industries.
              </p>
            </div>
          </div>
          <div className=" order-1 md:order-2 w-[100%] flex justify-center items-center">
            <img
              className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                      transition-all duration-300 
                      hover: hover:scale-105  hover:rounded-2xl" '
              src={MoldedImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Molded;
