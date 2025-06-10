import { StaticImageData } from 'next/image';

export interface Article {
  id: string;
  title: string;
  category: Category;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  source?: string;
  imageUrl?: string;
  tags: string[];
}

export type Category = 
  | 'research'
  | 'clinical'
  | 'technology'
  | 'public-health'
  | 'pharmaceuticals';

// 초기 샘플 데이터 (나중에 실제 데이터로 대체)
export const sampleArticles: Article[] = [
  {
    id: '1',
    title: '새로운 mRNA 백신 기술의 발전',
    category: 'research',
    summary: '최신 mRNA 기술을 활용한 백신 개발 동향과 미래 전망',
    content: '최근 의학계에서는 mRNA 기술을 활용한 새로운 백신 개발이 활발히 진행되고 있습니다...',
    author: '김의학 박사',
    date: '2024-02-20',
    readTime: 5,
    tags: ['백신', 'mRNA', '연구개발'],
  },
  {
    id: '2',
    title: '디지털 헬스케어의 현재와 미래',
    category: 'technology',
    summary: '의료 현장에서 활용되는 AI 기술과 디지털 혁신',
    content: '인공지능과 빅데이터 기술의 발전으로 의료 서비스가 크게 변화하고 있습니다...',
    author: '이기술 교수',
    date: '2024-02-19',
    readTime: 7,
    tags: ['디지털헬스', 'AI', '의료기술'],
  }
];

// 카테고리별 기사 필터링 함수
export const getArticlesByCategory = (category: Category): Article[] => {
  return sampleArticles.filter(article => article.category === category);
};

// 최신 기사 가져오기
export const getLatestArticles = (count: number = 10): Article[] => {
  return [...sampleArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// 태그로 기사 검색
export const getArticlesByTag = (tag: string): Article[] => {
  return sampleArticles.filter(article => article.tags.includes(tag));
}; 