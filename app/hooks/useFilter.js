

import { useState } from "react";
import { posts } from "../lib/posts";

export function useFilter() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter.toLowerCase());

  return {
    filteredPosts,
    setActiveFilter,
    activeFilter,
  };
}
