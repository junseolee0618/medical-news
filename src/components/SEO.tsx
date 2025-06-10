import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export default function SEO({ 
  title = '최신 의학 연구 뉴스 - Medical Research',
  description = '신뢰할 수 있는 최신 의학 연구, 임상시험, 의료 기술 정보를 제공합니다.',
  image = '/og-image.jpg',
  article = false 
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = `https://medical-news-n63pjqom4-junseolees-projects.vercel.app${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 추가 SEO 태그 */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content="의학연구,임상시험,의료기술,연구결과,의학논문,의학발전" />
      <meta name="author" content="Medical Research Team" />

      {/* Google Search Console 인증을 위한 메타 태그 */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
    </Head>
  );
} 