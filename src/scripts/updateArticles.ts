import { NewsAPI } from '../utils/newsApi';
import { Category } from '../data/articles';
import { Analytics } from '../utils/analytics';
import fs from 'fs/promises';
import path from 'path';

class ArticleUpdater {
  private static readonly CATEGORIES: Category[] = [
    'research',
    'clinical',
    'technology',
    'public-health',
    'pharmaceuticals'
  ];

  private static readonly UPDATE_INTERVAL = 1000 * 60 * 60; // 1시간
  private static readonly BACKUP_DIR = path.join(process.cwd(), 'backups');

  static async start(): Promise<void> {
    console.log('Starting article update service...');
    
    // 백업 디렉토리 생성
    await fs.mkdir(this.BACKUP_DIR, { recursive: true });

    // 정기적인 업데이트 실행
    setInterval(this.updateArticles.bind(this), this.UPDATE_INTERVAL);
    await this.updateArticles(); // 초기 실행
  }

  private static async updateArticles(): Promise<void> {
    console.log('Updating articles...', new Date().toISOString());
    
    try {
      // 각 카테고리별로 기사 수집
      for (const category of this.CATEGORIES) {
        const articles = await NewsAPI.collectAndValidateArticles(category);
        
        if (articles.length > 0) {
          // 기존 데이터 백업
          await this.backupCurrentData(category);
          
          // 새 기사 저장
          await this.saveArticles(category, articles);
          
          console.log(`Updated ${articles.length} articles for category: ${category}`);
          
          // 분석 데이터 업데이트
          this.updateAnalytics(articles);
        }
      }

      // 주간 리포트 생성
      const report = Analytics.generateWeeklyReport();
      await fs.writeFile(
        path.join(this.BACKUP_DIR, `weekly-report-${new Date().toISOString()}.json`),
        report
      );

    } catch (error) {
      console.error('Error updating articles:', error);
    }
  }

  private static async backupCurrentData(category: string): Promise<void> {
    const backupPath = path.join(
      this.BACKUP_DIR,
      `${category}-${new Date().toISOString()}.json`
    );
    
    try {
      const currentData = await fs.readFile(
        path.join(process.cwd(), 'data', `${category}.json`),
        'utf-8'
      );
      await fs.writeFile(backupPath, currentData);
    } catch (error) {
      console.warn(`No existing data to backup for ${category}`);
    }
  }

  private static async saveArticles(category: string, articles: any[]): Promise<void> {
    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    
    await fs.writeFile(
      path.join(dataDir, `${category}.json`),
      JSON.stringify(articles, null, 2)
    );
  }

  private static updateAnalytics(articles: any[]): void {
    articles.forEach(article => {
      Analytics.trackView(article.id);
    });
  }
}

// 스크립트 실행
if (require.main === module) {
  ArticleUpdater.start().catch(console.error);
} 