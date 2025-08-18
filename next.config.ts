import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sigmasand.in',
        pathname: '/**',
      },
    ],
  },
  
  // (Optional) Internationalization
  // i18n: {
  //   locales: ['en', 'hi'],
  //   defaultLocale: 'en',
  // },
}

export default nextConfig