import React from 'react';

export default function PublicHealthPage() {
  const articles = [
    {
      title: "Global Health Initiatives 2024",
      description: "Overview of major public health initiatives and their impact on global population health outcomes.",
      image: "https://placehold.co/600x400",
      date: "March 15, 2024",
      readTime: "9 min",
      views: "45K"
    },
    {
      title: "Preventive Healthcare Strategies",
      description: "Latest approaches in preventive medicine and public health interventions for population health management.",
      image: "https://placehold.co/600x400",
      date: "March 14, 2024",
      readTime: "7 min",
      views: "36K"
    },
    {
      title: "Environmental Health Concerns",
      description: "Analysis of environmental factors affecting public health and strategies for mitigation.",
      image: "https://placehold.co/600x400",
      date: "March 13, 2024",
      readTime: "6 min",
      views: "31K"
    }
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Public Health</h1>
        <p className="text-xl text-gray-600">Population health and epidemiology news</p>
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