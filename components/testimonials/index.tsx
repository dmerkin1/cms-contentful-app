import TestimonialCarousel from "@/components/testimonials/testimonial-carousel.client";
import { Testimonial } from "@/lib/types";
import Title from "@/components/title";

export default async function Page({
  testimonials,
  title,
  titleSize,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="flex flex-wrap justify-center pb-10">
      <div className="mt-5">
        <Title title={title} titleSize={titleSize} />
      </div>
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
