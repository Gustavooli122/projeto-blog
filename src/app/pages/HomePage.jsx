"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import PostCard from '../components/PostCard';
import CategoryCard from '../components/CategoryCard';
import { usePosts } from '../contexts/PostContext';
import { Search, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';



const HomePage = () => {
  const { posts, getFeaturedPosts, searchPosts, getPostsByCategory } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = getFeaturedPosts();
  const fixedCategories = ['Fundamentos', 'Produtividade', 'Mentalidade', 'Erros comuns','Carreira'];
  
  const displayedPosts = searchQuery ? searchPosts(searchQuery) : posts;
  const recentPosts = posts.slice(0, 6);

  return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">

            <img
              src="imgs/computers.png"
              alt="Home workout setup"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl  md:text-7xl font-bold text-white mb-6 tracking-tight">
                Transforme Seu Estudo em  <br />
                <span className="text-cyan-400">Evolução Real na Programação</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
               Guias práticos, estratégias e mentalidade para aprender de forma inteligente e consistente.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative group">
                <input
                  type="text"
                  placeholder="O que você quer treinar hoje?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-6 pl-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white/20 transition-all shadow-xl"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results (if searching) */}
        {searchQuery && (
           <section className="py-16 px-4 max-w-7xl mx-auto">
             <h2 className="text-2xl font-bold mb-8">Resultados para "{searchQuery}"</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {displayedPosts.map(post => <PostCard key={post.id} post={post} />)}
               {displayedPosts.length === 0 && <p>Nenhum post encontrado.</p>}
             </div>
           </section>
        )}

        {!searchQuery && (
          <>
            {/* Categories Section */}
            <section className="py-16 px-4 bg-white relative -mt-20 z-20 rounded-t-3xl shadow-xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Explore por Categorias</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {fixedCategories.map((cat) => (
                    <CategoryCard 
                      key={cat} 
                      category={cat} 
                      count={getPostsByCategory(cat).length} 
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Destaques da Semana</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Os artigos mais lidos e recomendados por nossos especialistas para turbinar seus resultados.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <PostCard post={post} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recent Posts */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Últimas Publicações</h2>
                  <div className="hidden md:block w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-green-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

      <Footer/>
      </div>
  
  );
};

export default HomePage;