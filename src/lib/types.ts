import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type ValueBlock = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type Service = {
  title: string;
  text: string;
  cta: string;
  href: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  cta: string;
  href: string;
  image: string;
  abstract?: string;
  agenda?: string[];
  facilitator?: string;
  venue?: string;
  pricing?: string;
  registrationLink?: string;
  faqs?: FAQ[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image?: string;
};

export type Founder = {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
};

export type TeamMember = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Milestone = {
  date: string;
  description: string;
};

export type PastEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  highlights?: string[];
  images?: string[];
};

export type FullService = {
  category: string;
  overview: string;
  outcomes: string[];
  audience: string;
  format: string;
  duration: string;
  pricing: string;
  cta: string;
  ctaLink: string;
};
