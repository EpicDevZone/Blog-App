import Link from "next/link";
import { posts } from "./lib/posts";
import PostCard from "./components/PostCard";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostCard
          key={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            category={post.category}
            content={post.content}
            comments={post.comments}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
