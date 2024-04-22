import { draftMode } from "next/headers";
import MoreStories from "../more-stories";

import { getAllPosts } from "@/lib/api";
import Sidebar from "../sidebar";
import ContentfulImage, { contentfulLoader } from "@/lib/contentful-image";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(0, 11);
  const categories = Array.from(
    new Set(
      morePosts.map((post) => post.category?.categoryName).filter(Boolean)
    )
  );

  return (
    <>
      <section className="relative">
        <ContentfulImage
          src="https://images.ctfassets.net/fxzbhh204zob/u93jLCEL1TqeoQUAY1dha/7d8f1ac0f29fbd1cf5d33d4ce0827dae/blog-post-banner.jpg"
          alt={"blog-post-banner"}
          width={1920}
          height={1080}
          loader={contentfulLoader}
          className="w-full h-48 object-cover object-center pb-5"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[28px] leading-[34px] md:text-[36px] md:leading-[43px] lg:text-[46px] lg:leading-[55px] font-bold">
          Blog
        </h2>
        <hr
          className="absolute w-[50px] lg:w-[68px] border-white h-0.5 left-1/2 transform -translate-x-1/2 top-[calc(50%+2.5em)]"
          style={{ borderBottomWidth: "4px" }}
        />
      </section>
      <section className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3">
          {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
        </div>
        <div className="w-full md:w-1/3">
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
