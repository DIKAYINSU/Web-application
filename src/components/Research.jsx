import React from 'react'

function Research() {
  return (
    <>
    <div class="researchBox">
    <div class=" min-h-[80vh] grid sm:grid-cols-2">
      <div class="right pt-10 ">
        <h1 class="text-3xl font-bold text-center pt-14">Reseach & Devlopment Lab</h1>
        <h5 class="text-lg   pt-5 text-center">Reliable Testing Processes Supported by High-Precision and Modern
          Laboratory Equipment</h5>

        <p class="pl-7 pt-6 ">We believe in making products that are not only strong but also tested for extreme
          conditions.
          Our in-house lab includes all major testing machines like UTM, muffle furnace, deep freezer, humidity chamber,
          and voltage testers.
          This setup allows us to deliver safe, durable, and high-performance insulation and FRP products — every time.
        </p>

      </div>
      <div class="left  flex justify-center items-center">
        <img class="w-[40vw] h-[65vh] rounded-lg" src="./Assets/Images/img1.jpeg" alt="R&D Testlab image"/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Research