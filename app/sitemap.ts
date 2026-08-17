import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://frameandstory.com';
  const routes = [
    '',
    '/portfolio',
    '/portfolio/weddings',
    '/portfolio/birthdays',
    '/portfolio/parties',
    '/portfolio/events',
    '/services',
    '/packages',
    '/about',
    '/contact',
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
