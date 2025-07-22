import React from 'react'
import Particles from '../components/Particles'
import Hero from '../components/Hero'
import HorizontalScroll from '../components/HorizontalScroll'
import WhatWeDO from '../components/WhatWeDO'
import AboutUs from '../components/AboutUs'
import Categories from '../components/Categories'
import Certification from '../components/Certification'
import OurProducts from '../components/OurProducts'

function Home() {
  return (
   <>
       <div id="particle-section" className="h-screen w-full">
        <Particles />
      </div>
      <Hero/>
      <HorizontalScroll/>
      <AboutUs/>
      <WhatWeDO/>
      <Categories/>
      <OurProducts/>
      <Certification/>


   </>
  )
}

export default Home