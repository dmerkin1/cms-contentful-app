"use client";

import { useRouter } from "next/navigation";

export default function CategoryComponent({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const { category } = router?.query;
  console.log("ANYTHING");
  console.log("category: ", category);
  return <div>{category}</div>;
}
