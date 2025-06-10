'use client';

import React, { useState, useEffect } from 'react';

interface SearchFilters {
  category: string;
  dateRange: string;
  sortBy: string;
}

interface AdvancedSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

export default function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    dateRange: '7days',
    sortBy: 'relevance',
  });

  // 의학 용어 데이터베이스
  const medicalTerms = [
    'COVID-19',
    'Hypertension',
    'Diabetes Mellitus',
    'Oncology',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Immunology',
    'Genetics',
    'Pathology',
    'Epidemiology',
    'Pharmacology',
    'Radiology',
    'Endocrinology',
    'Hematology',
    'Rheumatology',
    'Psychiatry',
    'Dermatology',
    'Orthopedics',
    'Gynecology'
  ];

  const popularSearches = [
    'Latest Medical Research',
    'Clinical Trials',
    'Healthcare Innovation',
    'Medical Technology',
    'Treatment Guidelines',
    'Disease Prevention',
    'Public Health',
    'Medical Education'
  ];

  useEffect(() => {
    if (query.length >= 2) {
      // 의학 용어와 일반 검색어 모두에서 검색
      const matchingMedicalTerms = medicalTerms.filter(term =>
        term.toLowerCase().includes(query.toLowerCase())
      );
      const matchingPopular = popularSearches.filter(term =>
        term.toLowerCase().includes(query.toLowerCase())
      );
      
      // 의학 용어를 먼저 보여주고, 그 다음 일반 검색어 표시
      setSuggestions([...matchingMedicalTerms, ...matchingPopular]);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    onSearch(query, filters);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8">
      <div className="relative">
        <div className="flex items-center">
          <div className="relative flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="의학 용어 또는 키워드로 검색..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 p-2 text-cyan-500 hover:text-cyan-400"
            aria-label="Toggle advanced search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* 검색 제안 */}
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  handleSearch();
                }}
                className="w-full px-4 py-3 text-left text-gray-100 hover:bg-cyan-500/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 고급 필터 */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                카테고리
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-100"
                aria-label="카테고리 선택"
                title="카테고리 선택"
              >
                <option value="all">전체 카테고리</option>
                <option value="research">연구</option>
                <option value="clinical">임상</option>
                <option value="technology">기술</option>
                <option value="policy">정책</option>
                <option value="education">교육</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                기간
              </label>
              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-100"
                aria-label="기간 선택"
                title="기간 선택"
              >
                <option value="24hours">최근 24시간</option>
                <option value="7days">최근 7일</option>
                <option value="30days">최근 30일</option>
                <option value="year">최근 1년</option>
                <option value="all">전체 기간</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                정렬
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-100"
                aria-label="정렬 기준 선택"
                title="정렬 기준 선택"
              >
                <option value="relevance">관련도순</option>
                <option value="date">최신순</option>
                <option value="views">조회순</option>
                <option value="cited">인용순</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 인기 검색어 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {popularSearches.map((term, index) => (
          <button
            key={index}
            onClick={() => {
              setQuery(term);
              handleSearch();
            }}
            className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
} 