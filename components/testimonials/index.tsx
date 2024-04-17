import { getAllTestimonials } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

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
    <div className="flex flex-wrap justify-center mb-14">
      <h2 className="w-full text-center mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight m-5">
        Testimonials
      </h2>
      <div className="w-full flex justify-center">
        <hr
          className="w-[50px] lg:w-[68px] bg-primary mb-[40px] md:mb-[60px] border-hover-blue"
          style={{ borderBottomWidth: "4px" }}
        />
      </div>

      {testimonials ? (
        testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md m-4 p-5 rounded-lg"
            style={{ width: "308.667px" }}
          >
            <div className="flex items-center">
              <div className="border-b border-gray-300 w-[50px]"></div>
              <ContentfulImage
                width={72}
                height={72}
                src={testimonial.image.url}
                alt={testimonial.name}
                className="rounded-full mb-5 mx-4"
              />
              <div className="border-b border-gray-300 w-[50px]"></div>
            </div>
            <div className="text-center text-gray-400 mb-5">
              <em className="text-light-gray font-light leading=[21px] px-[30px]">{renderContent(testimonial.testimonial.json.content)}</em>
            </div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-center text-gray-400">({testimonial.product})</p>
          </div>
        ))
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
}

