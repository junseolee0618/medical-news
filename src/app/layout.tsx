import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Medical News',
    default: 'Medical News - 최신 의학 뉴스와 연구 정보',
  },
  description: '최신 의학 연구, 의료 기술, 임상 시험 결과, 헬스케어 정책 등 전문적인 의료 정보를 제공합니다.',
  keywords: ['의학뉴스', '의료기술', '임상연구', '헬스케어', '의학정보', '제약', '의료기기', '디지털헬스'],
  authors: [{ name: 'Medical News Team' }],
  creator: 'Medical News',
  publisher: 'Medical News',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://junseolee0618.github.io/medical-news'),
  openGraph: {
    title: 'Medical News - 최신 의학 뉴스와 연구 정보',
    description: '최신 의학 연구, 의료 기술, 임상 시험 결과, 헬스케어 정책 등 전문적인 의료 정보를 제공합니다.',
    url: 'https://junseolee0618.github.io/medical-news',
    siteName: 'Medical News',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'CIkcwPIfInlmkcCNGToo55bJeF2VILLb0gzm7Xuj_ac',
    other: {
      'google-site-verification': 'CIkcwPIfInlmkcCNGToo55bJeF2VILLb0gzm7Xuj_ac'
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 