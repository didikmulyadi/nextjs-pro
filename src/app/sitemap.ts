import { MetadataRoute } from 'next'

import { ENV } from '@/config/env'

/**
 * tell search engine crawlers which URLs they can access on your site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ENV.WEB_BASE_URL || ''

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
