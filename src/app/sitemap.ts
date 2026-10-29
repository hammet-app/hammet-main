import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/content';

const SITE_URL = 'https://hammetedu.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/lace`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/lace/bootcamp`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/lace/testimonials`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/bootcamp`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/testimonials`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'daily', priority: 0.8 },
  ];

  const posts = await getPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
      ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  return [...staticRoutes, ...blogRoutes];
}
