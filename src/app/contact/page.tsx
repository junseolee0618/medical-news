'use client';

import React, { useState } from 'react';
import { SponsorshipDetails } from '@/types/article';

export default function ContactPage() {
  const [formData, setFormData] = useState<Partial<SponsorshipDetails>>({
    industry: 'pharmaceutical'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 실제 환경에서는 API 엔드포인트로 데이터를 전송합니다
      await new Promise(resolve => setTimeout(resolve, 1500)); // 임시 지연
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">스폰서 문의</h1>
        <p className="text-xl text-gray-300">
          의료 전문가들에게 귀사의 혁신적인 제품과 연구 성과를 소개하세요
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              회사/기관명 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="회사 또는 기관명을 입력하세요"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
              산업 분야 *
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={formData.industry || 'pharmaceutical'}
              onChange={handleChange}
            >
              <option value="pharmaceutical">제약</option>
              <option value="medical_device">의료기기</option>
              <option value="healthcare">헬스케어</option>
              <option value="research">연구기관</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
              웹사이트 *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="https://"
              value={formData.website || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              소개 내용 *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="귀사의 제품이나 서비스에 대해 간단히 설명해주세요"
              value={formData.description || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-2">
              담당자 이메일 *
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="담당자 이메일 주소를 입력하세요"
              value={formData.contactEmail || ''}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
              }`}
            >
              {isSubmitting ? '제출 중...' : '문의하기'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
              문의가 성공적으로 접수되었습니다. 담당자가 검토 후 연락드리겠습니다.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
              문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </div>
          )}
        </form>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>문의하신 내용은 영업일 기준 2일 이내에 답변드립니다.</p>
        <p className="mt-2">
          기타 문의사항: <a href="mailto:contact@medical-news-n63pjqom4-junseolees-projects.vercel.app" className="text-cyan-500 hover:text-cyan-400">contact@medical-news-n63pjqom4-junseolees-projects.vercel.app</a>
        </p>
      </div>
    </main>
  );
} 