import React from 'react'
import AboutBanner from '../assets/Images/AboutBanner.jpg'
import WhatWeDO from '../components/WhatWeDO'
import '../Styles/custom.css'
import Founder from '../components/Founder'

function About() {
  return (
  <>
   {/* <div className='bg-blue-100 relative h-[80vh]  pt-20 pl-1 pr-1 md:bg-amber-200 md:h-[100vh] md:pl-10 md:pr-10 pb-0 md:relative '>

    <img className='rounded-3xl absolute object-contain ' src={AboutBanner} alt="" />

   </div> */}
{/* 
   <div className='container-banner'>

    <img className='banner-image' src={AboutBanner} alt="" />

   </div> */}

<div
  className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1470&q=80')"
    }}
  //  style={{
  //   backgroundImage: `url(${AboutBanner})`
  // }}
>
  <div className="absolute inset-0 bg-red bg-opacity-50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      Welcome to Our Website
    </h1>
    <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
      Your trusted partner in innovation and excellence.
    </p>
    <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition">
      Get Started
    </button>
  </div>
</div>

   <WhatWeDO/>
   <Founder/>
  </>
  )
}

export default About