'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    date: 'any',
    sort: 'relevance'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 pr-12 placeholder-gray-400"
            placeholder="Search for medical articles, research, or topics..."
            aria-label="Search medical articles"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            aria-label="Toggle search filters"
            title="Toggle filters"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            aria-label="Submit search"
            title="Search"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>

        {showFilters && (
          <div className="absolute mt-2 w-full p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  <option value="research">Research</option>
                  <option value="technology">Technology</option>
                  <option value="biotechnology">Biotechnology</option>
                  <option value="digital-health">Digital Health</option>
                  <option value="innovation">Innovation</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                  Date
                </label>
                <select
                  id="date"
                  value={filters.date}
                  onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  aria-label="Filter by date"
                >
                  <option value="any">Any Time</option>
                  <option value="day">Past 24 Hours</option>
                  <option value="week">Past Week</option>
                  <option value="month">Past Month</option>
                  <option value="year">Past Year</option>
                </select>
              </div>

              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-1">
                  Sort By
                </label>
                <select
                  id="sort"
                  value={filters.sort}
                  onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  aria-label="Sort results by"
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="date">Most Recent</option>
                  <option value="views">Most Viewed</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
} 