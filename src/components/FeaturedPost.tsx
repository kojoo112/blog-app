import React from "react";
import PostGrid from "@/components/PostGrid";
import { getFeaturedPostList } from "@/service/post";

const FeaturedPost = async () => {
  const postList = await getFeaturedPostList();

  return (
    <section className="px-3">
      <h2 className="text-lg font-semibold">Featured Posts</h2>
      <PostGrid postList={postList} />
    </section>
  );
};

export default FeaturedPost;
