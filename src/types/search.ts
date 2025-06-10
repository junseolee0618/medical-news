export interface SearchFilters {
  category?: string;
  date?: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  access?: 'free' | 'premium';
} 