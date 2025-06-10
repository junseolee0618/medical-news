import React from 'react';
import Link from 'next/link';

const trendingTopics = [
  { id: 1, name: 'COVID-19', count: 128 },
  { id: 2, name: 'Mental Health', count: 95 },
  { id: 3, name: 'AI in Healthcare', count: 87 },
  { id: 4, name: 'Vaccine Research', count: 76 },
  { id: 5, name: 'Cancer Treatment', count: 72 },
  { id: 6, name: 'Digital Health', count: 65 },
  { id: 7, name: 'Public Health', count: 58 },
  { id: 8, name: 'Medical Technology', count: 54 },
];

export default function TrendingTopics() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      <div className="flex flex-wrap gap-3">
        {trendingTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topic/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group relative"
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center gap-2">
              <span className="text-gray-900">{topic.name}</span>
              <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                {topic.count}
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 