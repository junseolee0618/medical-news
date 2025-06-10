import React from 'react';
import Link from 'next/link';
import { Article } from '@/types/article';

export default async function ArticlePage({ params }: { params: { id: string } }) {
  // 실제 앱에서는 API나 데이터베이스에서 기사 정보를 가져옵니다
  const articles: Record<string, Article> = {
    '1': {
      id: '1',
      title: "AI-Powered Medical Diagnostics",
      description: "Revolutionary AI system achieves breakthrough in early disease detection using quantum computing and advanced neural networks.",
      content: `
        <h2>The Future of Disease Detection</h2>
        <p>In a groundbreaking development, researchers have successfully integrated quantum computing capabilities with advanced neural networks to create an AI system that can detect diseases at unprecedented accuracy levels. This revolutionary approach combines the power of quantum algorithms with deep learning to analyze complex medical data patterns.</p>
        
        <h2>Key Innovations</h2>
        <ul>
          <li>Quantum-enhanced pattern recognition</li>
          <li>Real-time analysis of medical imaging</li>
          <li>Integration with existing healthcare systems</li>
          <li>Advanced biomarker detection</li>
        </ul>

        <h2>Clinical Applications</h2>
        <p>The system has shown remarkable results in early detection of various conditions, including:</p>
        <ul>
          <li>Cancer detection with 99.9% accuracy</li>
          <li>Neurological disorder diagnosis</li>
          <li>Cardiovascular risk assessment</li>
          <li>Rare disease identification</li>
        </ul>
      `,
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      readTime: "8 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      access: "premium"
    },
    '2': {
      id: '2',
      title: "Breakthrough in Gene Therapy",
      description: "New gene editing technique shows promising results in treating genetic disorders with unprecedented precision.",
      content: `
        <h2>Revolutionary Gene Editing</h2>
        <p>Scientists have developed a new gene editing technique that offers unprecedented precision in treating genetic disorders. This breakthrough combines CRISPR technology with novel delivery methods to target specific genetic mutations more effectively than ever before.</p>
        
        <h2>Technical Innovations</h2>
        <ul>
          <li>Enhanced delivery system</li>
          <li>Improved targeting accuracy</li>
          <li>Reduced off-target effects</li>
          <li>Longer lasting results</li>
        </ul>

        <h2>Clinical Impact</h2>
        <p>The new technique has shown remarkable success in treating:</p>
        <ul>
          <li>Hereditary blood disorders</li>
          <li>Genetic immune deficiencies</li>
          <li>Inherited metabolic conditions</li>
          <li>Rare genetic diseases</li>
        </ul>
      `,
      date: "March 14, 2024",
      author: "Dr. James Wilson",
      readTime: "6 min",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      access: "free"
    },
    '3': {
      id: '3',
      title: "Nanotechnology in Drug Delivery",
      description: "Smart nanoparticles revolutionize targeted drug delivery systems with real-time monitoring capabilities.",
      content: `
        <h2>Smart Drug Delivery</h2>
        <p>A team of researchers has developed intelligent nanoparticles that can precisely deliver medications to specific cells while providing real-time monitoring of drug distribution and effectiveness. This breakthrough combines advanced materials science with smart technology.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Targeted delivery system</li>
          <li>Real-time monitoring</li>
          <li>Controlled release mechanism</li>
          <li>Biocompatible materials</li>
        </ul>

        <h2>Medical Applications</h2>
        <p>The technology shows particular promise in treating:</p>
        <ul>
          <li>Cancer therapies</li>
          <li>Neurological conditions</li>
          <li>Autoimmune diseases</li>
          <li>Chronic infections</li>
        </ul>
      `,
      date: "March 13, 2024",
      author: "Dr. Maria Rodriguez",
      readTime: "7 min",
      category: "Research",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop",
      access: "free"
    },
    '4': {
      id: '4',
      title: "AI in Mental Health Care",
      description: "Advanced AI algorithms transform mental health diagnosis and treatment through personalized intervention strategies.",
      content: `
        <h2>Digital Mental Health Revolution</h2>
        <p>Artificial intelligence is revolutionizing mental health care through sophisticated algorithms that can analyze patterns in patient behavior and provide personalized treatment recommendations. This technology enables early detection and more effective interventions.</p>
        
        <h2>Technical Capabilities</h2>
        <ul>
          <li>Behavioral pattern analysis</li>
          <li>Predictive risk assessment</li>
          <li>Personalized treatment planning</li>
          <li>Real-time monitoring</li>
        </ul>

        <h2>Clinical Benefits</h2>
        <p>The system has shown significant improvements in:</p>
        <ul>
          <li>Depression detection</li>
          <li>Anxiety management</li>
          <li>Crisis prevention</li>
          <li>Treatment optimization</li>
        </ul>
      `,
      date: "March 12, 2024",
      author: "Dr. Michael Chang",
      readTime: "9 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      access: "premium"
    },
    '5': {
      id: '5',
      title: "Robotic Surgery Advances",
      description: "Next-generation surgical robots achieve microscopic precision with enhanced AI-driven control systems.",
      content: `
        <h2>Surgical Precision Revolution</h2>
        <p>The latest generation of surgical robots combines advanced AI with unprecedented mechanical precision, enabling surgeons to perform complex procedures at the microscopic level. This technology represents a significant leap forward in minimally invasive surgery.</p>
        
        <h2>Technical Innovations</h2>
        <ul>
          <li>AI-enhanced control systems</li>
          <li>Microscopic precision</li>
          <li>Real-time 3D mapping</li>
          <li>Haptic feedback</li>
        </ul>

        <h2>Surgical Applications</h2>
        <p>The system excels in:</p>
        <ul>
          <li>Microsurgery</li>
          <li>Neurological procedures</li>
          <li>Cardiovascular operations</li>
          <li>Orthopedic surgery</li>
        </ul>
      `,
      date: "March 11, 2024",
      author: "Dr. Robert Kim",
      readTime: "10 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?w=800&auto=format&fit=crop",
      access: "free"
    }
  };

  const article = articles[params.id];

  if (!article) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100">Article not found</h1>
          <p className="mt-4 text-gray-400">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-6 inline-block text-blue-500 hover:text-blue-400">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <article className="prose prose-invert prose-lg max-w-none">
        <div className="relative mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Free
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-400 mb-6">{article.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {article.author}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.date}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime} read
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {article.category}
            </div>
          </div>
        </div>

        <div className="mt-8" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </main>
  );
} 