import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Horizontal.css";

function HorizontalScroll() {
  const racesRef = useRef(null);
  const scrollTweenRef = useRef(null); // store animation instance

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;
    if (!races) return;

      const totalScroll = Math.max(0, races.scrollWidth - window.innerWidth);

    // Store animation reference to clean up later
    scrollTweenRef.current = gsap.to(races, {
      x: () => `-${totalScroll}px`,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".racesWrapper",
        start: "top top",
        end: () => `+=${totalScroll}`,  
        // scrub: 1.1,
        scrub:1.1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    // Clean up on unmount
    return () => {
      scrollTweenRef.current?.scrollTrigger?.kill();
      scrollTweenRef.current?.kill();
    };
  }, []);

  return (
    <>
      {/* <div className="bg lightBG"></div> */}

      <div className="racesWrapper">
        <div ref={racesRef} className="races font-Barlow@">
          <h2>DRIVEN</h2>
          <h2>BY</h2>
          <h2>INNOVATION,</h2>
          <h2>COMMITTED</h2>
          <h2>TO</h2>
          <h2 className="color">QUALITY</h2>
        </div>
      </div>

      {/* <div className="lightBG"></div> */}

    </>
  );
}

export default HorizontalScroll;