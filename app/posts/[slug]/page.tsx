import { draftMode } from "next/headers";

import MoreStories from "@/app/more-stories";
import Avatar from "@/app/avatar";
import Category from "@/app/category";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import ContentfulImage, { contentfulLoader } from "@/lib/contentful-image";
import Sidebar from "@/app/sidebar";

export async function getStaticPaths() {
  const allPosts = await getAllPosts(false);
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export default async function PostPage({
  params,
  categoryName,
  author,
}: {
  params: { slug: string };
  categoryName: string;
  author: any;
  date: string;
  morePosts: any[];
}) {
  console.log("Slug: ", params.slug)
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);
  return (
    <div className="mx-auto">
      <article>
        <div className="mb-8 sm:mx-0 md:mb-16 flex justify-center items-center relative">
          <ContentfulImage
            src="https://images.ctfassets.net/fxzbhh204zob/u93jLCEL1TqeoQUAY1dha/7d8f1ac0f29fbd1cf5d33d4ce0827dae/blog-post-banner.jpg"
            alt={"blog-post-banner"}
            width={1920}
            height={1080}
            loader={contentfulLoader}
            className="w-full h-48 object-cover object-center pb-5"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[28px] leading-[34px] md:text-[36px] md:leading-[43px] lg:text-[46px] lg:leading-[55px] font-bold">
            Blog Post
          </h2>
          <hr
            className="absolute w-[50px] lg:w-[68px] border-white h-0.5 left-1/2 transform -translate-x-1/2 top-[calc(50%+2.5em)]"
            style={{ borderBottomWidth: "4px" }}
          />
        </div>
        <div className="px-4 sm:px-0 container mx-auto flex flex-wrap">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-black text-[22px] leading-[26px] lg:text-[26px] lg:leading-[31px] xl:text-[30px] xl:leading-[38px]">
              {post.title}
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center text-light-gray leading-[24px] gap-[3px] lg:gap-[22px] mt-[8px]">
              <span className="h-[18px] border-l hidden md:block"></span>
              <Avatar name={author?.name} showImage={false} />
              <span className="h-[18px] border-l hidden md:block"></span>
              <Category categoryName={categoryName} />
            </div>
            <Markdown content={post.content} />
          </div>
          <div className="mx-auto max-w-2xl w-full md:w-1/3">
            <div className="prose">
              <Sidebar categories={[]} />
            </div>
          </div>
        </div>
      </article>

      <hr className="border-accent-2 mt-28 mb-24" />
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
