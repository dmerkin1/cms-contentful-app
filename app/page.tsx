import ContentfulImage from "@/lib/contentful-image";
import Card from "@/components/cards";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import { getHeroImage } from "@/lib/api";
import { contentfulLoader } from "@/lib/contentful-image";

export default async function Page() {
  const heroImage = await getHeroImage();

  return (
    <div className="relative">
      {heroImage && (
        <div className="relative">
          {heroImage?.image?.image?.url && (
            <div className="w-full h-[600px]">
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
                  <p className="text-lg md:text-xl font-light text-center md:text-left mb-10 max-w-screen-lg">
                    {heroImage?.subText?.json?.content[0]?.content[0]?.value}
                  </p>
                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
                    <Link href="/" passHref>
                      <button className="bg-hover-blue hover:bg-white hover:text-hover-blue py-3 px-8 rounded transition duration-300 whitespace-nowrap">
                        Our Services
                      </button>
                    </Link>
                    <Link href="/" passHref>
                      <button className="border-2 hover:bg-white hover:text-hover-blue border-white border-solid py-3 px-8 rounded transition duration-300 whitespace-nowrap">
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
      <Testimonials />
    </div>
  );
}
