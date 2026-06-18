"use client";

import PostCard from "./components/PostCard";
import FilterPost from "./components/FilterPost";
import { useFilter } from "./hooks/useFilter";

export default function Home() {
  const { filteredPosts, setActiveFilter, activeFilter } = useFilter();
  return (
    <>
      <FilterPost
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No posts found</p>
            <p className="text-gray-400">Try another category</p>
          </div>
        )}
      </div>
    </>
  );
}
