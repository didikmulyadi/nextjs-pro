import { MetadataRoute } from 'next'

import { ENV } from '@/config/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ENV.WEB_BASE_URL || ''

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
