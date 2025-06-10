import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function ResearchPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Quantum Biology Breakthrough",
      description: "Scientists discover quantum effects in biological systems, opening new frontiers in medical research.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Richard Feynman",
      readTime: "13 min",
      views: "52K",
      access: "premium",
      category: "Research"
    },
    {
      id: '2',
      title: "4D Bioprinting Revolution",
      description: "New 4D bioprinting technology creates time-responsive tissue structures for advanced organ transplants.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Elena Martinez",
      readTime: "9 min",
      views: "48K",
      access: "free",
      category: "Research"
    },
    {
      id: '3',
      title: "Cellular Reprogramming Success",
      description: "Breakthrough in cellular aging reversal shows promising results in clinical trials.",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. John Smith",
      readTime: "10 min",
      views: "45K",
      access: "premium",
      category: "Research"
    },
    {
      id: '4',
      title: "AI-Powered Drug Discovery",
      description: "Machine learning algorithms identify novel drug candidates for rare diseases.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 12, 2024",
      author: "Dr. Sarah Johnson",
      readTime: "8 min",
      views: "41K",
      access: "free",
      category: "Research"
    },
    {
      id: '5',
      title: "Brain Mapping Innovation",
      description: "New high-resolution brain mapping technique reveals previously unknown neural connections.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
      date: "March 11, 2024",
      author: "Dr. Michael Brown",
      readTime: "11 min",
      views: "38K",
      access: "premium",
      category: "Research"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
          Medical Research Frontiers
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Exploring groundbreaking discoveries and innovations in medical science
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