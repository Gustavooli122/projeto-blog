"use client";
import  { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
const pathname = usePathname();

const isActive = (path) => pathname === path;

  const categories = ['Fundamentos', 'Produtividade', 'Mentalidade', 'Iniciantes','Carreira'];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-gray-800 shadow-lg text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-blue-700 to-emerald-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Evolução <span className="text-cyan-400">dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium hover:text-green-400 transition-colors ${isActive('/') ? 'text-green-400' : 'text-gray-300'}`}>
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Categorias <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 bg-[#252525] border border-gray-700 rounded-lg shadow-xl overflow-hidden py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/category/${cat}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-green-400 transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className={`text-sm font-medium hover:text-green-400 transition-colors ${isActive('/about') ? 'text-green-400' : 'text-gray-300'}`}>
              Sobre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg">Home</Link>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Categorias</div>
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${cat}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-8 py-2 text-sm text-gray-400 hover:text-green-400"
                  >
                    {cat}
                  </Link>
                ))}
                <div className="border-t border-gray-800 my-2 pt-2">
                   <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-green-400 rounded-lg">Sobre</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;