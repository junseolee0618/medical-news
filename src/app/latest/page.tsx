import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function LatestPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Brain-Computer Interface Breakthrough",
      description: "New neural implant technology allows direct communication between human brain and artificial intelligence systems.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Stephen Hawking",
      readTime: "12 min",
      views: "65K",
      access: "free",
      category: "Technology"
    },
    {
      id: '2',
      title: "Holographic Surgery Assistant",
      description: "Augmented reality surgical system provides real-time 3D anatomical overlays and AI-guided procedure assistance.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Jennifer Doudna",
      readTime: "10 min",
      views: "58K",
      access: "free",
      category: "Research"
    },
    {
      id: '3',
      title: "DNA Repair Breakthrough",
      description: "CRISPR-based genetic repair system shows promise in treating hereditary diseases at the molecular level.",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. David Anderson",
      readTime: "8 min",
      views: "52K",
      access: "free",
      category: "Technology"
    },
    {
      id: '4',
      title: "Smart Hospital Revolution",
      description: "IoT-enabled medical facilities showcase the future of automated patient care and resource management.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop",
      date: "March 12, 2024",
      author: "Dr. Marie Curie",
      readTime: "11 min",
      views: "49K",
      access: "free",
      category: "Innovation"
    },
    {
      id: '5',
      title: "Quantum Drug Discovery",
      description: "Quantum computing accelerates drug development by simulating molecular interactions with unprecedented accuracy.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 11, 2024",
      author: "Dr. William Watson",
      readTime: "9 min",
      views: "45K",
      access: "free",
      category: "Research"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          Latest Medical News
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Stay updated with the most recent breakthroughs in medical science
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