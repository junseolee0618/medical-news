'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticlePreview } from '@/types/article';

export default function SponsoredPage() {
  const sponsoredArticles: ArticlePreview[] = [
    {
      id: 'sp1',
      title: "혁신적인 당뇨병 치료제의 임상 3상 결과 발표",
      description: "신약 'GlucoBalance-X'가 제2형 당뇨병 환자의 혈당 조절에 탁월한 효과를 보여",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop",
      date: "2024-03-20",
      author: "Medical Research Team",
      readTime: "8 min",
      views: "12.5K",
      access: "free",
      category: "Pharmaceutical",
      isSponsored: true,
      sponsorName: "PharmaCorp International",
      sponsorLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop",
      sponsorWebsite: "https://example.com/pharmacorp"
    },
    {
      id: 'sp2',
      title: "AI 기반 조기 진단 시스템 출시 예정",
      description: "딥러닝 기술을 활용한 새로운 의료 영상 진단 시스템이 진단 정확도를 95% 이상으로 향상",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
      date: "2024-03-19",
      author: "Tech Innovation Team",
      readTime: "6 min",
      views: "8.2K",
      access: "free",
      category: "Technology",
      isSponsored: true,
      sponsorName: "MedTech Solutions",
      sponsorLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
      sponsorWebsite: "https://example.com/medtech"
    },
    {
      id: 'sp3',
      title: "차세대 수술 로봇 시스템 임상 적용 성공",
      description: "미세 수술에 특화된 새로운 로봇 시스템이 첫 임상 시험에서 뛰어난 성과 달성",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
      date: "2024-03-18",
      author: "Surgical Innovation Division",
      readTime: "10 min",
      views: "15.3K",
      access: "free",
      category: "Medical Device",
      isSponsored: true,
      sponsorName: "RoboSurg Technologies",
      sponsorLogo: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=100&h=100&fit=crop",
      sponsorWebsite: "https://example.com/robosurg"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">스폰서 콘텐츠</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          의료 산업의 최신 혁신과 연구 성과를 소개합니다
        </p>
      </div>

      <div className="grid gap-8">
        {sponsoredArticles.map((article) => (
          <div key={article.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  {article.sponsorLogo && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500">
                      <Image
                        src={article.sponsorLogo}
                        alt={article.sponsorName || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-cyan-500 font-medium">스폰서드 콘텐츠</span>
                    <h3 className="text-gray-300">{article.sponsorName}</h3>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-100 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {article.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.views} 조회</span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={`/article/${article.id}`}
                    className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    자세히 보기
                  </Link>
                  {article.sponsorWebsite && (
                    <a
                      href={article.sponsorWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500/10 transition-colors"
                    >
                      스폰서 웹사이트
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">스폰서 콘텐츠 등록 안내</h2>
        <p className="mb-6">
          의료 전문가들에게 귀사의 혁신적인 제품과 연구 성과를 소개하세요.<br />
          상세한 안내를 원하시면 아래 버튼을 클릭해주세요.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-500 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          스폰서 문의하기
        </Link>
      </div>
    </main>
  );
} 