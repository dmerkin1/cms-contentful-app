import { draftMode } from "next/headers";
import Card from "@/components/cards";

import MoreStories from "./more-stories";
import Testimonials from "../lib/testimonials";

import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(0, 3);

  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center">
        <Card />
      </div>
      {/* <div className="relative flex flex-col sm:flex-row items-center justify-center bg-gray-section p-10 w-full">
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
      </div> */}
      <MoreStories morePosts={morePosts} />
      <Testimonials />
    </div>
  );
}
