"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ categories }: { categories: string[] }) {
  const router = useRouter();

  return (
    <aside className="px-5">
      <h4 className="font-bold text-xl mb-4">Categories</h4>
      <ul className="mt-[12px]">
        {categories.map((category: string, index: number) => (
          <li
            key={index}
            className="text-gray-400 hover:text-hover-blue flex items-center transition-all px-[7px] py-[12px] border-b md:w-[375px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            <Link
              href={`/blog/${category.toLowerCase()}`}
              className="leading-[24px] whitespace-nowrap"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
