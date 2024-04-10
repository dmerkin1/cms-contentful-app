import { draftMode } from "next/headers";
import MoreStories from "../more-stories";

import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(0, 11);

  return (
    <section className="container mx-auto">
      {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
    </section>
  );
}
