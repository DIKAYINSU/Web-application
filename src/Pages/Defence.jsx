import React from 'react'
import PageBanner from '../components/PageBanner'
import FounderImage from '../assets/Images/img1.jpeg'
import DefenceBanner from '../assets/Images/newDefence.jpg'
import DefenceImage from '../assets/Images/DefenceImage.jpg'
import Gun_Barrel from '../assets/Images/Gun_Barrel.jpeg'

function Defence() {
    return (
        <>
            {/* <PageBanner Heading="Defence Product" SubHeading="This is Sub-Heading for Defence Product" /> */}

            <div
                className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${DefenceBanner})`
                }}

            >
                <div className="absolute inset-0 bg-red bg-opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Defence
                    </h1>
                    <p className="text-black text-base font-medium sm:text-lg md:text-2xl max-w-2xl">
                       Advanced FRP solutions for Defence Applications
                    </p>

                </div>
            </div>

            {/* banner end  */}
            {/* New Section Start */}
            <div className='md:h-[80vh'>

                <div className='grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] '>

                    <div className='p-7 md:p-2 order-2 md:order-1'>
                        <h1 className='text-left font-bold text-3xl md:text-center pt-5 font-Roboto'>Defence Product</h1>

                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7'>
                                We are <span className='font-semibold'>pioneers and an established source for import substitutes</span>
                                of critical <span className='font-semibold'>non-metallic items used in Defence equipment</span>.
                                Our specialized supply includes the <span className='font-semibold'>Base Plate 7.8 / 8.5 for 85mm Carl-Gustaf Anti-Tank Ammunition (BOFORS/SAAB)</span> and the <span className='font-semibold'>100–120 Kg FR Bomb for the Indian Air Force</span>.
                            </p>
                        </div>
                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-4'>
                                Developing these complex components required <span className='font-semibold'>extensive time and dedicated effort</span>.
                                By successfully <span className='font-semibold'>manufacturing them indigenously in India</span>,
                                we have enabled a <span className='font-semibold'>cost saving of over ₹1000 Crores for the nation</span>.
                                This achievement reinforces our role as a <span className='font-semibold'>reliable partner in strengthening India’s defence capabilities</span>.
                            </p>
                        </div>



                    </div>
                    <div className=' order-1 md:order-2 w-[100%] flex justify-center items-center'>
                        <img className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                    transition-all duration-300 
                    hover: hover:scale-105  hover:rounded-2xl" ' src={DefenceImage} alt="" />

                    </div>

                </div>
            </div>

             <div className='md:h-[80vh'>

                <div className='grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] '>

                    <div className='p-7 md:p-2 order-2 md:order-1'>
                        <h1 className='text-left font-bold text-3xl md:text-center pt-5 font-Roboto'>84 MM ANTI TANK GUN BARREL</h1>

                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7'>
                                We are <span className='font-semibold'>pioneers and an established source for import substitutes</span>
                                of critical <span className='font-semibold'>non-metallic items used in Defence equipment</span>.
                                Our specialized supply includes the <span className='font-semibold'>Base Plate 7.8 / 8.5 for 85mm Carl-Gustaf Anti-Tank Ammunition (BOFORS/SAAB)</span> and the <span className='font-semibold'>100–120 Kg FR Bomb for the Indian Air Force</span>.
                            </p>
                        </div>
                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-4'>
                                Developing these complex components required <span className='font-semibold'>extensive time and dedicated effort</span>.
                                By successfully <span className='font-semibold'>manufacturing them indigenously in India</span>,
                                we have enabled a <span className='font-semibold'>cost saving of over ₹1000 Crores for the nation</span>.
                                This achievement reinforces our role as a <span className='font-semibold'>reliable partner in strengthening India’s defence capabilities</span>.
                            </p>
                        </div>



                    </div>
                    <div className=' order-1 md:order-2 w-[100%] flex justify-center items-center'>
                        <img className=' h-[90%] pt-5 p-2 md:p-6 rounded-4xl shadow-md@
                    transition-all duration-300 
                    hover: hover:scale-105  hover:rounded-2xl" ' src={Gun_Barrel} alt="" />

                    </div>

                </div>
            </div>

        </>
    )
}

export default Defence