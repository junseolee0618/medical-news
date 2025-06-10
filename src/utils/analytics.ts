import { Article, Category } from '../data/articles';

interface ArticleAnalytics {
  viewCount: number;
  readTime: number;
  shareCount: number;
  commentCount: number;
  likeCount: number;
}

interface UserEngagement {
  userId: string;
  articleId: string;
  readPercentage: number;
  timeSpent: number;
  date: string;
}

export class Analytics {
  private static analytics: Map<string, ArticleAnalytics> = new Map();
  private static userEngagements: UserEngagement[] = [];

  // 기사 조회수 추적
  static trackView(articleId: string): void {
    const stats = this.getArticleStats(articleId);
    stats.viewCount++;
    this.analytics.set(articleId, stats);
  }

  // 사용자 참여도 추적
  static trackEngagement(engagement: UserEngagement): void {
    this.userEngagements.push(engagement);
  }

  // 기사 통계 가져오기
  private static getArticleStats(articleId: string): ArticleAnalytics {
    return this.analytics.get(articleId) || {
      viewCount: 0,
      readTime: 0,
      shareCount: 0,
      commentCount: 0,
      likeCount: 0
    };
  }

  // 인기 있는 카테고리 분석
  static getPopularCategories(): Map<Category, number> {
    const categoryStats = new Map<Category, number>();
    this.userEngagements.forEach(engagement => {
      const article = this.getArticleById(engagement.articleId);
      if (article) {
        const current = categoryStats.get(article.category) || 0;
        categoryStats.set(article.category, current + 1);
      }
    });
    return categoryStats;
  }

  // 평균 읽기 시간 분석
  static getAverageReadTime(): number {
    const totalTime = this.userEngagements.reduce((sum, eng) => sum + eng.timeSpent, 0);
    return totalTime / this.userEngagements.length || 0;
  }

  // 인기 있는 태그 분석
  static getPopularTags(): Map<string, number> {
    const tagStats = new Map<string, number>();
    this.userEngagements.forEach(engagement => {
      const article = this.getArticleById(engagement.articleId);
      if (article) {
        article.tags.forEach(tag => {
          const current = tagStats.get(tag) || 0;
          tagStats.set(tag, current + 1);
        });
      }
    });
    return tagStats;
  }

  // 주간 리포트 생성
  static generateWeeklyReport(): string {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const weeklyEngagements = this.userEngagements.filter(eng => 
      new Date(eng.date) >= weekAgo
    );

    const totalViews = weeklyEngagements.length;
    const avgReadTime = this.getAverageReadTime();
    const popularCategories = this.getPopularCategories();
    const popularTags = this.getPopularTags();

    return JSON.stringify({
      period: `${weekAgo.toISOString()} - ${now.toISOString()}`,
      totalViews,
      avgReadTime,
      popularCategories: Object.fromEntries(popularCategories),
      popularTags: Object.fromEntries(popularTags),
    }, null, 2);
  }

  private static getArticleById(articleId: string): Article | undefined {
    // 실제 구현에서는 데이터베이스나 캐시에서 조회
    return undefined;
  }
} 