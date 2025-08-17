import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static exports
  },
  output: 'export', // Enables static export
  // Optional if you need trailing slashes
  // trailingSlash: true,
  // Optional if deploying to subpath
  // basePath: '/your-subpath',
  // Enable if you need to add custom webpack config
  // webpack: (config) => { return config }
}

export default nextConfig