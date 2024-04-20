import { draftMode } from "next/headers";

import MoreStories from "@/app/more-stories";
import Avatar from "@/app/avatar";
import Date from "@/app/date";
import FeaturedImage from "@/lib/featured-image";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);
  console.log("overlayEnabled", post.overlayEnabled)
  return (
    <div className="mx-auto">
      <article>
        <div className="mb-8 sm:mx-0 md:mb-16 flex justify-center items-center">
          <FeaturedImage
            title={post.title}
            url={post.coverImage.url}
            src={post.coverImage.src}
            alt={`Cover Image for ${post.title}`}
            overlayEnabled={post.coverImage.overlayEnabled}
          />
        </div>
        <div className="px-4 sm:px-0">
          <h2 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
            {post.title}
          </h2>
          <div className="flex justify-center items-center mb-12">
            {post.author && (
              <div className="flex items-center">
                <Avatar name={post.author.name} picture={post.author.picture} />
                <div className="ml-4">
                  <div className="text-lg">
                    <Date dateString={post.date} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="prose">
              <Markdown content={post.content} />
            </div>
          </div>
        </div>
      </article>

      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreStories morePosts={morePosts.slice(0, 3)} />
    </div>
  );
}
