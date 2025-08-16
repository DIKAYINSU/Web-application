import React from 'react'
import PageBanner from '../components/PageBanner'
import MyContact from '../components/MyContact'
import LightBox from '../components/LightBox'
import GalleryBanner from '../assets/Images/Banner_6.jpg'

function Gallery() {
  return (
     <>
     {/* <PageBanner Heading="Gallery Page" SubHeading="This is Sub-Heading For Gallery page"/> */}
      <div
                     className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
                     style={{
                         backgroundImage: `url(${GalleryBanner})`
                     }}
     
                 >
                     <div className="absolute inset-0 bg-red bg-opacity-50"></div>
     
                     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs">
                           Gallery
                         </h1>
                         <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl text-shadow-2xs">
                        A glimpse into our FRP innovation and craftsmanship.
                         </p>
     
                     </div>
                 </div>
     {/* <h1>heloo</h1> */}
     <LightBox/>
     </>
  )
}

export default Gallery