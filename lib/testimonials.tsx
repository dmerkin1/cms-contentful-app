import { getAllTestimonials } from "@/lib/api";
import React from "react";

interface Testimonial {
  name: string;
  location: string;
  product: string;
  testimonial: {
    json: {
      content: string[];
    };
  };
}

export default async function Page() {
  const testimonials = await getAllTestimonials();

  // Recursive function to render content
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

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full text-center mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight m-5">
        Testimonials
      </h2>
      {testimonials ? (
        testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md m-4 p-4 rounded-lg"
            style={{ width: "308.667px", marginRight: "66px" }}
          >
            <div className="text-center text-gray-500 mb-5">
              <em>{renderContent(testimonial.testimonial.json.content)}</em>
            </div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-center">{testimonial.location}</p>
            <p className="text-center text-gray-500">({testimonial.product})</p>
          </div>
        ))
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
}
