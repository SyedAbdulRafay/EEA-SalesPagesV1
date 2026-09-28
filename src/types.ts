export type ServiceId = 'self-study' | 'group-study' | 'vip';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  contextTag?: string;
}

export interface ProblemPoint {
  title: string;
  description: string;
  highlight?: string;
}

export interface SolutionPoint {
  title: string;
  description: string;
  iconName: 'clock' | 'message-square' | 'target' | 'users' | 'shield-check' | 'sparkles' | 'book-open' | 'award' | 'video';
}

export interface WhatYouGetItem {
  title: string;
  detail: string;
  isPlaceholder?: boolean;
}

export interface ServiceData {
  id: ServiceId;
  name: string;
  badge: string;
  tagline: string;
  price: number;
  period: string;
  ctaText: string;
  vibe: string;
  vibePill: string;
  hero: {
    headline: string;
    supportingText: string;
    priceNotice: string;
    secondaryNote: string;
    previewBadge: string;
  };
  problem: {
    sectionTitle: string;
    sectionSubtitle: string;
    points: ProblemPoint[];
  };
  solution: {
    sectionTitle: string;
    sectionSubtitle: string;
    points: SolutionPoint[];
  };
  whatYouGet: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: WhatYouGetItem[];
    calloutBox?: {
      title: string;
      desc: string;
    };
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    note?: string;
    items: TestimonialItem[];
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    planName: string;
    priceString: string;
    billingCadence: string;
    includedSummary: string[];
    guaranteeOrPolicy: string;
  };
  finalCta: {
    headline: string;
    reinforcingText: string;
    supportingNote: string;
  };
}
