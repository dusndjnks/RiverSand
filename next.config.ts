import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch potential issues in development
  images: {
    domains: ["example.com"], // Add allowed image domains
  },
};

export default nextConfig;

