'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticlePreview } from '@/types/article';

interface ArticleCardProps {
  article: ArticlePreview;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white/5 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              article.access === 'premium' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
            }`}>
              {article.access === 'premium' ? 'Premium' : 'Free'}
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-gray-100 hover:text-cyan-400 transition-colors">
              <Link href={`/article/${article.id}`}>
                {article.title}
              </Link>
            </h2>
            <span className="bg-white/10 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {article.views} views
            </span>
          </div>
          <p className="text-gray-300 mb-4">{article.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-400">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime} read</span>
            </div>
            <Link 
              href={`/article/${article.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                article.access === 'premium'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
              }`}
            >
              Read {article.access === 'premium' ? 'with Premium' : 'Now'}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
} 