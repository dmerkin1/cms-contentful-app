"use client";

import { useState, useEffect } from "react";

export default function HamburgerMenu(): JSX.Element{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (menu) {
      if (isMenuOpen) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    }
  }, [isMenuOpen]);

  return (
    <button
      className="block md:hidden text-white"
      onClick={toggleMenu}
      aria-expanded="false"
    >
      {isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#323946"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-6 h-6 fill-custom-blue mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M21 5H3a1 1 0 110-2h18a1 1 0 110 2zm0 6H3a1 1 0 110-2h18a1 1 0 110 2zm0 6H3a1 1 0 110-2h18a1 1 0 110 2z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
