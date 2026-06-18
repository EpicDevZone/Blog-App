import React from "react";
import { posts } from "@/app/lib/posts";
import CommentSec from "@/app/components/CommentSec";
import Link from "next/link";

const page = async ({ params }) => {
  const { username, id } = await params;
  console.log(username, id);

  const post = posts.find((p) => p.id === id && p.author === username);
  // console.log(posts);

  if (!post) {
    return <div>No Post Found!</div>;
  }
  return (
    <div className="mt-4">
      <Link
        href={"/"}
        className="cursor-pointer border-2 px-4 py-2 rounded-2xl text-lg font-bold bg-gray-500 active:bg-gray-700  duration-150  "
      >
        Back
      </Link>
      <div className=" flex flex-col items-center justify-center border-2 border-white mt-3 gap-5 px-4 py-3 ">
        <h1 className=" text-3xl font-semibold ">{post.title}</h1>
        <div className="flex gap-10 my-4 ">
          <h3>{post.author}</h3>
          <h3>{post.date}</h3>
          <h3>{post.category}</h3>
        </div>
        <p className=" text-lg font-semibold text-center ">{post.content}</p>
      </div>
      <CommentSec id={id} />
    </div>
  );
};

export default page;
