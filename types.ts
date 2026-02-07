export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Sales' | 'Marketing' | 'Leadership';
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string; // We can keep this for "Case Study" link or similar, even if not git repo
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: string; // Simplified for this demo
}

export interface SiteProfile {
  name: string;
  role: string[];
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
}

export interface SiteData {
  profile: SiteProfile;
  projects: Project[];
  posts: BlogPost[];
}

export type ThemeColor = 'emerald' | 'indigo' | 'rose' | 'amber';