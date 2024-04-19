import HeroSection from "@/components/hero/hero-carousel.client";
import Card from "@/components/cards";
import TestimonialCarousel from "@/components/testimonials";
import { getHeroImage, getAllTestimonials } from "@/lib/api";
import HowWeWork from "@/components/how-we-work";

export default async function Page() {
  const heroImage = [await getHeroImage()];
  const testimonials = await getAllTestimonials();

  return (
    <div className="relative">
      <HeroSection heroImage={heroImage} />
      <div className="flex flex-wrap justify-center mt-10">
        <Card />
      </div>
      <HowWeWork />
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
