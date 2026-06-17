import Link from "next/link";
import { posts } from "./lib/posts";

export default function Home() {
  return (
    <div className=" w-full flex flex-col gap-5 ">
      <h1 className=" text-xl font-semibold text-center">My Blog </h1>
      <div className=" flex flex-col   items-center  text-lg font-semibold gap-8   ">
        {posts.map((post) => (
          <Link key={post.id} href={`/user/${post.username}/posts/${post.id}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
