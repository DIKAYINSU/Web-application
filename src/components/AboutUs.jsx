import React from 'react'

function AboutUs() {
  return (
    <>
     <section class="about-section" id="about">
    <div class="about-container">
      <div class="about-image fade-up">
        <img src=".\src\assets\Images\img1.jpeg" alt="About DiKay"/>

      </div>
      <div class="about-text fade-up">
        {/* <!-- <span class="headingfont">About us</span> --> */}
        
        <p class="headingfont">About Us</p>
        <h2>Shaping Tomorrow’s Industries with Advanced FRP Solutions</h2>
        <p><span class="a-bold">Di Kay Insulation Industries Pvt. Ltd.</span> is a trusted manufacturer of <span
            class="">FRP composites and insulation solutions,</span>
          certified with ISO 9001:2015 and Indian Railways HL3 standards.<br />With Many Decades of experience, we
          specialize in precision-engineered components used in electrical
          Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
          perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
          sectors.</p>

        <h4>Key Values and Vision</h4>
        <ul class="features">
          <li class="custom-list-item">
            <span class="icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="text">Qulality</span>
          </li>

          <li class="custom-list-item">
            <span class="icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="text">Innovation</span>
          </li>

          <li class="custom-list-item">
            <span class="icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="text">Precision</span>
          </li>
          <br />

          <li class="custom-list-item">
            <span class="icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="text">Durability</span>
          </li>

          <li class="custom-list-item">
            <span class="icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="text">Customization</span>
          </li>

        </ul>

        <a href="./About.html"
          class="relative inline-flex items-center justify-center mt-6 h-9 w-32 overflow-hidden border rounded-4xl border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
          <span class="relative z-10">Know More</span>
        </a>



      </div>


    </div>
  </section>
    </>
  )
}

export default AboutUs