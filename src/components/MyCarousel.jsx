import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../Styles/CarouselCss.css';

const slides = [
  {
    image: './src/assets/Images/wind.jpg',
    heading: 'Future-Ready. Field-Tested.',
    subheading: ' FRP Components Built for Wind Industry Demands',
    buttonText: 'Explore Products'
  },

  {
    image: './src/assets/Images/railwaysImage.jpg',
    heading: 'Durability That Moves Railways',
    subheading: 'Precision FRP Parts for Smooth Railway Operations',
    buttonText: 'Explore Products'
  },
  {
    image: './src/assets/Images/air.jpg',
    heading: 'Material Matters in Defence',
    subheading: 'Engineered FRP Solutions for Strategic Military Applications',
    buttonText: 'Explore Products'

  },
];

function MyCarousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="font-Roboto text-center text-white fade-text-animation px-4 font-Roboto">
                <h2 className="font-Roboto text-4xl md:text-6xl font-extrabold drop-shadow-lg ">{slide.heading}</h2>
                <p className="mt-4 text-lg md:text-2xl font-medium">{slide.subheading}</p>
                <button className="mt-6 px-6 py-3 bg-white text-[#00a6f4] font-semibold rounded-full hover:bg-[#00a6f4] hover:text-white transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#00a6f4] transition duration-300 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#00a6f4] transition duration-300 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}

export default MyCarousel;