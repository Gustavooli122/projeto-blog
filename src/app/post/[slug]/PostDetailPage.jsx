"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import PostCard from '@/app/components/PostCard';
import { usePosts } from '@/app/contexts/PostContext';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import Markdown from '@/app/components/Markdown';


const PostDetailClient = ({ slugs }) => {
  const { getPostBySlug, getPostsByCategory } = usePosts();

  const post = getPostBySlug(slugs);


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post não encontrado</h2>
          <Link href="/" className="text-green-600 hover:underline">
            Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-md mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-200 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-green-400" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-400" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
        <p className="text-xl text-gray-600 mb-8 border-l-4 border-green-500 pl-4">
          {post.summary}
        </p>

        <Markdown contents={post.content}/>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-2">
          <Tag className="w-5 h-5 text-gray-400" />
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Relacionados */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {relatedPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailClient;
