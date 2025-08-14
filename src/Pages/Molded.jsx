import React from 'react'
import PageBanner from '../components/PageBanner'
import MoldedImage from '../assets/Images/img1.jpeg'

function Molded() {
  return (
    <>
  <PageBanner Heading="Molded Components" SubHeading="this is Sub heading"/>
  <div className='md:h-[80vh'>
      
                      <div className='grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] '>
      
                          <div className='p-7 md:p-2 order-2 md:order-1'>
                              <h1 className='text-left font-bold text-3xl md:text-center pt-5 font-Roboto'>Molded Product</h1>
      
                              <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                                  <p className='font-Roboto text-lg pt-7'>
                                      With Many Decades of experience, we
                                      specialize in precision-engineered components used in electrical
                                      Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
                                      perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
                                      sectors.
                                  </p>
                              </div>
                              <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                                  <p className='font-Roboto text-lg pt-7'>
                                      With Many Decades of experience, we
                                      specialize in precision-engineered components used in electrical
                                      Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
                                      perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
                                      sectors.
                                  </p>
                              </div>
      
      
      
                          </div>
                          <div className=' order-1 md:order-2 w-[100%] flex justify-center items-center'>
                              <img className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                      transition-all duration-300 
                      hover: hover:scale-105  hover:rounded-2xl" ' src={MoldedImage} alt="" />
      
                          </div>
      
                      </div>
                  </div>
    </>
  )
}

export default Molded