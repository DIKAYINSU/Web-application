import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// client Images
import Hitachi from '../assets/Client/hitachi.png'
import LNT from '../assets/Client/LNT.png'
import NPTC from '../assets/Client/ntpc.png'
import Railways from '../assets/Client/railways.png'
import Bofors from '../assets/Client/boforslogo.png'
import Alstom from '../assets/Client/alstom.png'
import BHEL from '../assets/Client/bhel.png'
import Suzlon from '../assets/Client/suzlon.png'
import TDPS from '../assets/Client/tdps.png'
import Voith from '../assets/Client/voith.png'




const clients = [
  { id: 1, src: `${Hitachi}`, alt: "Hitachi" },
  { id: 2, src: `${LNT}`, alt: "Client 2" },
  { id: 3, src: `${NPTC}`, alt: "Client 3" },
  { id: 4, src: `${Railways}`, alt: "Client 4" },
  { id: 5, src: `${Bofors}`, alt: "Client 5" },
  { id: 6, src: `${Alstom}`, alt: "Client 6" },
  { id: 7, src: `${BHEL}`, alt: "Client 7" },
  { id: 8, src: `${Suzlon}`, alt: "Client 8" },
  { id: 9, src: `${TDPS}`, alt: "Client 9" },
  { id: 10, src: `${Voith}`, alt: "Client 10" },
];

const ClientSlider = () => {
  return (
    <>
      <div className="text-center pt-10 bg-gray-100">
        <span className="text-3xl font-Roboto font-extrabold bg-gradient-to-r from-[#00a6f4] via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Our Clients
        </span>
      </div>

      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            loop={clients.length > 6} // loop only if enough slides
          >
            {clients.map((client) => (
              <SwiperSlide
                key={client.id}
                className="flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-32 md:h-32 object-contain hover: transition-transform transform hover:scale-140 duration-300 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ClientSlider;