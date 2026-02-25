import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.matrixleariningschool.online/';
    const pages = [
        '',
        '/learning-center',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms-and-conditions',
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: page === '' ? 1 : page === '/learning-center' ? 0.9 : 0.8,
    }));
}
