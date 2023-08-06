import { MetadataRoute } from 'next'

import { ENV } from '@/config/env'

/**
 * tell search engine crawlers which URLs they can access on your site.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/',
    },
    sitemap: `${ENV.WEB_BASE_URL}/sitemap.xml`,
  }
}
