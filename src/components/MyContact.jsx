import React from 'react'
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';



function MyContact() {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errs.contact = 'Enter a valid 10-digit number';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // You can add backend API call here
    }
  };

  const inputClass = (field) => `relative z-0 w-full group ${errors[field] ? 'text-red-500' : ''}`;

  const inputFieldClass = (field) => `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${errors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#00A6F4]'}`;

  const labelClass = 'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00A6F4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-6';
  return (
    <>
    {/* <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Contact Us</h1>

      Main Section
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        Enquiry Form
        <div className="bg-white p-6 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Send Your Enquiry</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all">Submit</button>
          </form>
        </div>

        Contact Details
        <div className="bg-white p-6 shadow-xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Info</h2>
          <div className="p-4 border rounded-xl">
            <p className="font-semibold">Email:</p>
            <p>info@dikayinsulation.com</p>
          </div>
          <div className="p-4 border rounded-xl">
            <p className="font-semibold">Phone:</p>
            <p>+91-XXXXXXXXXX</p>
          </div>
          <div className="p-4 border rounded-xl">
            <p className="font-semibold">Address:</p>
            <p>Di Kay Insulation Industries Pvt. Ltd., Industrial Area, Bhopal, MP, India</p>
          </div>
        </div>
      </div>

      Google Map Link
      <div className="grid grid-cols-1 text-center">
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Di+Kay+Insulation+Industries+Pvt+Ltd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-all">
          Get Directions
        </a>
      </div>
    </div> */}



     <div className="min-h-screen bg-gradient-to-br from-[#e6f7ff] to-white py-10 px-4 md:px-20 font-sans">
      <h2 className="text-4xl font-extrabold text-[#00A6F4] text-center mb-12 drop-shadow-lg">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Contact Info Cards */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <EnvelopeIcon className="h-8 w-8 text-[#00A6F4]" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-1">Email</h4>
                <p className="text-gray-600 text-sm">info@dkinsulation.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-8 w-8 text-[#00A6F4]" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-1">Contact Persons</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Mr. D.K. Kohli: 9876543210</li>
                  <li>Mr. A. Lokhande: 9876543211</li>
                  <li>Mr. R. Sharma: 9876543212</li>
                  <li>Ms. P. Verma: 9876543213</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <MapPinIcon className="h-8 w-8 text-[#00A6F4]" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-1">Location</h4>
                <p className="text-gray-600 text-sm">Plot No. 37, Sector B, Industrial Area, Mandideep, Bhopal, MP - 462046</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100"
        >
          {['name', 'email', 'contact', 'company', 'message'].map((field) => (
            <div key={field} className={inputClass(field)}>
              {field !== 'message' ? (
                <>
                  <input
                    type={field === 'email' ? 'email' : field === 'contact' ? 'tel' : 'text'}
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer ${inputFieldClass(field)}`}
                  />
                  <label htmlFor={field} className={labelClass}>
                    {field === 'name' ? 'Full Name *' :
                     field === 'email' ? 'Email Address *' :
                     field === 'contact' ? 'Contact Number *' :
                     field === 'company' ? 'Company Name (optional)' : ''}
                  </label>
                </>
              ) : (
                <>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer ${inputFieldClass('message')}`}
                  ></textarea>
                  <label htmlFor="message" className={labelClass}>Your Message *</label>
                </>
              )}
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#00A6F4] hover:bg-[#008fd1] text-white py-3 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>

      <div className="mt-14 rounded-2xl overflow-hidden border-4 border-[#00A6F4] shadow-xl">
        <iframe
          title="DK Insulation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.027603973351!2d77.53322147515338!3d23.46372697887025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5dbfaa31f115%3A0xc7a9b58d34ae7e27!2sDi%20Kay%20Insulation%20Industries%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1717912985142!5m2!1sen!2sinhttps://www.google.com/maps/dir//9-E+INDUSTRIAL+AREA,+Govindpura,+Bhopal,+Madhya+Pradesh+462023/@23.2594886,77.3690324,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x397c6825f9c9853b:0x8026c5f48ede19a!2m2!1d77.451434!2d23.2595101?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
    
    </>
  )
}

export default MyContact