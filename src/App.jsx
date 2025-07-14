import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HorizontalScroll from './components/HorizontalScroll'
import AboutUs from './components/AboutUs'
import WhatWeDO from './components/WhatWeDO'
import Categories from './components/Categories'
import CardSwiper from './components/CardSwiper'
import OurProducts from './components/OurProducts'
import Certification from './components/Certification'
import Footer from './components/Footer'
import Particles from './components/Particles'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      <Particles/>
      <Hero />
      <HorizontalScroll />
      <WhatWeDO />
      <Categories />
      {/* <CardSwiper /> */}
      <OurProducts />
      <WhatWeDO />
      <Certification />
      <Footer/>
    

    </>
  )
}

export default App
