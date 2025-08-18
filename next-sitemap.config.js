// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.sigmasand.in',
  generateRobotsTxt: true,
  outDir: 'out',
  
  // Explicitly list all your routes
  additionalPaths: async () => [
    { loc: '/', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/aboutus', priority: 0.8 },
    { loc: '/products', priority: 0.8 },
    { loc: '/blog', priority: 0.7 },
    { loc: '/contact', priority: 0.9 }
  ],

  // Required for App Router
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: config.priority,
    lastmod: new Date().toISOString()
  }),

  // Other settings...
  exclude: ['/secret-page', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
}

module.exports = config