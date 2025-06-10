import { Article } from '../data/articles';

export const validateArticle = (article: Article): boolean => {
  // 필수 필드 검증
  if (!article.id || !article.title || !article.content) {
    return false;
  }

  // 날짜 형식 검증
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(article.date)) {
    return false;
  }

  // 콘텐츠 길이 검증
  if (article.content.length < 100 || article.summary.length < 10) {
    return false;
  }

  // 태그 검증
  if (!Array.isArray(article.tags) || article.tags.length === 0) {
    return false;
  }

  return true;
};

export const validateSource = (source: string): boolean => {
  // 신뢰할 수 있는 출처 목록
  const trustedSources = [
    'pubmed.gov',
    'who.int',
    'nih.gov',
    'nejm.org',
    'thelancet.com',
    'bmj.com',
    'jamanetwork.com'
  ];

  return trustedSources.some(trusted => source.includes(trusted));
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}; 