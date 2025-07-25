import React from 'react'
import PageBanner from '../components/PageBanner'
import MyContact from '../components/MyContact'

function Gallery() {
  return (
     <>
     <PageBanner Heading="Gallery Page" SubHeading="This is Sub-Heading For Gallery page"/>
     {/* <h1>heloo</h1> */}
     <MyContact/>
     </>
  )
}

export default Gallery