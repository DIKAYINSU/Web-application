import React from 'react';

function ScrollToTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleScrollTop}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full bg-[#00a6f4] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
}

export default ScrollToTopButton;