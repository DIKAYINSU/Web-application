import React from 'react'
import FounderImage from '../assets/Images/img1.jpeg'

function Founder() {
    return (
        <>

            <div className='md:h-[80vh'>

                <div className='grid grid-cols-1 pl-2 pr-2 md:grid-cols-2 md:pl-10 md:pr-10 ] '>

                    <div className='h-100@ bg-amber-200@ '>
                        <h1 className='font-bold text-3xl text-center pt-5 font-Roboto'>About Founder</h1>

                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7'>
                                With Many Decades of experience, we
                                specialize in precision-engineered components used in electrical
                                Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
                                perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
                                sectors.
                            </p>
                        </div>
                        <div className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:scale-103 hover:text-black">
                            <p className='font-Roboto text-lg pt-7'>
                                With Many Decades of experience, we
                                specialize in precision-engineered components used in electrical
                                Machinery, Wind turbines, Hydro Generators, and Industrial Infrastructure. Our products are designed to
                                perform in demanding environments—ensuring long-term efficiency, safety, and reliability across critical
                                sectors.
                            </p>
                        </div>



                    </div>
                    <div className='h-100@  w-[100%] flex justify-center items-center'>
                        <img className=' h-[90%] p-6 rounded-4xl shadow-md@
                transition-all duration-300 
                hover: hover:scale-105  hover:rounded-2xl" ' src={FounderImage} alt="" />

                    </div>

                </div>
            </div>

        </>
    )
}

export default Founder