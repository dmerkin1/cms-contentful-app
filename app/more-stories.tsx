import Link from "next/link";
import Avatar from "@/app/avatar";
import DateComponent from "@/app/date";
import CoverImage from "@/app/cover-image";

function PostPreview({
  title,
  alt,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  alt: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          alt={`Cover Image for ${title}`}
          title={title}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h3 className="text-xl font-bold mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-gray-400">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="px-10">
      <h2 className="my-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight text-center">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-5">
        {[...morePosts]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg p-3 shadow-md overflow-hidden"
            >
              <PostPreview
                key={post.slug}
                title={post.title}
                alt={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
