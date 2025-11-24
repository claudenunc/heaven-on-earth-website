import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heavenonearthmovement.com'

  // Marketing pages
  const marketingPages = [
    '',
    '/about',
    '/depression',
    '/resources',
    '/faq',
    '/contact',
  ]

  // Legal pages
  const legalPages = [
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/refund',
  ]

  // Community
  const communityPages = [
    '/community',
  ]

  // Generate sitemap entries
  const routes: MetadataRoute.Sitemap = [
    // Home and marketing pages
    ...marketingPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })),

    // Legal pages
    ...legalPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),

    // Community pages
    ...communityPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]

  return routes
}
