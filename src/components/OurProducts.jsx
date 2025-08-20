// CardSwiper.jsx
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Card.css'; // custom CSS wrote by AMOL 

// 
import productImage_1 from '../assets/Products/Slot_PSD.jpg'
import productImage_2 from '../assets/Products/Oil_Vapour_Seal.jpg'
import productImage_3 from '../assets/Products/FRP_Rings.jpg'
import productImage_4 from '../assets/Products/Air_Buffle_PSD.jpg'
import productImage_5 from '../assets/Products/Air_Buffle_image.jpg'


// import productImage1 from '../assets/Images/slotimage.jpg'





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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 bg-[url('../assets/Images/texture2L.jpg')] z-10">
  <div ref={cursorRef} className="cursur z-5">
  </div>

  <div ref={containerRef} className="relative"> 
    <div className='pt-15 m-5'>
      <h1 className="text-4xl font-bold text-center pt-5">Our Products</h1>

      <h3 className="text-lg text-left font-bold pl-10 pt-8 font-Roboto">
        Reliable FRP Product Manufacturers for Electrical, Railways, Renewable Energy and More
      </h3>

      <p className="font-Roboto text-lg text-left pl-10 pt-5 font-medium">
        At <span className='font-semibold'>Di Kay Insulation Industries Pvt.</span> Ltd., We Specialize In Manufacturing High-Quality, Custom-Designed <span className='font-semibold'>FRP (Fibre Reinforced Plastic)</span> Products That Cater To A Wide Range Of Industries Including <span className='font-semibold'>Electrical, Railways, Renewable Energy,</span> And <span className='font-semibold'>Defence</span>. Our Product Range Includes <span className='font-semibold'>FRP Sheets, Motor Covers, Insulation Blocks, Air Guide Shields, Epoxy Cylinders, Glass Epoxy Tubes, </span>And More — All Tailored To Meet Exact Client Specifications. With <span className='font-semibold'>In-House R&D</span> And <span className='font-semibold'>Testing Capabilities,</span> We Ensure <span className='font-semibold'>Precision, Durability,</span> And <span className='font-semibold'>Performance</span> In Every Product We Deliver.
      </p>
    </div>
  </div>

  <div>
    <div className="swiper-box">
      <Swiper
        effect="cards"
        autoplay={{
        delay:3500,
         disableOnInteraction: false,


        }}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiperOne"
      >
        <SwiperSlide className='w-full h-full'>
          <img className='w-full h-full object-cover rounded-xl' src={productImage_1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
          <img className='w-full h-full object-cover rounded-xl' src={productImage_2} alt="img2" />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
          <img className='w-full h-full object-cover rounded-xl' src={productImage_3} alt="img3" />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
          <img className='w-full h-full object-cover rounded-xl' src={productImage_4} alt="img4" />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
          <img className='w-full h-full object-cover rounded-xl' src={productImage_5} alt="img5" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>

    </>
  )
}

export default OurProducts