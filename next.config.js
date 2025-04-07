/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // If your project is not at the root of the domain:
    basePath: '/blog',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig