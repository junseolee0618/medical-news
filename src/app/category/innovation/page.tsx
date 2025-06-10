import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function InnovationPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Smart Medical Implants",
      description: "Next-generation implantable devices with real-time monitoring and adjustment capabilities.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Thomas Anderson",
      readTime: "10 min",
      views: "42K",
      access: "free",
      category: "Innovation"
    },
    {
      id: '2',
      title: "3D-Printed Medical Devices",
      description: "Custom-made medical devices and prosthetics revolutionize personalized healthcare solutions.",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Lisa Wang",
      readTime: "8 min",
      views: "38K",
      access: "free",
      category: "Innovation"
    },
    {
      id: '3',
      title: "Robotic Surgery Systems",
      description: "Advanced robotic platforms enhance surgical precision and patient outcomes.",
      image: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. James Martinez",
      readTime: "12 min",
      views: "35K",
      access: "free",
      category: "Innovation"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
          Medical Innovation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discovering revolutionary technologies shaping the future of healthcare
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