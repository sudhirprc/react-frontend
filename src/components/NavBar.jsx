import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "../Hooks/useScrollSpy";

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Added missing state

  // Fixed: useScrollSpy only takes 2 parameters (sectionIds, offset)
  const activeSection = useScrollSpy(
    ["home", "about", "services", "pricing", "contact"],
    80 // offset = navbar height in px
  );

  const navItems = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="text-xl font-bold text-yellow-400">
          Lumora&nbsp;Hotels
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:hidden mt-4`}>
          <ul className="flex flex-col space-y-2 font-medium bg-gray-50 border border-gray-100 p-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const section = `#${id}`;

              // Special handling for Home section
              let isActive;
              if (id === "home") {
                // Home is active when: no hash AND (activeSection is home OR empty)
                isActive =
                  (!hash || hash === "#home") &&
                  (activeSection === "home" || activeSection === "");
              } else {
                // Other sections: active when hash matches OR scrollspy matches
                isActive = activeSection === id || hash === section;
              }

              return (
                <li key={item}>
                  <HashLink
                    smooth
                    to={`/${section}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-2 px-3 rounded ${
                      isActive
                        ? "text-blue-700 bg-blue-100 dark:text-yellow-400 dark:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:text-yellow-500 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)} // Close mobile menu on click
                  >
                    {item}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row md:space-x-8 font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const section = `#${id}`;

              // Special handling for Home section
              let isActive;
              if (id === "home") {
                // Home is active when: no hash AND (activeSection is home OR empty)
                isActive =
                  (!hash || hash === "#home") &&
                  (activeSection === "home" || activeSection === "");
              } else {
                // Other sections: active when hash matches OR scrollspy matches
                isActive = activeSection === id || hash === section;
              }

              return (
                <li key={item}>
                  <HashLink
                    smooth
                    to={`/${section}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-2 px-3 rounded md:border-0 md:p-0 ${
                      isActive
                        ? "text-blue-700 dark:text-yellow-400"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-yellow-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    }`}
                  >
                    {item}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
