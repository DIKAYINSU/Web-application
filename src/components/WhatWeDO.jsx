import React from 'react'
import WhatwedoImaage from '../assets/Images/whatwedo.webp'

function WhatWeDO() {
  return (
    <>

      <section className="about-texture" id="whatwedo">



        <div className="about-container">

          <div className="about-text fade-up ">
            {/* <h1 className="text-xl sm:text-xl md:text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight transition-all duration-500 ease-in-out hover:scale-105">
              Transform Your Business with Innovation
            </h1> */}
            <span className="text-3xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
              What We Do
            </span>

            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <p className="font-Roboto pt-6 text-lg">

                We specialize in manufacturing advanced <strong>FRP composites</strong> and <strong>Custom Insulation
                  Solutions</strong> Designed for performance, durability, and precision across critical industrial sectors.
              </p>
            </div>


            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <h2 className='text-xl pt-3 pb-3 font-bold'>Core Capabilities</h2>
              <p className='font-Roboto text-lg'>
                We manufacture premium FRP Sheets (GP03, EPGC, G-10, G-11) and offer precision solutions in <span className='font-semibold'>CNC Winding, Molding, Machining,</span> and <span className='font-semibold'>Pressing.</span> With our <span className='font-semibold'>in-house R&D Lab,</span> we develop prototypes and custom components tailored to client needs.
              </p>
            </div>



            <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <h2 className='font-Roboto text-xl font-bold pt-3'>Key Products</h2>
              <p className='font-Roboto text-lg pt-3'>
                Our Wide Range Of FRP And Epoxy Components Includes <span className='font-semibold'>Slot Wedges, Air Guides, Terminal Boards, Epoxy Cylinders, Rings, Insulation Blocks, FRP Tubes, Sheets, Core Clamps,</span> And <span className='font-semibold'>Barrier Boards</span>, Along With Precision Parts For <span className='font-semibold'>Large Motors And Wind Turbine Generators.</span>
              </p>
            </div>

          </div>



          <div className="about-image fade-up">
            <img src={WhatwedoImaage} alt="About DiKay" />

          </div>

        </div>

      </section>

    </>
  )
}

export default WhatWeDO