import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Correct for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sigmasand.in',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  // Add these recommended options:
  trailingSlash: true, // Ensures consistent URLs in sitemap
  productionBrowserSourceMaps: false, // Reduces build size
}

export default nextConfig