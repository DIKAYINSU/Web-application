import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null); // ✅ Reference for navbar

  const [isOverParticle, setIsOverParticle] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (navbarRef.current) {
        if (prevScrollPos > currentScrollPos) {
          navbarRef.current.style.top = '0';
        } else {
          navbarRef.current.style.top = '-100px';
        }
        prevScrollPos = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // color change particle container

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log('Intersecting:', entry.isIntersecting);
        setIsOverParticle(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#particle-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    // <nav
    //   ref={navbarRef}
    //   className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-500"
    // >
    //   <div className="max-w-screen-xl mx-auto p-4">
    //     <h2 className="text-lg font-bold">Navbar</h2>
    //   </div>
    // </nav>
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur border-b@ border-gray-200@ transition-all duration-500 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="./src/assets/Weblogo.png" className="h-12" alt="Logo" /> */}
         <img src={isOverParticle ? './src/assets/WeblogoWhite.png' : './src/assets/Weblogo.png'} className="h-12" alt="Logo" />
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav Items */}
        <div
          className={`${mobileMenuOpen ? '' : 'hidden'
            } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${isOverParticle ? 'text-white' : 'text-black hover:text-blue-700'
                  } transition-colors duration-300`}
              >
                Home
                <span className="block w-0 group-hover:w-full h-0.5 bg-blue-700 text-blue-700 transition-all duration-300"></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/About"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${isOverParticle ? 'text-white' : 'text-black hover:text-blue-700'
                  } transition-colors duration-300`}
              >
                About Us
                <span className="block w-0 group-hover:w-full h-0.5 bg-blue-700 text-blue-700 transition-all duration-300"></span>
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover: ${isOverParticle ? 'text-white' : 'text-black hover:text-blue-700'} md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500`}
              >
                Products
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 z-20 mt-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className=" bg-transparent py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Machined Components
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Molding Components
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Railways
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Defence
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a
                href="#"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${isOverParticle ? 'text-white' : 'text-black hover:text-blue-700'
                  } transition-colors duration-300`}
              >
                Gallery
                <span className="block w-0 group-hover:w-full h-0.5 bg-blue-700 text-blue-700 transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${isOverParticle ? 'text-white' : 'text-black hover:text-blue-700'
                  } transition-colors duration-300`}
              >
                Contact Us
                <span className="block w-0 group-hover:w-full h-0.5 bg-blue-700 text-blue-700 transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;