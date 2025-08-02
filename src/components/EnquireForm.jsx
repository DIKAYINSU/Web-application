import React, { useRef } from 'react';
import TextType from './TextType'
import ContactPerson from './ContactPerson'
import emailjs from '@emailjs/browser';



function EnquireForm() {
    const myform = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_m0poya1', 'template_374kzs4', myform.current, {
                publicKey: 'bAwpQPfJpMcMkIDSI',
            })
            .then(  
                () => {
                    console.log('SUCCESS!');
                    myform.current.reset(); // ✅ Reset form here
                   alert('Enquiry sent successfully!'); // Optional UX improvement
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };




    return (

        <>
            <div className='h-auto w-[100vw] bg-gray-100'>
                <div className='grid grid-cols-1 md:grid md:grid-cols-2 h-[100%] bg-red-200@ '>



                    <div className='bg-gray-100'>

                        <h1 className='text-2xl font-bold text-left pl-15 pt-12 text-[#00a6f4]'>Let's Connect</h1>
                        {/* <h2 className='text-4xl font-bold text-center pl-5 pt-2'>Send Your Enquiry</h2> */}
                        <div className='text-left pl-15 '>
                            <span className="text-3xl  font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Send Your Enquiry
                            </span>
                        </div>
                        <p className='text-base font-normal text-left pl-15  pt-3 pb-5 '>Looking for FRP composite materials? Send your enquiry today. Our team will respond promptly with the right solutions tailored to your industrial requirements.</p>



                        <form ref={myform} onSubmit={sendEmail} className="mt-5 max-w-md mx-15">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="FirstName" id="FirstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                    <label for="FirstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="LastName" id="LastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                    <label for="LastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{10}" name="PhoneNumber" id="PhoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                    <label for="PhoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="EmailAddress" id="EmailAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                    <label for="EmailAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="CompanyName" id="CompanyName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                <label for="CompanyName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="CompanyAddress" id="CompanyAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                <label for="CompanyAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Address</label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <textarea  name="Message" id="Message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00a6f4] focus:outline-none focus:ring-0 focus:border-[#00a6f4] peer" placeholder=" " required />
                                <label for="Message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#00a6f4] peer-focus:dark:text-[#00a6f4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write Your Message</label>
                            </div>

                            {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>  */}

                            <button type="submit" value="send" className="relative h-9 mb-5 rounded-lg w-32 overflow-hidden border border-[#00a6f4] text-[#00a6f4] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#00a6f4] before:duration-300 before:ease-out hover:text-white hover:shadow-[#00a6f4] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                                <span className="relative z-10">Submit</span>
                            </button>
                               {/* <input type="submit" value="Send" /> */}
                        </form>


                    </div>

                    <div className="w-full flex flex-col justify-center items-center h-full px-5 py-10 bg-red-300W">
                        {/* Section Heading */}
                        <div className='pb-10'>
                            <span className="text-2xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Quick Contact
                            </span>
                        </div>
                        {/* <h2 className="text-2xl font-bold text-center text-[#00a6f4] mb-6">Quick Contact Info</h2> */}

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Email Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-[#00a6f4]">
                                    <i className="fa fa-envelope fa-xl" aria-hidden="true"></i>
                                </div>
                                <h2 className="text-2xl font-bold pt-2 text-[#00a6f4]">Email</h2>
                                <p className="text-sm text-gray-600 pt-2 text-center mt-1">dkinsu2010@gmail.com</p>
                            </div>

                            {/* Contact Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-[#00a6f4]">
                                    <i className="fa fa-phone fa-xl" aria-hidden="true"></i>

                                </div>
                                <h2 className="text-2xl font-bold pt-2 text-[#00a6f4]">Phone</h2>
                                <p className="text-sm text-gray-600 text-center mt-1 pt-2">+91 6266161724 , +0755 123456 </p>
                                {/* <p className="text-sm text-gray-600 text-center mt-1">+0755 123456</p> */}
                            </div>

                            {/* Location Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-[#00a6f4] mb-2">
                                    <i class="fa fa-location-dot fa-xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-[#00a6f4]">Location</h2>
                                <p className="text-sm text-gray-600 text-center mt-1 p-2">9-E Industrial Area Govindpura</p>
                                <p className="text-sm text-gray-600 text-center">Bhopal-462023 INDIA </p>
                            </div>

                            {/* Business Hours Card */}
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 h-48">
                                <div className="text-[#00a6f4] mb-2">
                                    <i class="fa-solid fa-clock fa-xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-[#00a6f4] pt-2">Business Hours</h2>
                                <p className="text-sm text-gray-600 text-center mt-1 pt-4">Mon – Sat: 8:30 AM – 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactPerson />

            -
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mt-10 w-full">
                {/* Heading + Buttons */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00a6f4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
                            className="know-more relative inline-flex items-center justify-center mt-6 h-9 w-32 overflow-hidden border rounded-md border-[#25a5f0] text-white bg-[#25a5f0] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[white] before:duration-300 before:ease-out hover:text-[#25a5f0] hover:shadow-[#fff] hover:before:h-40 hover:before:w-40 hover:before:opacity-80"

                        >
                            <span className="relative z-10 font-bold">View</span>
                        </a>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=DI+KAY+INSULATION+INDUSTRIES+PRIVATE+LIMITED,+9-E,+Industrial+Area,+Govindpura,+Bhopal,+Madhya+Pradesh+462023"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="know-more relative inline-flex items-center justify-center mt-6 h-9 w-32 overflow-hidden border rounded-md border-[#25a5f0] text-[#25a5f0] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#25a5f0] before:duration-300 before:ease-out hover:text-white hover:shadow-[#25a5f0] hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                        >
                            <span className="relative z-10 font-bold">Directions</span>
                        </a>


                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg border relative group">
                    {/* Overlay to control pointer events */}
                    <div className="absolute inset-0 bg-transparent z-10 group-hover:hidden"></div>

                    <iframe

                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0221712599463!2d77.4487912!3d23.2593612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6825f9c9853b%3A0x8026c5f48ede19a!2sDI%20KAY%20INSULATION%20INDUSTRIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1722238200000!5m2!1sen!2sin"
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
