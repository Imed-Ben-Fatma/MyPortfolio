import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.imed-ben-fatma.site';
  
  // List of pages in the portfolio
  const routes = [
    '',
    '/cv',
    '/projects/b-car',
    '/projects/novopharma',
    '/projects/qa',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        fr: `${baseUrl}/fr${route}`,
      },
    },
  }));
}

