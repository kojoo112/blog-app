import React from "react";
import { getPostList } from "@/service/post";
import PostCard from "@/components/PostCard";
import MultiCarousel from "@/components/MultiCarousel";

const NonFeaturedPost = async () => {
  const postList = await getPostList().then((postList) =>
    postList.filter((post) => !post.featured)
  );

  return (
    <section className="my-4">
      <h2 className="text-lg font-semibold">You May Like</h2>
      <MultiCarousel>
        {postList.map((post) => {
          return <PostCard key={post.path} post={post} />;
        })}
      </MultiCarousel>
    </section>
  );
};

export default NonFeaturedPost;
