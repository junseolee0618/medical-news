import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function TechnologyPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Holographic Surgery Interface",
      description: "Revolutionary 3D holographic system enables surgeons to interact with patient data in real-time during procedures.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Robert Chang",
      readTime: "11 min",
      views: "45K",
      access: "premium",
      category: "Technology"
    },
    {
      id: '2',
      title: "Neural Interface Breakthrough",
      description: "New brain-computer interface achieves wireless high-bandwidth neural communication.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Maria Garcia",
      readTime: "9 min",
      views: "54K",
      access: "free",
      category: "Technology"
    },
    {
      id: '3',
      title: "Quantum Medical Imaging",
      description: "Quantum sensors enable unprecedented resolution in medical imaging technology.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. James Wilson",
      readTime: "10 min",
      views: "39K",
      access: "premium",
      category: "Technology"
    },
    {
      id: '4',
      title: "AI Diagnostic Platform",
      description: "Machine learning system achieves unprecedented accuracy in disease diagnosis and treatment recommendations.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Emily Chen",
      readTime: "9 min",
      views: "42K",
      access: "premium",
      category: "Technology"
    },
    {
      id: '5',
      title: "Nanobot Medical Teams",
      description: "Swarms of coordinated nanobots perform microscopic surgical procedures with unprecedented precision.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 11, 2024",
      author: "Dr. Robert Chang",
      readTime: "12 min",
      views: "43K",
      access: "premium",
      category: "Technology"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-6">
          Medical Technology Innovation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover cutting-edge technologies transforming healthcare delivery
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