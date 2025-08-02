import { Mail, Phone, User } from "lucide-react";
import React from 'react'

function ContactPerson() {
    return (
        <>
            {/* height adjust 

            <div className="w-full px-4 py-10 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className='pb-5'>
                        <span className="text-2xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Quick Contact
                        </span>
                    </div>
                    <p className="text-gray-600 mb-10">Feel free to reach out to our key personnel for any inquiries or support.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        CEO Card
                        <div className="group relative h-45 overflow-hidden rounded-xl shadow-md bg-[#00a6f4] text-white hover:bg-white hover:text-gray-800 transition-all duration-500">
                            <div className="h-full flex justify-center items-center w-full p-6">
                                <h3 className="text-xl font-bold  group-hover:opacity-0 transition-opacity duration-300">CEO</h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-xl font-semibold">Mr. D.K. Kohli</h3>
                                <p className="text-sm text-gray-500">CEO</p>
                                <p className="text-gray-700 mt-2">📞 +91 9876543210</p>
                            </div>
                        </div>

                        Senior Sales Executive Card
                        <div className="group relative h-45 overflow-hidden rounded-xl shadow-md bg-[#00a6f4] text-white hover:bg-white hover:text-gray-800 transition-all duration-500">
                            <div className="h-full flex justify-center items-center w-full p-6">
                                <h3 className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">Sr. Sales Executive</h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-xl font-semibold">Mr. Rajesh Sharma</h3>
                                <p className="text-sm text-gray-500">Sr. Sales Executive</p>
                                <p className="text-gray-700 mt-2">📞 +91 9123456789</p>
                            </div>
                        </div>

                        Marketing Executive Card
                        <div className="group relative h-45 overflow-hidden rounded-xl shadow-md bg-[#00a6f4] text-white hover:bg-white hover:text-gray-800 transition-all duration-500">
                            <div className="h-full flex justify-center items-center w-full p-6">
                                <h3 className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">Marketing Executive</h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-xl font-semibold">Mr. Amol Lokhande</h3>
                                <p className="text-sm text-gray-500">Marketing Executive</p>
                                <p className="text-gray-700 mt-2">📞 +91 9988776655</p>
                            </div>
                        </div>

                        Duplicate Marketing Executive Card
                        <div className="group relative h-45 overflow-hidden rounded-xl shadow-md bg-[#00a6f4] text-white hover:bg-white hover:text-gray-800 transition-all duration-500">
                            <div className="h-full flex justify-center items-center w-full p-6">
                                <h3 className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">Marketing Executive</h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-xl font-semibold">Mr. Amol Lokhande</h3>
                                <p className="text-sm text-gray-500">Marketing Executive</p>
                                <p className="text-gray-700 mt-2">📞 +91 9988776655</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            {/* flip  */}


            <div className="w-full px-4 py-10 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className='pb-5'>
                        <span className="text-3xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Our Team
                        </span>
                    </div>
                    <p className="text-gray-600 mb-10 font-bold">Feel free to reach out to our key personnel for any inquiries or support.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* CEO Card */}
                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">CEO</h3>
                                </div>
                                {/* Back Side */}
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">M/S Sonal Kohli Minocha</h3>
                                    <p className="text-sm text-gray-500">CEO</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9876543210</p>
                                </div>
                            </div>
                        </div>

                        {/* Senior Sales Executive Card */}
                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Director</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Dilip Kumar Kohli</h3>
                                    <p className="text-sm text-gray-500">Director</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9123456789</p>
                                </div>
                            </div>
                        </div>

                        {/* Marketing Executive Card */}
                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Sr. Sales Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Anil Kumar Sharma</h3>
                                    <p className="text-sm text-gray-500">Sr. Sales Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9988776655</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Team Member */}
                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Marketing Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Amol Lokhande</h3>
                                    <p className="text-sm text-gray-500">Marketing Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9988776655</p> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default ContactPerson