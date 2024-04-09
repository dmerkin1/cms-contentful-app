import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import Avatar from "./avatar";
import MoreStories from "./more-stories";
import Testimonials from "../lib/testimonials";

import { getAllPosts } from "@/lib/api";
import FeaturedImage from "@/lib/featured-image";

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section className="relative w-full">
      <div className="mb-8 md:mb-16 pl-0 relative w-full">
        <FeaturedImage
          title={title}
          url={coverImage.url}
          src={coverImage.src}
          alt={`Cover Image for ${title}`}
          overlayEnabled={coverImage.overlayEnabled}
        />
      </div>
      <div className="max-w-4xl w-full mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0, 3);

  return (
    <div className="mx-auto">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <div className="relative flex flex-col sm:flex-row items-center justify-center bg-gray-section p-10 w-full">
        <img
          src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image of a brain"
          className="w-full sm:w-1/3 h-64 mx-auto object-cover"
        />
        <div className="text-lg w-full sm:w-1/2 text-center mt-4 sm:mt-0">
          <p>
            This blog explores the intersection of technology and artificial
            intelligence (AI). AI is a rapidly evolving field with the potential
            advancements in AI, the possibilities seem limitless. From
            self-driving cars to personalized medicine, AI is reshaping
            industries and revolutionizing the way we live and work.
          </p>
        </div>
      </div>
      <MoreStories morePosts={morePosts} />
      <Testimonials />
    </div>
  );
}
