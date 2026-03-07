"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Zap, Activity, Battery, Flame } from 'lucide-react';

const CategoryCard = ({ category, count }) => {
  const getIcon = (cat) => {
    switch (cat.toLowerCase()) {
      case 'Fundamentos': return <Activity className="w-6 h-6" />;
      case 'Produtividade': return <Zap className="w-6 h-6" />;
      case 'Carreira': return <Dumbbell className="w-6 h-6" />;
      case 'Mentalidade': return <Battery className="w-6 h-6" />; // Abstract representation
      case 'Iniciantes': return <Flame className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const getGradient = (cat) => {
    switch (cat.toLowerCase()) {
      case 'fundamentos': return 'from-blue-500 to-cyan-500';
      case 'produtividade': return 'from-yellow-400 to-orange-500';
      case 'carreira': return 'from-gray-700 to-gray-900';
      case 'mentalidade': return 'from-pink-500 to-rose-500';
      case 'iniciantes': return 'from-green-500 to-emerald-600';
      default: return 'from-purple-500 to-indigo-600';
    }
  };

  return (
    <Link href={`/category/${category}`}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-gradient-to-br ${getGradient(category)} rounded-xl p-6 text-white shadow-lg relative overflow-hidden group h-full`}
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative z-10 flex flex-col items-start h-full justify-between">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg mb-4">
            {getIcon(category)}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-1">{category}</h3>
            <p className="text-white/80 text-sm">{count} posts</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;