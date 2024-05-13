import React from "react";
import Image from "next/image";
import { Post } from "@/service/post";
import Link from "next/link";

const PostCard = ({
  post: { title, description, date, category, path },
}: {
  post: Post;
}) => {
  const postImage = require(`../../public/images/posts/${path}.png`);

  return (
    <Link href={`/posts/${path}`}>
      <article className="shadow-md hover:shadow-xl rounded-md overflow-hidden text-center">
        <Image
          className="aspect-[4/3]"
          alt={title}
          src={postImage}
          priority={false}
        />
        <div className="p-2">
          <p className="text-end text-gray-700">{date}</p>
          <h3 className="font-bold">{title}</h3>
          <p className="w-full truncate">{description}</p>
          <span className="text-sm rounded-lg px-2 bg-sky-100">{category}</span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
