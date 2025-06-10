export type ArticleAccess = 'free' | 'premium';

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  access: ArticleAccess;
}

export interface ArticlePreview {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  views: string;
  access: "free" | "premium";
  category: string;
  isSponsored?: boolean;
  sponsorName?: string;
  sponsorLogo?: string;
  sponsorWebsite?: string;
}

export interface SponsorshipDetails {
  name: string;
  logo: string;
  website: string;
  description: string;
  industry: "pharmaceutical" | "medical_device" | "healthcare" | "research" | "other";
  contactEmail: string;
} 