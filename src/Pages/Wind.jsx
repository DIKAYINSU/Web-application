import React from 'react'
import PageBanner from '../components/PageBanner'
import FounderImage from '../assets/Images/img1.jpeg'
import AboutBanner from '../Assets/Images/windBanner.jpg'

function Wind() {
  return (
    <>
    {/* <PageBanner Heading="Wind Energy" SubHeading="This is Sub-Heading " /> */}
    {/* banner start */}
    <div
          className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${AboutBanner})`
            }}
         
        >
          <div className="absolute inset-0 bg-red bg-opacity-50"></div>
        
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
           Wind Energy
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
        Engineered FRP components for wind energy.
            </p>
            
          </div>
        </div>
        
    {/* banner end  */}
   

            <div className='md:h-[80vh'>

                <div className='grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] '>

                    <div className='p-7 md:p-2 order-2 md:order-1'>
                        <h1 className='text-left font-bold text-3xl md:text-center pt-5 font-Roboto'>Wind Energy</h1>

                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7'>
                                We specialize in manufacturing a comprehensive range of <span className='font-semibold'>Precision-Engineered FRP</span> and <span className='font-semibold'>Insulation</span> Components for the Wind Energy Sector, designed for <span>Exceptional Strength, Dimensional Accuracy,</span> and <span>Long Service Life.</span> Our Product Portfolio includes <span className='font-semibold'>Slot Wedges, Epoxy Strips, Top Packers, Base Strips, Layer Separators, Insulation Washers, Spacer Bandages, Fixing Clamps, Insulation Rings, Baffle Plates, Air Duct Plates, Cable Duct Shafts, Cotter Stator Segments, Insulated Washers,</span> and other <span>Custom-Engineered Solutions.</span>
                            </p>
                        </div>
                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7 mb-5'>
                               Every component is produced using <span>Advanced Manufacturing Techniques</span> and <span>Stringent Quality Controls</span> to meet the <span>Demanding Conditions</span> of <span>Modern Wind Turbines.</span> This <span>ensures Optimum Turbine Performance, Reduced Maintenance Downtime</span>, and <span>Dependable Support</span> for <span>Sustainable, Renewable Energy Generation.</span></p>
                        </div>



                    </div>
                    <div className=' order-1 md:order-2 w-[100%] flex justify-center items-center'>
                        <img className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                    transition-all duration-300 
                    hover: hover:scale-105  hover:rounded-2xl" ' src={FounderImage} alt="" />

                    </div>

                </div>
            </div>
    </>

  )
}

export default Wind