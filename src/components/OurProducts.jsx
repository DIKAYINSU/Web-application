// CardSwiper.jsx
import React, { useEffect, useRef } from 'react';
import {useGSAP} from '@gsap/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Card.css'; // custom CSS wrote by AMOL 





function OurProducts() {
 const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
  const container = containerRef.current;
  const cursor = cursorRef.current;

  // // Initial setup
  // gsap.set(cursor, {
  //   opacity: 0,
  //   scale: 0,
  //   xPercent: -50,
  //   yPercent: -50,
  //   pointerEvents: 'none',
  //   zIndex: 9999,
  //   position: 'fixed',
  // });

  const enter = () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const leave = () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const move = (e) => {
    gsap.to(cursor, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
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
    <div className="grid sm:grid-cols-2 bg-gray-50">
    
    <div ref={containerRef} className="animation-container relative pt-20 pl-5XX"> 

<div ref={cursorRef} className="cursur">
      hello
    </div>  
      <h1 className="text-4xl font-bold align text-center pt-8">Our Products</h1>
      <h3 className="text-center pt-6 text-l text-wrap">Reliable FRP Product Manufacturers for Electrical,
        Railways,Renewable Energy and More</h3>
      <p className=" pt-10 text-left text-xl p-4 ">At Di Kay Insulation Industries Pvt. Ltd., we specialize in manufacturing
        high-quality, custom-designed FRP (Fibre Reinforced Plastic) products that cater to a wide range of industries
        including Electrical, Railways, Renewable Energy, and Defence. Our product range includes FRP sheets, motor
        covers, insulation blocks, air guide shields, epoxy cylinders, glass epoxy tubes, and more — all tailored to
        meet exact client specifications. With in-house R&D and testing capabilities, we ensure precision, durability,
        and performance in every product we deliver</p>
    </div>
    <div>
      <div className="swiper-box pt-10">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperOne"
            >
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img1" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img2" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img2" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img2" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img2" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/Images/img1.jpeg" alt="img2" /></SwiperSlide>
              
            </Swiper>
          </div>
      
    </div>
  </div>
    
    </>
  )
}

export default OurProducts