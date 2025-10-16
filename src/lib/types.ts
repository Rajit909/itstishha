import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
};

export type Client = {
  id: string;
  name: string;
  testimonial: string;
  logo: string;
};
