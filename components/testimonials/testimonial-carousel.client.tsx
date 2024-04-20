"use client";

import ContentfulImage from "@/lib/contentful-image";
import { useState } from "react";
import { Testimonial } from "@/lib/types";

function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      if (block.nodeType === "text") {
        return <p key={index}>{block.value}</p>;
      } else if (block.content) {
        return <div key={index}>{renderContent(block.content)}</div>;
      }
      return null;
    });
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const visibleTestimonials = testimonials
    .slice(currentIndex, currentIndex + 3)
    .concat(
      testimonials.slice(
        0,
        Math.max(0, 3 - (testimonials.length - currentIndex))
      )
    );

  return (
    <div className="flex items-center justify-center">
      <button onClick={prev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.4"
          stroke="currentColor"
          className="h-[70px] text-gray-400 active:text-hover-blue transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          ></path>
        </svg>
      </button>
      <div className="flex flex-wrap justify-center">
        {visibleTestimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md m-4 p-5 rounded-lg"
            style={{ width: "308.667px" }}
          >
            <div className="flex items-center">
              <div className="border-b border-gray-200 w-[50px]"></div>
              <ContentfulImage
                width={72}
                height={72}
                src={testimonial.image.url}
                alt={testimonial.name}
                className="rounded-full mb-5 mx-4"
              />
              <div className="border-b border-gray-200 w-[50px]"></div>
            </div>
            <div className="text-center text-gray-400 mb-5">
              <em className="text-light-gray font-light leading-[21px] px-[30px]">
                {renderContent(testimonial.testimonial.json.content)}
              </em>
            </div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-center text-gray-400">({testimonial.product})</p>
          </div>
        ))}
      </div>
      <button onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.4"
          stroke="currentColor"
          className="h-[70px] text-gray-400 active:text-hover-blue transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default TestimonialCarousel;
