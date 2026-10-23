import { TESTIMONIALS, type Testimonial } from '@/lib/config';

export interface EnrichedTestimonial extends Testimonial {
  id: string;
  cardType: 'video' | 'social';
  rating: number;
  shortQuote: string;
  highlightWords: string[];
  platform?: 'linkedin' | 'twitter' | 'hammet';
  badge: string;
  category: 'all' | 'video' | 'leadership' | 'sales' | 'growth';
}

const META_MAP: Record<
  string,
  {
    cardType: 'video' | 'social';
    shortQuote: string;
    highlightWords: string[];
    platform?: 'linkedin' | 'twitter' | 'hammet';
    badge: string;
    category: 'video' | 'leadership' | 'sales' | 'growth';
  }
> = {
  'John Aba Igwe': {
    cardType: 'video',
    shortQuote: 'The LACE Bootcamp gave me clarity, confidence and a champion mindset.',
    highlightWords: ['leadership factory', 'champion mindset', 'clarity, confidence', 'consumer to champion'],
    badge: 'QuiAri · GoLang',
    category: 'sales',
  },
  'Chidinma Emmanuella Ozor': {
    cardType: 'social',
    shortQuote: 'I can now speak comfortably, not just to my peers but to a multitude.',
    highlightWords: ['tremble with fear', 'speak comfortably', 'interact properly with customers'],
    platform: 'linkedin',
    badge: 'Aspiring Entrepreneur',
    category: 'growth',
  },
  'Sharon Oni-yinka': {
    cardType: 'social',
    shortQuote: 'Leadership starts with me before it extends to others.',
    highlightWords: ['leadership starts with me', 'communicating value', 'believing in a vision'],
    platform: 'linkedin',
    badge: 'Presentation Designer',
    category: 'leadership',
  },
  'Godswill Nwafor': {
    cardType: 'video',
    shortQuote: 'Leadership goes beyond titles... demonstrated through everyday actions.',
    highlightWords: ['leadership goes beyond titles', 'demonstrated through everyday actions', 'LACE AI project'],
    badge: 'Software Engineer',
    category: 'leadership',
  },
  'Vine': {
    cardType: 'social',
    shortQuote: 'Joining is a decision, but showing up is a commitment.',
    highlightWords: ['commitment begins long before showing up', 'understand the vision', 'showing up is a commitment'],
    platform: 'twitter',
    badge: 'Cross-Functional Creative',
    category: 'growth',
  },
  'Chinenye Akunna': {
    cardType: 'social',
    shortQuote: 'Leadership is not about being in charge, but about taking care of those in my charge.',
    highlightWords: ['not about being in charge', 'taking care of those in my charge', 'taking more initiative'],
    platform: 'linkedin',
    badge: 'Writer & Community',
    category: 'leadership',
  },
  'Umeugo Ugochi Benita': {
    cardType: 'social',
    shortQuote: 'Be clear on your outcome first, because it determines the steps you take.',
    highlightWords: ['clear on your outcome first', 'assumption is one position not to take', 'put in my best'],
    platform: 'hammet',
    badge: 'Bootcamp Participant',
    category: 'leadership',
  },
  'Joy Eseohen': {
    cardType: 'video',
    shortQuote: 'Leadership is about giving without expecting anything in return.',
    highlightWords: ['giving without expecting anything in return', 'lasting impact in people', 'creating new systems'],
    badge: 'Finance Officer',
    category: 'leadership',
  },
  'Martha Okenwa': {
    cardType: 'social',
    shortQuote: 'Effective selling requires a people-oriented mindset... an opportunity to serve.',
    highlightWords: ['people-oriented mindset', 'demands sacrifice', 'opportunity to serve people'],
    platform: 'linkedin',
    badge: 'Hammet Limited',
    category: 'sales',
  },
  'Godswill Ikechukwu': {
    cardType: 'video',
    shortQuote: 'Boldness in sales is not loudness. Sales is about perception and conviction.',
    highlightWords: ['boldness in sales is not loudness', 'clarity and conviction', 'carrying the burden of a vision'],
    badge: 'CEO, WILLON · CampFlux',
    category: 'sales',
  },
  'Elizabeth Ndubuisi': {
    cardType: 'video',
    shortQuote: 'How can you announce growth you are not living? Now I breathe under pressure.',
    highlightWords: ['announce growth you are not living', 'breathe under pressure', 'self-understanding is leverage'],
    badge: 'Executive Assistant · HR',
    category: 'growth',
  },
  'Oluwatoba Abolarin': {
    cardType: 'social',
    shortQuote: 'Your system is only as strong as your consistency.',
    highlightWords: ['system is only as strong as your consistency', 'constantly learning and practising'],
    platform: 'twitter',
    badge: 'Motion Designer',
    category: 'growth',
  },
  'The Mystic': {
    cardType: 'social',
    shortQuote: 'Nobody buys a great product that is unknown; a visible product sells.',
    highlightWords: ['great product that is unknown', 'visible product sells', 'taking steps to be visible'],
    platform: 'hammet',
    badge: 'Brand & Motion',
    category: 'sales',
  },
  'The Global Foma': {
    cardType: 'video',
    shortQuote: 'Get into rooms, and pay to be in those rooms if possible. Meet and connect.',
    highlightWords: ['Get into rooms, and pay to be in those rooms', 'bold in entrepreneurship', 'force for greatness'],
    badge: 'Foma Accessories Int’l',
    category: 'sales',
  },
  'Cadet Mimi': {
    cardType: 'social',
    shortQuote: 'Good leadership starts with self-discipline and taking ownership.',
    highlightWords: ['self-discipline and taking ownership', 'solving problems and building trust', 'confident and proactive'],
    platform: 'linkedin',
    badge: 'Operations & Sales',
    category: 'sales',
  },
};

export const ENRICHED_TESTIMONIALS: EnrichedTestimonial[] = TESTIMONIALS.map((t, index) => {
  const meta = META_MAP[t.n] || {
    cardType: index % 3 === 0 ? 'video' : 'social',
    shortQuote: t.x.slice(0, 80) + '...',
    highlightWords: [],
    platform: 'hammet',
    badge: t.t.split(',')[0],
    category: 'growth',
  };

  return {
    ...t,
    id: `testimonial-${index}-${t.n.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    cardType: meta.cardType,
    rating: 5,
    shortQuote: meta.shortQuote,
    highlightWords: meta.highlightWords,
    platform: meta.platform,
    badge: meta.badge,
    category: meta.category,
  };
});

