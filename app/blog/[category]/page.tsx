"use client"

import { useRouter } from "next/navigation";
// import { getAllPosts } from "@/lib/api";

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts(false);
//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default function CategoryPage({
  params,
}: {
  params: { slug: string};
}) {
  const router = useRouter();

  if (!router.isReady) return null;

  const { category } = router.query;
  console.log("category: ", category);
  return <div>Category {category}</div>;
}
