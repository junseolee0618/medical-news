import React from 'react';
import type { HealthStats } from '../utils/api';

interface HealthDashboardProps {
  stats: HealthStats[];
}

export default function HealthDashboard({ stats }: HealthDashboardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">Global Health Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
              <span className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-500' :
                stat.trend === 'down' ? 'text-red-500' :
                'text-gray-500'
              }`}>
                {stat.change > 0 ? '+' : ''}{stat.change}%
                {stat.trend === 'up' ? (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : stat.trend === 'down' ? (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                  </svg>
                )}
              </span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold dark:text-white">{stat.value}</span>
              <div className="flex-1 relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                    stat.trend === 'up' ? 'bg-green-500' :
                    stat.trend === 'down' ? 'bg-red-500' :
                    'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(Math.abs(stat.change) * 2, 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Data updated:</span>
            <span className="text-sm font-medium dark:text-gray-300">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
            View Full Report →
          </button>
        </div>
      </div>
    </div>
  );
} 