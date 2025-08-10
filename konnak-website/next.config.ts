import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Good for catching issues in dev
  images: {
    domains: [], // Add if you use <Image> with external URLs
  },
};

export default nextConfig;
