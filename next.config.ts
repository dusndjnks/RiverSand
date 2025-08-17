import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // For static exports, consider defining remote patterns if using external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
  },
  output: 'export',
  // Enable if you need to deploy to GitHub Pages or similar
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // Enable if you need trailing slashes for compatibility
  // trailingSlash: true,
  // Optional compiler for styled-components or similar
  // compiler: {
  //   styledComponents: true,
  // },
}

export default nextConfig