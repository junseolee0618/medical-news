import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function DigitalHealthPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "AI-Powered Health Monitoring",
      description: "Smart wearables with advanced AI algorithms revolutionize personal health tracking and early warning systems.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. David Kim",
      readTime: "8 min",
      views: "34K",
      access: "free",
      category: "Digital Health"
    },
    {
      id: '2',
      title: "Virtual Reality Therapy",
      description: "VR-based therapeutic interventions show promising results in mental health treatment and rehabilitation.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. Emily Chen",
      readTime: "7 min",
      views: "31K",
      access: "free",
      category: "Digital Health"
    },
    {
      id: '3',
      title: "Remote Patient Monitoring",
      description: "IoT-enabled healthcare devices transform chronic disease management and patient care.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. Robert Park",
      readTime: "9 min",
      views: "28K",
      access: "free",
      category: "Digital Health"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6">
          Digital Health Innovation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Exploring the intersection of technology and healthcare delivery
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