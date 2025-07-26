import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '../components/ScrollToTopButton'


function Applayout() {
  return (
     <>
     <Navbar/>
      <ScrollToTopButton/>
     <Outlet/>
     <Footer/>
     </>
  )
}

export default Applayout