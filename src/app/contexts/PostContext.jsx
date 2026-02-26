"use client";
import { createContext, useContext } from "react";
import { posts, getPostBySlug, getPostsByCategory} from "../lib/posts.js"

const PostContext = createContext();

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within PostProvider');
  }
  return context;
};



export const PostProvider = ({ children }) => {

  const searchPosts = (query) => {
    if (!query) return posts;
    const lowerQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) || 
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  const getFeaturedPosts = () => posts.slice(0, 3);
  
  const getAllCategories = () => {
    const categories = new Set(posts.map(p => p.category));
    return Array.from(categories);
  };

  return (
    <PostContext.Provider value={{
      posts,
      getPostBySlug,
      getPostsByCategory,
      searchPosts,
      getFeaturedPosts,
      getAllCategories
    }}>
      {children}
    </PostContext.Provider>
  );
};