import React from 'react'

function Certification() {
  return (
    <>
     <div className="w-full h-full bg-gray-100 dark:bg-[#1b1b1b] py-16">
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      {/* <!-- Title --> */}
      {/* <p className="pb-2 text-lg lg:text-2xl text-rose-600 font-semibold">Category</p>
      <h2 className="text-3xl lg:text-5xl text-center font-serif font-semibold mb-12 dark:text-white">
        Certification We Have
      </h2> */}
       <div className='text-center pb-15'>
      <span className="text-3xl text-center font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
 Certification We Have
</span>
    </div>

      {/* <!-- Cards --> */}

      <div className="flex flex-wrap gap-8 justify-center items-center">
        {/* <!-- Card 1 --> */}
        <div
          className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl@ overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img className="w-full h-[20rem] object-cover"
            src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">Certificatate 1</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Sub Heading </p>
          
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div
          className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl@ overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img className="w-full h-[20rem] object-cover"
              src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">Certificatate 2</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Sub Heading</p>
           
          </div>
        </div>


        {/* <!-- Card 3 --> */}
        {/* <div
          className="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xlx overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img className="w-full h-[20rem] object-cover"
               src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />

          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-1 group-hover:text-[#00a6f4] dark:text-white">Certificatate 3</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 ">S</p>
            
          </div>
        </div> */}
      </div>
    </div>
  </div>


    </>
  )
}

export default Certification