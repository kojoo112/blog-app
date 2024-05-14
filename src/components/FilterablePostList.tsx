"use client";
import React, { useState } from "react";
import { Post } from "@/service/post";
import PostCard from "@/components/PostCard";
import PostGrid from "@/components/PostGrid";
import CategoryList from "@/components/CategoryList";

type Props = {
  postList: Post[];
  categoryList: string[];
};

const ALL_POSTS = "All Posts";

const FilterablePostList = ({ postList, categoryList }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);
  const filteredPostList =
    selectedCategory === ALL_POSTS
      ? postList
      : postList.filter((post) => post.category === selectedCategory);
  return (
    <section className="flex m-4">
      <PostGrid postList={filteredPostList} />
      <CategoryList
        categoryList={[ALL_POSTS, ...categoryList]}
        selected={selectedCategory}
        onClick={setSelectedCategory}
      />
    </section>
  );
};

export default FilterablePostList;
