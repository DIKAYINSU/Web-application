import { useState } from 'react'
import { useEffect } from 'react';
import Lenis from 'lenis'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
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
import Home from './Pages/Home';
import About from './Pages/About';
import Applayout from './layout/Applayout';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Machined from './Pages/Machined';
import Molded from './Pages/Molded';
import Railways from './Pages/Railways';
import Defence from './Pages/Defence';
import Wind from './Pages/Wind';
import Hydro from './Pages/Hydro';
import Rings from './Pages/Rings';



function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/About",
          element: <About />
        },
         {
          path:"/Gallery",
          element:<Gallery/>
        },
          {
          path: "/Contact",  
          element: <Contact/>
        },
        {
          path: "/Machined",
          element: <Machined/>
        },
       
        {
          path: "/Molded",
          element: <Molded/>
        },
       {
          path: "/Railways",
          element: <Railways/>
        },
       {
          path: "/Defence",
          element: <Defence/>
        },
        {
          path: "/Wind",
          element: <Wind/>
        },
         {
          path: "/Hydro",
          element: <Hydro/>
        },
        {
          path:"/Rings",
          element:<Rings/>
        }
       
         
      ]
    },

  ])

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
      // console.log('Scrolling', e);
    });

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />

  // return (
  //   <>
  //     <Navbar />
  //     <div id="particle-section" className="h-screen w-full">
  //       <Particles />
  //     </div>
  //      <Hero />
  //     <HorizontalScroll />
  //     <AboutUs />
  //     <WhatWeDO />
  //     <Categories />
  //     <OurProducts />
  //     <Certification />
  //     <Footer />
  //     <Outlet />

  //   </>
  // )

}

export default App
