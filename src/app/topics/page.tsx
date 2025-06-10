import React from 'react';
import Link from 'next/link';

interface Topic {
  name: string;
  description: string;
  path: string;
  icon: string;
  articleCount: number;
  gradient: string;
}

export default function TopicsPage() {
  const topics: Topic[] = [
    {
      name: "Research",
      description: "Latest breakthroughs in medical research and scientific discoveries",
      path: "/category/research",
      icon: "🔬",
      articleCount: 24,
      gradient: "from-purple-400 to-blue-500"
    },
    {
      name: "Technology",
      description: "Cutting-edge medical technologies and digital health innovations",
      path: "/category/technology",
      icon: "🤖",
      articleCount: 18,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "Policy",
      description: "Healthcare policies, regulations, and global medical initiatives",
      path: "/category/policy",
      icon: "📋",
      articleCount: 15,
      gradient: "from-emerald-400 to-cyan-500"
    },
    {
      name: "Digital Health",
      description: "Telemedicine, health apps, and digital healthcare solutions",
      path: "/category/digital-health",
      icon: "💻",
      articleCount: 12,
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "Innovation",
      description: "Revolutionary medical devices and innovative treatments",
      path: "/category/innovation",
      icon: "💡",
      articleCount: 20,
      gradient: "from-pink-400 to-purple-500"
    },
    {
      name: "Biotechnology",
      description: "Genetic engineering, biotech research, and pharmaceutical advances",
      path: "/category/biotechnology",
      icon: "🧬",
      articleCount: 16,
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Medical Topics
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our comprehensive collection of medical news and articles by topic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.name}
            href={topic.path}
            className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className={`w-full h-full bg-gradient-to-br ${topic.gradient} blur-2xl`}></div>
            </div>
            
            <div className="flex items-start space-x-4">
              <span className="text-4xl">{topic.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${topic.gradient} transition-all duration-300">
                  {topic.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{topic.articleCount} articles</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 