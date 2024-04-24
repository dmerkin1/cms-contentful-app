import { getAllPosts } from "@/lib/api";

export async function getFilteredPosts(category?: string) {
  const allPosts = await getAllPosts();
  if (!category) return allPosts;

  return allPosts.filter(
    (post) =>
      post.category?.categoryName.toLowerCase() === category.toLowerCase()
  );
}
