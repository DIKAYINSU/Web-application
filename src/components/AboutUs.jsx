import React from 'react'

function AboutUs() {
  return (
    <>
     <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-image fade-up">
        <img src=".\src\assets\Images\img1.jpeg" alt="About DiKay"/>

      </div>
      <div className="about-text fade-up">
        <span className="text-4xl font-Roboto font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Us</span>

        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
        <h2 className='font-Roboto text-xl pt-6 font-bold'>Shaping Tomorrow’s Industries with Advanced FRP Solutions</h2>
        <p className='font-Roboto text-lg pt-3'><span className="a-bold">Di Kay Insulation Industries Pvt. Ltd.</span> is a trusted manufacturer of <span
            className="">FRP composites and insulation solutions,</span>
          certified with ISO 9001:2015 and Indian Railways HL3 standards </p></div>
          
          <div className='tab'/>

           <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
          <p className='font-Roboto text-lg'>
             With Many Decades of experience, we
          specialize in precision-engineered components used in electrical
          Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
          perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
          sectors.
          </p>
         </div>

   <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
        <h4 className='font-Roboto text-xl font-bold pt-3'>Key Values and Vision</h4>
        <ul className="features">
          <li className="custom-list-item">
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-Roboto font-bold">Quality</span>
          </li>

          <li className="custom-list-item">
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-Roboto font-bold">Innovation</span>
          </li>

          <li className="custom-list-item">
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-Roboto font-bold">Precision</span>
          </li>
          <br />

          <li className="custom-list-item">
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-Roboto font-bold">Durability</span>
          </li>

          <li className="custom-list-item">
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-Roboto font-bold">Customization</span>
          </li>

        </ul>
        </div>

        <a href="./About.html"
          className="know-more relative inline-flex items-center justify-center mt-6 h-9 w-32 overflow-hidden border rounded-4xl border-[#25a5f0] text-[#25a5f0] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#25a5f0] before:duration-300 before:ease-out hover:text-white hover:shadow-[#25a5f0] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
          <span className="relative z-10">Know More</span>
        </a>



      </div>


    </div>
  </section>
    </>
  )
}

export default AboutUs