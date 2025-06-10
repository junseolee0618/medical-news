import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function BiotechnologyPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "CRISPR Gene Therapy Success",
      description: "Breakthrough gene editing treatment shows promising results in clinical trials for genetic disorders.",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Jennifer Lee",
      readTime: "11 min",
      views: "39K",
      access: "free",
      category: "Biotechnology"
    },
    {
      id: '2',
      title: "Synthetic Biology Advances",
      description: "Engineered microorganisms produce novel therapeutic compounds for drug development.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Michael Chen",
      readTime: "9 min",
      views: "36K",
      access: "free",
      category: "Biotechnology"
    },
    {
      id: '3',
      title: "Tissue Engineering Milestone",
      description: "Lab-grown organs reach new complexity levels with advanced bioprinting techniques.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. Sarah Wilson",
      readTime: "10 min",
      views: "33K",
      access: "free",
      category: "Biotechnology"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-emerald-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6">
          Biotechnology Frontiers
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Exploring the cutting edge of biological engineering and genetic medicine
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
} 