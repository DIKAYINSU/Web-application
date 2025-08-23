import { Mail, Phone, User } from "lucide-react";
import React from 'react'

function ContactPerson() {
    return (
        <>
           



            {/* flip  */}


            <div className="w-full px-4 py-10 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className='pb-5'>
                        <span className="text-4xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Our Team
                        </span>
                    </div>
                    <p className="text-gray-600 mb-10 font-bold">Feel free to reach out to our key personnel for any inquiries or support.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* CEO Card */}
                        

                        {/* Senior Sales Executive Card */}
                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">CEO</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Dilip Kumar Kohli</h3>
                                    <p className="text-sm text-gray-500">CEO</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9425647892</p>
                                </div>
                            </div>
                        </div>

                        <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Director</h3>
                                </div>
                                {/* Back Side */}
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">M/S Sonal Kohli Minocha</h3>
                                    <p className="text-sm text-gray-500">Director</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9886657762</p>
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
                                    <p className="text-gray-700 mt-2">📞 +91 7898862878</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Team Member */}
                        {/* <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Sr. Sales & Marketing Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Sunil Kumar Jharbade</h3>
                                    <p className="text-sm text-gray-500">Sr. Sales & Marketing Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9826430745</p>  
                                </div>
                            </div>
                        </div> */}

                          {/* <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Sales Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Pushpendra Katiyar</h3>
                                    <p className="text-sm text-gray-500">Sales Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 6266161724</p> 
                                </div>
                            </div>
                        </div>   */}

                          {/* <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Marketing Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Amol Lokhande</h3>
                                    <p className="text-sm text-gray-500">Marketing Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9516338651</p> 
                                </div>
                            </div>
                        </div> */}
                         {/* <div className="group [perspective:1000px] h-50 overflow-hidden rounded-xl shadow-md">
                            <div className="relative w-full h-full transition-transform duration-700 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute w-full h-full bg-[#00a6f4] text-white flex justify-center items-center rounded-xl backface-hidden hidden sm:flex">
                                    <h3 className="text-xl font-bold">Marketing Executive</h3>
                                </div>
                                <div className="absolute w-full h-full bg-white text-gray-800 flex flex-col justify-center items-center rounded-xl sm:[transform:rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-semibold">Mr. Amol Lokhande</h3>
                                    <p className="text-sm text-gray-500">Marketing Executive</p>
                                    <p className="text-gray-700 mt-2">📞 +91 9516338651</p> 
                                </div>
                            </div>
                        </div> */}

                        

                    </div>
                </div>
            </div>




        </>
    )
}

export default ContactPerson