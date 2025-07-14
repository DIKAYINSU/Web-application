import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles
import 'swiper/css/pagination'; // Optional modules
import 'swiper/css/navigation';
import '../Styles/custom.css';

// Optional: Import modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

function Hero() {
  return (
    <div className="w-full bg">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        // Autoplay={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className="images"><img src="./src/assets/Images/Banner1.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="images"><img src="./src/assets/Images/Banner2.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="images"><img src="./src/assets/Images/img1.jpeg" alt="" /></div></SwiperSlide>
       
      </Swiper>

     
    </div>
    
  );
}

export default Hero;