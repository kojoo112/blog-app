import React from "react";
import { getFeaturedPostList, getPostDataByPath } from "@/service/post";
import MarkdownViewer from "@/components/MarkdownViewer";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const { title, description } = await getPostDataByPath(slug);
  return {
    title,
    description,
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const {
    title, //
    description,
    date,
    content,
    path,
    previous,
    next,
  } = await getPostDataByPath(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content}></MarkdownViewer>
      </section>
      <section className="flex shadow-md">
        {previous && <AdjacentPostCard post={previous} type="previous" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export async function generateStaticParams() {
  const postList = await getFeaturedPostList();
  return postList.map((post) => ({
    slug: post.path,
  }));
}

export default PostPage;
