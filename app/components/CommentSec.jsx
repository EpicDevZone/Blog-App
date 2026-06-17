import React from "react";
import { posts } from "../lib/posts";

const CommentSec = ({ id }) => {
  const post = posts.find((p) => p.id === id);
  if (!post) return <div>Post not found</div>;
  return (
    <div className="   w-full flex flex-col gap-4 py-5  items-center mt-6 border-2 ">
      <h1 className=" text-3xl font-bold "> Comment Section </h1>
      <div>
        {post.comments.map((comment) => (
          <div className=" flex flex-col gap-3" key={comment.id}>
            <h1 className=" bg-amber-300 text-gray-700 uppercase text-center border-2 py-2 rounded-3xl  ">
              {comment.author}
            </h1>
            <p className=" text-center">{comment.text}</p>
            <div className="   text-center w-full h-1 bg-white border mb-4 "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSec;
