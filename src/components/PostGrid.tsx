import React from "react";
import { Post } from "@/service/post";
import PostCard from "@/components/PostCard";

type Props = {
  postList: Post[];
};

const PostGrid = ({ postList }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
        {postList.map((post) => {
          return <PostCard key={post.path} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostGrid;
