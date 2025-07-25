import React from 'react'
import PageBanner from '../components/PageBanner'
import EnquireForm from '../components/EnquireForm'
import ClientSlider from '../components/ClientSlider'
import Gallery from './Gallery'
import LightBox from '../components/LightBox'

function Contact() {
    return (

        <>
             <PageBanner Heading="Contact US" SubHeading="This is Sub Heading for contact page"/>
              <EnquireForm/>
              <LightBox/>
             
          </>
    )
}

export default Contact