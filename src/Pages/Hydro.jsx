import React from "react";
import PageBanner from "../components/PageBanner";
import HydroImage from "../assets/Images/img1.jpeg";

function Hydro() {
  return (
    <>
      <PageBanner Heading="Hydro Generator" SubHeading="This is Sub-Heading " />

      <div className="md:h-[80vh">
        <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] ">
          <div className="p-7 md:p-2 order-2 md:order-1">
            <h1 className="text-left font-bold text-3xl md:text-center pt-5 font-Roboto">
             Hydro Power Components
            </h1>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className="font-Roboto text-lg pt-7">
                We specialize in manufacturing{" "}
                <span className="font-semibold">
                  high-performance components for the Hydro Power sector
                </span>
                . Our expertise lies in delivering{" "}
                <span className="font-semibold">
                  large precision-engineered parts
                </span>
                that meet the stringent standards of{" "}
                <span className="font-semibold">
                  Voith Hydro and other global leaders
                </span>
                . With{" "}
                <span className="font-semibold">
                  decades of proven experience
                </span>
                , we ensure strength, reliability, and consistent performance in
                every solution we provide.
              </p>
            </div>
            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className="font-Roboto text-lg pt-4">
                Our Hydro Power product line includes
                <span className="font-semibold"> Air Guide Assemblies</span>{" "}
                <span className="font-semibold">
                  (80mm thickness and 2500 MM OD)
                </span> 
                , along with{" "}
                <span className="font-semibold">Sleeves, Flanges ,Support Rings</span>, and
                other critical components. Each product is developed using{" "}
                <span className="font-semibold">advanced techniques </span>
                under{" "}
                <span className="font-semibold">strict quality control</span>,
                ensuring durability and flawless performance. We are committed
                to providing{" "}
                <span className="font-semibold">
                  efficient, long-lasting solutions
                </span>
                for{" "}
                <span className="font-semibold">
                  large-scale hydro power projects
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
              src={HydroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hydro;
