import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticlePreview } from '@/types/article';

export default function PolicyPage() {
  const articles: ArticlePreview[] = [
    {
      id: '1',
      title: "Global AI Healthcare Framework",
      description: "International coalition establishes comprehensive guidelines for AI implementation in healthcare systems.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Rachel Thompson",
      readTime: "10 min",
      views: "47K",
      access: "premium",
      category: "Policy"
    },
    {
      id: '2',
      title: "Digital Health Data Standards",
      description: "New global standards for medical data sharing and privacy protection in the digital age.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      date: "March 14, 2024",
      author: "Dr. William Park",
      readTime: "8 min",
      views: "43K",
      access: "free",
      category: "Policy"
    },
    {
      id: '3',
      title: "Telemedicine Regulation Update",
      description: "Comprehensive framework for cross-border virtual healthcare delivery and remote medical services.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      date: "March 13, 2024",
      author: "Dr. Sophie Lee",
      readTime: "9 min",
      views: "39K",
      access: "premium",
      category: "Policy"
    },
    {
      id: '4',
      title: "Genetic Privacy Protection",
      description: "New legislation addresses privacy concerns in genetic testing and personalized medicine.",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?w=800&auto=format&fit=crop",
      date: "March 12, 2024",
      author: "Dr. Mark Johnson",
      readTime: "11 min",
      views: "36K",
      access: "free",
      category: "Policy"
    },
    {
      id: '5',
      title: "Universal Healthcare Innovation",
      description: "Revolutionary policy framework integrates advanced technologies into universal healthcare systems.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop",
      date: "March 11, 2024",
      author: "Dr. Anna Chen",
      readTime: "12 min",
      views: "34K",
      access: "premium",
      category: "Policy"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-6">
          Healthcare Policy Evolution
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Shaping the future of healthcare through innovative policies and regulations
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