import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // ✅ Added useLocation

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  let timeoutId;

  const [isOverParticle, setIsOverParticle] = useState(false); // ✅ Default to false
  const location = useLocation(); // ✅ Get current route

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Particle section observer updated to handle route changes
  useEffect(() => {
    const section = document.querySelector('#particle-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverParticle(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    } else {
      // ✅ If particle section not found (e.g., on About page), force black color
      setIsOverParticle(false);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [location.pathname]); // ✅ Re-run on route change

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur border-b@   transition-all duration-500 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={isOverParticle ? './src/assets/WeblogoWhite.png' : './src/assets/Weblogo.png'}
            className="h-12"
            alt="Logo"
          />
        </NavLink>

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Nav Items */}
        <div className={`${mobileMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${
                  isOverParticle ? 'text-white' : 'text-black hover:text-[#00a6f4]'
                } transition-colors duration-300`}
              >
                Home
                <span className="block w-0 group-hover:w-full h-0.5 bg-[#00a6f4] transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${
                  isOverParticle ? 'text-white' : 'text-black hover:text-[#00a6f4]'
                } transition-colors duration-300`}
              >
                About Us
                <span className="block w-0 group-hover:w-full h-0.5 bg-[#00a6f4] transition-all duration-300"></span>
              </NavLink>
            </li>
{/* Dropdown */}
<li
  className="relative"
  onMouseEnter={() => {
      clearTimeout(timeoutId);
    setDropdownOpen(true);
  }}
  onMouseLeave={() => {
    timeoutId = setTimeout(() => setDropdownOpen(false), 200);
  }}
>
  <button
    className={`flex items-center justify-between w-full py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${
      isOverParticle ? 'text-white' : 'text-black hover:text-[#00a6f4]'
    } md:p-0 md:w-auto`}
  >
    Products
    <svg
      className="w-2.5 h-2.5 ml-2.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg>
  </button>

  {dropdownOpen && (
    <div className="absolute top-full left-0 z-20 mt-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
        <li>
          <NavLink
            to="/Machined"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Machined Components
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Molded"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Molding Components
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Railways"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Railways
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Defence"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Defence
          </NavLink>
        </li>
      </ul>
    </div>
  )}
</li>

            <li>
              <NavLink
                to="/Gallery"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${
                  isOverParticle ? 'text-white' : 'text-black hover:text-[#00a6f4]'
                } transition-colors duration-300`}
              >
                Gallery
                <span className="block w-0 group-hover:w-full h-0.5 bg-[#00a6f4] transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={`group relative block py-2 px-3 rounded-sm md:hover:bg-transparent md:p-0 ${
                  isOverParticle ? 'text-white' : 'text-black hover:text-[#00a6f4]'
                } transition-colors duration-300`}
              >
                Contact Us
           <span className="relative block h-0.5 overflow-hidden bg-transparent">
  <span className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-[#00a6f4] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;