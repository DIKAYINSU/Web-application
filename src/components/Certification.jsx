import React from 'react'

function Certification() {
  return (
    <>
     <div class="w-full h-full bg-rose-100/30 dark:bg-[#1b1b1b] py-16">
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-center">
      {/* <!-- Title --> */}
      <p class="pb-2 text-lg lg:text-2xl text-rose-600 font-semibold">Category</p>
      <h2 class="text-3xl lg:text-5xl text-center font-serif font-semibold mb-12 dark:text-white">
        Certification We Have
      </h2>

      {/* <!-- Cards --> */}

      <div class="flex flex-wrap gap-8 justify-center items-center">
        {/* <!-- Card 1 --> */}
        <div
          class="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl@ overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img class="w-full h-[20rem] object-cover"
            src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />
          <div class="p-5">
            <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Certificatate 1</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Sub Heading </p>
          
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div
          class="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xl@ overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img class="w-full h-[20rem] object-cover"
              src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />
          <div class="p-5">
            <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Certificatate 2</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Sub Heading</p>
           
          </div>
        </div>


        {/* <!-- Card 3 --> */}
        <div
          class="group w-[18rem] sm:w-[21.5rem] bg-white dark:bg-[#262525] rounded-2xlx overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img class="w-full h-[20rem] object-cover"
               src="./Assets/Images/certificateone.jpg"
            alt="Sushi" />

          <div class="p-5">
            <h2 class="text-2xl font-semibold mb-1 group-hover:text-rose-600 dark:text-white">Certificatate 3</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 ">S</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}

export default Certification