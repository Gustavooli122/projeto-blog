"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import PostCard from '@/app/components/PostCard';
import { usePosts } from '@/app/contexts/PostContext';
import { ArrowLeft, BookOpen } from 'lucide-react';

const CategoryPageClient = ({ categoryName }) => {
  const { getPostsByCategory } = usePosts();
  const posts = getPostsByCategory(categoryName);
  const decodedCategoryName = decodeURIComponent(categoryName);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-[#1a1a1a] pt-32 pb-16 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar para Home
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{decodedCategoryName}</h1>
            <p className="text-xl text-gray-300">
              Explore todos os nossos conteúdos sobre {decodedCategoryName.toLowerCase()} e eleve seu treino.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ops!</h2>
            <p className="text-gray-500 mb-6">Ainda não temos posts nesta categoria.</p>
            <Link href="/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Voltar ao Início
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPageClient;
