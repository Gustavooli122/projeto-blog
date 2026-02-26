"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
    >
      <Link href={`/post/${post.slug}`} className="relative h-48 overflow-hidden block">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/post/${post.slug}`} className="group">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.summary}
        </p>

        <Link
          href={`/post/${post.slug}`}
          className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm group hover:gap-3 transition-all mt-auto"
        >
          Ler artigo completo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
};

export default PostCard;