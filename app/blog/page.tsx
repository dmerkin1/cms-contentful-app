import MoreStories from "@/app/more-stories";
import { getAllPosts } from "@/lib/api";

interface CategoryPageProps {
  category?: string;
}

export default async function Page({ category }: CategoryPageProps){
  const allPosts = await getAllPosts();
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
