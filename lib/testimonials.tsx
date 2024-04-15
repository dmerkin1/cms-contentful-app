import { getAllTestimonials } from "@/lib/api";
import ContentfulImage from "./contentful-image";
interface Testimonial {
  name: string;
  location: string;
  product: string;
  image: {
    url: string;
  };
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
      <h2 className="w-full text-center mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight m-5">
        Testimonials
      </h2>
      {testimonials ? (
        testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md m-4 p-10 rounded-lg"
            style={{ width: "308.667px", marginRight: "66px" }}
          >
            <ContentfulImage
              width={96}
              height={96}
              src={testimonial.image.url}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 mb-5"
            />
            <div className="text-center text-gray-500 mb-5">
              <em>{renderContent(testimonial.testimonial.json.content)}</em>
            </div>
            <p className="font-bold">{testimonial.name}</p>
            {/* <p className="text-center">{testimonial.location}</p> */}
            <p className="text-center text-gray-400">({testimonial.product})</p>
          </div>
        ))
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
}
