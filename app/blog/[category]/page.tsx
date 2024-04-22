"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CategoryComponent({
  params,
  categoryName,
  author,
  date,
}: {
  params: { slug: string };
  categoryName: string;
  author: any;
  date: string;
}) {
  const pathname = usePathname();
  const { slug } = params;
  return <Link href="/blog">Back to blog</Link>;
}
