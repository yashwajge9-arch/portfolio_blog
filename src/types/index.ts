export interface VideoItem {
  id: string;
  title: string;
  type: 'short' | 'long';
  platform: 'Instagram Reels' | 'YouTube Shorts' | 'TikTok' | 'YouTube' | 'Podcast' | 'Documentary' | 'Corporate';
  thumbnail: string;
  videoUrl: string;
  embedUrl: string;
  tags: string[];
  views: string;
  runtime?: string;
  role: string;
  client: string;
  description: string;
  tools: string[];
  featured?: boolean;
  isCustomReel?: boolean;
  credits?: { role: string; name: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  toc: { id: string; label: string }[];
  content: string; // full markdown/html content (800-1200 words)
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  channelOrCompany: string;
  metric: string;
  avatarText: string;
}
