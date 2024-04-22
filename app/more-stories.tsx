import Link from "next/link";
import Avatar from "@/app/avatar";
import DateComponent from "@/app/date";
import CoverImage from "@/app/cover-image";
import CategoryComponent from "@/app/category";

function PostPreview({
  title,
  alt,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categoryName,
}: {
  title: string;
  alt: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  categoryName: string;
}) {
  return (
    <div className="px-5">
      <div className="mb-5">
        <CoverImage
          alt={`Cover Image for ${title}`}
          title={title}
          url={coverImage.url}
        />
      </div>
      <h3 className="text-3xl font-black text-[22px] leading-[26px] lg:text-[26px] lg:leading-[31px] xl:text-[30px] xl:leading-[38px]">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-center text-light-gray leading-[24px] gap-[3px] lg:gap-[22px] mt-[8px]">
        <DateComponent dateString={date} />
        <span className="h-[18px] border-l hidden md:block"></span>
        <Avatar name={author.name} showImage={false}/>
        <span className="h-[18px] border-l hidden md:block"></span>
        <CategoryComponent categoryName={categoryName} />
      </div>
      <hr className="mt-[18px]" />
      <p className="w-full max-h-[104px] xl:max-h-[78px] overflow-hidden mt-[18px] text-gray-500 font-light leading-[26px]">
        {excerpt}
      </p>
      <button className="btn text-lg whitespace-nowrap text-hover-blue py-2 px-8 border rounded border-hover-blue text-md mt-[29px] mb-[50px] hover:bg-hover-blue hover:text-white">
        <Link href={`/posts/${slug}`}>Read More</Link>
      </button>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <div>
        {[...morePosts]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post) => (
            <div key={post.slug}>
              <PostPreview
                key={post.slug}
                title={post.title}
                alt={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                categoryName={post.category ? post.category.categoryName : ""}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
