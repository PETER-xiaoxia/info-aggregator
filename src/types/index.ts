export interface Resource {
  id: string;
  name: string;
  description?: string;
  url: string;
  category: 'game' | 'software' | 'movie' | 'other';
  featured?: boolean;
  addedDate: string;
}

export interface Category {
  id: 'game' | 'software' | 'movie' | 'other';
  name: string;
  description: string;
  count: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export type CategoryId = 'game' | 'software' | 'movie' | 'other';
export type Page = 'home' | 'faq' | 'profile';