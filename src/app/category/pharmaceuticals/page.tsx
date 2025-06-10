import React from 'react';

export default function PharmaceuticalsPage() {
  const articles = [
    {
      title: "Breakthrough Drug Developments",
      description: "Latest advancements in pharmaceutical research and new drug developments for treating chronic conditions.",
      image: "https://placehold.co/600x400",
      date: "March 15, 2024",
      readTime: "8 min",
      views: "42K"
    },
    {
      title: "Clinical Trial Results Update",
      description: "Recent results from major clinical trials and their implications for future drug development.",
      image: "https://placehold.co/600x400",
      date: "March 14, 2024",
      readTime: "6 min",
      views: "35K"
    },
    {
      title: "Personalized Medicine Advances",
      description: "How pharmaceutical companies are leveraging genetic data for personalized drug development.",
      image: "https://placehold.co/600x400",
      date: "March 13, 2024",
      readTime: "7 min",
      views: "33K"
    }
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pharmaceuticals</h1>
        <p className="text-xl text-gray-600">Drug development and pharmaceutical news</p>
      </header>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900">{article.title}</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {article.views} views
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} read</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
} 