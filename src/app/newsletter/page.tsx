import React from 'react';

export default function NewsletterPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl"></div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest medical news and research findings delivered directly to your inbox
          </p>
        </div>

        <form className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-300 mb-1">
              Newsletter Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
            >
              <option value="daily">Daily Digest</option>
              <option value="weekly">Weekly Roundup</option>
              <option value="monthly">Monthly Summary</option>
            </select>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to receive emails and accept the{' '}
              <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Subscribe for Free
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            You can unsubscribe at any time. For more information about our privacy practices,{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
              visit our privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
} 