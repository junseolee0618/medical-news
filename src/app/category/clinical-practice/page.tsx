import React from 'react';

export default function ClinicalPracticePage() {
  const articles = [
    {
      title: "Modern Approaches to Patient-Centered Care",
      description: "New methodologies and best practices for delivering patient-centered care in modern healthcare settings.",
      image: "https://placehold.co/600x400",
      date: "March 15, 2024",
      readTime: "7 min",
      views: "38K"
    },
    {
      title: "Evidence-Based Treatment Protocols",
      description: "Latest updates in evidence-based medicine and treatment protocols across various medical specialties.",
      image: "https://placehold.co/600x400",
      date: "March 14, 2024",
      readTime: "6 min",
      views: "32K"
    },
    {
      title: "Improving Emergency Care Response",
      description: "Strategies and innovations for enhancing emergency medical response and critical care delivery.",
      image: "https://placehold.co/600x400",
      date: "March 13, 2024",
      readTime: "8 min",
      views: "29K"
    }
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical Practice</h1>
        <p className="text-xl text-gray-600">Updates in clinical procedures and patient care</p>
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