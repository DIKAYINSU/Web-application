import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

import product_1 from "../assets/Products/Slot_PSD.jpg";
import product_2 from "../assets/Products/FRP_Rings.jpg";
import product_3 from "../assets/Products/Oil_Vapour_Seal.jpg";
import product_4 from "../assets/PGallery/product-14.jpg";
import product_5 from "../assets/PGallery/product-2.jpg";

function Hori2() {
  const racesRef = useRef(null);
  const scrollTweenRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;
    if (!races) return;

    const totalScroll = races.scrollWidth - window.innerWidth;

    scrollTweenRef.current = gsap.to(races, {
      x: () => `-${totalScroll}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".racesWrapper",
        start: "top top",
        end: () => `+=${totalScroll * 1.6}`,
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      scrollTweenRef.current?.scrollTrigger?.kill();
      scrollTweenRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, [location.pathname]);

  // Array with image + text
  const cards = [
    { src: product_1, text: "Machining" },
    { src: product_3, text: "Hand Molding" },
    { src: product_2, text: "Filament Winding" },
    { src: product_5, text: "Filament Winding" },
    { src: product_4, text: "Compression Molding" },
  ];

  return (
    <div className="racesWrapper overflow-hidden">
      {/* Heading above cards */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 pt-10">
        Our Manufacturing Processes
      </h2>

      <div
        ref={racesRef}
        className="races mt-5 flex space-x-10 px-10 py-20 will-change-transform"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative w-[600px] h-[400px] rounded-2xl shadow-2xl 
                        bg-white overflow-hidden flex items-center justify-center
                        transform-gpu group"
          >
            {/* Image with blur on hover */}
            <img
              src={card.src}
              alt={`Card ${i + 1}`}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* Text overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center
                         opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <span className="text-4xl font-bold text-white drop-shadow-lg">
                {card.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hori2;