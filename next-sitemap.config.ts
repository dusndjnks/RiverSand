import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  // Core Configuration
  siteUrl: 'https://www.sigmasand.in',
  changefreq: 'weekly',
  priority: 0.7,
  generateRobotsTxt: true,
  autoLastmod: true,
  
  // Directory Settings (Critical for Static Exports)
  sourceDir: '.next',
  outDir: 'out',
  
  // Performance Optimization
  sitemapSize: 7000,
  
  // Security Exclusions
  exclude: [
    '/secret-page',
    '/admin/*',
    '/api/*',
    '/404',
    '/_error',
    '/_next/*'
  ],
  
  // Robots.txt Configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/secret', '/admin', '/api']
      }
    ],
    additionalSitemaps: [
      'https://www.sigmasand.in/sitemap.xml'
    ],
  },
  
  // Dynamic URL Transformation
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }
  },
  
  // (Optional) For Dynamic Routes
  additionalPaths: async () => {
    // Example: Fetch dynamic routes from CMS/API
    // const products = await fetch('https://api.example.com/products')
    // return products.map(product => ({ loc: `/products/${product.slug}` }))
    return []
  }
}

export default config