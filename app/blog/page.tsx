import { draftMode } from "next/headers";
import MoreStories from "../more-stories";
import { getAllPosts } from "@/lib/api";

export default async function Page({ category }: { category?: string }) {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const filteredPosts = category
    ? allPosts.filter(
        (post) =>
          post.category?.categoryName.toLowerCase() === category.toLowerCase()
      )
    : allPosts;

  return (
    <section>
      {filteredPosts.length > 0 ? (
        <MoreStories morePosts={filteredPosts} />
      ) : (
        <p>No posts found in this category.</p>
      )}
    </section>
  );
}
