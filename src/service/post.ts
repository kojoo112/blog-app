import * as fs from "fs";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  previous: Post | null;
  next: Post | null;
};

export const getPostList = cache(async (): Promise<Post[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((postList) => postList.sort((a, b) => b.date.localeCompare(a.date)));
});

export const getFeaturedPostList = async (): Promise<Post[]> => {
  return getPostList().then((postList) =>
    postList.filter((post) => post.featured)
  );
};

export const getPostDataByPath = async (path: string): Promise<PostData> => {
  const postList = await getPostList();
  const currentPost = postList.find((post) => post.path === path);

  if (!currentPost) {
    throw new Error(`${path}에 해당하는 포스트를 찾을 수 없음.`);
  }

  const index = postList.indexOf(currentPost);
  const previous = index > 0 ? postList[index - 1] : null;
  const next = index < postList.length - 1 ? postList[index + 1] : null;

  const content = await fs.promises.readFile(
    `${process.cwd()}/src/data/posts/${path}.md`,
    "utf-8"
  );

  return {
    ...currentPost,
    content,
    previous,
    next,
  };
};
