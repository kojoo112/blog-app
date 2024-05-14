import React from "react";
import { getPostDataByPath } from "@/service/post";
import MarkdownViewer from "@/components/MarkdownViewer";

type Props = {
  params: { slug: string };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostDataByPath(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content}></MarkdownViewer>
    </>
  );
};

export default PostPage;
