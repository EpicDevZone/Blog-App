import React from "react";
import Button from "./Button";
import Link from "next/link";

const PostCard = ({ title, author, date, category, content, comments, id }) => {
  return (
    <div className=" flex flex-col items-center justify-center border-2 border-white gap-5 px-4 py-3 ">
      <h1 className=" text-3xl font-semibold ">{title}</h1>
      <div className="flex gap-10 my-4 ">
        <h3>{author}</h3>
        <h3>{date}</h3>
        <h3>{category}</h3>
      </div>
      <p className=" text-lg font-semibold text-center ">{content}</p>
      <Link
        className=" bg-white border-2 border-black text-black px-4 py-2 rounded-2xl"
        href={`/user/${author}/posts/${id}`}
      >
        Read More...
      </Link>
    </div>
  );
};

export default PostCard;
  