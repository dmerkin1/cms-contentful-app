import TestimonialCarousel from "@/components/testimonials/testimonial-carousel.client";
import { Testimonial } from "@/lib/types";

export default async function Page({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full text-center mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight m-5">
        Testimonials
      </h2>
      <div className="w-full flex justify-center">
        <hr
          className="w-[50px] lg:w-[68px] mb-[40px] md:mb-[60px] border-hover-blue"
          style={{ borderBottomWidth: "4px" }}
        />
      </div>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
