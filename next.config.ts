import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "cdn.mywebsite.com"], // add more domains if needed
  },
};

export default nextConfig;
