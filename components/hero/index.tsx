import HeroCarousel from "@/components/hero/hero-carousel.client";
import { HeroCarouselProps } from "@/lib/types";

const HeroSlider = ({ heroImage }: HeroCarouselProps) => {
  return <HeroCarousel heroImage={heroImage} />;
};

export default HeroSlider;
