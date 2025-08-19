import React from 'react'
import Particles from '../components/Particles'
import Hero from '../components/Hero'
import HorizontalScroll from '../components/HorizontalScroll'
import WhatWeDO from '../components/WhatWeDO'
import AboutUs from '../components/AboutUs'
import Categories from '../components/Categories'
import Certification from '../components/Certification'
import OurProducts from '../components/OurProducts'
import ClientSlider from '../components/ClientSlider'
import MyCertificate from '../components/Mycertificate'
import MyCarousel from '../components/MyCarousel'
import Hori from '../components/Hori'
import Hori2 from '../components/Hori2'





function Home() {
  return (
    <>

      <div id="particle-section" className="h-screen w-full">
        <Particles />
      </div>
      {/* <Hero/> */}
      <MyCarousel />
      {/* <HorizontalScroll /> */}
      {/* <Hori/> */}
      <Hori2/>
      {/* <Hori2/> */}
      {/* <Hori3/> */}
      <AboutUs />
      <WhatWeDO />
      <OurProducts />
      <Categories />
      <ClientSlider />
      <MyCertificate />



    </>
  )
}

export default Home