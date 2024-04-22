"use client";

import { useEffect, useState } from "react";

const ContactMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const svgIcon = document.getElementById("social-media-menu");
    if (svgIcon) {
      svgIcon.addEventListener("click", toggleMenu);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (svgIcon) {
        svgIcon.removeEventListener("click", toggleMenu);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      className={`absolute top-20 left-0 w-full ${
        isOpen ? "h-auto py-4" : "h-0 py-0"
      } overflow-hidden transition-all duration-300 bg-white z-50`}
    >
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 justify-items-center gap-2 opacity-0 ${
          isOpen ? "opacity-100 transition-opacity duration-300" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-hover-blue h-[32px] w-[32px]"
            viewBox="0 0 1024 1024"
            fill="none"
          >
            <path d="M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"></path>
            <path d="m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"></path>
          </svg>
          <div>
            <p className="font-bold text-black">Mon - Sat: 9:00 - 18:00</p>
            <p className="font-light text-gray-500">Sunday CLOSED</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <svg
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-hover-blue h-[32px] w-[32px]"
          >
            <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
          </svg>
          <div>
            <p className="font-bold text-black">267 Park Avenue</p>
            <p className="font-light text-gray-500">New York, NY 90210</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 xs:pl-52 sm:pl-56 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-hover-blue -scale-x-100 h-[32px] w-[32px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            ></path>
          </svg>
          <div>
            <p className="font-bold text-black">(123) 45678910</p>
            <p className="font-light text-gray-500">info@demolink.org</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;
