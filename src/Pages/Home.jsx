import React from 'react'
import Particles from '../components/Particles'
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
import TextType from '../components/TextType'
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from '../components/TypeWriterEffect'





function Home() {
  return (
    <>

      <div id="particle-section" className="h-screen w-full">
        <Particles />
      </div>
      {/* <Hero/> */}
       {/* <TypeWriterEffect/> */}

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
      {/* <TextType text="hello"/> */}



    </>
  )
}

export default Home