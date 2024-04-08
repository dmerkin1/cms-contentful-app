import { GetStaticPropsContext } from "next";
import { getAllPosts, getPreviewPostBySlug, getPostAndMorePosts } from "./api";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = Array.isArray(params?.slug)
    ? params.slug.join("/")
    : params?.slug ?? "";
  const post = await getPreviewPostBySlug(slug);
  const allPosts = await getAllPosts(false);
  const postAndMorePosts = await getPostAndMorePosts(slug, false);

  return {
    props: {
      post,
      allPosts,
      postAndMorePosts,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts(false);
  const paths = allPosts.map((post: any) => ({
    params: {
      slug: post.slug.split("/"),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
