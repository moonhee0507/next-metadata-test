import type { MetadataRoute } from 'next'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())
export default function robots(): MetadataRoute.Robots {
  console.log(process.env.host);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    process.env.host ||
    `http://localhost:${process.env.PORT}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}