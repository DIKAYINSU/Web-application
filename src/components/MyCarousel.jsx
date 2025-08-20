import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../Styles/CarouselCss.css";
import { Link } from "react-router-dom";

import HeroImage_1 from "../assets/Images/wind.webp";
import HeroImage_2 from "../assets/Images/railwaysImage.webp";
import HeroImage_3 from "../assets/Images/air.webp";

const slides = [
  {
    image: `${HeroImage_1}`,
    heading: "Future-Ready. Field-Tested.",
    subheading: "FRP Components Built for Wind Industry Demands",
    buttonText: "Explore Products",
    Link: "/Wind",
  },
  {
    image: `${HeroImage_2}`,
    heading: "Durability That Moves Railways",
    subheading: "Precision FRP Parts for Smooth Railway Operations",
    buttonText: "Explore Products",
    Link: "/Railways",
  },
  {
    image: `${HeroImage_3}`,
    heading: "Material Matters in Defence",
    subheading: "Engineered FRP Solutions for Strategic Military Applications",
    buttonText: "Explore Products",
    Link: "/Defence",
  },
];

function MyCarousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="fade-text text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                  {slide.heading}
                </h2>
                <p className="mt-4 text-lg md:text-2xl font-medium">
                  {slide.subheading}
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-[#00a6f4] font-semibold rounded-full hover:bg-[#00a6f4] hover:text-white transition duration-300">
                  <Link to={slide.Link}>{slide.buttonText}</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#00a6f4] transition duration-300 cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#00a6f4] transition duration-300 cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}

export default MyCarousel;
