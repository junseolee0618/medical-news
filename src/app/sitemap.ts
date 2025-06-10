import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://medical-news-n63pjqom4-junseolees-projects.vercel.app'

  // 모든 정적 페이지 경로
  const routes = [
    '',
    '/latest',
    '/popular',
    '/sponsored',
    '/events',
    '/topics',
    '/contact',
    '/category/research',
    '/category/technology',
    '/category/policy',
    '/category/innovation',
    '/category/digital-health',
    '/category/biotechnology',
    '/category/clinical-practice',
    '/category/pharmaceuticals',
    '/category/public-health',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 