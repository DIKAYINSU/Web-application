import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const clients = [
  { id: 1, src: "./src/assets/Client/hitachi.png", alt: "Client 1" },
  { id: 2, src: "./src/assets/Client/LNT.png", alt: "Client 2" },
  { id: 3, src: "./src/assets/Client/ntpc.png", alt: "Client 3" },
  { id: 4, src: "./src/assets/Client/railways.png", alt: "Client 4" },
  { id: 5, src: "./src/assets/Client/boforslogo.png", alt: "Client 5" },
  { id: 6, src: "./src/assets/Client/alstom.png", alt: "Client 6" },
  { id: 7, src: "./src/assets/Client/bhel.png", alt: "Client 7" },
  { id: 8, src: "./src/assets/Client/suzlon.png", alt: "Client 8" },
  { id: 9, src: "./src/assets/Client/tdps.png", alt: "Client 9" },
  { id: 10, src: "./src/assets/Client/voith.png", alt: "Client 10" },
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
              320: { slidesPerView: 2  },
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
                  className="h-32 md:h-32 object-contain"
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