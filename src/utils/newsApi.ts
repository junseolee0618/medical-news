import { Article, Category } from '../data/articles';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

interface NewsAPIResponse {
  articles: Article[];
  totalResults: number;
}

export class NewsAPI {
  private static readonly TRUSTED_APIS = {
    pubmed: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils',
    who: 'https://api.who.int',
    nih: 'https://api.nih.gov'
  };

  private static http = rateLimit(axios.create(), { 
    maxRequests: 10,
    perMilliseconds: 1000 
  });

  private static async fetchWithRetry(url: string, retries = 3): Promise<any> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await this.http.get(url);
        return response.data;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  // PubMed API에서 최신 의학 연구 기사 가져오기
  static async fetchLatestResearch(): Promise<Article[]> {
    try {
      const apiKey = this.getApiKey('pubmed');
      const baseUrl = this.TRUSTED_APIS.pubmed;
      const searchQuery = 'medical+research';
      
      // PubMed E-utilities API 사용
      const searchUrl = `${baseUrl}/esearch.fcgi?db=pubmed&term=${searchQuery}&retmax=100&format=json&api_key=${apiKey}`;
      const searchResult = await this.fetchWithRetry(searchUrl);
      
      const articles: Article[] = [];
      for (const id of searchResult.esearchresult.idlist) {
        const detailUrl = `${baseUrl}/esummary.fcgi?db=pubmed&id=${id}&format=json&api_key=${apiKey}`;
        const detail = await this.fetchWithRetry(detailUrl);
        const pubmedArticle = detail.result[id];
        
        articles.push({
          id: id,
          title: pubmedArticle.title,
          category: 'research',
          summary: pubmedArticle.description || '',
          content: pubmedArticle.abstract || '',
          author: pubmedArticle.authors?.[0]?.name || 'Unknown',
          date: new Date(pubmedArticle.pubdate).toISOString().split('T')[0],
          readTime: this.calculateReadTime(pubmedArticle.abstract || ''),
          source: `https://pubmed.ncbi.nlm.nih.gov/${id}`,
          tags: pubmedArticle.keywords || [],
        });
      }
      
      return articles;
    } catch (error) {
      console.error('Error fetching from PubMed:', error);
      return [];
    }
  }

  // WHO API에서 공중 보건 뉴스 가져오기
  static async fetchPublicHealthNews(): Promise<Article[]> {
    try {
      const apiKey = this.getApiKey('who');
      const response = await this.http.get(`${this.TRUSTED_APIS.who}/news?apiKey=${apiKey}`);
      
      return response.data.articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        category: 'public-health',
        summary: article.description,
        content: article.content,
        author: article.author || 'WHO',
        date: new Date(article.publishedAt).toISOString().split('T')[0],
        readTime: this.calculateReadTime(article.content),
        source: article.url,
        tags: ['WHO', 'public-health', ...this.extractKeywords(article.content)],
      }));
    } catch (error) {
      console.error('Error fetching from WHO:', error);
      return [];
    }
  }

  private static calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }

  private static extractKeywords(content: string): string[] {
    // 간단한 키워드 추출 로직
    const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to']);
    const words = content.toLowerCase().match(/\b\w+\b/g) || [];
    const wordFreq = words.reduce((acc: {[key: string]: number}, word) => {
      if (!commonWords.has(word)) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});
    
    return Object.entries(wordFreq)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([word]) => word);
  }

  // API 키는 환경 변수로 관리
  private static getApiKey(source: string): string {
    const key = process.env[`${source.toUpperCase()}_API_KEY`];
    if (!key) {
      throw new Error(`Missing API key for ${source}`);
    }
    return key;
  }

  // 기사 자동 수집 및 검증
  static async collectAndValidateArticles(category: Category): Promise<Article[]> {
    let articles: Article[] = [];
    
    try {
      switch(category) {
        case 'research':
          articles = await this.fetchLatestResearch();
          break;
        case 'public-health':
          articles = await this.fetchPublicHealthNews();
          break;
        // 다른 카테고리 처리...
      }

      const { validateArticle, validateSource } = await import('./articleValidation');
      return articles.filter(article => 
        validateArticle(article) && 
        (article.source ? validateSource(article.source) : true)
      );
    } catch (error) {
      console.error('Error collecting articles:', error);
      return [];
    }
  }
} 