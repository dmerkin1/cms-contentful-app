"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HamburgerMenu(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState({
    aboutUs: false,
    services: false,
    blog: false,
    pages: false,
    blocks: false,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  const handleSubMenuToggle = (menuName: keyof typeof subMenuStates) => {
    setSubMenuStates({
      ...subMenuStates,
      [menuName]: !subMenuStates[menuName],
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className={`block md:hidden text-white px-[20px]`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen ? "true" : "false"}
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
            className="w-6 h-6 fill-custom-blue"
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

      <div
        id="menu"
        className={`fixed top-20 w-64 h-full left-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <nav>
          <ul>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
              >
                Home
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
                onClick={() => handleSubMenuToggle("aboutUs")}
              >
                <span>About Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 ml-2 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {subMenuStates.aboutUs && (
                <ul>
                  <li className="py-3">
                    <Link href="/" className="pl-7 font-bold text-hover-blue">
                      Our Team
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/" className="pl-7 font-bold text-hover-blue">
                      Team Member Profile
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
                onClick={() => handleSubMenuToggle("services")}
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 ml-2 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {subMenuStates.services && (
                <ul>
                  <li className="py-3">
                    <Link href="/" className="pl-7 font-bold text-hover-blue">
                      Single Service
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="pt-2">
              <Link
                href="/blog"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
                onClick={() => handleSubMenuToggle("blog")}
              >
                <span>Blog</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 ml-2 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {subMenuStates.blog && (
                <ul>
                  <li className="py-3">
                    <Link
                      href="/blog"
                      className="pl-7 font-bold text-hover-blue"
                    >
                      Blog Post
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
                onClick={() => handleSubMenuToggle("pages")}
              >
                <span>Pages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 ml-2 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {subMenuStates.pages && (
                <ul>
                  <li className="py-3">
                    <Link href="/" className="pl-7 font-bold text-hover-blue">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
              >
                Contacts
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/"
                className="py-2 px-[20px] font-bold text-hover-blue flex justify-between items-center"
                onClick={() => handleSubMenuToggle("blocks")}
              >
                <span>Blocks</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 ml-2 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {subMenuStates.blocks && (
                <>
                  <ul>
                    <li className="py-3">
                      <div className="pl-7 pb-3 text-black font-normal">
                        ELEMENTS 1
                      </div>
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Headers
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Counters
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Call to action
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Brands
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Footers
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="py-3">
                      <div className="pl-7 pb-3 text-black font-normal">
                        ELEMENTS 2
                      </div>
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Gallery album
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Maps
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Call Services Page
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Sliders
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="py-3">
                      <div className="pl-7 pb-3 text-black font-normal">
                        ELEMENTS 3
                      </div>
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Subscribe Forms
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Forms
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Small Features
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Team Page
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link
                        href="/"
                        className="py-2 pl-12 font-bold text-hover-blue"
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
