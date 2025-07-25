import React from 'react'
import TextType from './TextType'




function EnquireForm() {
    return (

        <>
            <div className='h-auto w-[100vw]'>
                <div className='grid grid-cols-1 md:grid md:grid-cols-2 h-[100%] bg-red-200@ '>



                    <div className='bg-white'>

                        <h1 className='text-2xl font-bold text-center pl-5 ' >Let's Connect</h1>
                        <h2 className='text-4xl font-bold text-center pl-5 pt-2'>Send Your Enquiry</h2>
                        <p className='text-base font-normal text-left pl-10 pt-5 pb-5   '>Looking for FRP composite materials? Send your enquiry today. Our team will respond promptly with the right solutions tailored to your industrial requirements.</p>



                        <form class="mt-5 max-w-md mx-auto">
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{11}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                </div>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                            </div>

                            {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>  */}

                            <button type="submit" className="relative h-9 mb-5 rounded-lg w-32 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                                <span class="relative z-10">Submit</span>
                            </button>
                        </form>


                    </div>
                    <div className="w-full h-full px-5 py-10">
                        {/* Section Heading */}
                        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Quick Contact Info</h2>

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Email Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-indigo-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M4 4h16v16H4V4zm8 8l8-5H4l8 5zm0 2l-8-5v10h16V9l-8 5z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-indigo-700">Email</h2>
                                <p className="text-sm text-gray-600 text-center mt-1">info@dkinsulation.com</p>
                            </div>

                            {/* Contact Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-indigo-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm8 12a6 6 0 100-12 6 6 0 000 12z" />
                                        <circle cx="12" cy="11" r="3" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-indigo-700">Phone</h2>
                                <p className="text-sm text-gray-600 text-center mt-1">+91 12345 67890</p>
                            </div>

                            {/* Location Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-indigo-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-indigo-700">Location</h2>
                                <p className="text-sm text-gray-600 text-center mt-1">Plot X, Industrial Area, City</p>
                            </div>

                            {/* Business Hours Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-indigo-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 8v5h4m6-1a10 10 0 11-20 0 10 10 0 0120 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-indigo-700">Business Hours</h2>
                                <p className="text-sm text-gray-600 text-center mt-1">Mon – Sat: 9 AM – 6 PM</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mt-10 w-full">
                {/* Heading + Buttons */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Find Us Here
                    </h2>
                    <div className="flex gap-3">
                        <a
                            href="https://www.google.com/maps" // Replace with your map link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition"
                        >
                            View
                        </a>
                        <a
                            href="https://www.google.com/maps/dir/" // Replace with directions link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Directions
                        </a>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg border relative group">
                    {/* Overlay to control pointer events */}
                    <div className="absolute inset-0 bg-transparent z-10 group-hover:hidden"></div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.379106594157!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f768902a67%3A0x2bdf0d351b28d042!2sKurla%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                        title="Company Location"
                    ></iframe>
                </div>


            </div>



        </>
    )
}

export default EnquireForm



{/* <TextType/> */ }
{/* <TextType className='text-4xl font-Roboto pt-30'
  text={["Hello I AM Amol lokhand and i develop this website using react and tailwind css and i want to this website for users to mmake orfer ", "DI KAY INSULATION INDUSTRIES MAKE HIGH QUALITY FRP COMPOSITE MATERIAL FOR WIND AND DEFENCE INDUSTIRS", "  THIS WEBSITE MADE BY AMOL LOKHANDE USEING LOVE "]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/> */}



{/* 
            <div className='h-[50vh]'>

                <div className="h-[100%]grid grid-cols-1 bg-amber-400">
                 <p>riam quo sunt, pariatur sapiente eaque laboriosam nesciunt esse dolor, consectetur in perspiciatis assumenda numquam! Recusandae hic soluta dignissimos nihil blanditiis!</p>
                </div>
            </div> */}
