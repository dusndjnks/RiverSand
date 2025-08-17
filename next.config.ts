import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "cdn.mywebsite.com"], // add more if needed
  },
  output: "export", // ✅ replaces next export
};

export default nextConfig;
