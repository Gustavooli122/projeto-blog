"use client";
import  { createContext, useContext, useState } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};

const initialArticles = [

];

export const ArticlesProvider = ({ children }) => {
  const [articles] = useState(initialArticles);

  const getArticleById = (id) => articles.find(a => a.id === id);
  
  const getArticlesByCategory = (category) => {
    if (!category || category === 'Todos') return articles;
    return articles.filter(a => a.category === category);
  };

  const getRelatedArticles = (articleIds) => {
    if (!articleIds || articleIds.length === 0) return [];
    return articles.filter(article => articleIds.includes(article.id));
  };

  const getAllCategories = () => ['Todos', ...new Set(articles.map(a => a.category))];

  return (
    <ArticlesContext.Provider value={{ 
      articles, 
      getArticleById, 
      getArticlesByCategory, 
      getAllCategories,
      getRelatedArticles
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};