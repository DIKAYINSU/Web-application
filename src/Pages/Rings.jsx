import React from 'react'
import RingsImage from '../assets/Images/FRP_Rings.jpg'
import RingsBanner from '../assets/Images/Banner_7.jpg'
import RingsImage2 from "../assets/PGallery/product-2.jpg";

function Rings() {
  return (
    <>
      <div
        className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${RingsBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-red bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            FRP Rings
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
            Your Trusted Partner for Custom and Standard FRP Ring Manufacturing
          </p>
        </div>
      </div>
      {/* banner end */}
      <div className="md:h-[80vh">
        <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] ">
          <div className="p-7 md:p-2 order-2 md:order-1">
            <h1 className="text-left font-bold text-3xl md:text-center pt-5 font-Roboto">
              FRP Rings & Cylinders
            </h1>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className='font-Roboto text-lg pt-7'>
                We manufacture high-quality <span className='font-semibold'>FRP Rings</span>
                that are widely used in <span className='font-semibold'>Hydro Projects</span>
                and <span className='font-semibold'>Traction Motors</span>.
                These rings are engineered to provide <span className='font-semibold'>durability, strength, and reliability</span>
                in critical industrial applications. Our expertise allows us to deliver products
                that perform consistently even under demanding conditions.
              </p>
            </div>
            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className='font-Roboto text-lg pt-4'>
                With advanced manufacturing capabilities, we produce
                <span className='font-semibold'> FRP Rings up to 2500MM OD</span>.
                Each ring is designed to ensure <span className='font-semibold'>long service life</span>
                and <span className='font-semibold'>resistance to wear and tear</span>.
                Trusted for their <span className='font-semibold'>precision and durability</span>,
                our FRP Rings are a reliable choice for industries seeking
                <span className='font-semibold'>efficient and long-lasting solutions</span>.
              </p>
            </div>
          </div>
          <div className=" order-1 md:order-2 w-[100%] flex justify-center items-center">
            <img
              className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                          transition-all duration-300 
                          hover: hover:scale-105  hover:rounded-2xl" '
              src={RingsImage}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="md:h-[80vh">
        <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] ">
          <div className=" order-1 md:order-2 w-[100%] flex justify-center items-center">
            <img
              className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                          transition-all duration-300 
                          hover: hover:scale-105  hover:rounded-2xl" '
              src={RingsImage2}
              alt=""
            />
          </div>
          <div className=" p-7 md:p-2 order-2 md:order-2">
            <h1 className="text-left font-bold text-3xl md:text-center pt-5 font-Roboto">
              FRP Tubes & Cylinders
            </h1>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className='font-Roboto text-lg pt-7'>
                We also manufacture high-quality <span className='font-semibold'>FRP Tubes</span>
                with an outer diameter of <span className='font-semibold'>900MM</span> and length up to
                <span className='font-semibold'>6000MM</span>. These tubes are specifically designed
                for applications in <span className='font-semibold'>Transformers</span>,
                <span className='font-semibold'>Dry Type Transformers</span>,
                and <span className='font-semibold'>Hydro Projects</span>.
                Our advanced process ensures tubes with exceptional
                <span className='font-semibold'>strength, durability, and reliability</span>.
              </p>
            </div>
            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
              <p className='font-Roboto text-lg pt-4'>
                The <span className='font-semibold'>FRP Tubes</span> we produce deliver excellent
                <span className='font-semibold'>electrical insulation properties</span>
                along with <span className='font-semibold'>resistance to mechanical stress</span>.
                Their robust design makes them ideal for
                <span className='font-semibold'>critical power and hydro applications</span>,
                ensuring long service life and consistent performance in challenging environments.
              </p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Rings
