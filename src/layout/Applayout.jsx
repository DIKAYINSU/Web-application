import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Scrolltotop from '../components/Scrolltotop'


function Applayout() {
  return (
     <>
     <Scrolltotop/>
     <Navbar/>
      <ScrollToTopButton/>
     <Outlet/>
     <Footer/>
     </>
  )
}

export default Applayout