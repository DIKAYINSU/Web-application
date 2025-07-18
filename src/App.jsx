import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis'
import { Outlet } from 'react-router-dom'
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
import { Path } from 'ogl';
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'




function App() {
  // const [count, setCount] = useState(0)

  // React Router Dom Code Start Here
   
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>

    },
    { 
     path:"/About",
     element:<About/>
    },
    {
     path:"/Contact",
     element:<Contact/>
    },
    
  ]);
  // React Router Dom Code End  Here

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.5, // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Secord Smooth Scrolling

    // const lenis = new Lenis({
    //   duration: 1.5, // Smooth but not too slow
    //   easing: t => 1 - Math.pow(1 - t, 3), // Better than default for smooth scroll
    //   direction: 'vertical',
    //   gestureDirection: 'vertical',
    //   smooth: true,
    //   smoothTouch: true,  // Enable smoothing on mobile/touch devices too
    //   touchMultiplier: 1.5, // Make touch scroll slower and smoother
    //   infinite: false
    // });


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    lenis.on('scroll', (e) => {
      console.log('Scrolling', e);
    });

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      
      <RouterProvider router={router}/>
      
{/* 
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
      <Outlet /> */}

    </>
  )
}

export default App
