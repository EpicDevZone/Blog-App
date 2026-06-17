import React from "react";
import { posts } from "@/app/lib/posts";

const page = async ({ params }) => {
  const { username, id } = await params;
  const post = posts.find((p) => p.id === id && p.username === username);
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>By {post.username}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default page;
