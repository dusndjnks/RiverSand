// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Needed for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sigmasand.in',
        pathname: '/**',
      },
    ],
  },
  output: 'export',  // For static site generation
}

export default nextConfig