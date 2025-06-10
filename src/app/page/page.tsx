'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TrendingTopics from "../components/TrendingTopics";
import NewsletterModal from "../components/NewsletterModal";
import HealthDashboard from "../components/HealthDashboard";
import AdvancedSearch from "../components/AdvancedSearch";
import { fetchHealthStats, type HealthStats } from "../utils/api";
import { SearchFilters } from "@/types/search";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [healthStats, setHealthStats] = useState<HealthStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const stats = await fetchHealthStats();
        setHealthStats(stats);
      } catch (error) {
        console.error('Error fetching health stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "New COVID-19 Variant Research Findings Released",
      summary: "Researchers have published new findings on the characteristics of recently discovered COVID-19 variants and vaccine effectiveness.",
      date: "2024-03-28",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500&h=300&fit=crop",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      views: 1234,
      likes: 89,
      tags: ["COVID-19", "Vaccine", "Research"]
    },
    {
      id: 2,
      title: "AI-Powered Cancer Detection Method Developed",
      summary: "A breakthrough in cancer diagnostics has been achieved with the development of an AI-powered detection method that improves early detection rates.",
      date: "2024-03-27",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=300&fit=crop",
      readTime: "4 min read",
      author: "Prof. Michael Chen",
      views: 987,
      likes: 76,
      tags: ["AI", "Cancer", "Technology"]
    },
    {
      id: 3,
      title: "Healthcare Insurance Policy Reform Announced",
      summary: "The Department of Health has announced new healthcare insurance policy reforms aimed at improving access to medical services.",
      date: "2024-03-26",
      category: "Policy",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop",
      readTime: "3 min read",
      author: "Emma Thompson",
      views: 756,
      likes: 45,
      tags: ["Healthcare", "Policy", "Insurance"]
    },
    {
      id: 4,
      title: "Breakthrough in Alzheimer's Treatment Research",
      summary: "Scientists report significant progress in developing a new treatment approach for Alzheimer's disease, showing promising results in early trials.",
      date: "2024-03-25",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1559757175-7b21e7ecc8dd?w=500&h=300&fit=crop",
      readTime: "6 min read",
      author: "Dr. Robert Miller",
      views: 1567,
      likes: 123,
      tags: ["Alzheimer's", "Research", "Treatment"]
    },
    {
      id: 5,
      title: "Digital Health Platform Revolutionizes Patient Care",
      summary: "A new integrated digital health platform is transforming how healthcare providers manage and deliver patient care services.",
      date: "2024-03-24",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=300&fit=crop",
      readTime: "4 min read",
      author: "Tech Health Team",
      views: 892,
      likes: 67,
      tags: ["Digital Health", "Technology", "Patient Care"]
    },
    {
      id: 6,
      title: "Global Healthcare Summit Addresses Future Challenges",
      summary: "International healthcare leaders gather to discuss strategies for addressing future global health challenges and improving healthcare systems.",
      date: "2024-03-23",
      category: "Policy",
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&h=300&fit=crop",
      readTime: "5 min read",
      author: "Global Health Watch",
      views: 678,
      likes: 54,
      tags: ["Healthcare", "Policy", "Global Health"]
    }
  ];

  const handleAdvancedSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    // In a real app, this would trigger an API call with the filters
    console.log('Search with filters:', filters);
  };

  const filteredNews = newsItems.filter(news => {
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = async (news: typeof newsItems[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.summary,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen p-8 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Medical News</h1>
        
        <AdvancedSearch onSearch={handleAdvancedSearch} />
        <HealthDashboard stats={healthStats} />
        <TrendingTopics />

        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {["All", "Research", "Technology", "Policy"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 flex items-center gap-2 bg-black bg-opacity-50 rounded-full px-3 py-1">
                  <span className="text-white text-sm">{news.views} views</span>
                  <span className="text-white">•</span>
                  <span className="text-white text-sm">{news.likes} likes</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    news.category === "Research" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" :
                    news.category === "Technology" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  }`}>
                    {news.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{news.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2 dark:text-white">{news.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{news.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{news.readTime}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{news.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleShare(news)}
                      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                      aria-label="Share article"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-semibold group flex items-center"
                      aria-label="Read more"
                    >
                      Read more 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-2">No results found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        )}

        <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed with Medical News</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get the latest medical news, research findings, and healthcare updates delivered directly to your inbox.
          </p>
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </main>
  );
} 