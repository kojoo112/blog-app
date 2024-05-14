import React from "react";
import { getPostList } from "@/service/post";
import FilterablePostList from "@/components/FilterablePostList";

const PostsPage = async () => {
  const postList = await getPostList();
  const categoryList = [...new Set(postList.map((post) => post.category))];

  return <FilterablePostList postList={postList} categoryList={categoryList} />;
};

export default PostsPage;
