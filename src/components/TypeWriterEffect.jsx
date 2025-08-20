import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWriterEffect() {
  return (
   <>
    <div className="h-screen@ flex flex-col items-center justify-center bg-tranparent text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        High-Performance FRP Solutions For
      </h1>
      <div className="text-4xl md:text-6xl font-bold mb-4 text-[#00a6f4]">
        <Typewriter
          options={{
            strings: [
              'Wind Energy Sector',
              'Hydro Power Sector',
              'Energy Sector',
              'Railways Sector',
              'Defence Applications',
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
          }}
        />
      </div>
    </div>
   </>
  )
}

export default TypeWriterEffect