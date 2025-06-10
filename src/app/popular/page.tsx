import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function PopularPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Artificial Organs Revolution",
      description: "Lab-grown organs using stem cells and bioprinting technology promise to eliminate transplant waiting lists.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Robert Chang",
      readTime: "12 min",
      views: "68K",
      access: "free",
      category: "Innovation"
    },
    {
      id: '2',
      title: "AI in Drug Discovery",
      description: "Machine learning algorithms accelerate drug development by predicting molecular behavior and interactions.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Maria Garcia",
      readTime: "10 min",
      views: "62K",
      access: "free",
      category: "Technology"
    },
    {
      id: '3',
      title: "Brain-Computer Interface Success",
      description: "Direct neural interface enables paralyzed patients to control digital devices with thoughts.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. John Smith",
      readTime: "11 min",
      views: "59K",
      access: "free",
      category: "Research"
    },
    {
      id: '4',
      title: "Quantum Computing in Medicine",
      description: "Quantum algorithms revolutionize protein folding predictions and drug interaction simulations.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "March 12, 2024",
      author: "Dr. Sarah Lee",
      readTime: "9 min",
      views: "55K",
      access: "free",
      category: "Technology"
    },
    {
      id: '5',
      title: "Personalized Cancer Vaccines",
      description: "mRNA technology enables development of individualized cancer treatments with unprecedented success rates.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      date: "March 11, 2024",
      author: "Dr. Michael Chen",
      readTime: "13 min",
      views: "52K",
      access: "free",
      category: "Research"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-pink-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
          Most Popular Articles
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover our most-read medical breakthroughs and innovations
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