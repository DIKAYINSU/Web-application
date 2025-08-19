    import React, { useLayoutEffect, useRef } from "react";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { useLocation } from "react-router-dom";
    import product_1 from '../assets/Products/Slot_PSD.jpg'
    import product_2 from '../assets/Products/FRP_Rings.jpg'
    import product_3 from '../assets/Products/Oil_Vapour_Seal.jpg'
    import product_4 from '../assets/Products/Air_Buffle_PSD.jpg'
    import product_5 from '../assets/Products/Air_Buffle_image.jpg'

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

    const images = [
        `${product_1}`,
        `${product_2}`,
        `${product_3}`,
        `${product_4}`,
        `${product_5}`,
    ];

    return (
        <div className="racesWrapper overflow-hidden">
        {/* Heading above cards */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 pt-10 ">
            Products We Have
        </h2>

        <div
            ref={racesRef}
            className="races mt-5 flex space-x-10 px-10 py-20 will-change-transform"
        >
            {images.map((src, i) => (
            <div
                key={i}
                className="relative w-[600px] h-[400px] rounded-2xl shadow-2xl 
                        bg-white overflow-hidden flex items-center justify-center
                        transform-gpu hover:scale-105 transition-transform duration-300"
            >
                <img
                src={src}
                alt={`Card ${i + 1}`}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Hori2;