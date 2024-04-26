"use client";

import { useState, useEffect } from "react";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
import { HeroCarouselClientProps } from "@/lib/types";

const HeroCarousel = ({ heroImage }: HeroCarouselClientProps) => {
  const flatHeroImages = heroImage.flat();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTranslateX(-100 * currentIndex);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flatHeroImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? flatHeroImages.length - 1 : prevIndex - 1
    );
  };

  const currentImage = flatHeroImages[currentIndex];

  const renderTextFromJson = (subText: {
    json: { content: { content: { value: string }[] }[] };
  }) => {
    if (!subText || !subText.json) return null;
    return subText.json.content.map((block, index) => (
      <p key={index}>
        {block.content.map((text, textIndex) => (
          <span key={textIndex}>{text.value}</span>
        ))}
      </p>
    ));
  };

  return (
    <div className="relative w-full aspect-w-16 aspect-h-5">
      <div className="w-full h-[416px] sm:h-[310px] md:h-[461px] lg:h-[591px] xxl:h-[800px] flex justify-center relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {flatHeroImages.map((img, index) => (
            <ContentfulImage
              key={index}
              priority={index === currentIndex}
              width={1905}
              height={596}
              src={img.image.image.url}
              alt={img.image.altText ?? "Default Image Alt"}
              className="object-cover w-full h-full"
              style={{maxWidth: `${img.maxWidth}px`}}
            />
          ))}
        </div>
        {currentImage.darkenImage && (
          <div className="absolute inset-0 bg-white opacity-40 md:opacity-0"></div>
        )}
        <button
          onClick={goToPrevious}
          className="hidden md:inline-block absolute left-0 opacity-30 bg-black hover:opacity-40 transition-all duration-300 top-1/2 transform -translate-y-1/2 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="currentColor"
            className="h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            ></path>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="hidden md:inline-block absolute right-0 opacity-30 bg-black hover:opacity-40 transition-all duration-300 top-1/2 transform -translate-y-1/2 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="currentColor"
            className="h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center p-4 text-white md:pl-8 lg:ml-44 md:max-w-[500px] lg:max-w-fit">
        <h1
          className={`text-4xl md:text-5xl xl:text-6xl leading-[1] font-bold tracking-tighter text-center md:text-left mb-5 max-w-screen-lg ${
            currentIndex === 1 ? "text-stone-800 md:max-w-sm" : "text-white"
          }`}
        >
          {currentImage.headline}
        </h1>
        <div
          className={`text-xl font-thin text-center md:text-left tracking-wide text-[18px] lg:text-[22px] lg:leading-[36px] mb-10 md:max-w-[500px] ${
            currentIndex === 1 ? "hidden" : ""
          }`}
        >
          {currentImage.subText && renderTextFromJson(currentImage.subText)}
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
          <Link href="/" passHref>
            <button
              className={`font-bold bg-hover-blue hover:bg-white hover:text-hover-blue py-3 px-8 rounded transition duration-300 whitespace-nowrap`}
            >
              {currentIndex === 1 ? "Learn More" : "Our Services"}
            </button>
          </Link>
          <Link href="/" passHref>
            <button
              className={`font-bold border-2 border-white border-solid py-3 px-8 rounded transition duration-300 whitespace-nowrap ${
                currentIndex === 1
                  ? "text-stone-800 border-stone-400 bg-white hover:bg-hover-blue hover:text-white hover:border-hover-blue"
                  : "text-white hover:bg-white hover:text-hover-blue"
              }`}
            >
              {currentIndex === 1 ? "Our Services" : "Purchase Now"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
