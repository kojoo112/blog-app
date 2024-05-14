import * as fs from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export const getPostList = async (): Promise<Post[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse);
};

export const getFeaturedPostList = async (): Promise<Post[]> => {
  return getPostList()
    .then((postList) => postList.filter((post) => post.featured))
    .then((postList) => postList.sort((a, b) => b.date.localeCompare(a.date)));
};

export const getNotFeaturedPostList = async (): Promise<Post[]> => {
  return getPostList()
    .then((postList) => postList.filter((post) => !post.featured))
    .then((postList) => postList.sort((a, b) => b.date.localeCompare(a.date)));
};

export const getPostDataByPath = async (path: string): Promise<PostData> => {
  const metadata = await getPostList().then((postList) =>
    postList.find((post) => post.path === path)
  );

  if (!metadata) {
    throw new Error(`${path}에 해당하는 포스트를 찾을 수 없음.`);
  }

  const content = await fs.promises.readFile(
    `${process.cwd()}/src/data/posts/${path}.md`,
    "utf-8"
  );

  return {
    ...metadata,
    content,
  };
};
