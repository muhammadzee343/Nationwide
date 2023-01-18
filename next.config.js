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
    ADDRESS_API_KEY: process.env.API_KEY_DEV,
  },
};

module.exports = nextConfig;
