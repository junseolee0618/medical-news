'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AdvancedSearch from '../components/AdvancedSearch';
import ArticleCard from '@/components/ArticleCard';
import { searchArticles } from '../utils/api';
import { ArticlePreview } from '@/types/article';
import { SearchFilters } from '@/types/search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchArticles = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const results = await searchArticles(query, 1);
          setArticles(results);
        } catch (error) {
          console.error('검색 중 오류가 발생했습니다:', error);
        }
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [query]);

  const handleSearch = (searchQuery: string, filters: SearchFilters) => {
    const searchUrl = `/search?q=${encodeURIComponent(searchQuery)}`;
    window.location.href = searchUrl;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">의학 정보 검색</h1>
        <p className="text-xl text-gray-300">
          전문적인 의학 정보와 최신 의료 연구 결과를 검색해보세요
        </p>
      </div>

      <AdvancedSearch onSearch={handleSearch} />

      <div className="space-y-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
            <p className="text-gray-300 mt-4">검색 중...</p>
          </div>
        ) : query ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-100">
              &quot;{query}&quot; 검색 결과
            </h2>
            <div className="grid gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            {articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-300">
                  검색 결과가 없습니다. 다른 검색어를 시도해보세요.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              의학 용어나 키워드로 검색을 시작하세요
            </h2>
            <p className="text-gray-300">
              연구 논문, 임상 사례, 의료 기술, 치료 가이드라인 등<br />
              다양한 의학 정보를 찾아보실 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 