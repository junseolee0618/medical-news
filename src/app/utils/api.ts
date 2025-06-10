import { ArticlePreview } from '@/types/article';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  author: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface HealthStats {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

// Simulated API endpoints
export const fetchLatestNews = async (): Promise<NewsItem[]> => {
  // In a real app, this would be an API call
  const response = await fetch('https://api.example.com/news');
  return response.json();
};

export const fetchHealthStats = async (): Promise<HealthStats[]> => {
  // Simulated health statistics
  return [
    { label: 'COVID-19 Cases', value: 1234, change: -12, trend: 'down' },
    { label: 'Vaccination Rate', value: 78, change: 5, trend: 'up' },
    { label: 'Healthcare Access', value: 92, change: 0, trend: 'stable' },
    { label: 'Research Publications', value: 456, change: 23, trend: 'up' },
  ];
};

export const searchNews = async (query: string, filters: Record<string, any>) => {
  // In a real app, this would be an API call with proper filtering
  const response = await fetch(`https://api.example.com/search?q=${query}`);
  return response.json();
};

export const getUserPreferences = async (userId: string) => {
  // In a real app, this would fetch user preferences from a backend
  return {
    categories: ['Research', 'Technology'],
    topics: ['COVID-19', 'AI in Healthcare'],
    emailFrequency: 'daily',
    darkMode: true,
  };
};

export const searchArticles = async (query: string, page: number = 1): Promise<ArticlePreview[]> => {
  // 실제 환경에서는 데이터베이스나 외부 API를 호출합니다
  const mockArticles: ArticlePreview[] = [
    {
      id: '1',
      title: '최신 COVID-19 변이 연구 동향',
      description: '전 세계 연구진들의 최신 코로나바이러스 변이 연구 결과와 임상적 의미',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop',
      category: 'Research',
      date: '2024-03-15',
      author: 'Dr. Sarah Chen',
      readTime: '8 min',
      views: '1.2K',
      access: 'free'
    },
    {
      id: '2',
      title: '인공지능 기반 의료 진단 시스템의 발전',
      description: '딥러닝 기술을 활용한 의료 영상 진단의 정확도 향상 연구',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop',
      category: 'Technology',
      date: '2024-03-14',
      author: 'Dr. Michael Chang',
      readTime: '6 min',
      views: '856',
      access: 'premium'
    },
    {
      id: '3',
      title: '새로운 당뇨병 치료제 임상시험 결과',
      description: '제2형 당뇨병 환자들을 대상으로 한 신약 임상 3상 시험 결과 발표',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop',
      category: 'Research',
      date: '2024-03-13',
      author: 'Dr. James Wilson',
      readTime: '10 min',
      views: '2.1K',
      access: 'free'
    }
  ];

  // 검색어에 따른 필터링
  const filteredArticles = query
    ? mockArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
      )
    : mockArticles;

  return filteredArticles;
};

export const getFilteredArticles = async (page: number = 1, categories: string[] = []) => {
  // Implementation
}; 