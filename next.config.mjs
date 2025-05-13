/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: false,
  },
  devIndicators: {
    autoPrerender: false,
  },
};

export default nextConfig;
