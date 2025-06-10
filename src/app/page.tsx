import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';
import Link from 'next/link';

export default function HomePage() {
  // This would typically come from an API or database
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "AI-Powered Medical Diagnostics",
      description: "Revolutionary AI system achieves breakthrough in early disease detection using quantum computing and advanced neural networks.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      readTime: "8 min",
      views: "45K",
      access: "free",
      category: "Technology"
    },
    {
      id: '2',
      title: "Nanobots in Cancer Treatment",
      description: "Microscopic robots programmed to target and eliminate cancer cells show unprecedented success in clinical trials.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. James Wilson",
      readTime: "10 min",
      views: "38K",
      access: "premium",
      category: "Research"
    },
    {
      id: '3',
      title: "Global Health Metaverse",
      description: "Virtual reality platforms revolutionize medical training and remote healthcare delivery worldwide.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. Emily Chen",
      readTime: "6 min",
      views: "32K",
      access: "free",
      category: "Digital Health"
    },
    {
      id: '4',
      title: "Bioprinted Organs Breakthrough",
      description: "3D bioprinting technology achieves major milestone with fully functional organ creation.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
      date: "March 12, 2024",
      author: "Dr. Michael Park",
      readTime: "12 min",
      views: "29K",
      access: "premium",
      category: "Innovation"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          The Future of Medicine
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Exploring breakthrough technologies and innovations shaping tomorrow's healthcare
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-16">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="text-center relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl -ml-32"></div>
        </div>
        <div className="inline-block p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">
            Stay Updated with Medical News
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our free newsletter and get the latest medical research, breakthrough technologies, and healthcare innovations delivered to your inbox
          </p>
          <Link href="/newsletter" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Subscribe for Free
          </Link>
        </div>
      </div>
    </main>
  );
} 