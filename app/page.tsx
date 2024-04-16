import { draftMode } from "next/headers";
import Image from "next/image";
import Card from "@/components/cards";

import MoreStories from "./more-stories";
import Testimonials from "../lib/testimonials";

import { getAllPosts, getHeroImage } from "@/lib/api";
import { contentfulLoader } from "@/lib/contentful-image";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(0, 3);
  const heroImage = await getHeroImage();
  console.log("heroImage", heroImage);

  return (
    <div className="mx-auto">
      {heroImage && (
        <div className="relative h-96 flex">
          {heroImage?.image?.image?.url && (
            <Image
              loader={contentfulLoader}
              priority
              src={heroImage.image.image.url}
              alt={heroImage.image.altText}
              width={1000}
              height={500}
              className="object-cover w-1/2 h-full"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center w-1/2 ml-auto p-4">
            <h2 className="text-white text-4xl font-bold">
              {heroImage?.headline}
            </h2>
            <p>{heroImage?.subText?.json?.content[0]?.content[0]?.value}</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        <Card />
      </div>
      <MoreStories morePosts={morePosts} />
      <Testimonials />
    </div>
  );
}
