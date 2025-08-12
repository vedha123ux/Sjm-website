import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during Netlify build
  },
  output: 'export', // Enable static export for Netlify deployment
};

export default nextConfig;

