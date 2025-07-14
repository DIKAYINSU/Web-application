// CardSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Card.css'; // custom CSS you wrote

const CardSwiper = () => {
  return (
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
  );
};

export default CardSwiper;