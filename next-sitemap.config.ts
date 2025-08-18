// next-sitemap.config.ts
import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://www.sigmasand.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Optional: Add dynamic routes if needed
  exclude: ['/secret-page'],
  // Additional options can go here
}

export default config