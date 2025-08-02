// CardSwiper.jsx
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Card.css'; // custom CSS wrote by AMOL 

// images 

import productImage1 from '../assets/Images/slotimage.jpg'





function OurProducts() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    // Optional: initial setup
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0,
      pointerEvents: 'none',
      position: 'fixed',
      zIndex: 0,
    });

    const moveX = gsap.quickTo(cursor, "left", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "top", { duration: 0.5, ease: "power3.out" });

    const enter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.inOut'
      });
    };

    const leave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      });
    };

    const move = (e) => {
      moveX(e.clientX);
      moveY(e.clientY);
    };

    container.addEventListener('mouseenter', enter);
    container.addEventListener('mouseleave', leave);
    container.addEventListener('mousemove', move);

    return () => {
      container.removeEventListener('mouseenter', enter);
      container.removeEventListener('mouseleave', leave);
      container.removeEventListener('mousemove', move);
    };
  }, []);



  return (

    <>
      <div className="grid sm:grid-cols-2 bg-gray-50 z-10">
        <div ref={cursorRef} className="cursur z-5">
        </div>

        <div ref={containerRef} className="relative ">


          <div className='pt-15 m-5'>
            <h1 className="text-4xl font-bold align text-center pt-5">Our Products</h1>
            {/* <div className='text-center "'>
      <span className="text-3xl text-center font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
 Our Products
</span>
    </div> */}

            <h3 className="text-lg text-left font-bold pl-10 pt-8 font-Roboto">Reliable FRP Product Manufacturers for Electrical,
              Railways,Renewable Energy and More</h3>
            <p className="font-Roboto text-lg text-left pl-10 pt-5 font-medium ">At Di Kay Insulation Industries Pvt. Ltd., we specialize in manufacturing
              high-quality, custom-designed FRP (Fibre Reinforced Plastic) products that cater to a wide range of industries
              including Electrical, Railways, Renewable Energy, and Defence. Our product range includes FRP sheets, motor
              covers, insulation blocks, air guide shields, epoxy cylinders, glass epoxy tubes, and more — all tailored to
              meet exact client specifications. With in-house R&D and testing capabilities, we ensure precision, durability,
              and performance in every product we deliver</p>
          </div>
        </div>
        <div>
          <div className="swiper-box ">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperOne"
            >
              {/* <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
              <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
             <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
              <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
              <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide> 
                 <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
              <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>
              <SwiperSlide><img className='object-cover' src={productImage1} alt="img1" /></SwiperSlide>  */}

              <SwiperSlide className='w-full h-full' ><img className='w-full h-full object-cover rounded-xl' src="./src/assets/Images/slot-web.webp" alt="img2" /></SwiperSlide>
              <SwiperSlide className='w-full h-full' ><img className='w-full h-full object-cover  rounded-xl' src="./src/assets/Images/rings-web.webp" alt="img2" /></SwiperSlide>
              <SwiperSlide className='w-full h-full' ><img className='w-full h-full object-cover rounded-xl' src="./src/assets/Images/air-buffle-web.webp" alt="img2" /></SwiperSlide>
              <SwiperSlide className=' w-full h-full' ><img className='w-full h-full object-cover rounded-xl' src="./src/assets/Images/oil-vapour-web.webp" alt="img2" /></SwiperSlide>
              <SwiperSlide className=' w-full h-full' ><img className='w-full h-full object-cover rounded-xl' src="./src/assets/Images/Molding_Item_New.png" alt="img2" /></SwiperSlide>
             
          

            </Swiper>
          </div>

        </div>
      </div>

    </>
  )
}

export default OurProducts