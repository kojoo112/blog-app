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
    <Link
      href={`/posts/${path}`}
      className="shadow-md rounded overflow-hidden text-center"
    >
      <Image className="aspect-[4/3]" alt={title} src={postImage} />
      <div className="p-2">
        <p className="text-end">{date}</p>
        <h3 className="font-bold">{title}</h3>
        <p className="w-full truncate">{description}</p>
        <span className="px-2 bg-sky-100">{category}</span>
      </div>
    </Link>
  );
};

export default PostCard;
