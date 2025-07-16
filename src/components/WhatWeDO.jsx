import React from 'react'

function WhatWeDO() {
  return (
    <>

      <section className="about-section background " id="whatwedo">
        <div className="about-container ">

          <div className="about-text fade-up ">
            {/* <h1 className="text-xl sm:text-xl md:text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight transition-all duration-500 ease-in-out hover:scale-105">
              Transform Your Business with Innovation
            </h1> */}
            <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">What We Do </span>

            <div className="text-base font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <p className="whatwedo-para">
                <br />
                We specialize in manufacturing advanced <strong>FRP composites</strong> and <strong>custom insulation
                  solutions</strong> designed for performance, durability, and precision across critical industrial sectors.
              </p>
            </div>


            <div className="text-base font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <h2 className='whatwedo-h2'>Core Capabilities</h2>
              <p>
                We specialize in FRP sheet manufacturing (GP03, EPGC, G-10, G-11) and offer CNC winding, molding, and
                pressing, supported by an in-house R&D lab for prototypes and custom components.
              </p>
            </div>



            <div className="text-base font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:text-black">
              <h2>Key Products</h2>
              <p >
                Slot Wedges, FRP Air Guides, and Terminal Boards
                Epoxy Cylinders, Rings, and Insulation Blocks
                FRP Tubes, Sheets, Core Clamps, and Barrier Boards
                Components for Large Motors & Wind Turbine Generators
              </p>
            </div>

          </div>



          <div className="about-image fade-up">
            <img src="./src/assets/Images/img1.jpeg" alt="About DiKay" />

          </div>

        </div>
      </section>

    </>
  )
}

export default WhatWeDO