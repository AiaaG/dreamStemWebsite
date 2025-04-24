export interface Article {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
}

export interface VideoResource {
  id: number;
  title: string;
  embedUrl: string;
  category: string;
}