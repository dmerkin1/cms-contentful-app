"use client";

import { useState } from "react";
import ContentfulImage from "@/lib/contentful-image";
import { contentfulLoader } from "@/lib/contentful-image";
import Link from "next/link";

interface HeroImage {
  headline: string;
  subText: {
    json: {
      content: {
        content: {
          value: string;
        }[];
      }[];
    };
  };
  image: {
    image: {
      url: string;
    };
    altText: string;
  };
}

const HeroSlider = ({ heroImage }: { heroImage: HeroImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    console.log("goToPrevious");
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? heroImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    console.log("goToNext");
    const isLastImage = currentIndex === heroImage.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentImage = heroImage[currentIndex];

  return (
    <div className="relative">
      <div className="w-full h-[416px] sm:h-[310px] md:h-[461px] xl:h-[591px] flex justify-center relative">
        <ContentfulImage
          loader={contentfulLoader}
          priority
          width={1351}
          height={1000}
          src={currentImage?.image?.image?.url ?? ""}
          alt={currentImage?.image.altText ?? ""}
          className="object-cover w-full h-full"
        />

        <button
          onClick={goToPrevious}
          className="absolute left-0 opacity-30 bg-black hover:opacity-40 transition-all duration-300 top-1/2 transform -translate-y-1/2 z-0"
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
          className="absolute right-0 opacity-30 bg-black hover:opacity-40 transition-all duration-300 top-1/2 transform -translate-y-1/2 z-20"
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
        <h1 className="text-3xl md:text-4xl xl:text-5xl leading-[1] font-bold tracking-tighter text-center md:text-left mb-5 max-w-screen-lg">
          {currentImage?.headline}
        </h1>
        <p className="text-xl font-thin text-center md:text-left tracking-wide text-[18px] lg:text-[22px] lg:leading-[36px] mb-10 max-w-[500px]">
          {currentImage?.subText?.json?.content[0].content[0].value}
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
          <Link href="/" passHref>
            <button className="bg-hover-blue hover:bg-white hover:text-hover-blue py-3 px-8 rounded transition duration-300 whitespace-nowrap">
              Our Services
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="border-2 hover:bg-white hover:text-hover-blue border-white border-solid  text-white py-3 px-8 rounded transition duration-300 whitespace-nowrap">
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
