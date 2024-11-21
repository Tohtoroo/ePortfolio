/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true, // Disable default image optimization
      },
    basePath: "/ePortfolio",
  };

export default nextConfig;
