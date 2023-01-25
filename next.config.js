/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    BASE_URL_DEV: process.env.BASE_URL_DEV,
    BASE_LOCAL_URL: process.env.BASE_LOCAL_URL,
  },
};

module.exports = nextConfig;
