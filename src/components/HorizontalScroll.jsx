import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import "../Styles/Horizontal.css";

function HorizontalScroll() {
  const racesRef = useRef(null);
  const scrollTweenRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    // Always reset scroll on mount
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;
    if (!races) return;

    const totalScroll = Math.max(0, races.scrollWidth - window.innerWidth);

    scrollTweenRef.current = gsap.to(races, {
      x: () => `-${totalScroll}px`,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".racesWrapper",
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1.1,
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.clearScrollMemory(); // clears saved scroll positions
    };
  }, [location.pathname]);

  return (
    <div className="racesWrapper">
      <div ref={racesRef} className="races font-Barlow@">
        <h2>DRIVEN</h2>
        <h2>BY</h2>
        <h2><span>INNOVATION,</span></h2>
        <h2>COMMITTED</h2>
        <h2>TO</h2>
        <h2><span><span>QUALITY</span></span></h2>
      </div>
    </div>
  );
}

export default HorizontalScroll;