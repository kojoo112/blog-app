import * as fs from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export const getPostList = async (): Promise<Post[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse);
};

export const getFeaturedPostList = async (): Promise<Post[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((postList) => postList.filter((post) => post.featured))
    .then((postList) => postList.sort((a, b) => b.date.localeCompare(a.date)));
};

export const getNotFeaturedPostList = async (): Promise<Post[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((postList) => postList.filter((post) => !post.featured))
    .then((postList) => postList.sort((a, b) => b.date.localeCompare(a.date)));
};

export const getCategoryList = async (): Promise<string[]> => {
  return fs.promises
    .readFile(`${process.cwd()}/src/data/posts.json`, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((postList) => [...new Set(postList.map((post) => post.category))])
    .then<string[]>((categoryList) => {
      categoryList.unshift("All Posts");
      return categoryList;
    });
};
