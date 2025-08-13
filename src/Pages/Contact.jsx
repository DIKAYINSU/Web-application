import React from 'react'
import PageBanner from '../components/PageBanner'
import EnquireForm from '../components/EnquireForm'
// import ContactBanner from '../assets/Images/Banner3.jpg'


function Contact() {
    return (

        <>
            {/* <PageBanner Heading="Contact US" SubHeading="This is Sub Heading for contact page"/> */}

            <div
                className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
                style={{
                    // backgroundImage: `url(${ContactBanner})`
                }}

            >
                <div className="absolute inset-0 bg-red bg-opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                       Contact Us
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
                       Get in touch for custom FRP solutions
                    </p>

                </div>
            </div>
            <EnquireForm />


        </>
    )
}

export default Contact