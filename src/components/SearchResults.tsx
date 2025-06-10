'use client';

import React from 'react';
import { CalendarIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';

// This is a placeholder for demonstration. In a real app, this would come from your search API
const demoResults = [
  {
    id: '1',
    title: 'AI-Powered Medical Diagnosis',
    description: 'New deep learning models achieve unprecedented accuracy in early disease detection.',
    category: 'Technology',
    date: '2024-03-15',
    views: '45K',
    relevanceScore: 0.95
  },
  {
    id: '2',
    title: 'Breakthrough in Gene Therapy',
    description: 'Novel CRISPR technique shows promise in treating genetic disorders with minimal side effects.',
    category: 'Research',
    date: '2024-03-14',
    views: '38K',
    relevanceScore: 0.92
  },
  {
    id: '3',
    title: 'Digital Health Revolution',
    description: 'How telemedicine and remote monitoring are transforming healthcare delivery worldwide.',
    category: 'Digital Health',
    date: '2024-03-13',
    views: '32K',
    relevanceScore: 0.88
  }
];

export default function SearchResults() {
  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-400 mb-4">
        Found {demoResults.length} results
      </div>

      {demoResults.map((result) => (
        <div
          key={result.id}
          className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
        >
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-white/10 rounded-full px-3 py-1 text-sm text-gray-300">
            {Math.round(result.relevanceScore * 100)}% Match
          </div>

          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-200 mb-2">
            {result.title}
          </h3>

          <p className="text-gray-400 mb-4">
            {result.description}
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <TagIcon className="h-4 w-4" />
              <span>{result.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4" />
              <span>{result.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChartBarIcon className="h-4 w-4" />
              <span>{result.views} views</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500"></div>
        </div>
      ))}
    </div>
  );
} 