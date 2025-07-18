import React from 'react'

import Hero from '../components/Hero'
import HorizontalScroll from '../components/HorizontalScroll'
import AboutUs from '../components/AboutUs'
import WhatWeDO from '../components/WhatWeDO'
import Categories from '../components/Categories'
import OurProducts from '../components/OurProducts'
import Certification from '../components/Certification'
import Footer from '../components/Footer'
import Particles from '../components/Particles'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div id="particle-section" className="h-screen w-full">
        <Particles />
      </div>
      <Hero />
      <HorizontalScroll />
      <AboutUs />
      <WhatWeDO />
      <Categories />
      <OurProducts />
      <Certification />
      <Footer />
    </>
  )
}

export default Home