import React from "react";
import PageBanner from "../components/PageBanner";
import MachinedImage from "../assets/Images/MachinedImage.jpg";
import MachinedBanner from "../assets/Images/Banner5.jpg";

function Machined() {
  return (
    <>
      {/* <PageBanner Heading="Machined Components" SubHeading="This is Sub-Heading " /> */}

      <div
        className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${MachinedBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-red bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Machined Components
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
            Delivering Reliable FRP & Insulation Solutions for India’s Core
            Industries.
          </p>
        </div>
      </div>

      <div className="md:h-[80vh">
        <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] ">
          <div className="p-7 md:p-2 order-2 md:order-1">
            <h1 className="text-left font-bold text-3xl md:text-center pt-5 font-Roboto">
              Machined Product
            </h1>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className="font-Roboto text-lg pt-7">
                At{" "}
                <span className="font-semibold">
                  Di Kay Insulation Industries Pvt. Ltd.
                </span>
                , we manufacture
                <span className="font-semibold"> high-quality</span> and
                <span className="font-semibold">
                  {" "}
                  durable machine components
                </span>{" "}
                for sectors such as
                <span className="font-semibold">
                  {" "}
                  Wind Energy, Heavy Industries, Power
                </span>
                , and more. With{" "}
                <span className="font-semibold"> decades of experience</span>,
                we are trusted for
                <span className="font-semibold">
                  {" "}
                  precision, reliability, and performance
                </span>
                . Our expertise ensures every product meets
                <span className="font-semibold">
                  {" "}
                  strict industry standards
                </span>
                . We are committed to delivering
                <span className="font-semibold">
                  {" "}
                  value-driven solutions
                </span>{" "}
                for our clients’ operations.
              </p>

              <p className="font-Roboto text-lg pt-4">
                Our product portfolio includes
                <span className="font-semibold">
                  {" "}
                  Slot Wedges, Cable Cleats, Spacer Washers, Support Brackets,
                  Busbar Supports, Terminal Boards
                </span>
                , and more. Each component is crafted with
                <span className="font-semibold"> advanced techniques</span> to
                ensure
                <span className="font-semibold"> safety and durability</span> in
                critical applications. We focus on
                <span className="font-semibold">
                  {" "}
                  innovation and technical excellence
                </span>{" "}
                in every product. This approach allows us to serve industries
                with
                <span className="font-semibold">
                  {" "}
                  efficient and long-lasting solutions
                </span>
                .
              </p>
            </div>
          </div>
          <div className=" order-1 md:order-2 w-[100%] flex justify-center items-center">
            <img
              className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                    transition-all duration-300 
                    hover: hover:scale-105  hover:rounded-2xl" '
              src={MachinedImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Machined;
