/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath: '/medical-news',
  assetPrefix: '/medical-news/',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/image-loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    domains: ['images.unsplash.com'],
  }
};

module.exports = nextConfig; 