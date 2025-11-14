import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/Policy_Page', 
  assetPrefix: '/Policy_Page',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;