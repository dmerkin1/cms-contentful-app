import ContentfulImage from "@/lib/contentful-image";
import Card from "@/components/cards";
import TestimonialCarousel from "@/components/testimonials";
import Link from "next/link";
import { getHeroImage, getAllTestimonials } from "@/lib/api";
import { contentfulLoader } from "@/lib/contentful-image";
import HowWeWork from "@/components/how-we-work";

export default async function Page() {
  const heroImage = await getHeroImage();
  const testimonials = await getAllTestimonials();

  return (
    <div className="relative">
      {heroImage && (
        <div className="relative">
          {heroImage?.image?.image?.url && (
            <div className="w-full h-[416px] sm:h-[310px] md:h-[461px] xl:h-[591px]">
              <ContentfulImage
                loader={contentfulLoader}
                priority
                width={1000}
                height={1000}
                src={heroImage.image.image.url}
                alt={heroImage.image.altText}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="absolute inset-0 flex flex-col justify-center p-4 text-white md:pl-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2">
                <div className="md:pl-40 md:pr-4">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl leading-[1] font-bold text-center md:text-left mb-5 max-w-screen-lg">
                    {heroImage?.headline}
                  </h1>
                  <p className="md:text-left text-center text-xl font-thin text-[18px] lg:text-[22px] lg:leading-[36px] mb-10">
                    {heroImage?.subText?.json?.content[0]?.content[0]?.value}
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
              <div className="md:w-1/2 flex flex-col items-start gap-4 pt-4 md:pt-0"></div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center mt-10">
        <Card />
      </div>
      <HowWeWork />
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
