import { draftMode } from "next/headers";
import DateComponent from "@/app/date";

import Avatar from "@/app/avatar";
import Category from "@/app/category";
import Date from "@/app/date";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import ContentfulImage, { contentfulLoader } from "@/lib/contentful-image";
import { BlogPost, RelatedPostsProps } from "@/lib/types";
import Link from "next/link";

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  
  if (!posts.length) {
    return (
      <>
        <h2 className="font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[31px] lg:text-[30px] lg:leading-[38px] mb-6 px-5">
          Related Posts
        </h2>
        <p className="px-5">No related posts available.</p>
      </>
    );
  }

  return (
    <div className="flex flex-col max-w-full my-8 px-5">
      <h2 className="font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[31px] lg:text-[30px] lg:leading-[38px] mb-6">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: BlogPost) => (
          <article key={post.slug} className="rounded-lg p-4 flex items-start">
            <ContentfulImage
              width={60}
              height={60}
              src={post.coverImage.url}
              alt={post.title}
              loader={contentfulLoader}
              className="w-[60px] h-[60px] object-cover rounded-full"
            />
            <div className="flex flex-col pl-5">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-3 h-3 mr-5 rotate-180 text-hover-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  ></path>
                </svg>
                <DateComponent
                  dateString={post.date}
                  formatString="M/d/yyyy"
                  showLabel={false}
                />
              </div>
              <Link
                href={`/post/${post.slug}`}
                className="ml-8 mt-[4px] max-w-[200px] max-h-[40px] hover:text-hover-blue transition-all hover:cursor-pointer"
              >
                {post.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const allPosts = await getAllPosts(false);
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: true,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
  morePosts: any[];
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(
    params.slug,
    isEnabled,
    true
  );
  return (
    <div className="mx-auto mb-5">
      <article className="px-5 sm:mx-0">
        <ContentfulImage
          src={post.coverImage.url}
          alt={post.title}
          width={1920}
          height={1080}
          loader={contentfulLoader}
          className="w-full h-96 object-cover object-center"
        />
        <div className="px-4 sm:px-0 container mx-auto flex flex-wrap">
          <h2 className="text-3xl font-black text-[22px] leading-[26px] lg:text-[26px] lg:leading-[31px] xl:text-[30px] xl:leading-[38px] my-3">
            {post.title}
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center text-light-gray leading-[24px] gap-[3px] lg:gap-[22px] mt-[8px]">
            <Date dateString={post.date} />
            <span className="h-[18px] border-l hidden md:block"></span>
            <Avatar name={post.author.name} showImage={false} />
            <span className="h-[18px] border-l hidden md:block"></span>
            <Category categoryName={post.category.categoryName} />
          </div>
          <div className="w-full mt-[18px] text-gray-500 font-light leading-[26px]">
            <hr className="border-accent-2 my-4" />
            <Markdown content={post.content} />
          </div>
        </div>
      </article>

      <hr className="border-accent-2 my-10" />
      <RelatedPosts posts={morePosts} />
    </div>
  );
}
